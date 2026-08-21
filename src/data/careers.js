// Existing CSE careers
const cseCareers = [
  {
    slug: 'software-engineer',
    title: 'Software Engineer',
    tag: 'Core Development',
    summary: 'Build the applications, systems, and platforms that run the modern digital world.',
    briefExplanation: 'Software Engineers are the builders of the digital age. They design, develop, and maintain software systems ranging from simple mobile apps to massive distributed backend architectures that handle millions of users.',
    salaryRange: '₹6L - ₹25L+ per year',
    growthOutlook: 'Very High (22% expected growth by 2030)',
    topCompanies: ['Google', 'Microsoft', 'Amazon', 'Atlassian', 'Uber'],
    dayInLife: 'Your day typically starts with a short stand-up meeting to align with your team. Then, you\'ll dive into writing code, reviewing pull requests from teammates, debugging issues, and discussing system architecture with senior engineers. You spend most of your time translating business requirements into clean, efficient, and scalable code.',
    requirements: [
      'Strong grasp of Data Structures and Algorithms',
      'Proficiency in at least one backend language (Java, C++, Python, Node.js)',
      'Understanding of databases (SQL & NoSQL) and schema design',
      'Familiarity with version control (Git) and team collaboration',
      'Basic understanding of system design and APIs'
    ],
    prep: [
      ['Data Structures', 'Focus heavily on Arrays, HashMaps, Trees, Graphs, and DP.'],
      ['Database Systems', 'Understand normalization, indexing, and complex SQL joins.'],
      ['Operating Systems', 'Learn about processes, threads, concurrency, and memory management.']
    ],
    portfolioProject: 'Build a scalable REST API for an e-commerce platform using Node.js or Spring Boot, backed by PostgreSQL, and deployed on AWS or Heroku.'
  },
  {
    slug: 'data-scientist',
    title: 'Data Scientist',
    tag: 'Analytics & AI',
    summary: 'Extract insights from massive datasets to drive business decisions and build AI models.',
    briefExplanation: 'Data Scientists blend statistics, programming, and domain expertise to solve complex problems. They build predictive models, run experiments, and create visualizations to help organizations understand trends and make data-driven decisions.',
    salaryRange: '₹8L - ₹30L+ per year',
    growthOutlook: 'Extremely High (31% expected growth by 2030)',
    topCompanies: ['Meta', 'Netflix', 'Swiggy', 'Mu Sigma', 'Fractal Analytics'],
    dayInLife: 'A typical day involves cleaning and exploring messy datasets using Python (Pandas). You\'ll train machine learning models, tune hyperparameters, and evaluate performance. A significant part of the job is presenting your findings to non-technical stakeholders using clear visualizations.',
    requirements: [
      'Strong foundation in Statistics and Probability',
      'Expertise in Python (Pandas, NumPy, Scikit-Learn)',
      'Advanced SQL skills for data extraction',
      'Understanding of Machine Learning algorithms (Regression, Trees, Neural Networks)',
      'Ability to communicate complex findings clearly'
    ],
    prep: [
      ['Mathematics', 'Deep dive into Probability, Statistics, and Linear Algebra.'],
      ['Database Systems', 'Master writing analytical SQL queries and window functions.'],
      ['Machine Learning', 'Understand the math behind algorithms, not just library imports.']
    ],
    portfolioProject: 'Analyze a real-world dataset (like housing prices or customer churn), build a predictive model, and deploy it as a web app using Streamlit.'
  },
  {
    slug: 'cloud-engineer',
    title: 'Cloud Engineer',
    tag: 'Infrastructure',
    summary: 'Design, deploy, and manage scalable cloud infrastructure and services.',
    briefExplanation: 'Cloud Engineers build the invisible infrastructure that keeps modern apps running. They provision servers, configure networks, manage databases, and ensure that systems are secure, highly available, and cost-effective using platforms like AWS, Azure, or GCP.',
    salaryRange: '₹7L - ₹28L+ per year',
    growthOutlook: 'High (15% expected growth by 2030)',
    topCompanies: ['AWS', 'Microsoft Azure', 'TCS', 'Wipro', 'IBM'],
    dayInLife: 'You\'ll spend your day writing Infrastructure as Code (Terraform) to automate server deployments. You might troubleshoot networking issues between microservices, monitor system health dashboards, optimize cloud costs, and help developers deploy their code seamlessly via CI/CD pipelines.',
    requirements: [
      'Deep understanding of Linux and networking fundamentals',
      'Hands-on experience with a major cloud provider (AWS, Azure, GCP)',
      'Proficiency in Docker and Kubernetes',
      'Experience with Infrastructure as Code (Terraform, CloudFormation)',
      'Knowledge of CI/CD pipelines (Jenkins, GitHub Actions)'
    ],
    prep: [
      ['Computer Networks', 'Master TCP/IP, DNS, subnets, and load balancing.'],
      ['Operating Systems', 'Become highly proficient in the Linux command line and shell scripting.'],
      ['Cloud Computing', 'Get a foundational certification (e.g., AWS Solutions Architect Associate).']
    ],
    portfolioProject: 'Deploy a multi-tier web application on AWS using Docker, ECS/EKS, and an RDS database, fully automated using Terraform.'
  },
  {
    slug: 'cybersecurity-analyst',
    title: 'Cybersecurity Analyst',
    tag: 'Security',
    summary: 'Protect networks, systems, and data from cyber attacks and breaches.',
    briefExplanation: 'Security Analysts are the digital bodyguards of an organization. They monitor networks for suspicious activity, investigate breaches, perform penetration testing to find vulnerabilities, and implement security protocols to protect sensitive data.',
    salaryRange: '₹6L - ₹20L+ per year',
    growthOutlook: 'Very High (33% expected growth by 2030)',
    topCompanies: ['Palo Alto Networks', 'CrowdStrike', 'Deloitte', 'Cisco', 'FireEye'],
    dayInLife: 'Your day might involve analyzing logs in a SIEM tool (like Splunk) to detect anomalies. You could be performing a vulnerability scan on a new web application, patching systems, or writing a report on a recent phishing attempt targeting employees.',
    requirements: [
      'Strong understanding of network protocols and architecture',
      'Knowledge of common vulnerabilities (OWASP Top 10)',
      'Experience with security tools (Wireshark, Metasploit, Nessus)',
      'Understanding of cryptography and encryption standards',
      'Ability to think like an attacker (Ethical Hacking)'
    ],
    prep: [
      ['Computer Networks', 'Understand exactly how data flows and where it can be intercepted.'],
      ['Operating Systems', 'Learn how OS security, permissions, and kernel vulnerabilities work.'],
      ['Information Security', 'Study cryptography, firewalls, and attack vectors.']
    ],
    portfolioProject: 'Set up a virtual lab, perform a penetration test on a deliberately vulnerable machine (like Metasploitable), and write a professional vulnerability report.'
  },
  {
    slug: 'frontend-engineer',
    title: 'Frontend Engineer',
    tag: 'Web & UI',
    summary: 'Create the interactive, visual components of websites and web applications.',
    briefExplanation: 'Frontend Engineers focus on what the user sees and interacts with. They turn UI/UX designs into responsive, fast, and accessible web pages using HTML, CSS, and JavaScript frameworks like React or Vue.',
    salaryRange: '₹5L - ₹22L+ per year',
    growthOutlook: 'Moderate to High (13% expected growth)',
    topCompanies: ['Flipkart', 'Cred', 'Razorpay', 'Airbnb', 'Zomato'],
    dayInLife: 'You\'ll collaborate closely with designers to implement new features. Your day involves writing React components, managing global application state, optimizing images and bundles for fast loading, and ensuring the app works perfectly across all browsers and device sizes.',
    requirements: [
      'Expertise in HTML, CSS, and modern JavaScript (ES6+)',
      'Deep knowledge of a modern framework (React, Vue, or Angular)',
      'Understanding of responsive design and CSS frameworks (Tailwind, SCSS)',
      'Familiarity with web performance optimization and accessibility (a11y)',
      'Experience integrating REST or GraphQL APIs'
    ],
    prep: [
      ['Data Structures', 'Focus on Arrays, Strings, and DOM tree traversal.'],
      ['Web Technologies', 'Master vanilla JavaScript before relying heavily on frameworks.'],
      ['System Design', 'Learn frontend architecture and state management patterns.']
    ],
    portfolioProject: 'Build a highly interactive dashboard or a clone of a popular app (like Netflix or Spotify) using React, Tailwind CSS, and a public API.'
  }
]

