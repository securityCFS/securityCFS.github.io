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

<section class="home-intro" aria-labelledby="intro-title">
  <img class="home-portrait" src="{{ site.author.avatar | prepend: '/images/' | relative_url }}" alt="Yifei Yao" width="164" height="190">
  <div class="home-intro-copy">
    <h1 id="intro-title">Yifei Yao</h1>
    <p class="home-intro-role">Research Engineer in Robotics · <a href="https://www.shlab.org.cn/">Shanghai AI Laboratory</a></p>
    <div class="home-bio">
      <p>My research interests include reinforcement learning, embodied agents, and robotic manipulation.</p>
      <p>I received my M.Sc. in Control Science and Engineering from Shanghai Jiao Tong University in 2026, where I was advised by Prof. Jun-Guo Lu. My previous work includes humanoid imitation and bipedal locomotion.</p>
      <p id="phd">I am looking for PhD opportunities in robotics and embodied AI.</p>
    </div>
    <div class="home-intro-links"><a href="mailto:{{ site.author.email }}">Email ↗</a><a href="{{ site.author.googlescholar }}">Google Scholar ↗</a><a href="https://github.com/{{ site.author.github }}">GitHub ↗</a><a href="{{ '/cv/' | relative_url }}">CV ↗</a><a href="{{ site.author.orcid }}">ORCID ↗</a></div>
  </div>
</section>

<section id="research" class="home-section" aria-labelledby="research-title">
  <div class="home-section-heading"><h2 id="research-title">Selected Publications</h2><a href="{{ '/publications/' | relative_url }}">All publications ↗</a></div>
  <div class="selected-grid">{% assign selected = site.publications | where: 'selected', true | sort: 'selected_order' %}{% for paper in selected %}{% include research-work.html %}{% endfor %}</div>
  <p class="home-reports">I also contributed to the <a href="https://arxiv.org/abs/2609.27656">InternW0</a> and <a href="https://arxiv.org/abs/2609.31394">InternW0-Δ</a> technical reports.</p>
</section>

<div class="updates-grid">
  <section id="news" class="home-section" aria-labelledby="news-title"><div class="home-section-heading"><h2 id="news-title">News</h2></div><ul class="studio-news">{% for item in site.data.news limit:5 %}<li><time datetime="{{ item.date }}">{{ item.label }}</time><div>{{ item.text | markdownify }}</div></li>{% endfor %}</ul></section>
  <section id="honors" class="home-section honors-panel" aria-labelledby="honors-title"><div class="home-section-heading"><h2 id="honors-title">Selected Honors</h2><a href="{{ '/cv/#selected-honors' | relative_url }}">All honors ↗</a></div><ul class="honors-list">{% for honor in site.data.honors %}{% if honor.featured %}<li><span class="honor-year">{{ honor.year }}</span><div><strong>{{ honor.title }}</strong><span class="honor-institution">{{ honor.institution }}</span></div></li>{% endif %}{% endfor %}</ul></section>
</div>
