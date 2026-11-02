---
layout: academic
title: "Curriculum vitae"
eyebrow: "Background & experience"
permalink: /cv/
excerpt: "Yifei Yao — Research Engineer in Robotics at Shanghai AI Laboratory, seeking PhD opportunities."
redirect_from:
  - /resume
---
<div class="page-actions"><a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a><a href="{{ '/files/publications.bib' | relative_url }}" download>Publication list / BibTeX ↓</a><button type="button" data-print-cv hidden>Print / Save as PDF ↓</button></div>
<div class="cv-content" markdown="1">

Research Engineer in Robotics at **Shanghai AI Laboratory**, seeking **PhD opportunities** in robot learning and embodied AI. My research focuses on **reinforcement learning**, **embodied agents**, and **robotic manipulation**.

## Education

### Shanghai Jiao Tong University <span class="cv-date">Sep 2023 – Apr 2026</span>
**M.Sc., Control Science and Engineering**<br>
Machine Vision and Autonomous System Laboratory · Advisor: Prof. Jun-Guo Lu<br>
GPA: 3.89/4.0 · Outstanding Graduate (2026)

### Shanghai Jiao Tong University <span class="cv-date">Sep 2019 – Jun 2023</span>
**B.Eng., Automation** · Zhiyuan Honors Program<br>
**Minor in Economics**, Antai College of Economics and Management<br>
Major GPA: 3.69/4.0 · Outstanding Graduate of Shanghai Jiao Tong University

## Research & engineering experience

### Shanghai AI Laboratory <span class="cv-date">Nov 2025 – Present</span>
**Research Engineer, Robotics**

- Research in reinforcement learning, embodied agents, and robotic manipulation.
- Shared first author of REAL (ECCV 2026), InfCoiL (NeurIPS 2026), PICA-WAM, and the EBench frontier-agent evaluation report; coauthor of the InternW0 series of technical reports.

### Turin Robotics / Shanghai Baosight Software <span class="cv-date">Jan 2025 – Jul 2025</span>
**Reinforcement Learning Algorithm Engineer**

- Developed reinforcement learning and imitation learning algorithms for humanoid robots.

### Machine Vision and Autonomous System Laboratory, SJTU
**Graduate research · Advisor: Prof. Jun-Guo Lu**

- Developed GBC, an open-source framework for motion retargeting and whole-body humanoid imitation.
- Developed AnyBipe, integrating language-guided reward design, robot training, and sim-to-real evaluation.

### Earlier engineering experience

- **LIMX Dynamics collaboration** (Jun – Oct 2024): bipedal robot testing and locomotion research.
- **ZIDAI industrial collaboration** (Nov 2023 – Jun 2024): bird’s-eye-view perception, semantic segmentation, and distance estimation for maritime applications.
- **SAIC Motor AI Research Institute** (Jun – Nov 2023): Android and OpenGL development for vehicle surround-view systems.
- **Shanghai University of Sport collaboration** (Nov 2022 – Jun 2023): human pose estimation and motion-sequence analysis.

## Publications

</div>
<p class="muted">Complete records, code links, and citations are on the <a href="{{ '/publications/' | relative_url }}">publications page</a>.</p>
{% assign papers = site.publications | sort: 'date' | reverse %}
<div class="cv-pubs">
{% for category in site.publication_category %}
<h3 class="cv-pub-group">{{ category[1].title }}</h3>
{% for paper in papers %}{% if paper.category == category[0] %}{% include paper-card.html compact=true %}{% endif %}{% endfor %}
{% endfor %}
</div>
<div class="cv-content" markdown="1">

## Technical skills

- **Programming:** Python, C/C++, MATLAB, Java, Kotlin.
- **Learning & simulation:** PyTorch, Isaac Lab, Isaac Sim, Isaac Gym, MuJoCo.
- **Robotics & systems:** ROS/ROS2, OpenCV, OpenGL, Linux, Docker, Git.

## Selected honors

{% assign honor_groups = site.data.honors | group_by: 'group' %}
{% for group in honor_groups %}
### {{ group.name }}
<ul class="cv-honors-list">
{% for honor in group.items %}<li><strong>{{ honor.title }}</strong> ({{ honor.year }})<br><span class="muted">{{ honor.institution }}</span></li>{% endfor %}
</ul>
{% endfor %}

## Contact

[jameswhiteyao@gmail.com](mailto:jameswhiteyao@gmail.com) · [Google Scholar]({{ site.author.googlescholar }}) · [GitHub](https://github.com/securityCFS)<br>
Academic email: [godchaser@sjtu.edu.cn](mailto:godchaser@sjtu.edu.cn)

</div>
