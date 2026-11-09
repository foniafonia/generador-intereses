import glob,os
from PIL import Image
src=os.path.expanduser("~/Developer/generador-intereses/pajaros/ilustraciones/")
dst=os.path.expanduser("~/Developer/generador-intereses/img/")
for p in sorted(glob.glob(src+"*.png")):
    n=os.path.basename(p)[:-4]
    im=Image.open(p).convert("RGB").resize((640,640),Image.LANCZOS)
    im.save(dst+n+".webp",quality=86)
    print(n)
