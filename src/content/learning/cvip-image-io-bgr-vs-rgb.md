---
title: "CVIP: Image I/O — BGR vs RGB is the first pitfall"
course: "OpenCV University – CVIP"
module: "Image Manipulation"
pubDate: 2026-02-20
tags: ["opencv", "cvip", "images"]
codeLink: "https://github.com/pranjal-namdeo/cvdl-cvip/blob/main/01_getting_started_opencv/getting_started_with_images.ipynb"
---

## Key takeaway
OpenCV loads images as **BGR**, while most plotting libraries assume **RGB**.

## Quick fix snippet
Technique 1: Convert color channels after loading the image
```python
img_bgr = cv2.imread("x.jpg")
img_rgb = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2RGB) #.jpg images
img_pngrgb = cv2.cvtColor(img_png, cv2.COLOR_BGRA2RGBA) #.png images have A(alpha) color channel too
```
Technique 2: convert channels before displaying the image
```python
plt.imshow(img_bgr,[:,:,::-1])
```
Note: 
Technique 2 has downside that images with Alpha channels become ARGB but we need RGBA, I prefer to use  
```cv2.cvtColor(img, cv2.COLOR_BGRA2RGBA)```
