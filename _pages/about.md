---
layout: academic
permalink: /
title: "Yifei Yao — Robotics & Embodied AI"
excerpt: "Research Engineer in Robotics at Shanghai AI Laboratory. Offline and agentic reinforcement learning, embodied agents, and robotic manipulation. Seeking PhD opportunities."
home: true
redirect_from:
  - /about/
  - /about.html
---

<section class="home-about" aria-labelledby="about-title">
  <h1 id="about-title">About Me</h1>
  <p>I am an embodied intelligence engineer at <a href="https://www.shlab.org.cn/">Shanghai AI Laboratory</a>. I am interested in how offline and agentic reinforcement learning can help embodied agents learn robotic manipulation.</p>
  <p>I received my M.Sc. in Control Science and Engineering from Shanghai Jiao Tong University in 2026, where I was advised by Prof. Jun-Guo Lu. My recent work includes <a href="{{ '/publication/2026-manuscript-abi/' | relative_url }}">actor-free zero-shot RL</a> and <a href="{{ '/publication/2026-preprint-simplevo/' | relative_url }}">memory evolution for embodied agents</a>, alongside embodied agent evaluation and world-action models. I also continue to work on humanoid control: <a href="{{ '/publication/2026-project-ariel/' | relative_url }}">ARIEL</a> builds on my earlier <a href="{{ '/publication/2025-arxiv-gbc/' | relative_url }}">GBC</a> work with demonstration-conditioned execution memory.</p>
  <p>I am currently studying <a href="{{ '/publication/2026-project-agent-rl/' | relative_url }}">how embodied agents learn from experience</a>: transferring a frontier agent’s robot interaction experience to an open model through staged SFT and RL, from visual grounding to closed-loop manipulation.</p>
  <p id="phd">I am looking for PhD opportunities in robotics and embodied AI. Please feel free to <a href="mailto:{{ site.author.email }}">get in touch</a>.</p>
</section>

<section class="home-news" id="news" aria-labelledby="news-title">
  <h2 id="news-title">News</h2>
  <ul class="news-list">{% for item in site.data.news limit:5 %}<li><time datetime="{{ item.date }}">{{ item.label }}</time><div>{{ item.text | markdownify }}</div></li>{% endfor %}</ul>
</section>

<section class="home-publications" id="research" aria-labelledby="research-title">
  <div class="section-heading"><h2 id="research-title">Publications</h2><a href="{{ '/publications/' | relative_url }}">Full records &amp; citations</a></div>
  <p class="equal-note">* Equal contribution (co-first authors).</p>
  {% assign papers = site.publications | sort: 'date' | reverse %}
  {% for paper in papers %}{% unless paper.category == 'ongoing' %}{% include home-publication.html %}{% endunless %}{% endfor %}
</section>

<section class="home-publications" id="ongoing-research" aria-labelledby="ongoing-title">
  <div class="section-heading"><h2 id="ongoing-title">Ongoing Research</h2></div>
  {% for paper in papers %}{% if paper.category == 'ongoing' %}{% include home-publication.html %}{% endif %}{% endfor %}
</section>
