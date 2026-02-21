---
title: "Why deactivating my venv dropped me into another env (macOS)"
description: "Nested virtual environments explained and fixed."
pubDate: 2026-02-14
type: "bugfix"
tags: ["python", "venv", "macos"]
draft: false
---

## Symptom

Running `deactivate` took me into another environment instead of base shell.

## Root Cause

I had activated one virtual environment on top of another.

## Fix

- Run `echo $VIRTUAL_ENV`
- Deactivate repeatedly until empty
- Start a fresh terminal
- Activate only one environment per project