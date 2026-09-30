"""Build a small OFL webfont containing the website's current characters.

Usage: python tools/subset-font.py
Requires: fonttools[woff] and brotli. Full source font stays outside the build.
"""
from pathlib import Path
from urllib.request import urlretrieve
from fontTools import subset
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont

ROOT = Path(__file__).resolve().parents[1]
CACHE = ROOT / '.sites-runtime' / 'fonts'
FONT = CACHE / 'NotoSerifSC-VF.ttf'
OFL = CACHE / 'OFL-NotoSerifSC.txt'
BASE = 'https://raw.githubusercontent.com/google/fonts/main/ofl/notoserifsc/'
OUTPUT = ROOT / 'public' / 'fonts'

CACHE.mkdir(parents=True, exist_ok=True)
OUTPUT.mkdir(parents=True, exist_ok=True)
if not FONT.exists():
    urlretrieve(BASE + 'NotoSerifSC%5Bwght%5D.ttf', FONT)
if not OFL.exists():
    urlretrieve(BASE + 'OFL.txt', OFL)

text = ''.join(path.read_text(encoding='utf-8') for path in [ROOT / 'index.html', *ROOT.glob('src/**/*.jsx'), *ROOT.glob('src/**/*.js')])
text += ''.join(chr(char) for char in range(32, 127))
font = TTFont(FONT)
font = instantiateVariableFont(font, {'wght': (400, 600)}, inplace=True)
# Some constant glyphs lose their gvar entries during axis restriction.
# Retain empty variations so older fontTools can subset those glyphs too.
if 'gvar' in font:
    variations = font['gvar'].variations
    font['gvar'].variations = {name: variations.get(name, []) for name in font.getGlyphOrder()}
options = subset.Options()
options.layout_features = ['*']
options.name_IDs = ['*']
options.name_languages = ['*']
options.name_legacy = True
options.notdef_glyph = True
subsetter = subset.Subsetter(options=options)
subsetter.populate(text=text)
subsetter.subset(font)
font.flavor = 'woff2'
target = OUTPUT / 'noto-serif-sc-77-subset.woff2'
font.save(target)
(OUTPUT / 'OFL-NotoSerifSC.txt').write_text(OFL.read_text(encoding='utf-8'), encoding='utf-8')
print(f'{len(set(text))} characters; webfont {target.stat().st_size / 1024:.0f} KiB')
