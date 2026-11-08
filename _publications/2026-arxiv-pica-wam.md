---
short_name: PICA-WAM
personal_contribution: I contributed to the method design and technical discussion.
arxiv: '2610.26813'
date: '2026-10-19'
publication_year: 2026
category: preprints
venue: arXiv preprint
venue_short: arXiv
status: Preprint
topic: World action models
image: /assets/images/research/pica-wam.webp
image_alt: Overview of PICA-WAM and robustness to changes in visual appearance
image_caption: Overview of PICA-WAM. Figure from the paper.
image_source: https://arxiv.org/html/2610.26813v1/teaser.png
codeurl: https://github.com/YudeZou/PICA-WAM-release
excerpt: Cross-appearance self-alignment encourages world action models to produce consistent action representations under task-irrelevant visual changes.
permalink: /publication/2026-arxiv-pica-wam/
layout: paper
collection: publications
verified_on: '2026-10-27'
title: 'PICA-WAM: Visual Perturbation Invariance via Cross-Appearance Self-Alignment in World Action Models'
authors:
- Yude Zou
- Yifei Yao
- Guanbo Jiao
- Jianming Ma
- Guanjie Zheng
- Xing Gao
paperurl: https://arxiv.org/abs/2610.26813
sourceurl: https://arxiv.org/abs/2610.26813
authors_display: Yude Zou, Yifei Yao, Guanbo Jiao, Jianming Ma, Guanjie Zheng, Xing Gao
bibtex_source: https://arxiv.org/bibtex/2610.26813
bibtex_source_label: arXiv export
bibtex_verified_on: '2026-11-08'
bibtex: |-
  @misc{zou2026picawamvisualperturbationinvariance,
    title = {PICA-WAM: Visual Perturbation Invariance via Cross-Appearance Self-Alignment in World Action Models},
    author = {Yude Zou and Yifei Yao and Guanbo Jiao and Jianming Ma and Guanjie Zheng and Xing Gao},
    year = {2026},
    eprint = {2610.26813},
    archivePrefix = {arXiv},
    primaryClass = {cs.CV},
    url = {https://arxiv.org/abs/2610.26813}
  }
equal_contributors:
- Yude Zou
- Yifei Yao
- Guanbo Jiao
contribution_source: Equal-contribution statement on the first page of the linked arXiv paper
---

PICA-WAM uses an exponential-moving-average teacher on nominal observations and an online model on visually perturbed observations. An auxiliary alignment objective encourages invariance without requiring an external feature target.

Experiments span RoboTwin 2.0, LIBERO-Plus, EBench, and a real robot. This work is listed as a preprint.
