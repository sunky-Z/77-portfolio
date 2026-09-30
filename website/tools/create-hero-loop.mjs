// Requires FFmpeg on PATH. Rebuilds the pre-rendered hero without a runtime WebGL layer.
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const input = fileURLToPath(new URL('../public/assets/perspective.png', import.meta.url));
const output = fileURLToPath(new URL('../public/assets/hero-loop-smooth-v2.mp4', import.meta.url));
const fps = 60;
const frames = fps * 20;
const phase = `2*PI*on/${frames}`;
const growth = `.04+.006*sin(${phase})`;
const dx = `W*.008*cos(${phase})`;
const dy = `H*.006*sin(${phase})`;
const left = `-W*(${growth})+${dx}`;
const right = `W*(1+${growth})+${dx}`;
const top = `-H*(${growth})+${dy}`;
const bottom = `H*(1+${growth})+${dy}`;
const filter = [
  'scale=1920:1080:force_original_aspect_ratio=increase',
  'crop=1920:1080',
  `perspective=x0='${left}':y0='${top}':x1='${right}':y1='${top}':x2='${left}':y2='${bottom}':x3='${right}':y3='${bottom}':sense=destination:eval=frame:interpolation=cubic`,
  'format=yuv420p',
].join(',');
const result = spawnSync('ffmpeg', [
  '-n', '-hide_banner', '-loop', '1', '-framerate', String(fps), '-i', input,
  '-vf', filter, '-frames:v', String(frames), '-an', '-c:v', 'libx264',
  '-preset', 'medium', '-crf', '19', '-threads', '8', '-profile:v', 'high',
  '-level:v', '4.2', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', output,
], { stdio: 'inherit' });
if (result.error) throw result.error;
process.exitCode = result.status ?? 1;
