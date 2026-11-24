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
  <p class="about-lead">I am an embodied intelligence engineer at <a href="https://www.shlab.org.cn/" target="_blank" rel="noopener noreferrer">Shanghai AI Laboratory</a>. I am interested in how offline and agentic reinforcement learning can help embodied agents learn robotic manipulation.</p>
  <p>I received my M.Sc. in Control Science and Engineering from Shanghai Jiao Tong University in 2026, where I was advised by Prof. Jun-Guo Lu. My recent work includes <a href="{{ '/publication/2026-manuscript-abi/' | relative_url }}">actor-free zero-shot RL</a> and <a href="{{ '/publication/2026-preprint-simplevo/' | relative_url }}">memory evolution for embodied agents</a>, alongside embodied agent evaluation and world-action models. I also continue to work on humanoid control: <a href="{{ '/publication/2026-project-ariel/' | relative_url }}">ARIEL</a> builds on my earlier <a href="{{ '/publication/2025-arxiv-gbc/' | relative_url }}">GBC</a> work with demonstration-conditioned execution memory.</p>
  <p>In <a href="{{ '/publication/2026-project-agent-rl/' | relative_url }}">StaRUA</a>, I use Astra’s robot demonstrations and reinforcement learning to train an open-weight manipulation agent. I’m interested in how it decides when to take another look and where to reach next after a grasp goes wrong.</p>
  <p id="phd" class="phd-callout">I am looking for PhD opportunities in robotics and embodied AI. Please feel free to <a href="mailto:{{ site.author.email }}">get in touch</a>.</p>
</section>

<section class="home-news" id="news" aria-labelledby="news-title">
  <div class="section-heading">
    <h2 id="news-title">News</h2>
  </div>
  <ul class="news-list">
    {% for item in site.data.news limit:5 %}
    <li><time datetime="{{ item.date }}">{{ item.label }}</time><div class="news-body">{{ item.text | markdownify }}</div></li>
    {% endfor %}
  </ul>
  {% if site.data.news.size > 5 %}
  {% assign earlier_count = site.data.news.size | minus: 5 %}
  <ul class="news-list news-list--earlier" id="earlier-news" data-earlier-news>
    {% for item in site.data.news offset:5 %}
    <li><time datetime="{{ item.date }}">{{ item.label }}</time><div class="news-body">{{ item.text | markdownify }}</div></li>
    {% endfor %}
  </ul>
  <div class="news-expand-row" data-news-expand-row hidden>
    <button class="news-expand-btn" type="button" data-news-toggle aria-expanded="false" aria-controls="earlier-news" aria-label="Show {{ earlier_count }} earlier news items" title="Show earlier news ({{ earlier_count }})">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
    </button>
  </div>
  {% endif %}
</section>

<section class="home-publications" id="research" aria-labelledby="research-title">
  <div class="section-heading">
    <h2 id="research-title">Publications</h2>
    <a class="section-action" href="{{ '/publications/' | relative_url }}">Full records &amp; citations →</a>
  </div>
  <p class="equal-note">* Equal contribution (co-first authors).</p>
  {% assign papers = site.publications | sort: 'date' | reverse %}
  <div class="home-paper-list">
  {% assign pub_index = 0 %}
  {% for paper in papers %}{% unless paper.category == 'ongoing' %}{% assign pub_index = pub_index | plus: 1 %}{% if pub_index <= 4 %}{% include home-publication.html eager=true %}{% else %}{% include home-publication.html %}{% endif %}{% endunless %}{% endfor %}
  </div>
</section>

<section class="home-publications" id="ongoing-research" aria-labelledby="ongoing-title">
  <div class="section-heading">
    <h2 id="ongoing-title">Ongoing Research</h2>
  </div>
  <div class="home-paper-list">
  {% for paper in papers %}{% if paper.category == 'ongoing' %}{% include home-publication.html %}{% endif %}{% endfor %}
  </div>
</section>

{% include software.html %}
