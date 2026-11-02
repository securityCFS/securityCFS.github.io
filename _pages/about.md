---
layout: academic
permalink: /
title: "Yifei Yao — Robotics & Embodied AI"
excerpt: "Research Engineer in Robotics at Shanghai AI Laboratory. Reinforcement learning, embodied agents, and robotic manipulation. Seeking PhD opportunities."
home: true
redirect_from:
  - /about/
  - /about.html
---

<section class="home-about" aria-labelledby="about-title">
  <h1 id="about-title">About Me</h1>
  <p>I am a Research Engineer in Robotics at <a href="https://www.shlab.org.cn/">Shanghai AI Laboratory</a>. My research interests include reinforcement learning, embodied agents, and robotic manipulation.</p>
  <p>I received my M.Sc. in Control Science and Engineering from Shanghai Jiao Tong University in 2026, where I was advised by Prof. Jun-Guo Lu. My previous work includes humanoid imitation and bipedal locomotion.</p>
  <p id="phd">I am looking for PhD opportunities in robotics and embodied AI. Please feel free to <a href="mailto:{{ site.author.email }}">get in touch</a>.</p>
</section>

<section class="home-news" id="news" aria-labelledby="news-title">
  <h2 id="news-title">News</h2>
  <ul class="news-list">{% for item in site.data.news limit:5 %}<li><time datetime="{{ item.date }}">{{ item.label }}</time><div>{{ item.text | markdownify }}</div></li>{% endfor %}</ul>
</section>

<section class="home-publications" id="research" aria-labelledby="research-title">
  <div class="section-heading"><h2 id="research-title">Selected Publications</h2><a href="{{ '/publications/' | relative_url }}">All publications ↗</a></div>
  <p class="equal-note">* Equal contribution (co-first authors).</p>
  {% assign selected = site.publications | where: 'selected', true | sort: 'selected_order' %}
  {% for paper in selected %}{% include home-publication.html %}{% endfor %}
  <p class="home-report-note">I also contributed to the <a href="https://arxiv.org/abs/2609.27656">InternW0</a> and <a href="https://arxiv.org/abs/2609.31394">InternW0-Δ</a> technical reports.</p>
</section>
