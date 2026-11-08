---
layout: paper
collection: publications
title: 'Review the Episodes, Refine the Lessons: Simple Memory Evolution for Embodied Agents'
short_name: SimplEvo
authors:
  - Yifei Yao
  - Yude Zou
  - Guanbo Jiao
  - Yukai Wang
  - Jianming Ma
  - Xing Gao
  - Weinan Zhang
  - Chunhua Shen
authors_display: Yifei Yao, Yude Zou, Guanbo Jiao, Yukai Wang, Jianming Ma, Xing Gao, Weinan Zhang, Chunhua Shen
equal_contributors:
  - Yifei Yao
  - Yude Zou
contribution_source: Owner-confirmed manuscript author block
date: '2026-11-01'
date_precision: month
publication_year: 2026
category: ongoing
venue: Preprint awaiting arXiv release
venue_short: Preprint
status: arXiv release pending
show_status: true
topic: Embodied agents
permalink: /publication/2026-preprint-simplevo/
verified_on: '2026-11-08'
image: /assets/images/research/simplevo.webp
image_alt: SimplEvo builds task memory from a demonstration and refines working memory across training episodes, then freezes both for evaluation
image_caption: SimplEvo online adaptation and fixed-memory deployment. Figure from the manuscript.
excerpt: An embodied agent learns from execution experience by refining text memory across training episodes, then uses frozen memory at evaluation without updating model weights.
personal_contribution: I designed the experiments, refined the framework, and discussed the results.
---

SimplEvo builds task memory from a demonstration and refines working memory across training episodes. The agent records lessons about task procedure, completion checks, and recovery from its own executions. Both memories are frozen for evaluation, with no model weight updates or post-trained robot policies.

Experiments on EBench and RoboDojo examine task performance, memory design, scene generalization, and transfer across multimodal models. The preprint is awaiting arXiv release; the paper link will be added when available.
