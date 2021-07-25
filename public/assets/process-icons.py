import os
from PIL import Image

d = os.path.dirname(__file__)
u = 0.45

for f, im in [ (k, Image.open(os.path.join(d, 'icon.transparent', k))) for k in os.listdir(os.path.join(d, 'icon.transparent')) if k.endswith('.png') ]:
  for x in range(im.width):
    for y in range(im.height):
      r, g, b, a = im.getpixel((x, y))

      if a < 255:
        p = min(1, max(0, (a / 255) - u))
        q = 1 - p

        im.putpixel((x, y), (int(p*r + q*255), int(p*g + q*255), int(p*b + q*255)))
  
  im.save(os.path.join(d, 'icon', f))
  im.close()