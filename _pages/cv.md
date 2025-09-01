---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Personal Statement
======
My passion lies at the intersection of robotic embodiment and artificial intelligence, and my goal is to pioneer the next generation of autonomous robots capable of learning with human-like adaptability. As a Master's student at SJTU, I have built a solid foundation through research and collaboration spanning reinforcement learning, robotic control, computer vision, and language models, and have applied these skills to real-world challenges from commercialized systems to humanoid control. Eager to deepen my expertise and pursue innovative solutions, I am seeking a PhD opportunity to contribute to research on creating robots that can learn from and interact with the world in a more human-like manner.

Education
======
* **M.Sc. Control Science and Engineering**, Shanghai Jiao Tong University (2023.9 - Present)
  * School of Electronic Information and Electric Engineering (SEIEE)
  * GPA: 3.89/4.0
  * Machine Vision and Autonomous Systems Lab
  * Advisor: Prof. Jun-Guo Lu

* **B.Sc. Automation**, Shanghai Jiao Tong University (2019.9 - 2023.6)
  * School of Electronic Information and Electric Engineering (SEIEE)
  * Zhiyuan Honors Program | GPA: 3.69/4.0 (Major)
  * Zhiyuan Honored Bachelor degree recipient
  * Outstanding Graduate of Shanghai Jiao Tong University
  
* **B.Sc. Economics (Minor)**, Shanghai Jiao Tong University (2019.9 - 2023.6)
  * Antai College of Economics and Management
  * Interdisciplinary program combining technical automation with economic analysis

Research & Work Experience
======
* **Research Intern**, Baosight Co., Ltd. (2024.9 - 2025.8)
  * Developed and deployed humanoid robot reinforcement learning algorithms and designed imitation learning systems
  * Successfully demonstrated humanoid robot capabilities of locomotion and manipulation at WAIC 2025, Shanghai
  * Conducting ROI analysis to identify optimal automation scenarios and cost-reduction opportunities

* **Graduate Research Assistant**, Machine Vision and Autonomous System Laboratory (2024.11 - Present)
  * Conducting research on reinforcement learning and imitation learning for humanoid robots
  * Supervised by Prof. Junguo Lu at Shanghai Jiao Tong University
  * Focus: GBC framework development and cross-morphology learning

* **Co-working and Product Testing**, LIMX Dynamics (2024.6 - 2024.10)
  * Testing LIMX P1 Series bipedal robots and shifting research focus from industrial CV to robotics
  * Supervised by Prof. Junguo Lu; Collaboration with LIMX Dynamics, Shenzhen, China
  * Applied techno-economic analysis to evaluate market positioning strategies

* **Algorithm Developer**, ZIDAI Industrial Collaboration (2023.11 - 2024.6)
  * Designed Bird's Eye View (BEV) generation system for ship-based surrounding view and warning systems
  * Fine-tuned and deployed semantic segmentation and distance prediction models
  * Product successfully commercialized with assessment of commercial viability and market penetration

* **Mobile Application Developer**, SAIC Motor AI Research Institute (2023.6 - 2023.11)
  * Developed Android application for auto-calibration and surround view display in small vehicles
  * Implemented Kotlin, JNI, OpenGL programming and user interface design
  * Deployed in production vehicles for enhanced driver assistance

* **Collaborative Research Assistant**, Shanghai University of Sport (2022.11 - 2023.6)
  * Designed and trained transformer-based models for human pose estimation and sequence analysis
  * Developed integrated analysis system with GUI; system currently deployed and in active use
  * Supporting multiple Olympic sports training programs

* **National Undergraduate Innovative Test Program**, Vision and Lidar Integrated Navigation (2020.11 - 2022.11)
  * Participated in micro vehicle navigation research under supervision of Prof. Jingchuan Wang
  * Gained foundational experience in sensor fusion and autonomous navigation systems
  
Technical Skills
======
* **Programming Languages**
  * C/C++ (Advanced), Python (Advanced), MATLAB, LaTeX, Shell Scripting, Java

* **Deep Learning & AI**
  * PyTorch, TensorFlow, JAX, Weights & Biases, Isaac Gym, Isaac Lab, OpenAI Gym

* **Robotics & Simulation**
  * ROS/ROS2, Gazebo, MuJoCo, Isaac Sim, OpenCV, OpenGL

* **Development Tools**
  * Git/GitHub, Docker, Qt, CMake, Linux/Ubuntu, VS Code

* **Hardware & Embedded**
  * FPGA Development, Embedded Systems, Microcontrollers, Hardware-Software Integration

* **Languages**
  * English (Fluent), Mandarin Chinese (Native), Japanese (Basic Reading)

Research Vision and Interests
======
**Core Research Interests**
* **Embodied Artificial Intelligence:** Foundation Models for Robotics, Language-Grounded Agents, Hierarchical Reinforcement & Imitation Learning
* **Generative Models for Motion:** Text-to-Motion Synthesis, Diffusion Models for Trajectory Planning, World Models
* **Autonomous Systems:** End-to-End Robot Learning, Sim-to-Real Transfer, Research Automation Workflows

**Doctoral Research Vision**

My doctoral research aims to develop an end-to-end, deployable model for humanoid robots, enabling autonomous decision-making and task completion. My proposed architecture emulates a biological brain, comprising a high-level "cortical" system for reasoning and a low-level "cerebellar" system for motor control.

