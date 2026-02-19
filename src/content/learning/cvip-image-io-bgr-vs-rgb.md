---
title: "CVIP: Image I/O — BGR vs RGB is the first pitfall"
course: "OpenCV University – CVIP"
module: "Getting Started"
pubDate: 2026-02-20
tags: ["opencv", "cvip", "images"]
codeLink: "https://github.com/<your-username>/<repo>/path/to/notebook"
---

## Key takeaway
OpenCV loads images as **BGR**, while most plotting libraries assume **RGB**.

## Quick fix snippet
```python
img_bgr = cv2.imread("x.jpg")
img_rgb = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2RGB) #.jpg images
img_png = cv2.cvtColor(img_png, cv2.COLOR_BGRA2RGBA) #.png images have A(alpha) color channel too