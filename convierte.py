import glob,os
from PIL import Image
src=[os.path.expanduser("~/Developer/generador-intereses/pajaros/ilustraciones/"),os.path.expanduser("~/Developer/generador-intereses/pajaros/ilustraciones2/"),os.path.expanduser("~/Developer/generador-intereses/otono/ilustraciones/")]
dst=os.path.expanduser("~/Developer/generador-intereses/img/")
for p in sorted(sum([glob.glob(d+"*.png") for d in src],[])):
    n=os.path.basename(p)[:-4]
    im=Image.open(p).convert("RGB").resize((1024,1024) if n.startswith("colorear") else (640,640),Image.LANCZOS)
    im.save(dst+n+".webp",quality=92 if n.startswith("colorear") else 86)
    print(n)
