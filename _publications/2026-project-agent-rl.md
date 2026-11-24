---
layout: paper
collection: publications
title: 'StaRUA: Aligning Spatial Intent with Physical Action in Open-Weight Robot-Use Agents'
short_name: StaRUA
date: '2026-11-08'
publication_year: 2026
category: ongoing
venue: Ongoing research project
venue_short: Research project
status: In progress
show_status: true
topic: Embodied agents
permalink: /publication/2026-project-agent-rl/
verified_on: '2026-11-24'
home_image: /assets/images/research/starua/cookie-plate.webp
demourl: /publication/2026-project-agent-rl/#examples
excerpt: 'StaRUA trains Qwen3.8-27B to control a robot from its overhead and wrist cameras. In one kitchen simulation, the gripper lifts a plate by mistake. The agent looks again, finds the cookie that slid off, and lines up another reach.'
---

StaRUA stands for *Staged Robot-Use Agent*. I start with Astra’s manipulation demonstrations from [SimplEvo](/publication/2026-preprint-simplevo/) and let the policy practise in simulation. At each turn it can request an overhead view or either wrist camera, send waypoints to an arm, or open and close a gripper. The measured finger opening and the next camera view help it check what it actually picked up. I study these decisions in [EBench](/publication/2026-report-ebench-astra/) and RoboDojo.

{% include agent-rl-demo.html %}
