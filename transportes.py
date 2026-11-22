"""Transportes (22/11/2026): dibujos del tercer interés, sacados de los pictos propios (pictogramas-propios, CC0).
Escribe img/obj-<nombre>.webp (640 px), img/sil-<nombre>.webp (siluetas, como siluetas.py) e img/portada-transportes.jpg
(1200 × 630, para la vista previa al mandar el enlace por WhatsApp).
Uso: python3 -I transportes.py"""
import os
from collections import deque
from PIL import Image, ImageDraw, ImageFont

AQUI = os.path.dirname(os.path.abspath(__file__))
IMG = os.path.join(AQUI, 'img')
P = os.path.expanduser('~/Developer/pictogramas-propios/pictogramas/')
DIBUJOS = {
    'coche': 'nombre/coche.png', 'autobus': 'nombre/autobus.png', 'tren': 'nombre/tren.png', 'avion': 'nombre/avion.png',
    'barco': 'nombre/barco.png', 'camion': 'nombre/camion.png', 'helicoptero': 'nombre/helicoptero.png',
    'bicicleta': 'nombre/bicicleta.png', 'ambulancia': 'nombre/ambulancia.png', 'tractor': 'nombre/tractor.png',
    'rueda': 'nombre/rueda.png', 'semaforo': 'nombre/semaforo.png', 'gasolinera': 'nombre/gasolinera.png',
    'maleta': 'nombre/maleta.png', 'mapa': 'nombre/mapa.png', 'cinturon': 'nombre/cinturon.png', 'llave': 'nombre/llave.png',
    'puente': 'lugar/puente.png', 'playa': 'lugar/playa.png', 'globo': 'nombre/globo.png', 'casa': 'categoria/casa.png',
}
SILUETAS = ['coche', 'autobus', 'tren', 'avion', 'barco']


def blanco(src):
    im = Image.open(src).convert('RGBA')
    f = Image.new('RGBA', im.size, (255, 255, 255, 255))
    f.alpha_composite(im)
    return f.convert('RGB')


def sil(src, dst):
    im = blanco(src).resize((512, 512))
    px = im.load()

    def bl(x, y):
        return min(px[x, y]) >= 245
    bg = [[False] * 512 for _ in range(512)]
    q = deque()
    for i in range(512):
        for x, y in ((i, 0), (i, 511), (0, i), (511, i)):
            if bl(x, y) and not bg[y][x]:
                bg[y][x] = True
                q.append((x, y))
    while q:
        x, y = q.popleft()
        for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            a, b = x + dx, y + dy
            if 0 <= a < 512 and 0 <= b < 512 and not bg[b][a] and bl(a, b):
                bg[b][a] = True
                q.append((a, b))
    out = Image.new('RGBA', (512, 512), (0, 0, 0, 0))
    o = out.load()
    for y in range(512):
        for x in range(512):
            if not bg[y][x]:
                o[x, y] = (40, 52, 46, 255)
    out.save(dst, lossless=True)


def ruta(nombre):
    r = os.path.join(P, DIBUJOS[nombre])
    if not os.path.exists(r):
        raise SystemExit('falta el picto de ' + nombre)
    return r


def portada():
    W, H = 1200, 630
    im = Image.new('RGB', (W, H), (14, 53, 36))
    d = ImageDraw.Draw(im)
    d.rounded_rectangle((40, 40, W - 40, H - 40), 36, fill=(255, 248, 231), outline=(244, 185, 58), width=6)
    try:
        f1 = ImageFont.truetype('/System/Library/Fonts/Supplemental/Arial Rounded Bold.ttf', 74)
        f2 = ImageFont.truetype('/System/Library/Fonts/Supplemental/Arial Rounded Bold.ttf', 36)
    except Exception:
        f1 = f2 = ImageFont.load_default()
    d.text((90, 80), 'Transportes', font=f1, fill=(31, 90, 58))
    d.text((92, 172), 'Material a medida para el niño', font=f2, fill=(37, 53, 43))
    d.text((92, 218), 'al que le encantan', font=f2, fill=(37, 53, 43))
    d.text((92, 264), 'coches, trenes y aviones', font=f2, fill=(37, 53, 43))
    logo = Image.open(os.path.join(IMG, 'colmenia-logo.webp')).convert('RGB').resize((120, 120))
    im.paste(logo, (W - 200, 75))
    fl = Image.open(os.path.join(IMG, 'fonia-logo.jpg')).convert('RGB')
    fl = fl.resize((int(fl.width * 100 / fl.height), 100))
    im.paste(fl, (W - 220 - fl.width, 85))
    for i, n in enumerate(['coche', 'tren', 'avion', 'autobus', 'barco']):
        t = blanco(ruta(n)).resize((190, 190), Image.LANCZOS)
        x = 90 + i * 205
        d.rounded_rectangle((x - 6, 354, x + 196, 556), 22, fill=(255, 255, 255), outline=(155, 191, 138), width=3)
        im.paste(t, (x, 360))
    im.save(os.path.join(IMG, 'portada-transportes.jpg'), quality=86)


def main():
    for n in DIBUJOS:
        blanco(ruta(n)).resize((640, 640), Image.LANCZOS).save(os.path.join(IMG, 'obj-' + n + '.webp'), quality=86)
    for n in SILUETAS:
        sil(ruta(n), os.path.join(IMG, 'sil-' + n + '.webp'))
    portada()
    print('ok:', len(DIBUJOS), 'dibujos,', len(SILUETAS), 'siluetas y la portada')


if __name__ == '__main__':
    main()
