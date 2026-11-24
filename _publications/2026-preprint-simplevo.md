---
layout: paper
collection: publications
title: 'Review the Episodes, Refine the Lessons: Simple Memory Evolution for Embodied Agents'
short_name: SimplEvo
authors:
  - Yifei Yao
  - Yude Zou
  - Xing Gao
  - Guanbo Jiao
  - Yukai Wang
  - Jianming Ma
  - Weinan Zhang
  - Chunhua Shen
authors_display: Yifei Yao, Yude Zou, Xing Gao, Guanbo Jiao, Yukai Wang, Jianming Ma, Weinan Zhang, Chunhua Shen
equal_contributors:
  - Yifei Yao
  - Yude Zou
contribution_source: Equal-contribution statement in the SimplEvo-base README
arxiv: '2611.11509'
date: '2026-11-08'
publication_year: 2026
category: preprints
venue: arXiv preprint
venue_short: arXiv
status: Preprint
topic: Embodied agents
permalink: /publication/2026-preprint-simplevo/
verified_on: '2026-11-24'
paperurl: https://arxiv.org/abs/2611.11509
paper_label: arXiv
sourceurl: https://arxiv.org/abs/2611.11509
codeurl: https://github.com/securityCFS/SimplEvo-base
image: /assets/images/research/simplevo.webp
image_alt: SimplEvo builds task memory from a demonstration and refines working memory across training episodes, then freezes both for evaluation
image_caption: SimplEvo online adaptation and fixed-memory deployment. Figure from the manuscript.
excerpt: A robot starts with one demonstration and revises a set of written lessons after each practice episode. At test time it uses those lessons in new scenes with its model weights and memory fixed.
personal_contribution: I designed the experiments, refined the framework, and discussed the results.
bibtex_source: https://arxiv.org/bibtex/2611.11509
bibtex_source_label: arXiv export
bibtex_verified_on: '2026-11-24'
bibtex: |-
  @misc{yao2026reviewepisodesrefinelessons,
    title = {Review the Episodes, Refine the Lessons: Simple Memory Evolution for Embodied Agents},
    author = {Yifei Yao and Yude Zou and Xing Gao and Guanbo Jiao and Yukai Wang and Jianming Ma and Weinan Zhang and Chunhua Shen},
    year = {2026},
    eprint = {2611.11509},
    archivePrefix = {arXiv},
    primaryClass = {cs.RO},
    url = {https://arxiv.org/abs/2611.11509}
  }
---

The paper evaluates SimplEvo on EBench and RoboDojo. The [SimplEvo-base walkthrough](https://github.com/securityCFS/SimplEvo-base#readme) follows a tabletop task from demonstration annotation through memory refinement to evaluation.