// ─────────────────────────── ECE Careers ───────────────────────────
const eceCareers = [
  {
    slug: 'vlsi-design-engineer',
    title: 'VLSI Design Engineer',
    tag: 'Hardware Design',
    summary: 'Design and verify the complex integrated circuits (ICs) that power modern electronics.',
    briefExplanation: 'VLSI (Very Large Scale Integration) Engineers design microchips containing millions of transistors. They work on the architecture, logic design, and physical layout of processors, memory chips, and ASICs used in everything from smartphones to supercomputers.',
    salaryRange: '₹8L - ₹35L+ per year',
    growthOutlook: 'High (Driven by AI hardware and 5G/6G)',
    topCompanies: ['Intel', 'AMD', 'NVIDIA', 'Qualcomm', 'Texas Instruments'],
    dayInLife: 'You will spend your day writing Verilog/VHDL code to describe hardware logic. You\'ll run extensive simulations to verify that the logic works correctly, debug timing violations, and use specialized EDA (Electronic Design Automation) tools to optimize power and area.',
    requirements: [
      'Strong grasp of Digital Electronics and logic design',
      'Proficiency in Hardware Description Languages (Verilog, VHDL, SystemVerilog)',
      'Understanding of CMOS technology and transistor-level design',
      'Knowledge of STA (Static Timing Analysis)',
      'Scripting skills (Tcl, Perl, Python) for automation'
    ],
    prep: [
      ['Digital Electronics', 'Master combinational and sequential circuit design.'],
      ['Analog Electronics', 'Understand MOSFET behavior and CMOS logic families.'],
      ['Computer Architecture', 'Learn how microprocessors and pipelines are structured.']
    ],
    portfolioProject: 'Design a 16-bit RISC processor or a complex hardware accelerator (like a matrix multiplier) in Verilog, complete with a comprehensive testbench and simulation results.'
  },
  {
    slug: 'embedded-software-engineer',
    title: 'Embedded Software Engineer',
    tag: 'Firmware & IoT',
    summary: 'Write the low-level code that runs directly on hardware devices.',
    briefExplanation: 'Embedded Engineers live at the intersection of hardware and software. They write firmware for microcontrollers that control physical devices—from automotive engine control units (ECUs) and medical devices to smart home appliances and IoT sensors.',
    salaryRange: '₹6L - ₹25L+ per year',
    growthOutlook: 'Very High (Due to IoT and Automotive boom)',
    topCompanies: ['Bosch', 'Continental', 'Samsung', 'NXP', 'STMicroelectronics'],
    dayInLife: 'Your day involves reading hardware datasheets to understand how to interface with a new sensor. You\'ll write highly optimized C/C++ code, configure microcontroller peripherals (I2C, SPI, UART), and debug issues using an oscilloscope or logic analyzer.',
    requirements: [
      'Expertise in C and C++ programming',
      'Understanding of microcontroller architectures (ARM Cortex-M)',
      'Knowledge of hardware communication protocols (SPI, I2C, UART, CAN)',
      'Experience with Real-Time Operating Systems (FreeRTOS)',
      'Ability to read schematics and use lab equipment'
    ],
    prep: [
      ['Embedded Systems', 'Get hands-on with a development board (STM32, ESP32).'],
      ['C Programming', 'Master pointers, bitwise operations, and memory management.'],
      ['Operating Systems', 'Understand interrupts, scheduling, and concurrency.']
    ],
    portfolioProject: 'Build a weather station or smart home node using an ESP32 or STM32, interfacing with multiple sensors via I2C/SPI, and sending data to a cloud dashboard via MQTT.'
  },
  {
    slug: 'rf-wireless-engineer',
    title: 'RF & Wireless Engineer',
    tag: 'Communications',
    summary: 'Design and optimize the wireless communication systems that connect the world.',
    briefExplanation: 'Radio Frequency (RF) and Wireless Engineers work on technologies like 5G, Wi-Fi, Bluetooth, and satellite communications. They design antennas, transceivers, and optimize network coverage to ensure reliable data transmission through the air.',
    salaryRange: '₹7L - ₹28L+ per year',
    growthOutlook: 'Steady (Driven by 5G rollout and satellite internet)',
    topCompanies: ['Ericsson', 'Nokia', 'Qualcomm', 'Apple', 'Jio'],
    dayInLife: 'You might design an antenna layout using simulation software like HFSS. Alternatively, you could be in the field testing 5G network coverage, analyzing signal-to-noise ratios, or working in a lab tuning an RF transceiver circuit with a spectrum analyzer.',
    requirements: [
      'Strong understanding of Electromagnetics and Antenna Theory',
      'Knowledge of digital communication and modulation schemes',
      'Experience with RF test equipment (Spectrum Analyzer, Network Analyzer)',
      'Familiarity with wireless standards (3GPP, IEEE 802.11)',
      'Proficiency in simulation tools (MATLAB, ADS, HFSS)'
    ],
    prep: [
      ['Communication Systems', 'Master modulation, channel coding, and link budgets.'],
      ['Signals and Systems', 'Understand Fourier transforms and signal processing.'],
      ['Electromagnetic Theory', 'Grasp Maxwell\'s equations and transmission lines.']
    ],
    portfolioProject: 'Simulate a complete digital communication link (from transmitter to receiver over a noisy channel) in MATLAB, or design and simulate a patch antenna for 2.4GHz Wi-Fi.'
  },
  {
    slug: 'signal-processing-engineer',
    title: 'Signal Processing Engineer',
    tag: 'DSP & Algorithms',
    summary: 'Develop algorithms to analyze, filter, and enhance audio, video, and sensor data.',
    briefExplanation: 'Digital Signal Processing (DSP) Engineers apply complex mathematics to manipulate signals. They work on noise cancellation for headphones, radar processing for autonomous vehicles, medical image enhancement, and audio/video compression algorithms.',
    salaryRange: '₹7L - ₹25L+ per year',
    growthOutlook: 'High (Crucial for Audio, Vision, and Radar tech)',
    topCompanies: ['Dolby', 'Sony', 'Texas Instruments', 'Bose', 'MathWorks'],
    dayInLife: 'You\'ll spend a lot of time in MATLAB or Python designing digital filters and mathematical models. Once an algorithm (like a noise reduction filter) works in simulation, you\'ll optimize it and implement it in C/C++ to run efficiently on a dedicated DSP chip.',
    requirements: [
      'Deep mathematical foundation (Calculus, Linear Algebra, Complex Analysis)',
      'Expertise in DSP concepts (FFT, FIR/IIR filters, Z-transforms)',
      'Proficiency in MATLAB and Python',
      'Strong C/C++ skills for real-time implementation',
      'Understanding of audio, image, or radar processing basics'
    ],
    prep: [
      ['Signals and Systems', 'This is the absolute foundation. Master time/frequency domains.'],
      ['Digital Signal Processing', 'Learn filter design and FFT algorithms thoroughly.'],
      ['Mathematics', 'Brush up on Linear Algebra and Probability.']
    ],
    portfolioProject: 'Develop a real-time audio equalizer or noise-cancellation algorithm in Python/C++ that takes microphone input, processes it, and outputs the cleaned audio.'
  },
  {
    slug: 'test-validation-engineer',
    title: 'Hardware Test & Validation Engineer',
    tag: 'Quality & Assurance',
    summary: 'Ensure that electronic chips and products meet strict quality and performance standards.',
    briefExplanation: 'Before any hardware goes to mass production, it must be rigorously tested. Validation Engineers design test setups, write automated test scripts, and stress-test chips (for thermal, electrical, and functional limits) to ensure they work exactly as designed.',
    salaryRange: '₹5L - ₹18L+ per year',
    growthOutlook: 'Steady (Essential role in every hardware company)',
    topCompanies: ['Intel', 'AMD', 'Micron', 'Western Digital', 'Cisco'],
    dayInLife: 'You will work in a hardware lab, setting up oscilloscopes and logic analyzers. You\'ll write Python scripts to automate testing sequences for a new batch of microchips, log the results, and work with design engineers to figure out why a chip is failing under high temperatures.',
    requirements: [
      'Strong understanding of basic electronics and circuits',
      'Proficiency in scripting languages (Python, Perl, Tcl) for automation',
      'Hands-on experience with lab equipment (Oscilloscopes, Multimeters, Function Generators)',
      'Knowledge of computer architecture and digital logic',
      'Meticulous attention to detail and debugging skills'
    ],
    prep: [
      ['Digital & Analog Electronics', 'Understand how circuits behave in the real world.'],
      ['Python Programming', 'Learn how to control hardware interfaces via Python.'],
      ['Microprocessors', 'Understand how chips operate internally.']
    ],
    portfolioProject: 'Create an automated testing rig using a Raspberry Pi/Arduino and Python to run a suite of tests on a target circuit board, logging results and generating a pass/fail report.'
  }
]

