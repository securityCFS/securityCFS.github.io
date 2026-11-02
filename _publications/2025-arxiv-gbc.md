---
short_name: GBC
arxiv: '2508.09960'
date: '2025-08-13'
publication_year: 2025
category: preprints
venue: arXiv preprint
venue_short: arXiv
status: Preprint
topic: Humanoid control
selected: true
selected_order: 4
permalink: /publication/2025-arxiv-gbc/
redirect_from:
- /publication/2024-arxiv-gbc
projecturl: https://sjtu-mvasl-robotics.github.io/gbc/
codeurl: https://github.com/sjtu-mvasl-robotics/GBC
docsurl: https://sjtu-mvasl-robotics.github.io/gbc/docs/intro
image: /assets/images/research/gbc.webp
image_alt: Humanoid imitation policies evaluated in Isaac Sim
image_caption: Humanoid imitation in Isaac Sim. Figure from the official GBC repository.
image_source: https://raw.githubusercontent.com/sjtu-mvasl-robotics/GBC/master/docs/images/isaacsim_demo.png
excerpt: 'An open-source pathway from human motion to humanoid action: differentiable retargeting, DAgger-MMPPO, and an Isaac Lab training workflow.'
layout: paper
collection: publications
verified_on: '2026-10-27'
title: 'GBC: Generalized Behavior-Cloning Framework for Whole-Body Humanoid Imitation'
authors:
- Yifei Yao
- Chengyuan Luo
- Jiaheng Du
- Wentao He
- Jun-Guo Lu
paperurl: https://arxiv.org/abs/2508.09960
sourceurl: https://arxiv.org/abs/2508.09960
authors_display: Yifei Yao, Chengyuan Luo, Jiaheng Du, Wentao He, Jun-Guo Lu
bibtex: |-
  @misc{yao2025gbc,
    title = {GBC: Generalized Behavior-Cloning Framework for Whole-Body Humanoid Imitation},
    author = {Yao, Yifei and Luo, Chengyuan and Du, Jiaheng and He, Wentao and Lu, Jun-Guo},
    year = {2025},
    url = {https://arxiv.org/abs/2508.09960},
    eprint = {2508.09960},
    archivePrefix = {arXiv},
    primaryClass = {cs.RO}
  }
---

GBC combines a motion-data pipeline with a differentiable inverse-kinematics network, a DAgger-MMPPO learning algorithm, and the MMTransformer architecture. The paper evaluates imitation on heterogeneous humanoids and transfer to novel motions.

The repository and documentation provide the public implementation and its release roadmap. The paper was first submitted to arXiv on August 13, 2025.
