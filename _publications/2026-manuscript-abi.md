---
layout: paper
collection: publications
title: 'ABI: Actor-Free Behavior-Induced Representations for Zero-Shot Test-Time Guidance'
short_name: ABI
authors:
  - Yifei Yao
  - Yude Zou
  - Guanbo Jiao
  - Jianming Ma
  - Xing Gao
  - Chunhua Shen
authors_display: Yifei Yao, Yude Zou, Guanbo Jiao, Jianming Ma, Xing Gao, Chunhua Shen
equal_contributors:
  - Yifei Yao
  - Yude Zou
  - Guanbo Jiao
contribution_source: Equal-contribution footnote on the first page of the arXiv paper and on the project page
arxiv: '2611.30636'
date: '2026-11-23'
publication_year: 2026
category: preprints
venue: arXiv preprint
venue_short: arXiv
status: Preprint
topic: Offline RL
permalink: /publication/2026-manuscript-abi/
verified_on: '2026-11-24'
paperurl: https://arxiv.org/abs/2611.30636
paper_label: arXiv
sourceurl: https://arxiv.org/abs/2611.30636
projecturl: https://securitycfs.github.io/ABI-demo/
playgroundurl: https://securitycfs.github.io/ABI-demo/playground/
playground_scenes:
  - { id: cube-single-play, title: Cube, suite: OGBench, thumbnail: thumb_cube.jpg }
  - { id: antmaze-medium-navigate, title: AntMaze, suite: OGBench, thumbnail: thumb_antmaze.jpg }
  - { id: dmc-quadruped, title: Quadruped, suite: DeepMind Control, thumbnail: thumb_quadruped.jpg }
  - { id: dmc-cheetah, title: Cheetah, suite: DeepMind Control, thumbnail: thumb_cheetah.jpg }
  - { id: dmc-walker, title: Walker, suite: DeepMind Control, thumbnail: thumb_walker.jpg }
home_image: https://securitycfs.github.io/ABI-demo/assets/abi_video_poster.jpg
excerpt: ABI trains a guide on unlabeled trajectories. Give it a new goal at deployment and it steers the actions of an existing policy while the policy’s weights stay frozen.
personal_contribution: I formulated the research problem, developed the method and theoretical analysis, implemented the system, designed and ran the experiments, and wrote the manuscript.
bibtex_source: https://arxiv.org/bibtex/2611.30636
bibtex_source_label: arXiv export
bibtex_verified_on: '2026-11-24'
bibtex: |-
  @misc{yao2026abiactorfreebehaviorinducedrepresentations,
    title = {ABI: Actor-Free Behavior-Induced Representations for Zero-Shot Test-Time Guidance},
    author = {Yifei Yao and Yude Zou and Guanbo Jiao and Jianming Ma and Xing Gao and Chunhua Shen},
    year = {2026},
    eprint = {2611.30636},
    archivePrefix = {arXiv},
    primaryClass = {cs.RO},
    url = {https://arxiv.org/abs/2611.30636}
  }
video_label: Project video
videos:
  - title: How ABI guides a frozen policy
    src: https://securitycfs.github.io/ABI-demo/assets/abi_video.mp4
    poster: https://securitycfs.github.io/ABI-demo/assets/abi_video_poster.jpg
    width: 1920
    height: 1080
    source: https://securitycfs.github.io/ABI-demo/#video
    caption: Narrated project video with captions. The green robot uses ABI guidance. The gray robot runs the same frozen policy from the same starting state.
---
