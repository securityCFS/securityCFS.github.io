---
layout: paper
collection: publications
title: 'ABI: Actor-Free Zero-Shot Reinforcement Learning with Behavior-Inductive Representations'
short_name: ABI
authors:
  - Yifei Yao
authors_display: Yifei Yao
authors_note: 'First author; full author list to be finalized.'
date: '2026-11-01'
date_precision: month
publication_year: 2026
category: ongoing
venue: Manuscript in preparation
venue_short: Manuscript
status: Manuscript in preparation
show_status: true
topic: Offline RL
permalink: /publication/2026-manuscript-abi/
verified_on: '2026-11-08'
image: /assets/images/research/abi.webp
image_alt: ABI learns a behavior critic from reward-free data and uses it to steer a frozen flow policy at test time
image_caption: ABI representation learning and test-time steering. Figure from the manuscript.
excerpt: Learning a chunk-level successor critic from reward-free offline data to steer a frozen behavior-cloning policy for new rewards, without training an actor against the critic.
personal_contribution: I formulated the research problem, developed the method and theoretical analysis, implemented the system, designed and ran the experiments, and wrote the manuscript.
---

ABI learns behavior-inductive representations over action chunks, using the recorded next chunk for its bootstrap target. At test time, rewards on dataset transitions turn the learned representation into a critic for new tasks. The critic guides a frozen behavior-cloning policy through candidate selection and gradient guidance, without additional training.

The work studies zero-shot reinforcement learning from states and pixels on ExORL and OGBench. The manuscript is in preparation; a public paper link will be added when available.