// ─────────────────────────── EEE Careers ───────────────────────────
const eeeCareers = [
  {
    slug: 'power-systems-engineer',
    title: 'Power Systems Engineer',
    tag: 'Grid & Infrastructure',
    summary: 'Design and manage the electrical grids that deliver power to cities and industries.',
    briefExplanation: 'Power Systems Engineers deal with high-voltage electricity. They design, analyze, and maintain the infrastructure for power generation, transmission, and distribution. They ensure the grid remains stable, efficient, and capable of handling varying loads and faults.',
    salaryRange: '₹5L - ₹20L+ per year',
    growthOutlook: 'Steady (Transitioning to Smart Grids)',
    topCompanies: ['Power Grid Corp', 'Siemens Energy', 'ABB', 'GE', 'L&T'],
    dayInLife: 'You might use software like ETAP or PSCAD to run load flow and short-circuit analyses on a transmission network. You could be designing protection schemes for a new substation or collaborating with field engineers to troubleshoot a grid fault.',
    requirements: [
      'Strong grasp of Power System Analysis (Load flow, faults, stability)',
      'Knowledge of power protection systems (Relays, Circuit Breakers)',
      'Proficiency in simulation tools (ETAP, PSCAD, MATLAB)',
      'Understanding of high voltage engineering and switchgear',
      'Familiarity with grid codes and safety standards'
    ],
    prep: [
      ['Power Systems', 'Master load flow analysis and fault calculations.'],
      ['Electrical Machines', 'Understand the behavior of generators and transformers on the grid.'],
      ['Control Systems', 'Learn how grid stability is maintained.']
    ],
    portfolioProject: 'Model a small multi-bus power network in ETAP or MATLAB, perform load flow and fault analysis, and design a relay protection coordination scheme for it.'
  },
  {
    slug: 'power-electronics-engineer',
    title: 'Power Electronics Engineer',
    tag: 'Converters & Drives',
    summary: 'Design the circuits that convert and control electrical power efficiently.',
    briefExplanation: 'Power Electronics Engineers design converters (AC-DC, DC-DC, DC-AC) used in everything from laptop chargers and solar inverters to electric vehicle powertrains. They focus on maximizing efficiency and minimizing heat using advanced semiconductor switches.',
    salaryRange: '₹6L - ₹25L+ per year',
    growthOutlook: 'Very High (Driven by EVs and Renewable Energy)',
    topCompanies: ['Texas Instruments', 'Delta Electronics', 'Danfoss', 'Schneider Electric', 'Bosch'],
    dayInLife: 'Your day involves designing a new DC-DC converter topology. You will simulate it in LTspice or MATLAB/Simulink, select the right MOSFETs/IGBTs, design the magnetic components (inductors/transformers), and eventually test the physical prototype in the lab.',
    requirements: [
      'Deep understanding of Power Electronic converter topologies',
      'Knowledge of semiconductor devices (MOSFET, IGBT, SiC, GaN)',
      'Experience with simulation tools (MATLAB/Simulink, LTspice, PLECS)',
      'Understanding of control systems and PWM techniques',
      'Familiarity with thermal management and PCB layout for high power'
    ],
    prep: [
      ['Power Electronics', 'Master buck, boost, and inverter topologies.'],
      ['Analog Electronics', 'Understand feedback loops and operational amplifiers.'],
      ['Control Systems', 'Learn how to tune PI controllers for power converters.']
    ],
    portfolioProject: 'Design, simulate, and build a closed-loop DC-DC boost converter or a small single-phase inverter. Document the design process, component selection, and efficiency measurements.'
  },
  {
    slug: 'renewable-energy-engineer',
    title: 'Renewable Energy Engineer',
    tag: 'Sustainability',
    summary: 'Design and implement solar, wind, and energy storage systems.',
    briefExplanation: 'Renewable Energy Engineers focus on sustainable power generation. They design solar PV plants, integrate wind turbines into the grid, and develop Battery Energy Storage Systems (BESS) to smooth out the intermittent nature of renewable sources.',
    salaryRange: '₹5L - ₹22L+ per year',
    growthOutlook: 'Extremely High (Global push for Net Zero)',
    topCompanies: ['Adani Green', 'Tata Power', 'Vestas', 'Suzlon', 'Siemens Gamesa'],
    dayInLife: 'You might use PVsyst to design a 50MW solar park, calculating the optimal tilt angle and string configurations. Alternatively, you could be analyzing the grid impact of a new wind farm or designing the power electronics interface for a large battery storage facility.',
    requirements: [
      'Knowledge of Solar PV and Wind energy systems',
      'Understanding of grid integration and MPPT algorithms',
      'Familiarity with energy storage technologies (Li-ion, Flow batteries)',
      'Experience with design software (PVsyst, Helioscope, Homer)',
      'Understanding of environmental regulations and economics'
    ],
    prep: [
      ['Power Systems', 'Understand how distributed generation impacts the grid.'],
      ['Power Electronics', 'Learn about grid-tied inverters and MPPT.'],
      ['Electrical Machines', 'Understand the operation of wind turbine generators (DFIG, PMSG).']
    ],
    portfolioProject: 'Design a grid-connected solar PV system for a commercial building using PVsyst or MATLAB, including the sizing of panels, inverters, and an economic payback analysis.'
  },
  {
    slug: 'ev-powertrain-engineer',
    title: 'EV Powertrain Engineer',
    tag: 'Automotive',
    summary: 'Develop the electric motors, drives, and battery systems for electric vehicles.',
    briefExplanation: 'EV Powertrain Engineers are revolutionizing the automotive industry. They design traction motors, develop the motor controllers (inverters), and engineer the Battery Management Systems (BMS) to ensure electric vehicles are efficient, fast, and safe.',
    salaryRange: '₹7L - ₹28L+ per year',
    growthOutlook: 'Very High (Automotive industry shifting to EV)',
    topCompanies: ['Tesla', 'Ather Energy', 'Tata Motors', 'Mahindra Electric', 'Rivian'],
    dayInLife: 'You could be tuning the Field Oriented Control (FOC) algorithm for a BLDC motor to improve acceleration smoothness. Or you might be analyzing the thermal performance of a battery pack during fast charging, or testing a motor drive on a dynamometer rig.',
    requirements: [
      'Strong understanding of Electric Motors (BLDC, PMSM, Induction)',
      'Knowledge of Motor Drive control algorithms (FOC, DTC)',
      'Understanding of Battery Management Systems (BMS) and cell balancing',
      'Experience with automotive standards and functional safety (ISO 26262)',
      'Proficiency in MATLAB/Simulink for system modeling'
    ],
    prep: [
      ['Electrical Machines', 'Master the operating principles of AC and DC motors.'],
      ['Power Electronics', 'Understand inverter design for motor drives.'],
      ['Control Systems', 'Learn about vector control and PID tuning.']
    ],
    portfolioProject: 'Develop a Simulink model of an Electric Vehicle powertrain, including the battery, inverter, motor, and vehicle dynamics, to simulate an acceleration run and calculate range.'
  },
  {
    slug: 'automation-control-engineer',
    title: 'Automation & Control Engineer',
    tag: 'Industrial Automation',
    summary: 'Design the control systems that automate manufacturing and industrial processes.',
    briefExplanation: 'Automation Engineers design the "brains" of factories. They program PLCs (Programmable Logic Controllers), design SCADA systems for monitoring, and implement control loops to automate everything from assembly lines to chemical processing plants.',
    salaryRange: '₹5L - ₹18L+ per year',
    growthOutlook: 'High (Driven by Industry 4.0)',
    topCompanies: ['Rockwell Automation', 'Honeywell', 'Emerson', 'Siemens', 'Schneider Electric'],
    dayInLife: 'You\'ll spend your time writing ladder logic for PLCs to control a new packaging machine. You might design a HMI (Human Machine Interface) screen for operators, tune a PID controller for a temperature regulation loop, or commission a new system on the factory floor.',
    requirements: [
      'Proficiency in PLC programming (Ladder Logic, Structured Text)',
      'Experience with SCADA and HMI development',
      'Strong understanding of Control Systems (PID, feedback loops)',
      'Knowledge of industrial communication protocols (Modbus, Profibus, Ethernet/IP)',
      'Understanding of sensors, actuators, and instrumentation'
    ],
    prep: [
      ['Control Systems', 'Master feedback theory, stability, and PID tuning.'],
      ['Digital Electronics', 'Understand logic gates—the basis of PLC ladder logic.'],
      ['Electrical Machines', 'Learn about industrial motors and drives.']
    ],
    portfolioProject: 'Program a simulated industrial process (like a water tank level controller or traffic light system) using a software PLC simulator (like Codesys) and design a basic HMI for it.'
  }
]

