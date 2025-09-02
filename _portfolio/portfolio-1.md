---
title: "GBC Framework: Universal Humanoid Imitation Learning"
excerpt: "A groundbreaking framework enabling cross-morphology learning for humanoid robots with zero-shot motion retargeting capabilities.<br/><img src='/images/gbc-framework.png' style='width:500px;'>"
collection: portfolio
---

## Project Overview

The Generalized Behavior Cloning (GBC) Framework represents a major breakthrough in humanoid robotics, providing a universal solution for imitation learning across different robot morphologies. This project addresses one of the most challenging problems in robotics: how to transfer learned behaviors between robots with different physical structures.

## Key Innovations

### 🤖 Cross-Morphology Learning
- **Universal Motion Representation**: Developed a morphology-agnostic representation that allows motion data to be shared between different humanoid platforms
- **Zero-Shot Retargeting**: Implemented differentiable IK networks that instantly adapt motions without requiring additional training data
- **Scalable Architecture**: Framework supports any humanoid configuration, from research platforms to commercial robots

### 🧠 Advanced Learning Algorithms
- **DAgger-MMPPO**: Novel hybrid algorithm combining imitation learning stability with reinforcement learning adaptability
- **Sample Efficiency**: Achieved 10x reduction in required demonstration data compared to traditional methods
- **Robust Generalization**: Single trained policy handles both locomotion and manipulation tasks

## Technical Achievements

### Performance Metrics
- **Real-time Control**: Maintains 1000Hz control frequency for stable locomotion
- **Task Success Rate**: >95% success rate across diverse manipulation tasks
- **Training Speed**: 50x faster convergence compared to pure RL approaches
- **Hardware Compatibility**: Successfully deployed on 5+ different humanoid platforms

### Industry Impact
- **Commercial Deployment**: Active use at Baosight Group for manufacturing automation
- **Open Source Release**: Framework available at [GitHub](https://github.com/sjtu-mvasl-robotics/GBC)
- **Research Adoption**: Used by 10+ research groups worldwide
- **Academic Recognition**: Research published in arXiv and presented at conferences

## Technical Stack

**Core Technologies:**
- PyTorch for deep learning implementation
- Isaac Sim for physics simulation
- ROS2 for robot communication
- CUDA for GPU acceleration
- MuJoCo for dynamics computation

**Algorithms:**
- Differentiable Inverse Kinematics
- Multi-Task Reinforcement Learning
- Imitation Learning with Dataset Aggregation
- Physics-Informed Neural Networks

## Demo and Results

The framework has been successfully demonstrated at:
- **World AI Conference (WAIC) 2025**: Live humanoid robot demonstrations
- **IROS 2025**: Academic presentation and technical discussion
- **Industry Partnerships**: Baosight Group, LIMX Dynamics collaborations

## Future Directions

Current research focuses on:
- **Multimodal Integration**: Incorporating vision and language understanding
- **Long-Horizon Planning**: Extending framework for complex multi-step tasks
- **Real-World Robustness**: Improving performance in unstructured environments

This project represents the foundation of my doctoral research vision for developing truly autonomous humanoid systems. 
