---
layout: paper
collection: publications
title: 'ARIEL: An Agent-Ready Humanoid Behavior Model with In-Context Execution Memory'
short_name: ARIEL
date: '2026-11-01'
date_precision: month
publication_year: 2026
category: ongoing
venue: Ongoing research project
venue_short: Research project
status: In development
show_status: true
topic: Humanoid control
permalink: /publication/2026-project-ariel/
verified_on: '2026-11-08'
home_image: /assets/images/research/ariel-memory-showcase.jpg
excerpt: ARIEL gives an agent a simple interface to whole-body control. Choose a demonstration, load it into memory, then recall the motion or steer its style with velocity and heading commands. The controller keeps executing between agent decisions.
personal_contribution: I am developing ARIEL as a continuation of my work on humanoid controllers.
videos:
  - title: Three motions, replayed from memory
    src: /assets/videos/research/ariel-memory-showcase.mp4
    poster: /assets/images/research/ariel-memory-showcase.jpg
    width: 960
    height: 672
    caption: 'Three independent simulation trials: disco, reaching overhead and a questioning gesture. Loaded demonstrations are replayed without motion references. Actions remain at original speed; the last two trials explicitly omit four seconds of waiting.'
  - title: Keep a style while changing direction
    src: /assets/videos/research/ariel-command-control.mp4
    poster: /assets/images/research/ariel-command-control.jpg
    width: 960
    height: 672
    caption: 'A separate simulation trial: a preloaded walking style follows changing velocity and heading commands. One continuous 28-second segment at original speed.'
---

## Why agent-ready?

- **Choose the behavior.** A demonstration becomes reusable execution memory. The agent can load it while the robot stands, then recall it later.
- **Steer with simple commands.** Once a style is loaded, the agent steers with velocity and heading commands, without generating a full-body trajectory at every step.
- **Maintain continuous control.** The controller uses retained memory, robot feedback and the latest command to continue low-level control while the agent prepares its next update.

These interfaces connect intermittent agent decisions to continuous motor control. Robustness to delays and abrupt command changes is still being evaluated.

ARIEL builds on [GBC](/publication/2025-arxiv-gbc/) with a **4.24M-parameter** controller. Its shared Transformer and fixed-size memory provide a path to more capacity and motion data; scaling experiments are ongoing.

<details markdown="1">
<summary>Deployment measurements</summary>

An earlier streaming prototype measured **1.09 ms median inference with 4.21M weights**, versus **13.92 ms and 49.73M weights** for SONIC v1.1: about **12.7× lower latency and 11.8× fewer weights** on the same Xeon 8358P CPU, using single-thread ONNX Runtime, 300 warm-up calls and 3,000 timed calls. These are historical measurements; deployment timing for the current memory controller is being evaluated separately.

</details>
