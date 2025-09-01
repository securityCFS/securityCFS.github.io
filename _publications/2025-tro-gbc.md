---
title: "GBC: Generalized Behavior-Cloning Framework for Whole-Body Humanoid Imitation"
collection: publications
category: manuscripts
permalink: /publication/2025-tro-gbc
excerpt: 'This paper presents a universal imitation learning system that enables heterogeneous humanoids to acquire complex motor skills through cross-morphology learning and novel algorithmic innovations.'
date: 2025-08-01
paperurl: '/files/tro_gbc.pdf'
citation: 'Yao, Y., Luo, C., Du, J., & Lu, J. (2025). &quot;GBC: Generalized Behavior-Cloning Framework for Whole-Body Humanoid Imitation.&quot.'
---

## Abstract

The Generalized Behavior Cloning (GBC) framework represents a breakthrough in humanoid robotics by enabling universal imitation learning across different morphologies. This work addresses the fundamental challenge of transferring motor skills between heterogeneous humanoid platforms while maintaining high performance and sample efficiency.

## Key Technical Innovations

### Differentiable IK Network
- **Zero-shot Motion Retargeting**: Novel neural network architecture that enables instant adaptation of motion data across different humanoid morphologies without additional training
- **Morphology-Agnostic Design**: Universal representation that abstracts away specific robot configurations

### DAgger-MMPPO Algorithm
- **Hybrid Learning Approach**: Combines the stability of imitation learning with the adaptability of reinforcement learning
- **Sample Efficiency**: Dramatically reduces the amount of demonstration data required compared to traditional methods
- **Robust Performance**: Maintains consistent behavior across diverse tasks and environments

## Framework Architecture

The GBC framework serves as the "motor cortex" or "cerebellum" for intelligent humanoid agents, providing:
- **High-frequency Motor Control**: Real-time control at locomotion frequencies
- **Task Generalization**: Single model handles both locomotion and manipulation tasks
- **Cross-Platform Compatibility**: Seamless deployment across different humanoid hardware

## Open Source Contribution

The complete GBC framework is open-sourced and available at: [https://github.com/sjtu-mvasl-robotics/GBC](https://github.com/sjtu-mvasl-robotics/GBC)

This enables the broader robotics community to build upon our work and accelerates research in embodied AI.

## Impact and Applications

- **Manufacturing Automation**: Deployed on commercial humanoid platforms at Baosight Group
- **Research Acceleration**: Provides foundational infrastructure for humanoid robot development
- **Industry Adoption**: Successfully demonstrated at World AI Conference (WAIC) 2025

