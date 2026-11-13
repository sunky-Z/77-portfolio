import assert from 'node:assert/strict';
import { access, readFile, stat } from 'node:fs/promises';
import { resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { resolveConfig } from 'vite';
import { portfolioPages, routeHref } from '../src/routes.js';

const root = fileURLToPath(new URL('..', import.meta.url));
const config = await resolveConfig({ root }, 'build', 'production', 'production');
const output = resolve(root, config.build.outDir);
const base = routeHref('/', config.base);
const expectedOrigin = new URL(process.env.VITE_SITE_ORIGIN || 'https://sunky-z.github.io').origin;
const documents = [...portfolioPages, { path: '/404.html', title: '页面未找到' }];
let checkedReferences = 0;

async function checkReference(value, documentPath, canonicalOrigin) {
  if (/^(?:data:|mailto:|tel:|#)/i.test(value)) return;
  const url = new URL(value, `${canonicalOrigin}${routeHref(documentPath, config.base)}`);
  if (url.origin !== canonicalOrigin) return;
  assert.ok(url.pathname.startsWith(base), `${documentPath}: reference outside configured base: ${value}`);
  const relative = decodeURIComponent(url.pathname.slice(base.length));
  const target = resolve(output, relative || '.');
  assert.ok(target === output || target.startsWith(`${output}${sep}`), `${documentPath}: unsafe asset path: ${value}`);
  const info = await stat(target).catch(() => null);
  assert.ok(info, `${documentPath}: missing built reference: ${value}`);
  if (info.isDirectory()) await access(resolve(target, 'index.html'));
  checkedReferences += 1;
}

for (const page of documents) {
  const filename = page.path.endsWith('.html') ? page.path.slice(1) : `${page.path.slice(1)}index.html`;
  const html = await readFile(resolve(output, filename), 'utf8');
  const canonical = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i)?.[1];
  assert.ok(canonical, `${filename}: missing canonical URL`);
  const canonicalURL = new URL(canonical);
  assert.equal(canonicalURL.origin, expectedOrigin, `${filename}: incorrect canonical origin`);
  assert.equal(canonicalURL.pathname, routeHref(page.path, config.base), `${filename}: canonical base mismatch`);
  assert.ok(html.includes(`<title>${page.title}`), `${filename}: incorrect document title`);
  assert.match(html, /<meta\s+name="description"\s+content="[^"]+"/i, `${filename}: missing description`);
  assert.match(html, /<script[^>]+type="module"[^>]+src="[^"]+"/i, `${filename}: missing module entry`);
  assert.doesNotMatch(html, /(?:src|href)="\/src\//i, `${filename}: source module leaked into production HTML`);
  const socialURL = html.match(/<meta\s+property="og:url"\s+content="([^"]+)"/i)?.[1];
  assert.equal(socialURL, canonical, `${filename}: social URL differs from canonical URL`);
  for (const match of html.matchAll(/\b(?:src|href)="([^"]+)"/gi)) {
    await checkReference(match[1], page.path, canonicalURL.origin);
  }
  const socialImage = html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i)?.[1];
  assert.ok(socialImage, `${filename}: missing social image`);
  assert.equal(new URL(socialImage).origin, canonicalURL.origin, `${filename}: social image origin mismatch`);
  await checkReference(socialImage, page.path, canonicalURL.origin);
}

await access(resolve(output, '.nojekyll'));
assert.match(await readFile(resolve(output, '404.html'), 'utf8'), /name="robots" content="noindex"/);
console.log(`Verified ${documents.length} built HTML documents and ${checkedReferences} local references under ${base}`);