* **The Goal: A Hierarchical Brain for Autonomous Humanoids:** I propose a novel architecture where a Vision-Language Model (VLM) acts as the slow-response "Brain" for task reasoning and strategic planning, while a Diffusion-RL hybrid model acts as the high-frequency "Cerebellum" for agile motor execution.

* **The "Cerebellum" (Achieved):** My GBC and GBC Diffusion frameworks have successfully implemented this "Cerebellum". GBC provides the robust, low-level imitation learning policy, while GBC Diffusion serves as an efficient planner, generating long-horizon, physically-plausible motions.

* **The "Brain" (Ongoing Work - GBC-BTR):** My current GBC-BTR project focuses on developing the "Brain". It investigates how to translate a VLM's high-level output into actionable commands for the Diffusion-based "Cerebellum", creating a complete Reinforcement Learning from Human Feedback (RLHF) loop.

* **Future Work (The PhD Trajectory):** Upon successfully validating the GBC-BTR proof-of-concept, my doctoral work will extend this framework from locomotion to complex manipulation tasks, achieving unified embodied decision-making capabilities.

**Research Contributions & Technical Details**

* **AnyBipe Framework:** Developed a fully automated, end-to-end pipeline to streamline the entire robot learning workflow. This framework accelerates research by leveraging LLMs for automated reward design, training supervision, and sim-to-real validation.

* **GBC Framework:** Engineered a universal imitation learning system enabling heterogeneous humanoids to acquire complex motor skills from motion data. Key innovations include a differentiable IK network for zero-shot motion retargeting and a novel DAgger-MMPPO algorithm. Open-sourced at [https://github.com/sjtu-mvasl-robotics/GBC](https://github.com/sjtu-mvasl-robotics/GBC).

* **GBC Diffusion:** Pioneered a text-driven, morphology-adaptive diffusion model that directly generates physically-plausible actions, serving as a high-level planner. By training directly on retargeted datasets, this model generates long-horizon motions (8s) in 50-100ms.

Awards & Achievements
======
* **RoboCup 2021**: First Prize - International robotics competition
* **MCM/ICM 2021**: Outstanding Winner (Meritorious Winner) - Mathematical Contest in Modeling
* **First Prize Scholarship**: Master's program (2023-2026) - Academic excellence recognition
* **Zhiyuan Honored Scholarship**: Undergraduate program (2019-2023) - Top-tier academic performance

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Publications
======
**Published & Accepted:**
* **Yao, Y.**, He, W., Gu, C., Du, J., Tan, F., Zhu, Z., & Lu, J. (2025). "AnyBipe: An Automated End-To-End Framework for Training and Deploying Bipedal Robots Powered by Large Language Models." *Proceedings of the IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)*. [**Oral Presentation**]

**Under Review:**
* **Yao, Y.**, Luo, C., Du, J., & Lu, J. (2025). "GBC: Generalized Behavior-Cloning Framework for Whole-Body Humanoid Imitation." *Submitted to IEEE Transactions on Robotics (T-RO)*.

**Upcoming Submissions (2026):**
* **Yao, Y.** & Lu, J. (2025). "Motion Diffusion and Trajectory Planning Model for Cross-Morphology Humanoid Architectures." *To be submitted to IEEE International Conference on Robotics and Automation (ICRA) 2026*.

Awards & Achievements
======
* **Academic Scholarship (Tier 1)**, Shanghai Jiao Tong University (2024, 2025)
  * Merit-based scholarship for exceptional academic performance during graduate studies

* **Best Student Presentation Award**, China Association of Automation (CAA), Shanghai (2023, 2024)
  * Recognized for outstanding academic presentation skills in consecutive years

* **Zhiyuan Honor Scholarship**, Shanghai Jiao Tong University (2019-2023)
  * Consecutive four-year scholarship for students in the Zhiyuan Honors Program

* **Zhiyuan's Leadership Scholarship**, Shanghai Jiao Tong University (2022)
  * For students demonstrating exceptional leadership and academic excellence

* **National First Prize**, RoboCup Robot World Cup China Competition (2022)
  * Led team to victory in China's premier robotics competition

* **Outstanding Winner**, Mathematical Contest in Modeling (MCM) (2021)
  * Achieved the highest recognition in the international mathematical modeling competition

Academic Service
======
* **Reviewer**, IEEE Robotics and Automation Letters (RA-L) (2024-2025)
  * Peer reviewer for submissions in robotics and automation research

* **Demonstrated at WAIC 2025**, Shanghai
  * Showcased humanoid robot capabilities at the World Artificial Intelligence Conference

* **Open Source Contributions** (2024)
  * Developed and released comprehensive frameworks for humanoid robot training and deployment

Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Professional Service & Leadership
======
* **Peer Reviewer**: IEEE conferences and journals in robotics and AI
* **Research Mentorship**: Supervising undergraduate research projects in humanoid robotics
* **Industry Collaboration**: Leading technical partnerships between academia and industry for robotics commercialization
* **Open Source Contributions**: Contributing to robotics simulation and control frameworks

Languages
======
* **Chinese**: Native
* **English**: Fluent (Academic and Professional)
* **Japanese**: Conversational (Cultural interest and anime enthusiast)

Research Interests & Future Goals
======
* Advancing cross-morphology learning for universal humanoid control systems
* Developing next-generation multimodal AI integrating vision, language, and physical reasoning
* Creating scalable frameworks for real-world deployment of intelligent humanoid systems
* Bridging the gap between laboratory research and industrial applications in humanoid robotics
* Contributing foundational technologies for humanoid robots in human-centric environments
