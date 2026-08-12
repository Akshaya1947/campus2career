export const careers = [
  {
    id: 'ai-engineer',
    title: 'AI & Machine Learning Engineer',
    tag: 'AI + data',
    summary: 'Build, evaluate, and deploy intelligent features and predictive systems.',
    briefExplanation: 'AI & ML Engineers design systems that learn from data — recommendation engines (Netflix, Spotify), fraud detection (banks), chatbots, image recognition, and autonomous driving features. You train models using frameworks like TensorFlow or PyTorch, evaluate accuracy with statistical metrics, and deploy them to serve millions of users in real time. This role blends deep math, creative problem-solving, and strong engineering skills.',
    salaryRange: '₹8–25 LPA (India) · $95K–160K (US)',
    growthOutlook: ' Very High — AI adoption growing 35% YoY across industries',
    dayInLife: 'Explore datasets, train and fine-tune models, evaluate performance metrics (precision, recall), collaborate with product teams, deploy models to production APIs, monitor model drift.',
    topCompanies: ['Google DeepMind', 'OpenAI', 'Amazon', 'Microsoft', 'NVIDIA', 'Flipkart'],
    portfolioProject: 'Build a movie recommendation engine using collaborative filtering on the MovieLens dataset. Deploy it as a REST API with a simple React frontend.',
    requirements: [
      'Python programming',
      'Statistics and linear algebra',
      'ML fundamentals (regression, classification, clustering)',
      'Model deployment basics (Flask/FastAPI, Docker)',
      'Data preprocessing and feature engineering',
      'Deep learning frameworks (TensorFlow/PyTorch)'
    ],
    prep: [
      ['Data Structures', 'Arrays, trees, graphs, complexity, problem-solving patterns'],
      ['Database Management System', 'SQL, data cleaning, joins, data modelling'],
      ['Object-Oriented Programming', 'Python classes, clean code, APIs, testing'],
      ['Operating Systems', 'Linux, processes, containers, memory basics']
    ]
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    tag: 'Insights + business',
    summary: 'Turn raw data into clear insights that guide business decisions.',
    briefExplanation: 'Data Analysts are the storytellers of the data world. You dig into sales numbers, user behaviour, and operational metrics to find patterns that help companies make smarter decisions. Using SQL, Excel, Python, and visualization tools like Tableau or Power BI, you create dashboards, reports, and presentations that translate complex data into actionable business insights for non-technical stakeholders.',
    salaryRange: '₹5–15 LPA (India) · $60K–100K (US)',
    growthOutlook: 'High — every company needs data-driven decision making',
    dayInLife: 'Write SQL queries to pull data, clean and transform datasets, build dashboards in Tableau/Power BI, present findings to business teams, identify trends and anomalies, A/B test analysis.',
    topCompanies: ['Deloitte', 'Amazon', 'Flipkart', 'Swiggy', 'Accenture', 'TCS'],
    portfolioProject: 'Analyze an e-commerce sales dataset: build an interactive Tableau dashboard showing revenue trends, customer segments, and product performance with actionable recommendations.',
    requirements: [
      'SQL and spreadsheets (advanced formulas, pivot tables)',
      'Data visualisation (Tableau, Power BI, Matplotlib)',
      'Statistics (mean, median, standard deviation, hypothesis testing)',
      'Clear business communication and storytelling',
      'Python for data analysis (Pandas, NumPy)',
      'Excel automation and reporting'
    ],
    prep: [
      ['Database Management System', 'SQL queries, joins, aggregation, schema design'],
      ['Data Structures', 'Arrays, hash maps, complexity basics'],
      ['Object-Oriented Programming', 'Python data workflows, reusable code, testing'],
      ['Computer Networks', 'APIs, HTTP, data transfer fundamentals']
    ]
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps Engineer',
    tag: 'Infrastructure + automation',
    summary: 'Build reliable cloud systems, automate deployments, and keep services running.',
    briefExplanation: 'Cloud & DevOps Engineers are the backbone of modern software delivery. You design and manage the infrastructure that applications run on — cloud servers (AWS, Azure, GCP), CI/CD pipelines, container orchestration (Kubernetes), and monitoring systems. When a website handles millions of users without crashing, it\'s because a DevOps engineer built the system to scale, auto-heal, and deploy updates seamlessly.',
    salaryRange: '₹8–22 LPA (India) · $90K–150K (US)',
    growthOutlook: ' Very High — cloud migration accelerating globally',
    dayInLife: 'Write infrastructure-as-code (Terraform), set up CI/CD pipelines (GitHub Actions, Jenkins), monitor system health (Grafana, Prometheus), troubleshoot production incidents, manage Kubernetes clusters, optimize cloud costs.',
    topCompanies: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Hashicorp', 'Atlassian', 'Razorpay'],
    portfolioProject: 'Containerize a full-stack app with Docker, deploy it to AWS ECS with a CI/CD pipeline using GitHub Actions, and set up monitoring with CloudWatch alerts.',
    requirements: [
      'Linux and shell scripting (Bash)',
      'Cloud platforms (AWS, Azure, or GCP)',
      'CI/CD and Git (GitHub Actions, Jenkins)',
      'Containers (Docker) and orchestration (Kubernetes)',
      'Infrastructure as Code (Terraform, CloudFormation)',
      'Monitoring and logging (Prometheus, Grafana, ELK)'
    ],
    prep: [
      ['Operating Systems', 'Linux, processes, permissions, memory, shell scripting'],
      ['Computer Networks', 'TCP/IP, DNS, routing, HTTP, TLS'],
      ['Object-Oriented Programming', 'Automation scripts, APIs, clean software design'],
      ['Database Management System', 'Backups, replication, indexing, access control']
    ]
  },
  {
    id: 'cybersecurity-analyst',
    title: 'Cybersecurity Analyst',
    tag: 'Security + resilience',
    summary: 'Protect systems, investigate threats, and improve an organisation\'s security posture.',
    briefExplanation: 'Cybersecurity Analysts are the digital guardians. You monitor networks for suspicious activity, investigate security incidents, conduct vulnerability assessments, and implement security policies. From stopping ransomware attacks to preventing data breaches, you ensure that an organization\'s systems, data, and users remain protected. This role requires a detective mindset combined with deep technical knowledge of networks, operating systems, and attack patterns.',
    salaryRange: '₹6–20 LPA (India) · $75K–130K (US)',
    growthOutlook: ' Very High — cybercrime damages projected to reach $10.5T by 2025',
    dayInLife: 'Monitor security dashboards (SIEM tools), analyze alerts for real threats vs false positives, conduct vulnerability scans (Nessus, Nmap), write incident reports, implement firewall rules, perform penetration testing.',
    topCompanies: ['Palo Alto Networks', 'CrowdStrike', 'IBM Security', 'Cisco', 'Deloitte', 'Infosys'],
    portfolioProject: 'Set up a home lab with virtual machines, simulate common attack scenarios (phishing, SQL injection), detect them using Snort/Suricata IDS, and document your findings in a professional incident report.',
    requirements: [
      'Networking fundamentals (TCP/IP, firewalls, VPNs)',
      'Linux and system security (permissions, logs, hardening)',
      'Threat analysis and incident response',
      'Security tools (Wireshark, Nmap, Burp Suite, Metasploit)',
      'OWASP Top 10 vulnerabilities',
      'Security frameworks (NIST, ISO 27001 basics)'
    ],
    prep: [
      ['Computer Networks', 'TCP/IP, DNS, ports, firewalls, VPNs, Wireshark'],
      ['Operating Systems', 'Linux permissions, processes, logs, system calls'],
      ['Database Management System', 'Access control, encryption, backups, SQL injection prevention'],
      ['Object-Oriented Programming', 'Secure coding, input validation, testing']
    ]
  },
  {
    id: 'software-engineer',
    title: 'Software Engineer',
    tag: 'Products + systems',
    summary: 'Design, build, test, and improve the applications people use every day.',
    briefExplanation: 'Software Engineers are the builders of the digital world. You write the code that powers everything — from mobile apps and web platforms to backend APIs and microservices. This role involves translating product requirements into clean, maintainable code, writing tests to prevent bugs, reviewing teammates\' code, and continuously improving system performance. It\'s the most versatile tech role — every industry needs software engineers.',
    salaryRange: '₹6–25 LPA (India) · $85K–160K (US)',
    growthOutlook: ' Consistently High — foundational role in every tech company',
    dayInLife: 'Write and review code, participate in stand-ups and sprint planning, debug production issues, design system architecture, write unit/integration tests, deploy features via CI/CD, mentor junior developers.',
    topCompanies: ['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'Atlassian'],
    portfolioProject: 'Build a full-stack task management app (like Trello) with React frontend, Node.js/Express backend, PostgreSQL database, JWT authentication, and deploy it on Vercel + Railway.',
    requirements: [
      'One core programming language (JavaScript, Python, Java, or C++)',
      'DSA and problem solving (LeetCode-level proficiency)',
      'Git version control and collaborative workflows',
      'APIs and databases (REST, GraphQL, SQL)',
      'Testing (unit, integration, end-to-end)',
      'System design fundamentals'
    ],
    prep: [
      ['Data Structures', 'Arrays, trees, graphs, recursion, complexity'],
      ['Object-Oriented Programming', 'Classes, SOLID, design patterns, unit testing'],
      ['Database Management System', 'SQL, schema design, CRUD, indexing'],
      ['Computer Networks', 'HTTP, REST APIs, authentication, client-server basics']
    ]
  }
]

export default careers