// ─────────────────────────── ME Careers ───────────────────────────
const meCareers = [
  {
    slug: 'mechanical-design-engineer',
    title: 'Mechanical Design Engineer',
    tag: 'Product Design',
    summary: 'Design the physical components and assemblies of new products and machines.',
    briefExplanation: 'Design Engineers turn ideas into manufacturable physical products. They use 3D CAD software to model parts, ensure they fit together in assemblies, select appropriate materials, and apply GD&T (Geometric Dimensioning and Tolerancing) for manufacturing.',
    salaryRange: '₹4L - ₹18L+ per year',
    growthOutlook: 'Steady (Core to all hardware manufacturing)',
    topCompanies: ['Tata Motors', 'L&T', 'Godrej', 'Dassault Systèmes', 'Mahindra'],
    dayInLife: 'You\'ll spend most of your day in SolidWorks, CATIA, or NX, designing a new gearbox housing. You\'ll run quick calculations to check wall thickness, consult with manufacturing engineers on whether the part can be cast or machined, and create detailed 2D engineering drawings.',
    requirements: [
      'Expertise in 3D CAD modeling software (SolidWorks, CATIA, NX, AutoCAD)',
      'Strong grasp of Machine Design principles and Strength of Materials',
      'Knowledge of Geometric Dimensioning and Tolerancing (GD&T)',
      'Understanding of manufacturing processes (DFM/DFA)',
      'Familiarity with material selection and properties'
    ],
    prep: [
      ['Engineering Mechanics', 'Master statics and dynamics to understand forces on parts.'],
      ['Strength of Materials', 'Understand stress, strain, and failure theories.'],
      ['Manufacturing Processes', 'Learn how parts are actually made (casting, machining).']
    ],
    portfolioProject: 'Design a complex mechanical assembly (like a mini-engine, robotic arm, or gear train) in a 3D CAD tool. Create a full set of 2D manufacturing drawings with proper GD&T.'
  },
  {
    slug: 'fea-cae-analyst',
    title: 'FEA / CAE Analyst',
    tag: 'Simulation',
    summary: 'Use advanced simulation software to predict how structures will behave under stress.',
    briefExplanation: 'Computer-Aided Engineering (CAE) Analysts use Finite Element Analysis (FEA) to virtually test products before they are built. They simulate crashes, calculate stress on bridge supports, and determine the fatigue life of aircraft components to ensure safety and save money.',
    salaryRange: '₹5L - ₹22L+ per year',
    growthOutlook: 'High (Simulation reduces physical prototyping costs)',
    topCompanies: ['ANSYS', 'Altair', 'Boeing', 'Airbus', 'Cummins'],
    dayInLife: 'You\'ll take a CAD model from the design team, clean it up, and generate a mesh. You\'ll apply boundary conditions (forces, constraints) in software like ANSYS or Abaqus, run the solver, and then interpret the colorful stress contour plots to recommend design changes.',
    requirements: [
      'Deep understanding of Solid Mechanics, Strength of Materials, and FEA theory',
      'Proficiency in CAE software (ANSYS, Abaqus, HyperMesh, Nastran)',
      'Skill in meshing (1D, 2D, 3D elements) and mesh quality checks',
      'Knowledge of material models (linear, non-linear, fatigue, plasticity)',
      'Ability to interpret simulation results critically (not just accepting colorful plots)'
    ],
    prep: [
      ['Strength of Materials', 'This is the foundation. Master stress, strain, and failure criteria.'],
      ['Engineering Mechanics', 'Understand static and dynamic equilibrium perfectly.'],
      ['Mathematics', 'Understand the matrix algebra and differential equations behind FEA solvers.']
    ],
    portfolioProject: 'Perform a structural analysis (static and fatigue) on a critical mechanical component (like a suspension control arm or crane hook) using ANSYS. Compare the software results with hand calculations.'
  },
  {
    slug: 'thermal-cfd-engineer',
    title: 'Thermal & CFD Engineer',
    tag: 'Fluids & Heat',
    summary: 'Analyze fluid flow and heat transfer to optimize engines, HVAC, and aerodynamics.',
    briefExplanation: 'Computational Fluid Dynamics (CFD) and Thermal Engineers study how liquids, gases, and heat move. They design cooling systems for data centers, optimize the aerodynamics of race cars, and improve the combustion efficiency of jet engines.',
    salaryRange: '₹6L - ₹25L+ per year',
    growthOutlook: 'High (Driven by EV cooling, aerospace, and data centers)',
    topCompanies: ['GE Aviation', 'Rolls Royce', 'Siemens', 'Thermax', 'Tesla'],
    dayInLife: 'Your day might involve setting up a CFD simulation in ANSYS Fluent to analyze the airflow over a new drone design. You\'ll define the turbulence model, run the simulation on a high-performance computing cluster, and analyze the drag forces and flow separation zones.',
    requirements: [
      'Strong foundation in Fluid Mechanics, Thermodynamics, and Heat Transfer',
      'Proficiency in CFD software (ANSYS Fluent, OpenFOAM, Star-CCM+)',
      'Understanding of turbulence modeling and boundary layer theory',
      'Experience with CAD for fluid domain extraction',
      'Programming skills (Python, C++) for scripting and OpenFOAM customization'
    ],
    prep: [
      ['Fluid Mechanics', 'Master the Navier-Stokes equations and boundary layer concepts.'],
      ['Thermodynamics', 'Understand energy transfer, cycles, and properties of fluids.'],
      ['Heat Transfer', 'Learn conduction, convection, and radiation principles.']
    ],
    portfolioProject: 'Simulate the aerodynamic drag on a car body or the heat dissipation of an electronic heat sink using ANSYS Fluent or OpenFOAM. Validate the results with theoretical correlations.'
  },
  {
    slug: 'manufacturing-engineer',
    title: 'Manufacturing / Production Engineer',
    tag: 'Production',
    summary: 'Design and optimize the processes that turn raw materials into finished products.',
    briefExplanation: 'Manufacturing Engineers figure out *how* to build what the Design Engineers create. They design the assembly lines, program CNC machines, select the right cutting tools, and implement Lean Manufacturing principles to make production faster, cheaper, and safer.',
    salaryRange: '₹4L - ₹16L+ per year',
    growthOutlook: 'Steady (Essential for the manufacturing sector)',
    topCompanies: ['Toyota', 'Maruti Suzuki', 'Bosch', 'Foxconn', 'Hero MotoCorp'],
    dayInLife: 'You\'ll spend time on the factory floor troubleshooting a bottleneck in the assembly line. You might design a new jig or fixture to hold a part during welding, program a CNC milling machine using CAM software, or conduct a time-study to improve worker efficiency.',
    requirements: [
      'Comprehensive knowledge of manufacturing processes (Machining, Casting, Welding, Forming)',
      'Familiarity with CNC programming and CAM software (Mastercam, Siemens NX CAM)',
      'Understanding of Lean Manufacturing, Six Sigma, and 5S principles',
      'Ability to design jigs, fixtures, and tooling',
      'Knowledge of quality control and metrology'
    ],
    prep: [
      ['Manufacturing Processes', 'Understand the physics and economics of different production methods.'],
      ['Engineering Drawing', 'Be able to read complex blueprints and GD&T perfectly.'],
      ['Industrial Engineering', 'Learn about process optimization and quality control.']
    ],
    portfolioProject: 'Create a complete process plan (Routing, Tooling, CNC G-code, Time Estimation, and Costing) to manufacture a specific machined component from a raw billet.'
  },
  {
    slug: 'hvac-engineer',
    title: 'HVAC Engineer',
    tag: 'MEP Services',
    summary: 'Design heating, ventilation, and air conditioning systems for buildings and vehicles.',
    briefExplanation: 'HVAC Engineers design the systems that control temperature, humidity, and air quality. They work on everything from residential air conditioning and hospital clean rooms to massive industrial refrigeration plants and automotive climate control.',
    salaryRange: '₹4L - ₹15L+ per year',
    growthOutlook: 'Steady (Driven by urbanization and green building standards)',
    topCompanies: ['Carrier', 'Daikin', 'Voltas', 'Blue Star', 'Johnson Controls'],
    dayInLife: 'You\'ll use software like HAP or TRACE to calculate the cooling load for a new commercial high-rise. You\'ll size the chillers, design the ductwork layout, select diffusers, and coordinate with electrical and plumbing engineers to ensure the systems don\'t clash in the ceiling space.',
    requirements: [
      'Strong grasp of Thermodynamics, Heat Transfer, and Psychrometry',
      'Proficiency in cooling/heating load calculation methodologies (ASHRAE standards)',
      'Experience with HVAC design software (HAP, TRACE 700, AutoCAD MEP, Revit)',
      'Knowledge of fluid mechanics for duct and pipe sizing',
      'Understanding of energy efficiency and green building codes'
    ],
    prep: [
      ['Thermodynamics', 'Master refrigeration cycles and psychrometric charts.'],
      ['Fluid Mechanics', 'Understand pressure drop and flow in pipes and ducts.'],
      ['Heat Transfer', 'Learn how heat conducts through building materials.']
    ],
    portfolioProject: 'Calculate the complete cooling load for a multi-room building using a psychrometric chart and ASHRAE guidelines, size the AC equipment, and sketch a basic duct routing layout.'
  }
]

