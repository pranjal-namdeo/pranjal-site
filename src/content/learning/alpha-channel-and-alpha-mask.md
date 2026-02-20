---
title: "CVIP: Image I/O — Alpha Channel, Alpha Mask & its importance"
course: "OpenCV University – CVIP"
module: "Image Manipulation"
pubDate: 2026-02-18
tags: ["opencv", "cvip", "images"]
codeLink: "https://github.com/pranjal-namdeo/cvdl-cvip/blob/main/01_getting_started_opencv/getting_started_with_images.ipynb"
---

## Key takeaway
.jpg image has 3 color channels (RGB) and .png images have 4 color channels (RGBA); where A = Alpha Channel.

## Details on Topic:
Alpha channel gives transparency information in the image. These kind of transparent images are used when we have non-rectangular ojects and we want to keep the background transparent.

```How to deal with Alpha channels?
I prefer using cv2.cvtColor(img, color.BGRA2RGBA) to reverse the color channels, 
followed by splitting the color channels into RGB group and an alpha mask.
I could observe from my coding experiments that alpha mask is a very accurate segmentation of the image.
It is useful for creating overlays ( Augmented Reality type of applications )- yet to be explored by me.
```

### Code Snippet:
```python
img = cv2.imread("img.png",cv2.IMREAD_UNCHANGED)
img = cv2.cvtColor(img, color.BGRA2RGBA)
# using slicing above for reversing the channels doesn't make sense because color channels would become ARGB and we want RGBA

# split the color channels
img_rgb = img[:,:,:2] 
img_alphamask = img[:,:,2]
