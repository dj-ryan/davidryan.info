---
title: "A.S.S.E.T."
description: "Asteroid Sample Strength Evaluation Tool (A.S.S.E.T.)"
date: "2022-09-10"
banner:
  src: "../../images/asset_topdown.jpg"
  alt: "ASSET Top Down Shot"
  caption: "Top-down view of A.S.S.E.T."
categories:
  - "Internship"
keywords:
  - "Honeybee"
  - "NASA"
  - "Aerospace"
  - "Embedded Systems"
  - "C++"
---

# ASSET
## Project description and goals
Tasked with controlling a series of actuation motors based on flight events.
Collecting data in a reliable way and transmitting it to the flight computer. 

## Project Details
Divided into three subsystems
- Teensy Transceiver
- Copley Motor Controller
- Integrated Payload Controller (IPC)

Each held different responsibilities in fulfilling these goals.

### Teensy Transceiver
Custom piece of hardware responsible for communicating with the Copley Motor Controllers via the CAN protocol, requesting position data, and transferring that data in a formatted way via RS232 to the Integrated Payload Controller. 

### Copley Motor Controller
Programmed via Copley supplied CME2 program. Capable of a list of sequences with one or more steps with different conditions and functions. Operated on basic binary inputs and outputted the same. 

### Integrated Payload Controller
Programmed using a custom XML based object description language. Different objects were created with different triggers and different functions.



The results of my project was a fully functional and operating scientific payload that would be launched to the Karman line to gather data. The data that it was responsible for gathering was related to the soil sub-strait strength when exposed to compression and probing force in a zero G environment. We wanted to answer two fundamental questions:
1) How much force feedback would be felt by a probe that was being inserted into the soil?
2) How would this force change if the soil was more compact or more lose?
The device that was constructed was designed to preform a 3 minuet experiment in zero G. It was reactive meaning that depending on the data that it was collecting would determine the best next steps in terms of the experiment. It was extremely time efficient, completing multiple actions at once where possible. It was also robust allowing it to escape out of unwanted scenarios. 

Working at Honeybee exposed me to several things:
1) A professional environment where technical ideas had to be generated and discussed 
2) An element of freedom to try ideas and determine if they were successful or not
3) A passion for space related technologies
4) A group of high quality human beings
5) Advanced use of my learned skills

Absolutely it has reaffirmed it. I believe that  it has also focused me into an aerospace direction as well. After working at Honeybee Robotics I have developed a great passion for space technology and the advancements that are being made in that sector. In the future I hope to be involved in the aerospace industry. 




## Project takeaways and improvements
Learned:
- Basics of CAN
- Teensy 4.0 Microcontroller
- Advanced Soldering techniques
- CME2, Copley motor controller
- Flight hardware design and assembly
- Advanced usage of Blue Origin supplied IPC
- C++ based CAN library
- 


Dividing a complicated time based and reactive system into separate components is not a recommended idea.  