// ─────────────────────────── CE Careers ───────────────────────────
const ceCareers = [
  {
    slug: 'structural-engineer',
    title: 'Structural Engineer',
    tag: 'Design & Analysis',
    summary: 'Design the skeletons of buildings, bridges, and towers to withstand all forces of nature.',
    briefExplanation: 'Structural Engineers ensure that structures are safe, stable, and don\'t collapse under loads like gravity, wind, or earthquakes. They select materials (concrete, steel, wood), calculate stresses, and design the beams, columns, and foundations.',
    salaryRange: '₹5L - ₹20L+ per year',
    growthOutlook: 'High (Driven by infrastructure development)',
    topCompanies: ['L&T', 'Arup', 'WSP', 'AECOM', 'Thornton Tomasetti'],
    dayInLife: 'You\'ll spend your day modeling a high-rise building in STAAD.Pro or ETABS. You\'ll apply wind and seismic loads according to design codes (like IS 456, IS 800), analyze the bending moments, and design the steel connections or concrete reinforcement detailing.',
    requirements: [
      'Expertise in Structural Analysis (determinate and indeterminate structures)',
      'Proficiency in design codes (IS, ACI, Eurocode) for Concrete and Steel',
      'Experience with structural analysis software (STAAD.Pro, ETABS, SAP2000)',
      'Understanding of seismic design and wind engineering',
      'Ability to create and interpret detailed structural drawings'
    ],
    prep: [
      ['Structural Analysis', 'Master methods like slope-deflection and moment distribution.'],
      ['Concrete/Steel Design', 'Learn how to size members according to national codes.'],
      ['Strength of Materials', 'Understand stress, strain, and bending theory.']
    ],
    portfolioProject: 'Design a G+5 reinforced concrete building. Model it in ETABS, apply gravity and seismic loads, design the critical beams and columns manually to verify the software, and produce reinforcement detailing.'
  },
  {
    slug: 'geotechnical-engineer',
    title: 'Geotechnical Engineer',
    tag: 'Soil & Foundations',
    summary: 'Investigate soil and rock mechanics to design safe foundations and earthworks.',
    briefExplanation: 'Every structure rests on the earth. Geotechnical Engineers analyze soil properties to design foundations, retaining walls, dams, and tunnels. They ensure the ground won\'t sink, slide, or liquefy under the weight of a structure or during an earthquake.',
    salaryRange: '₹5L - ₹18L+ per year',
    growthOutlook: 'Steady (Essential for all major construction)',
    topCompanies: ['Keller', 'Fugro', 'Golder Associates', 'AFCONS', 'L&T Geostructure'],
    dayInLife: 'You might visit a site to oversee a borehole drilling operation. Back in the office, you\'ll analyze the soil lab test results, calculate the bearing capacity of the soil, design a deep pile foundation system, or use PLAXIS to model the stability of an excavated slope.',
    requirements: [
      'Deep understanding of Soil Mechanics and rock properties',
      'Ability to design shallow and deep foundations (piles, caissons)',
      'Knowledge of earth retaining structures and slope stability analysis',
      'Familiarity with geotechnical software (PLAXIS, GeoStudio)',
      'Experience interpreting soil investigation reports and lab tests'
    ],
    prep: [
      ['Geotechnical Engineering', 'Master soil classification, shear strength, and consolidation.'],
      ['Foundation Engineering', 'Learn bearing capacity and pile design calculations.'],
      ['Fluid Mechanics', 'Understand groundwater flow and seepage.']
    ],
    portfolioProject: 'Analyze a soil investigation report to design the foundation system (calculating bearing capacity and settlement) for a heavy industrial structure, and design a retaining wall for the site.'
  },
  {
    slug: 'transportation-engineer',
    title: 'Transportation Engineer',
    tag: 'Infrastructure',
    summary: 'Design and plan highways, railways, airports, and urban transit systems.',
    briefExplanation: 'Transportation Engineers plan and design the infrastructure that moves people and goods. They design the geometric layout of highways, calculate pavement thickness, optimize traffic signal timing, and plan large-scale public transit networks.',
    salaryRange: '₹5L - ₹18L+ per year',
    growthOutlook: 'High (Massive government spending on highways and transit)',
    topCompanies: ['NHAI', 'RITES', 'Jacobs', 'Mott MacDonald', 'Systra'],
    dayInLife: 'You\'ll use software like Civil 3D to design the horizontal and vertical alignment of a new highway, ensuring safe sight distances. You might also run traffic simulations in VISSIM to optimize the flow at a complex intersection, or design the flexible pavement layers based on projected traffic volume.',
    requirements: [
      'Knowledge of Highway Geometric Design (curves, sight distances, superelevation)',
      'Understanding of Pavement Design (flexible and rigid) and materials',
      'Familiarity with traffic engineering and transportation planning',
      'Proficiency in design software (AutoCAD Civil 3D, MX Road)',
      'Knowledge of surveying and GIS applications'
    ],
    prep: [
      ['Transportation Engineering', 'Master geometric design and pavement thickness design.'],
      ['Surveying', 'Understand topography and route alignment.'],
      ['Geotechnical Engineering', 'Understand subgrade soil strength (CBR).']
    ],
    portfolioProject: 'Design the geometric alignment (horizontal and vertical curves) and the flexible pavement cross-section for a 5km stretch of highway using Civil 3D or manual calculations.'
  },
  {
    slug: 'environmental-engineer-ce',
    title: 'Environmental / Water Resources Engineer',
    tag: 'Water & Environment',
    summary: 'Design systems to manage water resources, treat wastewater, and protect the environment.',
    briefExplanation: 'These engineers ensure we have clean drinking water and that our waste doesn\'t destroy nature. They design water treatment plants, sewage networks, stormwater drainage systems, and large dams or canals to manage water resources.',
    salaryRange: '₹4L - ₹16L+ per year',
    growthOutlook: 'Very High (Driven by water scarcity and pollution regulations)',
    topCompanies: ['SUEZ', 'Veolia', 'VA Tech Wabag', 'Stantec', 'Black & Veatch'],
    dayInLife: 'You might use EPANET to model the water pressure in a city\'s distribution network. You could be sizing the aeration tanks for a new sewage treatment plant, calculating the runoff for a stormwater drainage system, or conducting an Environmental Impact Assessment (EIA).',
    requirements: [
      'Strong grasp of Fluid Mechanics and Hydrology',
      'Knowledge of Water and Wastewater treatment processes (physical, chemical, biological)',
      'Ability to design pipe networks and pumping stations',
      'Proficiency in hydraulic modeling software (EPANET, SWMM, HEC-RAS)',
      'Understanding of environmental regulations and chemistry'
    ],
    prep: [
      ['Environmental Engineering', 'Master water demand, treatment units, and BOD/COD concepts.'],
      ['Fluid Mechanics', 'Understand pipe flow, friction losses, and open channel flow.'],
      ['Hydrology', 'Learn about rainfall-runoff modeling and groundwater.']
    ],
    portfolioProject: 'Design a conventional water treatment plant (sizing the coagulation, sedimentation, and filtration units) for a small town, or model a water distribution network in EPANET.'
  },
  {
    slug: 'construction-manager',
    title: 'Construction Project Manager',
    tag: 'Execution & Planning',
    summary: 'Plan, coordinate, and oversee construction projects from conception to completion.',
    briefExplanation: 'Construction Managers are the leaders on the ground. They turn the blueprints into reality. They manage the schedule, budget, labor, machinery, and safety on site. They bridge the gap between design engineers, contractors, and the client.',
    salaryRange: '₹5L - ₹25L+ per year',
    growthOutlook: 'High (Core role in every infrastructure project)',
    topCompanies: ['L&T Construction', 'Shapoorji Pallonji', 'Tata Projects', 'Bechtel', 'Turner Construction'],
    dayInLife: 'Your day is fast-paced. You\'ll review the project schedule in Primavera P6, hold a safety briefing with site supervisors, inspect the rebar placement before a major concrete pour, negotiate with suppliers for delayed materials, and prepare billing reports for the client.',
    requirements: [
      'Strong knowledge of construction methodologies and materials',
      'Expertise in project planning and scheduling (CPM/PERT)',
      'Proficiency in project management software (Primavera P6, MS Project)',
      'Understanding of quantity surveying, cost estimation, and contracts',
      'Excellent leadership, communication, and crisis management skills'
    ],
    prep: [
      ['Construction Management', 'Learn scheduling, resource leveling, and project economics.'],
      ['Concrete Technology', 'Understand the practical aspects of pouring and curing concrete.'],
      ['Quantity Surveying', 'Learn how to estimate material quantities from drawings.']
    ],
    portfolioProject: 'Take a building drawing, perform a complete quantity takeoff (concrete, steel, brickwork), estimate the cost, and create a detailed construction schedule using MS Project or Primavera.'
  }
]

