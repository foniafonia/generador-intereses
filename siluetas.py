import os
from PIL import Image
from collections import deque
base=os.path.expanduser("~/Developer/generador-intereses/")
def sil(src,dst):
    im=Image.open(src).convert("RGB").resize((512,512));px=im.load()
    def bl(x,y): return min(px[x,y])>=251
    bg=[[False]*512 for _ in range(512)];q=deque()
    for i in range(512):
        for x,y in((i,0),(i,511),(0,i),(511,i)):
            if bl(x,y) and not bg[y][x]: bg[y][x]=True;q.append((x,y))
    while q:
        x,y=q.popleft()
        for dx,dy in((1,0),(-1,0),(0,1),(0,-1)):
            a,b=x+dx,y+dy
            if 0<=a<512 and 0<=b<512 and not bg[b][a] and bl(a,b): bg[b][a]=True;q.append((a,b))
    out=Image.new("RGBA",(512,512),(0,0,0,0));o=out.load()
    for y in range(512):
        for x in range(512):
            if not bg[y][x]: o[x,y]=(40,52,46,255)
    out.save(dst,lossless=True)
for n in ["castana","seta","calabaza","ardilla","erizo"]:
    sil(base+"otono/ilustraciones/obj-"+n+".png",base+"img/sil-"+n+".webp")
print("ok")
