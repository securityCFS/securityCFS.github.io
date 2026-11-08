---
layout: paper
collection: publications
title: 'Learning Embodied Agents from Experience'
short_name: Embodied Agent RL
date: '2026-11-08'
publication_year: 2026
category: ongoing
venue: Ongoing research project
venue_short: Research project
status: In progress
show_status: true
topic: Embodied agents
permalink: /publication/2026-project-agent-rl/
verified_on: '2026-11-08'
home_image: /assets/images/research/agent-rl/vqa-overlook.png
demourl: /publication/2026-project-agent-rl/#examples
excerpt: 'How can an open model learn to act from a frontier agent’s experience? I am studying the transfer of Astra’s robot interaction experience to Qwen3.8-27B through staged SFT and reinforcement learning, connecting visual grounding, short manipulation skills, and long-horizon tasks.'
---

Building on [EBench](/publication/2026-report-ebench-astra/) and [SimplEvo](/publication/2026-preprint-simplevo/), this project studies how experience collected through interaction can become a student model’s own ability to observe, act, and correct mistakes.

Multi-stage SFT and embodied VQA RL experiments are underway. Short-skill rollout and scoring have passed initial smoke tests; their training benefit and transfer to long-horizon tasks remain under investigation.

{% include agent-rl-demo.html %}
