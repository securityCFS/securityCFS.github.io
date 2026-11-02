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

<section class="research-hero" aria-labelledby="identity-title">
  <div class="hero-copy">
    <div class="hero-identity">
      <img src="{{ site.author.avatar | prepend: '/images/' | relative_url }}" alt="Yifei Yao" width="84" height="96">
      <div><h1 id="identity-title">Yifei Yao<span class="identity-dot">.</span></h1><p>Research Engineer, Robotics<br><a href="https://www.shlab.org.cn/">Shanghai AI Laboratory</a></p></div>
    </div>
    <p class="hero-statement">I study how robots <em>learn</em>,<br><em>reason</em>, and <em>act</em>.</p>
    <p class="hero-description">My research connects reinforcement learning, embodied agents, and robotic manipulation, with an emphasis on the feedback between decisions and physical interaction.</p>
    <div class="hero-links"><a class="action-primary" href="#research">Explore my research <span aria-hidden="true">↓</span></a><a href="{{ site.author.googlescholar }}">Scholar ↗</a><a href="https://github.com/{{ site.author.github }}">GitHub ↗</a></div>
    <p class="hero-background">M.Sc., Shanghai Jiao Tong University · 2026<br>Advised by Prof. Jun-Guo Lu</p>
  </div>
  <div class="demo-stage" data-demo-stage>
    <div class="demo-topline"><span class="live-dot" aria-hidden="true"></span><span>Research in motion</span><span class="demo-counter">01 — 03</span></div>
    {% for demo in site.data.demos %}
    <div id="demo-panel-{{ demo.id }}" class="demo-panel" role="tabpanel" aria-labelledby="demo-tab-{{ demo.id }}"{% unless forloop.first %} hidden{% endunless %}>
      <div class="demo-viewport"><video controls muted loop playsinline preload="none" poster="{{ demo.poster | relative_url }}" aria-label="{{ demo.project }}: {{ demo.description | escape }}"><source src="{{ demo.video | relative_url }}" type="video/mp4">Your browser does not support embedded video. <a href="{{ demo.url }}">View the project demonstration.</a></video></div>
      <div class="demo-caption"><div><p class="demo-context">{{ demo.context }}</p><p class="demo-description"><strong>{{ demo.project }}</strong> / {{ demo.description }}</p></div><a href="{{ demo.url }}" aria-label="Full {{ demo.project }} project">↗</a></div>
    </div>
    {% endfor %}
    <div class="demo-tabs" role="tablist" aria-label="Research demonstrations" data-demo-tabs hidden>{% for demo in site.data.demos %}<button type="button" id="demo-tab-{{ demo.id }}" role="tab" aria-selected="{% if forloop.first %}true{% else %}false{% endif %}" aria-controls="demo-panel-{{ demo.id }}" tabindex="{% if forloop.first %}0{% else %}-1{% endif %}"><span>0{{ forloop.index }}</span>{{ demo.tab }}</button>{% endfor %}</div>
  </div>
</section>

<section id="phd" class="phd-strip" aria-labelledby="phd-title">
  <div class="phd-status"><span class="status-dot" aria-hidden="true"></span> Open to PhD opportunities</div><h2 id="phd-title">Learning, reasoning, and physical interaction.</h2><a href="mailto:{{ site.author.email }}">Let's talk <span aria-hidden="true">↗</span></a>
</section>

<section id="research" class="studio-section" aria-labelledby="research-title">
  <div class="studio-heading"><div><p class="section-kicker">01 / Research</p><h2 id="research-title">From learning to physical interaction.</h2></div><a class="section-link" href="{{ '/publications/' | relative_url }}">All publications <span aria-hidden="true">↗</span></a></div>
  <div class="research-directions" aria-label="Research interests"><div><span>Reinforcement learning</span><p>Learning from interaction and physical feedback.</p></div><div><span>Embodied agents</span><p>Exploration, task reasoning, and grounded action.</p></div><div><span>Robotic manipulation</span><p>Contact, precision, and coordinated control.</p></div></div>
  <div class="selected-grid">{% assign selected = site.publications | where: 'selected', true | sort: 'selected_order' %}{% for paper in selected %}{% include research-work.html %}{% endfor %}</div>
  <div class="report-footnote"><span class="report-symbol" aria-hidden="true">↳</span><p>I also contributed to <a href="https://arxiv.org/abs/2609.27656">InternW0</a> and <a href="https://arxiv.org/abs/2609.31394">InternW0-Δ</a>, collaborative technical reports on physical world models and generalist manipulation.</p><a href="{{ '/publications/' | relative_url }}">Read more ↗</a></div>
</section>

<div class="updates-grid">
  <section id="news" class="studio-section" aria-labelledby="news-title"><div class="studio-heading"><div><p class="section-kicker">02 / Field notes</p><h2 id="news-title">Recently.</h2></div></div><ul class="studio-news">{% for item in site.data.news limit:5 %}<li><time datetime="{{ item.date }}">{{ item.label }}</time><div>{{ item.text | markdownify }}</div></li>{% endfor %}</ul></section>
  <section id="honors" class="studio-section honors-panel" aria-labelledby="honors-title"><p class="section-kicker">03 / Recognition</p><h2 id="honors-title">Along the way.</h2><ul class="honors-list">{% for honor in site.data.honors %}{% if honor.featured %}<li><span class="honor-year">{{ honor.year }}</span><div><strong>{{ honor.title }}</strong><span class="honor-institution">{{ honor.institution }}</span></div></li>{% endif %}{% endfor %}</ul><a class="section-link" href="{{ '/cv/#selected-honors' | relative_url }}">Background & all honors ↗</a></section>
</div>

<section id="contact" class="studio-contact" aria-labelledby="contact-title"><div><p class="section-kicker">A shared research question?</p><h2 id="contact-title">Get in touch.</h2><a class="contact-email" href="mailto:{{ site.author.email }}">{{ site.author.email }} <span aria-hidden="true">↗</span></a></div><div class="contact-links"><a href="{{ '/cv/' | relative_url }}">Curriculum vitae ↗</a><a href="{{ site.author.googlescholar }}">Google Scholar ↗</a><a href="https://github.com/{{ site.author.github }}">GitHub ↗</a><a href="{{ site.author.orcid }}">ORCID ↗</a></div></section>
