---
short_name: InfCoiL
title: 'InfCoiL: Coordinated Planner-Controller Learning for Closed-Loop Physics-Based Human-Object Interaction'
authors:
- Yude Zou
- Yifei Yao
- Yiwei Hao
- Hanqing Wang
- Xing Gao
date: '2026-09-01'
publication_year: 2026
category: conferences
venue: Advances in Neural Information Processing Systems (NeurIPS 2026)
venue_short: NeurIPS 2026
status: Accepted
topic: Humanoid control
selected: true
selected_order: 1
paperurl: https://openreview.net/forum?id=RvZ2OxrgcE
publisherurl: https://neurips.cc/virtual/2026/poster/152598
publisher_label: Conference
sourceurl: https://neurips.cc/virtual/2026/poster/152598
image: /assets/images/research/infcoil.webp
image_alt: InfCoiL planner-controller framework for human-object interaction
image_caption: InfCoiL overview. Figure from coauthor Xing Gao’s research page.
image_source: https://william-gx.github.io/assets/figures/infcoil.png
excerpt: A flow-matching planner and a multi-morphology controller learn together through closed-loop reinforcement learning for physical human-object interaction.
permalink: /publication/2026-neurips-infcoil/
layout: paper
collection: publications
verified_on: '2026-10-27'
authors_display: Yude Zou, Yifei Yao, Yiwei Hao, Hanqing Wang, Xing Gao
bibtex: |-
  @inproceedings{yao2026infcoil,
    title = {InfCoiL: Coordinated Planner-Controller Learning for Closed-Loop Physics-Based Human-Object Interaction},
    author = {Yude Zou and Yifei Yao and Yiwei Hao and Hanqing Wang and Xing Gao},
    year = {2026},
    url = {https://openreview.net/forum?id=RvZ2OxrgcE},
    booktitle = {Advances in Neural Information Processing Systems (NeurIPS 2026)},
    note = {Accepted}
  }
equal_contributors:
- Yude Zou
- Yifei Yao
- Yiwei Hao
contribution_source: Confirmed by the author on October 27, 2026
---

InfCoiL connects text- and goal-conditioned motion planning with physical execution. A morphology-aware planner and unified controller operate in an autoregressive plan-and-execute loop. Coordinated reinforcement learning, including Semantic Flow-GRPO for the planner, addresses the distribution shift between generated plans and physical rollouts.

Accepted to NeurIPS 2026. The conference page and OpenReview record are linked above; no public code release is claimed here.
