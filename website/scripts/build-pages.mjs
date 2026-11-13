import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build, resolveConfig } from 'vite';
import { portfolioPages, routeHref } from '../src/routes.js';

const root = fileURLToPath(new URL('..', import.meta.url));
const config = await resolveConfig({ root }, 'build', 'production', 'production');
await build({ root });

const output = resolve(root, config.build.outDir);
const template = await readFile(resolve(output, 'index.html'), 'utf8');
const origin = 'https://sunky-z.github.io';
const escapeHTML = value => value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));

function pageHTML(page) {
  const title = escapeHTML(`${page.title} · 77`);
  const description = escapeHTML(page.description);
  const canonical = `${origin}${routeHref(page.path, config.base)}`;
  return template
    .replace(/<html lang="[^"]*">/, '<html lang="zh-CN">')
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*("\s*\/?>)/, `$1${description}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*("\s*\/?>)/, `$1${title}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*("\s*\/?>)/, `$1${description}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*("\s*\/?>)/, `$1${canonical}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*("\s*\/?>)/, `$1${canonical}$2`)
    .replace(/<noscript>[\s\S]*?<\/noscript>/, `<noscript><h1>${title}</h1><p>${description}</p><p><a href="${routeHref('/', config.base)}">77 · 首页</a> · <a href="mailto:Zysq09@gmail.com">Zysq09@gmail.com</a></p></noscript>`);
}

for (const page of portfolioPages) {
  const directory = resolve(output, page.path.slice(1));
  await mkdir(directory, { recursive: true });
  await writeFile(resolve(directory, 'index.html'), pageHTML(page), 'utf8');
}

const missing = pageHTML({ path: '/404.html', title: '页面未找到', description: '这个页面不存在，请从首页、职业经历、项目实践或能力与方法继续浏览。' })
  .replace('</head>', '    <meta name="robots" content="noindex" />\n  </head>');
await writeFile(resolve(output, '404.html'), missing, 'utf8');
await writeFile(resolve(output, '.nojekyll'), '', 'utf8');
console.log(`Generated ${portfolioPages.length} independent page documents and 404.html.`);
