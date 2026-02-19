---
title: "Jupyter notebook became 0 bytes after git operations — recovery + prevention"
description: "What caused it, how I recovered safely, and the checklist to prevent it."
pubDate: 2026-02-18
type: "bugfix"
tags: ["git", "jupyter", "vscode", "workflow"]
---

## Symptom
- Notebook file became 0 bytes
- VS Code showed it weird / unusable
- .ipynb file present in VS Code but couldn't be opened in github repo

## What caused it (likely)
- Rebase/merge + notebook JSON not properly saved
- Corrupted write / partial save

## What worked for me
1. Restore the last good version from git
2. Open notebook in VS Code
3. Save it (rewrites valid JSON)
4. Stage → commit → push

## Prevention checklist
- Always open + save notebook before commit
- Avoid manual conflict resolution inside notebooks
- Keep outputs minimal