// ─────────────────────────── IT Careers ───────────────────────────
const itCareers = [
  {
    slug: 'full-stack-developer',
    title: 'Full-Stack Developer',
    tag: 'Web & App',
    summary: 'Build complete web applications, handling both the user interface and the server logic.',
    briefExplanation: 'Full-Stack Developers are versatile engineers who can build a product end-to-end. They write the React/Angular code for the browser, build the Node.js/Java APIs on the server, and design the database schema to store the data.',
    salaryRange: '₹6L - ₹25L+ per year',
    growthOutlook: 'Very High (Most sought-after role in startups and tech companies)',
    topCompanies: ['Amazon', 'Walmart', 'Zoho', 'Swiggy', 'Freshworks'],
    dayInLife: 'You might start the morning designing a new database table for a feature. By lunch, you are writing the backend REST API to fetch that data. In the afternoon, you are building the React UI components to display it, and finally, you write end-to-end tests before deploying.',
    requirements: [
      'Proficiency in HTML, CSS, and modern JavaScript/TypeScript',
      'Experience with a frontend framework (React, Angular, Vue)',
      'Strong backend skills (Node.js, Python/Django, Java/Spring)',
      'Knowledge of databases (SQL like PostgreSQL, NoSQL like MongoDB)',
      'Familiarity with Git, REST APIs, and basic deployment (Docker, AWS)'
    ],
    prep: [
      ['Web Technologies', 'Master the DOM, HTTP protocol, and asynchronous JavaScript.'],
      ['Database Systems', 'Learn schema design and how to connect databases to servers.'],
      ['Data Structures', 'Required for writing efficient backend logic and clearing interviews.']
    ],
    portfolioProject: 'Build a complete e-commerce or social media application from scratch with user authentication, a database, a responsive frontend, and deploy it to a cloud platform like Heroku or Vercel.'
  },
  {
    slug: 'devops-engineer',
    title: 'DevOps / SRE Engineer',
    tag: 'Infrastructure & Automation',
    summary: 'Automate software delivery and ensure production systems are reliable and scalable.',
    briefExplanation: 'DevOps Engineers bridge the gap between development and operations. They build the automated pipelines (CI/CD) that test and deploy code, manage cloud infrastructure using code, and ensure systems (like Netflix or Amazon) don\'t crash under heavy traffic.',
    salaryRange: '₹7L - ₹28L+ per year',
    growthOutlook: 'Extremely High (Every company wants to deploy faster and safer)',
    topCompanies: ['Netflix', 'Atlassian', 'Red Hat', 'AWS', 'BrowserStack'],
    dayInLife: 'You\'ll write a GitHub Action to automate the testing of a new microservice. You\'ll use Terraform to spin up new Kubernetes clusters on AWS. When an alert goes off that server CPU is at 99%, you\'ll dive into logs (using ELK or Grafana) to diagnose and fix the production issue.',
    requirements: [
      'Deep knowledge of Linux administration and shell scripting (Bash)',
      'Expertise in containerization and orchestration (Docker, Kubernetes)',
      'Proficiency in CI/CD tools (Jenkins, GitHub Actions, GitLab CI)',
      'Experience with Infrastructure as Code (Terraform, Ansible)',
      'Understanding of cloud platforms (AWS, Azure, GCP) and monitoring tools'
    ],
    prep: [
      ['Operating Systems', 'Master Linux. Know how processes, memory, and file systems work.'],
      ['Computer Networks', 'Understand routing, DNS, and load balancing.'],
      ['Cloud Computing', 'Learn the basics of provisioning resources on a major cloud.']
    ],
    portfolioProject: 'Take a sample microservices application, containerize it with Docker, deploy it to a Kubernetes cluster, and set up a fully automated CI/CD pipeline that deploys new code on every git push.'
  },
  {
    slug: 'data-engineer',
    title: 'Data Engineer',
    tag: 'Data Infrastructure',
    summary: 'Build the pipelines and architecture that collect, store, and process massive amounts of data.',
    briefExplanation: 'Before Data Scientists can analyze data, Data Engineers must build the plumbing to collect it. They extract data from various sources, transform it into a usable format, and load it into data warehouses or data lakes so it can be queried efficiently.',
    salaryRange: '₹7L - ₹26L+ per year',
    growthOutlook: 'Very High (Data is useless without pipelines to process it)',
    topCompanies: ['Snowflake', 'Databricks', 'Uber', 'Airbnb', 'Cisco'],
    dayInLife: 'You\'ll write Python or Scala code using Apache Spark to process terabytes of raw logs into clean tables. You\'ll design a data warehouse schema in Snowflake, schedule automated ETL (Extract, Transform, Load) jobs using Airflow, and optimize slow SQL queries.',
    requirements: [
      'Expert-level SQL skills for complex data transformations',
      'Strong programming skills in Python, Scala, or Java',
      'Knowledge of big data processing frameworks (Hadoop, Apache Spark, Kafka)',
      'Experience with cloud data warehouses (Snowflake, BigQuery, Redshift)',
      'Understanding of ETL/ELT processes and orchestration tools (Airflow)'
    ],
    prep: [
      ['Database Systems', 'Go beyond basics: learn indexing, query optimization, and data warehousing.'],
      ['Data Structures', 'Understand how data is stored and sorted efficiently in memory and on disk.'],
      ['Operating Systems', 'Learn distributed computing concepts.']
    ],
    portfolioProject: 'Build an automated ETL pipeline that extracts raw data from a public API, transforms it using Python/Pandas, and loads it into a cloud database (like BigQuery), scheduled via Apache Airflow.'
  },
  {
    slug: 'machine-learning-engineer',
    title: 'Machine Learning Engineer',
    tag: 'AI & Engineering',
    summary: 'Design, build, and deploy machine learning models into production environments.',
    briefExplanation: 'While Data Scientists focus on finding insights and building prototype models, ML Engineers focus on engineering. They take a prototype AI model and write the robust, scalable code needed to deploy it to millions of users (like Netflix recommendations or self-driving car vision).',
    salaryRange: '₹8L - ₹32L+ per year',
    growthOutlook: 'Extremely High (AI is the fastest-growing sector in tech)',
    topCompanies: ['Google', 'OpenAI', 'Meta', 'NVIDIA', 'Apple'],
    dayInLife: 'You\'ll take a Python model built by a data scientist and optimize it using C++ or TensorRT for faster inference. You\'ll wrap the model in a FastAPI service, containerize it with Docker, deploy it to a GPU cluster, and set up monitoring to ensure the model doesn\'t degrade over time.',
    requirements: [
      'Strong software engineering fundamentals (Data Structures, System Design)',
      'Deep understanding of ML/DL algorithms and frameworks (PyTorch, TensorFlow)',
      'Proficiency in Python and often C++ for performance optimization',
      'Experience with model deployment (MLOps, FastAPI, Docker, ONNX)',
      'Knowledge of data pipelines and distributed training'
    ],
    prep: [
      ['Data Structures & Algorithms', 'Essential for writing efficient production code.'],
      ['Mathematics', 'Linear Algebra and Calculus for understanding neural networks.'],
      ['Cloud Computing', 'Learn how to deploy services and manage scalable infrastructure.']
    ],
    portfolioProject: 'Train a deep learning model (e.g., image classification), wrap it in a REST API using FastAPI, containerize it, and deploy it to the cloud with a simple web interface.'
  },
  {
    slug: 'cyber-security-engineer',
    title: 'Cyber Security Engineer',
    tag: 'Security & Defense',
    summary: 'Build secure systems and defend IT infrastructure against advanced cyber threats.',
    briefExplanation: 'Security Engineers design systems to be secure from the ground up. They implement firewalls, encryption protocols, and IAM (Identity and Access Management) systems. They also conduct penetration tests (ethical hacking) to find and fix vulnerabilities before the bad guys do.',
    salaryRange: '₹6L - ₹24L+ per year',
    growthOutlook: 'Very High (Security is a top priority for every enterprise)',
    topCompanies: ['CrowdStrike', 'Palo Alto Networks', 'IBM Security', 'Symantec', 'TCS'],
    dayInLife: 'You might spend the day reviewing the architecture of a new cloud application to ensure it meets security standards. You could be configuring a Web Application Firewall (WAF), patching a zero-day vulnerability across hundreds of servers, or analyzing malware found on the network.',
    requirements: [
      'Deep understanding of network protocols, OSI model, and cryptography',
      'Knowledge of OS security (Linux/Windows internals, permissions)',
      'Familiarity with security tools (Nmap, Metasploit, Wireshark, Burp Suite)',
      'Understanding of secure coding practices and OWASP Top 10',
      'Certifications (like CEH, CompTIA Security+, CISSP) are highly valued'
    ],
    prep: [
      ['Computer Networks', 'You cannot secure a network if you don\'t know exactly how it works.'],
      ['Operating Systems', 'Learn shell scripting, file permissions, and system administration.'],
      ['Information Security', 'Master cryptography, network defense, and penetration testing methodologies.']
    ],
    portfolioProject: 'Perform a comprehensive vulnerability assessment and penetration test on a deliberately vulnerable web application (like DVWA), write a report, and demonstrate how to patch the code to fix the vulnerabilities.'
  }
]

// ─────────────────────────── Branch Map ───────────────────────────
export const careersByBranch = {
  CSE: cseCareers,
  ECE: eceCareers,
  EEE: eeeCareers,
  ME: meCareers,
  CE: ceCareers,
  IT: itCareers,
}

// Backward-compatible default export (CSE)
export const careers = cseCareers

export default careers
