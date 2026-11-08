---
short_name: InfCoiL
personal_contribution: I designed and implemented the RL training, including SFPO for the flow-matching planner and plateau-triggered coordinated updates of the planner and controller.
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
paperurl: https://infcoil.github.io/assets/paper.pdf?v=e179eef
projecturl: https://infcoil.github.io/
publisherurl: https://neurips.cc/virtual/2026/poster/152598
publisher_label: Conference
sourceurl: https://infcoil.github.io/
image: /assets/images/research/infcoil.webp
image_alt: InfCoiL planner-controller framework for human-object interaction
image_caption: InfCoiL overview. Figure from coauthor Xing Gao’s research page.
image_source: https://william-gx.github.io/assets/figures/infcoil.png
excerpt: Make generated motion executable. InfCoiL lets a flow-matching planner and a physics-based controller improve each other through shared rollout feedback, alternating their RL updates when progress plateaus.
permalink: /publication/2026-neurips-infcoil/
layout: paper
collection: publications
verified_on: '2026-11-08'
authors_display: Yude Zou, Yifei Yao, Yiwei Hao, Hanqing Wang, Xing Gao
bibtex_source: https://infcoil.github.io/#bibtex-code
bibtex_source_label: Official project citation
bibtex_verified_on: '2026-11-08'
bibtex: |-
  @inproceedings{zou2026infcoil,
    title     = {{InfCoiL}: Coordinated Planner-Controller Learning for Closed-Loop Physics-Based Human-Object Interaction},
    author    = {Zou, Yude and Yao, Yifei and Hao, Yiwei and Wang, Hanqing and Gao, Xing},
    booktitle = {Advances in Neural Information Processing Systems},
    year      = {2026}
  }
equal_contributors:
- Yude Zou
- Yifei Yao
- Yiwei Hao
contribution_source: Confirmed by the author on October 27, 2026
videos:
  - title: Closed-loop table transport
    src: /assets/videos/research/infcoil-table.mp4
    poster: /assets/images/research/infcoil-table.jpg
    width: 1280
    height: 720
    caption: 'Qualitative S=2 planner / C45k controller rollout from the project page. The goal ring turns green on stable arrival. Five-frame display smoothing and a final-pose hold are part of the source video; this clip is separate from the paper benchmark.'
    source: https://infcoil.github.io/
  - title: Replanning through tripod transport
    src: /assets/videos/research/infcoil-tripod.mp4
    poster: /assets/images/research/infcoil-tripod.jpg
    width: 1280
    height: 720
    caption: 'A second object and transport task from the same qualitative release, with the same display smoothing and final-pose hold.'
    source: https://infcoil.github.io/
---

A plausible motion plan is useful only if a physical controller can execute it. InfCoiL feeds the realized human, object and contact states back to a flow-matching planner, so each new plan starts from what actually happened.

The key is to adapt both sides of that interface. Controller learning expands the region of executable motions; planner learning then changes its proposals to make better use of that controller. The training schedule alternates these phases when performance plateaus, using the same closed-loop physical feedback.

Semantic Flow Policy Optimization (SFPO) updates the planner through selected stochastic denoising transitions, channel-wise semantic covariance and group-relative rewards over complete executions. A shared morphology interface connects it to the multi-morphology controller.

Accepted to NeurIPS 2026. The project page provides the current paper, qualitative videos and evaluation protocol; code release is pending.
