// Existing CSE subjects data (kept intact)
const cseSubjects = [
  {
    slug: 'database-management-system',
    name: 'Database Management System',
    description: 'Learn how information is structured, stored, and transformed into insight.',
    overview: 'How modern applications reliably organize and retrieve data.',
    relevance: 'Databases sit behind nearly every product—from a banking app to a streaming platform. This roadmap turns database theory into practical, job-ready skills.',
    roles: 'Data Analyst · Database Administrator · Backend Developer',
    skills: 'SQL, data modeling, normalization, MySQL, PostgreSQL',
    companies: 'Amazon · Google · Oracle · Netflix',
    careers: 'Data Engineering · Business Intelligence',
    roadmap: [
      {
        phase: 'Foundation',
        phaseNumber: 1,
        accent: '#24685e',
        bg: '#edf6f4',
        description: 'Build a rock-solid conceptual base before writing a single query.',
        topics: [
          {
            title: 'Introduction to DBMS',
            tag: 'Core',
            what: 'What a database is, difference between DBMS and a file system, types of databases (relational, NoSQL, hierarchical, network).',
            how: 'Watch the intro video, then draw a comparison chart between a spreadsheet and a proper database system.',
          },
          {
            title: 'Database Architecture & Models',
            tag: 'Core',
            what: '1-tier, 2-tier, 3-tier architecture; centralized vs distributed databases; schema and instances.',
            how: 'Sketch the architecture of a real-world app (e.g. Instagram) and identify where the DB layer sits.',
          },
          {
            title: 'Entity-Relationship (ER) Model',
            tag: 'Core',
            what: 'Entities, attributes, relationships, cardinality (1:1, 1:N, M:N), participation constraints, ER diagrams.',
            how: 'Design an ER diagram for a library system: books, members, loans, authors.',
          },
          {
            title: 'Relational Model & Keys',
            tag: 'Core',
            what: 'Relational schema, tuples, domains, primary key, candidate key, foreign key, super key, referential integrity.',
            how: 'Convert your ER diagram into relational tables and identify all key constraints.',
          }
        ]
      },
      {
        phase: 'SQL Mastery',
        phaseNumber: 2,
        accent: '#a94e3a',
        bg: '#fdf3f1',
        description: 'Go from basic queries to advanced SQL that real developers write every day.',
        topics: [
          {
            title: 'SQL Basics — DDL & DML',
            tag: 'Must Know',
            what: 'CREATE, ALTER, DROP (DDL); INSERT, UPDATE, DELETE, SELECT (DML); data types and constraints.',
            how: 'Create a student-management database from scratch with at least 4 tables and populate it with sample data.',
          },
          {
            title: 'Joins & Set Operations',
            tag: 'Must Know',
            what: 'INNER JOIN, LEFT/RIGHT/FULL OUTER JOIN, CROSS JOIN, SELF JOIN; UNION, INTERSECT, EXCEPT.',
            how: 'Write 10 queries using each type of join on your student database and compare the result sets.',
          },
          {
            title: 'Subqueries & Advanced Filtering',
            tag: 'Important',
            what: 'Subqueries in SELECT/WHERE/FROM, correlated subqueries, EXISTS, IN, ANY, ALL, CTEs (WITH clause).',
            how: 'Solve 5 nested-query problems on HackerRank SQL track, then rewrite each using a CTE.',
          },
          {
            title: 'Aggregate Functions & Window Functions',
            tag: 'Important',
            what: 'COUNT, SUM, AVG, MIN, MAX, GROUP BY, HAVING; window functions: ROW_NUMBER, RANK, LEAD, LAG, PARTITION BY.',
            how: 'Build a sales analytics report using GROUP BY and replicate it using window functions.',
          },
          {
            title: 'Views, Stored Procedures & Triggers',
            tag: 'Advanced',
            what: 'Creating and querying views, stored procedures with parameters, triggers for automation, cursors basics.',
            how: 'Create a view of top-10 customers and a stored procedure that inserts a validated order.',
          }
        ]
      },
      {
        phase: 'Database Design',
        phaseNumber: 3,
        accent: '#3a5ea9',
        bg: '#f1f4fd',
        description: 'Design schemas that are clean, efficient, and free of anomalies.',
        topics: [
          {
            title: 'Functional Dependencies',
            tag: 'Core',
            what: 'Functional dependency (FD), trivial vs non-trivial FDs, Armstrong\'s axioms, closure of attributes, canonical cover.',
            how: 'Given a table, find all FDs and compute the closure of each candidate key.',
          },
          {
            title: 'Normalization — 1NF to BCNF',
            tag: 'Must Know',
            what: '1NF (atomicity), 2NF (remove partial dependency), 3NF (remove transitive dependency), BCNF; decomposition and lossless joins.',
            how: 'Take a denormalized e-commerce table and normalize it step by step through each normal form.',
          },
          {
            title: 'Indexes & Query Optimization',
            tag: 'Important',
            what: 'B-Tree and Hash indexes, clustered vs non-clustered, composite indexes, EXPLAIN plans, query cost estimation.',
            how: 'Add indexes to a slow query, run EXPLAIN ANALYZE before and after, and document the improvement.',
          }
        ]
      },
      {
        phase: 'Advanced Concepts',
        phaseNumber: 4,
        accent: '#7e3aa9',
        bg: '#f6f1fd',
        description: 'Understand the internals that make databases reliable and concurrent.',
        topics: [
          {
            title: 'Transaction Management & ACID',
            tag: 'Core',
            what: 'Transactions, COMMIT/ROLLBACK, ACID properties (Atomicity, Consistency, Isolation, Durability), savepoints.',
            how: 'Simulate a bank transfer in two sessions simultaneously and observe isolation-level behavior.',
          },
          {
            title: 'Concurrency Control',
            tag: 'Advanced',
            what: 'Lost update, dirty read, phantom read, isolation levels (READ UNCOMMITTED → SERIALIZABLE), 2-Phase Locking (2PL), MVCC.',
            how: 'Reproduce a dirty read using READ UNCOMMITTED and fix it by switching isolation levels.',
          },
          {
            title: 'Deadlocks & Recovery',
            tag: 'Advanced',
            what: 'Deadlock conditions, deadlock prevention vs detection vs avoidance, wait-for graphs, UNDO/REDO logs, checkpointing.',
            how: 'Create a deadlock scenario in two database sessions, observe it, and prevent it with ordered locking.',
          },
          {
            title: 'NoSQL & When to Use It',
            tag: 'Important',
            what: 'Document, key-value, column-family, graph databases; CAP theorem; BASE vs ACID; MongoDB basics.',
            how: 'Model the same blog dataset in PostgreSQL (relational) and MongoDB (document) and compare query patterns.',
          }
        ]
      },
      {
        phase: 'Practical Skills & Projects',
        phaseNumber: 5,
        accent: '#2a7a2a',
        bg: '#f1fdf1',
        description: 'Apply everything in real tools and build a portfolio-ready project.',
        topics: [
          {
            title: 'MySQL & PostgreSQL Hands-On',
            tag: 'Practical',
            what: 'Installation, configuration, using pgAdmin/MySQL Workbench, user roles, CRUD via CLI and GUI.',
            how: 'Follow along with the video to set up PostgreSQL, create a database, and perform all CRUD operations.',
          },
          {
            title: 'Schema Design for a Real App',
            tag: 'Practical',
            what: 'Designing schemas for real-world apps (e-commerce, blog, social network); denormalization trade-offs; migration scripts.',
            how: 'Design a full schema for an online bookstore: users, books, orders, reviews, payments.',
          },
          {
            title: 'Portfolio Project — Build & Publish',
            tag: 'Project',
            what: 'End-to-end project: ER diagram, schema, seed data, 15+ useful queries, performance analysis, Git-hosted README.',
            how: 'Pick a domain you know (hospital, e-learning, inventory), build it fully, and push to GitHub with documentation.',
          }
        ]
      }
    ]
  },
  {
    slug: 'data-structures',
    name: 'Data Structures',
    description: 'Master the building blocks behind fast, efficient software.',
    overview: 'Core building blocks for writing scalable and efficient software.',
    relevance: 'Strong data-structure skills help you write efficient software and are central to software-engineering interviews.',
    roles: 'Software Engineer · Algorithms Engineer · Backend Developer',
    skills: 'Arrays, trees, graphs, complexity analysis, problem solving',
    companies: 'Google · Microsoft · Adobe · Atlassian',
    careers: 'Software Development · Machine Learning',
    roadmap: [
      {
        phase: 'Fundamentals', phaseNumber: 1, accent: '#24685e', bg: '#edf6f4',
        description: 'Learn how to think algorithmically before touching a data structure.',
        topics: [
          { title: 'Big O Notation & Complexity Analysis', tag: 'Core', what: 'Time and space complexity, Big O / Θ / Ω notations, best/worst/average case, amortized analysis.', how: 'Analyze the complexity of 10 small code snippets and practice estimating cost before running them.' },
          { title: 'Arrays & Strings', tag: 'Core', what: 'Static vs dynamic arrays, multi-dimensional arrays, string manipulation, StringBuilder, in-place operations.', how: 'Implement a dynamic array from scratch, then solve 5 array problems on LeetCode (Easy).' },
          { title: 'Linked Lists', tag: 'Core', what: 'Singly, doubly and circular linked lists; insert, delete, reverse; Floyd\'s cycle detection; runner technique.', how: 'Implement all three types by hand. Then reverse a linked list both iteratively and recursively.' }
        ]
      },
      {
        phase: 'Linear Structures', phaseNumber: 2, accent: '#a94e3a', bg: '#fdf3f1',
        description: 'Master the essential building blocks used in nearly every algorithm.',
        topics: [
          { title: 'Stacks & Queues', tag: 'Must Know', what: 'Stack (LIFO), queue (FIFO), deque, monotonic stack; applications: balanced parentheses, undo systems, BFS.', how: 'Implement a stack using an array and a queue using two stacks. Solve bracket validation and next-greater-element.' },
          { title: 'Hash Maps & Hash Tables', tag: 'Must Know', what: 'Hash functions, collision resolution (chaining, open addressing), load factor, HashMap vs HashSet, frequency counting.', how: 'Implement a hash map from scratch with chaining. Solve two-sum and group-anagrams using hashmaps.' },
          { title: 'Recursion & Backtracking', tag: 'Important', what: 'Call stack, base case, recursive tree, memoization basics; backtracking for permutations, combinations, N-Queens.', how: 'Visualize recursion trees for Fibonacci and factorials. Solve subsets and permutations with backtracking.' }
        ]
      },
      {
        phase: 'Trees & Heaps', phaseNumber: 3, accent: '#3a5ea9', bg: '#f1f4fd',
        description: 'Non-linear structures at the heart of search, priority, and hierarchy.',
        topics: [
          { title: 'Binary Trees & BST', tag: 'Core', what: 'Binary tree properties, traversals (inorder, preorder, postorder, level-order), BST insert/delete/search.', how: 'Draw and trace each traversal by hand, then implement them recursively and iteratively.' },
          { title: 'AVL Trees & Balanced BSTs', tag: 'Advanced', what: 'Height-balanced BSTs, rotation operations (LL, RR, LR, RL), AVL insert/delete, Red-Black tree overview.', how: 'Trace AVL rotations on paper for a sequence of insertions, then verify with a visualizer tool.' },
          { title: 'Heaps & Priority Queues', tag: 'Important', what: 'Min-heap, max-heap, heapify, heap sort, priority queue operations, applications: K-largest, median stream.', how: 'Implement a min-heap from scratch. Solve "kth largest element" and "merge k sorted lists".' },
          { title: 'Tries & Segment Trees', tag: 'Advanced', what: 'Trie insert/search/prefix, word search applications; segment tree for range queries; Fenwick tree basics.', how: 'Build a trie-based autocomplete system. Solve range-sum-query using a segment tree.' }
        ]
      },
      {
        phase: 'Graphs & Shortest Paths', phaseNumber: 4, accent: '#7e3aa9', bg: '#f6f1fd',
        description: 'Model and solve real-world connectivity and routing problems.',
        topics: [
          { title: 'Graph Representation & BFS/DFS', tag: 'Core', what: 'Adjacency list vs matrix, directed/undirected, weighted graphs, BFS (level traversal) and DFS (recursion/stack).', how: 'Implement both BFS and DFS. Solve "number of islands" and "word ladder" using them.' },
          { title: 'Shortest Path Algorithms', tag: 'Must Know', what: 'Dijkstra\'s (weighted, non-negative), Bellman-Ford (negative weights), Floyd-Warshall (all pairs), A* overview.', how: 'Implement Dijkstra using a min-heap. Compare it with Bellman-Ford on a graph with a negative edge.' },
          { title: 'Topological Sort & Union-Find', tag: 'Important', what: 'Topological ordering (Kahn\'s algo, DFS-based), DAGs, cycle detection; Union-Find (DSU) for connected components.', how: 'Solve course-schedule dependency using topological sort. Use Union-Find for the number-of-provinces problem.' }
        ]
      },
      {
        phase: 'Algorithm Patterns & Interview Prep', phaseNumber: 5, accent: '#2a7a2a', bg: '#f1fdf1',
        description: 'Learn the patterns behind 90% of interview problems.',
        topics: [
          { title: 'Two Pointers & Sliding Window', tag: 'Must Know', what: 'Two-pointer technique for sorted arrays and strings; sliding window for subarray/substring problems.', how: 'Solve "container with most water", "longest substring without repeating characters", and "minimum window substring".' },
          { title: 'Dynamic Programming', tag: 'Core', what: 'Memoization vs tabulation, 1D and 2D DP, classic problems: knapsack, LCS, LIS, coin change, edit distance.', how: 'Solve Fibonacci bottom-up, then tackle knapsack and LCS. Draw the DP table for each before coding.' },
          { title: 'Greedy Algorithms', tag: 'Important', what: 'Greedy choice property, local vs global optimum; activity selection, interval scheduling, Huffman coding.', how: 'Solve "jump game", "meeting rooms", and "task scheduler" using the greedy approach.' },
          { title: 'Bit Manipulation', tag: 'Advanced', what: 'AND, OR, XOR, NOT, left/right shift; find single number, count set bits, power of two, subset generation with bits.', how: 'Solve "single number", "number of 1 bits", and "subsets" using bitwise operations.' }
        ]
      }
    ]
  },
  {
    slug: 'operating-systems',
    name: 'Operating Systems',
    description: 'Explore the engine that makes computers coordinate work.',
    overview: 'The foundation for how hardware resources are managed and programs run.',
    relevance: 'Operating-system knowledge is essential for cloud platforms, performant applications, infrastructure, and embedded systems.',
    roles: 'Systems Engineer · DevOps Engineer · Embedded Developer',
    skills: 'Processes, memory, Linux, concurrency, shell scripting',
    companies: 'Apple · Intel · IBM · Red Hat',
    careers: 'Cloud Engineering · Cybersecurity',
    roadmap: [
      {
        phase: 'OS Basics', phaseNumber: 1, accent: '#24685e', bg: '#edf6f4',
        description: 'Understand what an operating system does and how it starts up.',
        topics: [
          { title: 'Introduction to Operating Systems', tag: 'Core', what: 'Role of an OS, types (batch, time-sharing, real-time, distributed), kernel vs user space, system calls, OS services.', how: 'Watch the intro and then trace exactly what happens (in 10 steps) when you double-click an app.' },
          { title: 'Process vs Thread', tag: 'Core', what: 'Process creation (fork, exec), PCB, thread types (user-level, kernel-level), multithreading models, context switching.', how: 'Write a program that spawns 3 child processes and 3 threads. Observe their behavior using `ps` and `top`.' },
          { title: 'CPU Scheduling Algorithms', tag: 'Core', what: 'FCFS, SJF, SRTF, Round Robin, Priority Scheduling, Multilevel Queue; turnaround time, waiting time, throughput.', how: 'Simulate Round Robin and SJF scheduling manually for 5 processes and compute all metrics.' },
          { title: 'Inter-Process Communication (IPC)', tag: 'Important', what: 'Pipes, message queues, shared memory, semaphores, sockets; producer-consumer problem setup.', how: 'Implement a producer-consumer program using shared memory and a semaphore.' }
        ]
      },
      {
        phase: 'Memory Management', phaseNumber: 2, accent: '#a94e3a', bg: '#fdf3f1',
        description: 'Learn how the OS juggles memory between competing processes.',
        topics: [
          { title: 'Memory Hierarchy & Caching', tag: 'Core', what: 'Registers, cache (L1/L2/L3), RAM, disk; locality of reference; cache hit/miss, direct-mapped vs associative caches.', how: 'Profile a small C program and observe cache miss rates using `perf stat` or Valgrind.' },
          { title: 'Virtual Memory & Paging', tag: 'Must Know', what: 'Address space, paging, page table, TLB, page fault, demand paging, copy-on-write, page replacement policies.', how: 'Trace a virtual address translation step by step through the page table and TLB.' },
          { title: 'Page Replacement Algorithms', tag: 'Important', what: 'FIFO, LRU, Optimal (OPT), LFU, Clock algorithm; Belady\'s anomaly; thrashing and working-set model.', how: 'Simulate FIFO and LRU for a reference string with 3 frames and count page faults for each.' },
          { title: 'Segmentation & Memory Allocation', tag: 'Advanced', what: 'Segmentation, internal/external fragmentation, compaction; first-fit, best-fit, worst-fit; buddy system.', how: 'Simulate first-fit and best-fit allocation for 6 processes and compare fragmentation outcomes.' }
        ]
      },
      {
        phase: 'Concurrency & Synchronization', phaseNumber: 3, accent: '#3a5ea9', bg: '#f1f4fd',
        description: 'Manage multiple processes safely without race conditions or deadlocks.',
        topics: [
          { title: 'Race Conditions & Critical Sections', tag: 'Core', what: 'Race condition definition, critical section, mutual exclusion, progress and bounded waiting requirements.', how: 'Reproduce a race condition in a two-thread counter program, then fix it with a mutex.' },
          { title: 'Semaphores & Monitors', tag: 'Must Know', what: 'Binary and counting semaphores, P/V operations, monitors, condition variables, dining philosophers problem.', how: 'Implement the dining philosophers problem using semaphores without deadlock.' },
          { title: 'Deadlocks — Detection & Prevention', tag: 'Must Know', what: 'Deadlock conditions (Coffman), prevention, avoidance (Banker\'s algorithm), detection (wait-for graph), recovery.', how: 'Run Banker\'s algorithm manually on a 3-process, 3-resource system to determine safe state.' }
        ]
      },
      {
        phase: 'File Systems & I/O', phaseNumber: 4, accent: '#7e3aa9', bg: '#f6f1fd',
        description: 'Understand how data is stored, named, and retrieved from disk.',
        topics: [
          { title: 'File Systems & Disk Structure', tag: 'Core', what: 'File concepts, directory structures, file allocation methods (contiguous, linked, indexed), FAT, inode, ext4.', how: 'Use `stat` and `ls -i` on Linux to inspect inodes and study how the ext4 filesystem is structured.' },
          { title: 'Disk Scheduling Algorithms', tag: 'Important', what: 'FCFS, SSTF, SCAN (Elevator), C-SCAN, LOOK; seek time, rotational latency, transfer time calculations.', how: 'Trace SSTF and SCAN for a disk head at position 50 with a queue of 10 requests.' },
          { title: 'Linux Commands & Shell Scripting', tag: 'Practical', what: 'File permissions (chmod, chown), process management (ps, kill, top), piping, redirection, bash scripting basics.', how: 'Write a bash script that backs up a directory, lists all running processes, and logs output to a file.' },
          { title: 'OS Security & System Hardening', tag: 'Advanced', what: 'Users and groups, sudo, SELinux/AppArmor, firewall basics, system call auditing, kernel patches.', how: 'Set up a Linux VM, configure a non-root user with sudo, enable UFW firewall, and audit login attempts.' }
        ]
      }
    ]
  },
  {
    slug: 'computer-networks',
    name: 'Computer Networks',
    description: 'Understand how devices, servers, and the internet communicate.',
    overview: 'The principles that allow devices and services to exchange information.',
    relevance: 'Network fluency helps you build secure, reliable cloud applications and troubleshoot the systems that connect the world.',
    roles: 'Network Engineer · Security Analyst · Cloud Engineer',
    skills: 'TCP/IP, routing, DNS, network security, troubleshooting',
    companies: 'Cisco · Cloudflare · Akamai · TCS',
    careers: 'Network Security · Cloud Computing',
    roadmap: [
      {
        phase: 'Network Models & Basics', phaseNumber: 1, accent: '#24685e', bg: '#edf6f4',
        description: 'Understand how data moves from one machine to another at every layer.',
        topics: [
          { title: 'OSI Model & TCP/IP Stack', tag: 'Core', what: 'All 7 OSI layers and their responsibilities; TCP/IP 4-layer model; encapsulation and decapsulation; PDUs.', how: 'Follow a single browser request (google.com) and describe what happens at each layer.' },
          { title: 'Network Devices & Topologies', tag: 'Core', what: 'Hub, switch, router, bridge, gateway, modem; LAN, WAN, MAN; bus, ring, star, mesh topologies.', how: 'Draw a home network topology and label every device with its OSI layer and function.' },
          { title: 'Data Link Layer & Ethernet', tag: 'Important', what: 'MAC addresses, Ethernet frame, ARP, CSMA/CD, switches and VLANs, STP, error detection (CRC).', how: 'Use Wireshark to capture Ethernet frames on your local network and inspect the ARP traffic.' }
        ]
      },
      {
        phase: 'IP Addressing & Routing', phaseNumber: 2, accent: '#a94e3a', bg: '#fdf3f1',
        description: 'Master the addressing and routing layer that glues the internet together.',
        topics: [
          { title: 'IPv4, Subnetting & CIDR', tag: 'Must Know', what: 'IPv4 structure, classes, subnetting, CIDR notation, subnet masks, broadcast/network addresses, VLSM.', how: 'Practice subnetting: divide 192.168.10.0/24 into 8 equal subnets and calculate host ranges.' },
          { title: 'IPv6 & Address Management', tag: 'Important', what: 'IPv6 format, link-local vs global addresses, NDP (replaces ARP), DHCPv6, dual-stack, tunneling.', how: 'Enable IPv6 on a VM and verify connectivity using ping6 and tracepath6.' },
          { title: 'DNS, DHCP & NAT', tag: 'Must Know', what: 'DNS resolution (recursive, iterative), record types (A, AAAA, MX, CNAME, NS), DHCP lease process, NAT (Static, PAT).', how: 'Use nslookup and dig to trace a domain name to IP. Set up a DHCP server in a VM lab.' },
          { title: 'Routing Protocols', tag: 'Advanced', what: 'Static vs dynamic routing, RIP, OSPF (link-state), BGP (path-vector), routing table, administrative distance.', how: 'Configure OSPF between 3 routers in Cisco Packet Tracer and verify end-to-end connectivity.' }
        ]
      },
      {
        phase: 'Transport & Application Layers', phaseNumber: 3, accent: '#3a5ea9', bg: '#f1f4fd',
        description: 'Understand reliable data delivery and high-level application protocols.',
        topics: [
          { title: 'TCP vs UDP & Handshakes', tag: 'Must Know', what: 'TCP 3-way handshake, 4-way close, reliability, flow control (sliding window), congestion control; UDP use cases.', how: 'Capture a TCP handshake in Wireshark. Write a simple UDP echo server and client.' },
          { title: 'HTTP, HTTPS & REST', tag: 'Must Know', what: 'HTTP methods, status codes, headers, HTTP/1.1 vs HTTP/2 vs HTTP/3, HTTPS, cookies, sessions, REST principles.', how: 'Use curl and Postman to make HTTP requests. Inspect request/response headers in browser DevTools.' },
          { title: 'TLS/SSL & Certificate Authority', tag: 'Important', what: 'TLS handshake, symmetric vs asymmetric encryption, certificates, PKI, chain of trust, HTTPS setup.', how: 'Generate a self-signed certificate with OpenSSL and set up HTTPS on a local Nginx server.' },
          { title: 'Application Protocols — SMTP, FTP, SSH', tag: 'Important', what: 'Email flow (SMTP, POP3, IMAP), FTP vs SFTP, SSH public-key auth, WebSocket, gRPC overview.', how: 'Set up an SSH key pair, configure key-based login on a remote server, and disable password auth.' }
        ]
      },
      {
        phase: 'Security & Troubleshooting', phaseNumber: 4, accent: '#7e3aa9', bg: '#f6f1fd',
        description: 'Defend networks and diagnose problems like a professional engineer.',
        topics: [
          { title: 'Network Security & Firewalls', tag: 'Core', what: 'Stateful vs stateless firewalls, iptables/UFW, ACLs, DMZ, IDS vs IPS, common attacks (DDoS, MITM, spoofing).', how: 'Configure UFW rules to allow only SSH and HTTP, block all else, and test with nmap.' },
          { title: 'VPNs & Proxies', tag: 'Important', what: 'VPN protocols (OpenVPN, WireGuard, IPSec), tunneling, forward/reverse proxies, load balancers, CDN.', how: 'Set up a WireGuard VPN between two cloud VMs and verify encrypted tunnel traffic.' },
          { title: 'Wireshark & Packet Analysis', tag: 'Practical', what: 'Capturing packets, display filters, following TCP streams, detecting anomalies, HTTP inspection, DNS analysis.', how: 'Capture 5 minutes of traffic, find an HTTP GET request, and reconstruct the full request-response cycle.' },
          { title: 'Network Troubleshooting', tag: 'Practical', what: 'ping, traceroute, netstat, ss, nmap, dig, tcpdump; systematic troubleshooting methodology.', how: 'Diagnose 5 intentionally broken connection scenarios on a VM lab and document the root cause and fix.' }
        ]
      }
    ]
  },
  {
    slug: 'object-oriented-programming',
    name: 'Object-Oriented Programming',
    description: 'Design clear, reusable software that grows with its users.',
    overview: 'A structured approach to designing reusable, maintainable software.',
    relevance: 'Object-oriented design is a foundation for maintainable applications across backend, web, mobile, and enterprise software.',
    roles: 'Software Developer · Mobile Developer · Full-stack Engineer',
    skills: 'Java / C++, classes, design patterns, testing, Git',
    companies: 'Microsoft · Salesforce · Spotify · Infosys',
    careers: 'Web Development · Mobile Development',
    roadmap: [
      {
        phase: 'Core Concepts', phaseNumber: 1, accent: '#24685e', bg: '#edf6f4',
        description: 'Build your mental model of objects and classes before writing complex code.',
        topics: [
          { title: 'Classes, Objects & Methods', tag: 'Core', what: 'Class definition, object instantiation, instance variables vs class variables, methods, `this` keyword.', how: 'Model 3 real-world entities (Car, BankAccount, Student) as classes with attributes and behaviors.' },
          { title: 'Constructors & Access Modifiers', tag: 'Core', what: 'Default, parameterized, and copy constructors; public, private, protected, package-private; getters/setters.', how: 'Create a BankAccount class with private fields, getters/setters, and both default and parameterized constructors.' },
          { title: 'Encapsulation', tag: 'Must Know', what: 'Data hiding, information hiding, benefits of encapsulation, designing APIs that don\'t expose internals.', how: 'Refactor a class with public fields into a properly encapsulated version with validation in setters.' },
          { title: 'Static Members & Inner Classes', tag: 'Important', what: 'Static fields, static methods, static blocks, singleton using static; inner classes, anonymous classes, lambda basics.', how: 'Implement a singleton Logger class. Create an anonymous comparator for sorting a list.' }
        ]
      },
      {
        phase: 'The Four Pillars', phaseNumber: 2, accent: '#a94e3a', bg: '#fdf3f1',
        description: 'Master the fundamental principles that define object-oriented design.',
        topics: [
          { title: 'Inheritance & Method Overriding', tag: 'Must Know', what: 'Single and multilevel inheritance, `super`, method overriding vs overloading, `final` classes, constructor chaining.', how: 'Build an Animal hierarchy: Animal → Mammal → Dog. Override sound() at each level and observe dispatch.' },
          { title: 'Polymorphism', tag: 'Must Know', what: 'Compile-time (overloading) vs runtime polymorphism (overriding), dynamic dispatch, upcasting/downcasting, instanceof.', how: 'Create a Shape hierarchy and use a Shape[] array to call draw() on Circle, Rectangle, and Triangle polymorphically.' },
          { title: 'Abstraction & Abstract Classes', tag: 'Must Know', what: 'Abstract classes and methods, when to use abstract class vs interface, template method pattern basics.', how: 'Design an abstract Vehicle class and force subclasses to implement fuelType() and maxSpeed().' },
          { title: 'Interfaces & Multiple Inheritance', tag: 'Must Know', what: 'Interface definition, default and static methods, implementing multiple interfaces, marker interfaces, functional interfaces.', how: 'Create Flyable and Swimmable interfaces and make a Duck implement both.' }
        ]
      },
      {
        phase: 'Advanced Design', phaseNumber: 3, accent: '#3a5ea9', bg: '#f1f4fd',
        description: 'Write software that is easy to extend, test, and maintain.',
        topics: [
          { title: 'Composition vs Inheritance', tag: 'Core', what: '"Favor composition over inheritance", HAS-A vs IS-A, delegation, mixin patterns, avoiding fragile base class.', how: 'Redesign an inheritance hierarchy using composition. Justify why the new design is more flexible.' },
          { title: 'SOLID Principles', tag: 'Must Know', what: 'Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion — with examples.', how: 'Take a "god class" and refactor it so each SOLID principle is satisfied. Write before/after comparisons.' },
          { title: 'UML & Class Diagrams', tag: 'Important', what: 'Class diagram notation, associations, aggregation, composition, dependency, generalization; sequence diagrams.', how: 'Draw a UML class diagram for a hotel booking system before writing any code.' },
          { title: 'Dependency Injection & IoC', tag: 'Advanced', what: 'Constructor injection, setter injection, interface injection, IoC containers basics (Spring/DI frameworks).', how: 'Refactor a tightly-coupled EmailService to use dependency injection and write a unit test for it.' }
        ]
      },
      {
        phase: 'Design Patterns', phaseNumber: 4, accent: '#7e3aa9', bg: '#f6f1fd',
        description: 'Learn the 12 most important GoF patterns used in professional codebases.',
        topics: [
          { title: 'Creational Patterns', tag: 'Must Know', what: 'Singleton, Factory Method, Abstract Factory, Builder, Prototype — when to use each and trade-offs.', how: 'Implement a pizza-ordering system using Factory Method and Builder. Test each creation path.' },
          { title: 'Structural Patterns', tag: 'Important', what: 'Adapter, Decorator, Proxy, Facade, Composite, Bridge, Flyweight — diagram and implement 2–3 of these.', how: 'Use Decorator to add logging and caching to a service without changing the original class.' },
          { title: 'Behavioral Patterns', tag: 'Important', what: 'Observer, Strategy, Command, Iterator, Template Method, State, Chain of Responsibility.', how: 'Implement an event notification system using the Observer pattern and a payment system using Strategy.' }
        ]
      },
      {
        phase: 'Testing & Production Habits', phaseNumber: 5, accent: '#2a7a2a', bg: '#f1fdf1',
        description: 'Ship clean, tested, and maintainable object-oriented code.',
        topics: [
          { title: 'Unit Testing & TDD', tag: 'Must Know', what: 'JUnit/pytest basics, Arrange-Act-Assert pattern, mocking (Mockito), test-driven development cycle.', how: 'Write unit tests for a BankAccount class covering all edge cases before implementing the methods.' },
          { title: 'Refactoring Techniques', tag: 'Important', what: 'Code smells (long method, large class, feature envy), extract method, rename, replace conditional with polymorphism.', how: 'Take 200 lines of spaghetti code and refactor it step by step without breaking tests.' },
          { title: 'OOP Capstone Project', tag: 'Project', what: 'Full OOP application: class hierarchy, design patterns (2+), SOLID compliance, unit tests, Git history, README.', how: 'Build a library management, inventory, or task management system. Publish on GitHub and write a design document.' }
        ]
      }
    ]
  }
]

// ─────────────────────────── ECE Subjects ───────────────────────────
const eceSubjects = [
  {
    slug: 'signals-and-systems',
    name: 'Signals & Systems',
    description: 'Analyze and transform signals that carry information in electronics.',
    overview: 'Mathematical tools for understanding how signals are processed.',
    relevance: 'Foundation for communications, control systems, and signal processing — core to ECE careers.',
    roles: 'Signal Processing Engineer · Communications Engineer · DSP Developer',
    skills: 'Fourier Transform, Laplace, Z-Transform, convolution, filtering',
    companies: 'Qualcomm · Texas Instruments · Intel · Samsung',
    careers: 'Signal Processing · Wireless Communications',
    roadmap: [
      { phase: 'Signal Basics', phaseNumber: 1, accent: '#24685e', bg: '#edf6f4', description: 'Understand signal types, properties, and basic operations.', topics: [
        { title: 'Classification of Signals', tag: 'Core', what: 'Continuous vs discrete, periodic vs aperiodic, even/odd decomposition, energy vs power signals.', how: 'Plot and classify 10 different signals using MATLAB/Python.' },
        { title: 'Basic Signal Operations', tag: 'Core', what: 'Time shifting, scaling, reversal, amplitude scaling; unit step, impulse, ramp, exponential signals.', how: 'Apply each operation to a given signal and verify by plotting the result.' },
        { title: 'System Properties', tag: 'Must Know', what: 'Linearity, time-invariance, causality, stability, memory; LTI system characterization.', how: 'Determine the properties of 5 given systems and prove your claims mathematically.' }
      ]},
      { phase: 'Transform Domain', phaseNumber: 2, accent: '#a94e3a', bg: '#fdf3f1', description: 'Convert signals to frequency domain for analysis.', topics: [
        { title: 'Fourier Series & Transform', tag: 'Core', what: 'Fourier series coefficients, CTFT properties, Parseval\'s theorem, frequency spectrum analysis.', how: 'Compute Fourier series for square and triangular waves. Verify with MATLAB FFT.' },
        { title: 'Laplace Transform', tag: 'Must Know', what: 'ROC, inverse Laplace, transfer functions, poles and zeros, stability from pole locations.', how: 'Solve 5 differential equations using Laplace transforms and verify with time-domain solutions.' },
        { title: 'Z-Transform', tag: 'Must Know', what: 'Z-transform properties, ROC for causal/anti-causal, inverse Z-transform, difference equations.', how: 'Analyze a digital filter using Z-transform and plot its pole-zero diagram.' }
      ]},
      { phase: 'Convolution & Filtering', phaseNumber: 3, accent: '#3a5ea9', bg: '#f1f4fd', description: 'Process signals through systems using convolution.', topics: [
        { title: 'Convolution (CT & DT)', tag: 'Core', what: 'Graphical convolution, properties, convolution with impulse/step, circular convolution, DFT-based.', how: 'Perform graphical convolution step by step for 3 signal pairs. Verify in MATLAB.' },
        { title: 'Sampling & Aliasing', tag: 'Must Know', what: 'Nyquist theorem, aliasing, anti-aliasing filters, reconstruction, practical ADC/DAC considerations.', how: 'Sample a 1kHz sine wave at different rates and observe aliasing effects.' },
        { title: 'FIR & IIR Filters', tag: 'Important', what: 'Filter types (LP, HP, BP, BS), FIR design (windowing), IIR design (Butterworth, Chebyshev), stability.', how: 'Design a low-pass FIR filter in MATLAB and apply it to a noisy audio signal.' }
      ]},
      { phase: 'Applications & Projects', phaseNumber: 4, accent: '#7e3aa9', bg: '#f6f1fd', description: 'Apply signal processing to real-world problems.', topics: [
        { title: 'DTFT & DFT/FFT', tag: 'Important', what: 'DTFT properties, DFT computation, FFT algorithm (radix-2), windowing effects, spectral leakage.', how: 'Implement FFT from scratch. Analyze the frequency content of a music clip.' },
        { title: 'State-Space Representation', tag: 'Advanced', what: 'State variables, state equations, controllability, observability, state-transition matrix.', how: 'Model a simple RLC circuit in state-space form and simulate its response.' },
        { title: 'Signal Processing Project', tag: 'Project', what: 'End-to-end project: audio equalizer, noise cancellation, or speech recognition preprocessing pipeline.', how: 'Build an audio noise removal tool using filtering techniques and publish on GitHub.' }
      ]}
    ]
  },
  {
    slug: 'digital-electronics',
    name: 'Digital Electronics',
    description: 'Design and analyze digital circuits from gates to processors.',
    overview: 'Logic design principles that underpin all digital hardware.',
    relevance: 'Essential for VLSI, embedded systems, and computer architecture — the hardware backbone of all technology.',
    roles: 'VLSI Engineer · Digital Design Engineer · Hardware Engineer',
    skills: 'Boolean algebra, combinational & sequential circuits, HDL, FPGA',
    companies: 'Intel · AMD · Qualcomm · NVIDIA · Texas Instruments',
    careers: 'VLSI Design · Embedded Systems · Hardware Engineering',
    roadmap: [
      { phase: 'Number Systems & Logic', phaseNumber: 1, accent: '#24685e', bg: '#edf6f4', description: 'Master the mathematical foundations of digital systems.', topics: [
        { title: 'Number Systems & Codes', tag: 'Core', what: 'Binary, octal, hexadecimal, BCD, Gray code, signed numbers (1\'s and 2\'s complement), error detection codes.', how: 'Convert between all number systems manually. Implement a binary calculator.' },
        { title: 'Boolean Algebra & Logic Gates', tag: 'Core', what: 'AND, OR, NOT, NAND, NOR, XOR, XNOR gates; Boolean laws, De Morgan\'s theorems, canonical forms.', how: 'Simplify 10 Boolean expressions using algebraic methods and verify with truth tables.' },
        { title: 'K-Map & Minimization', tag: 'Must Know', what: 'Karnaugh maps (2-5 variables), prime implicants, essential PIs, don\'t-care conditions, POS/SOP minimization.', how: 'Minimize 8 functions using K-maps and compare with Quine-McCluskey method.' }
      ]},
      { phase: 'Combinational Circuits', phaseNumber: 2, accent: '#a94e3a', bg: '#fdf3f1', description: 'Design circuits whose output depends only on current inputs.', topics: [
        { title: 'Adders, Subtractors & Comparators', tag: 'Must Know', what: 'Half adder, full adder, ripple carry, carry look-ahead, subtractor circuits, magnitude comparator.', how: 'Design a 4-bit adder-subtractor circuit and simulate in Logisim or ModelSim.' },
        { title: 'Multiplexers & Decoders', tag: 'Must Know', what: 'MUX as universal gate, demultiplexer, encoder, decoder, priority encoder, function implementation using MUX.', how: 'Implement a given Boolean function using 8:1 MUX. Design a 7-segment decoder.' },
        { title: 'PLDs & ROM-based Design', tag: 'Important', what: 'PLA, PAL, ROM, PROM, EPROM; look-up table approach; introduction to CPLDs and FPGAs.', how: 'Implement a simple combinational function using PLA and compare with discrete gates.' }
      ]},
      { phase: 'Sequential Circuits', phaseNumber: 3, accent: '#3a5ea9', bg: '#f1f4fd', description: 'Design circuits with memory using flip-flops and state machines.', topics: [
        { title: 'Flip-Flops & Latches', tag: 'Core', what: 'SR, D, JK, T flip-flops; master-slave configuration; setup time, hold time, clock skew, metastability.', how: 'Build each flip-flop type and verify timing parameters using simulation.' },
        { title: 'Counters & Shift Registers', tag: 'Must Know', what: 'Synchronous vs asynchronous counters, mod-N counters, ring/Johnson counters, SISO/SIPO/PISO/PIPO registers.', how: 'Design a mod-12 synchronous counter and a 4-bit universal shift register.' },
        { title: 'Finite State Machines', tag: 'Important', what: 'Mealy vs Moore machines, state diagrams, state tables, state reduction, sequence detectors, vending machines.', how: 'Design a sequence detector FSM (detect 1011) as both Mealy and Moore machines.' }
      ]},
      { phase: 'HDL & FPGA Design', phaseNumber: 4, accent: '#7e3aa9', bg: '#f6f1fd', description: 'Describe hardware in code and deploy to real chips.', topics: [
        { title: 'Verilog / VHDL Basics', tag: 'Must Know', what: 'Module declaration, data types, behavioral vs structural modeling, testbench writing, simulation.', how: 'Write Verilog for all basic gates, a 4-bit counter, and an ALU. Simulate using Icarus Verilog.' },
        { title: 'FPGA Implementation', tag: 'Advanced', what: 'FPGA architecture, synthesis flow, constraints, I/O mapping, clock management, real-time debugging.', how: 'Implement a traffic light controller on an FPGA dev board.' },
        { title: 'Digital Design Project', tag: 'Project', what: 'Complete digital system: ALU, UART controller, or simple processor in Verilog with testbenches.', how: 'Build a simple 8-bit processor or UART transceiver in Verilog. Document and publish.' }
      ]}
    ]
  },
  {
    slug: 'communication-systems',
    name: 'Communication Systems',
    description: 'Understand how information travels across wired and wireless channels.',
    overview: 'Principles of transmitting and receiving signals over communication channels.',
    relevance: 'Core to telecom, wireless networks, and IoT — the backbone of modern connectivity.',
    roles: 'RF Engineer · Telecom Engineer · Wireless Systems Engineer',
    skills: 'Modulation, channel coding, antenna design, wireless protocols',
    companies: 'Ericsson · Nokia · Qualcomm · Airtel · Jio',
    careers: 'Telecommunications · Wireless Engineering · IoT',
    roadmap: [
      { phase: 'Analog Communication', phaseNumber: 1, accent: '#24685e', bg: '#edf6f4', description: 'Learn how analog signals are modulated and transmitted.', topics: [
        { title: 'Amplitude Modulation (AM)', tag: 'Core', what: 'DSB-FC, DSB-SC, SSB, VSB modulation; modulation index, bandwidth, power calculations, demodulation.', how: 'Generate AM signals in MATLAB with different modulation indices. Analyze spectra.' },
        { title: 'Frequency & Phase Modulation', tag: 'Core', what: 'FM/PM fundamentals, Carson\'s rule, WBFM vs NBFM, PLL for FM demodulation, pre-emphasis/de-emphasis.', how: 'Simulate FM modulation and demodulation. Compare bandwidth with AM.' },
        { title: 'Noise in Communication', tag: 'Must Know', what: 'Noise types, SNR, noise figure, noise temperature, Friis formula, noise in AM/FM receivers.', how: 'Calculate SNR for a given receiver. Compare noise performance of AM vs FM.' }
      ]},
      { phase: 'Digital Communication', phaseNumber: 2, accent: '#a94e3a', bg: '#fdf3f1', description: 'Convert to digital — the modern standard for reliable communication.', topics: [
        { title: 'Pulse Code Modulation (PCM)', tag: 'Must Know', what: 'Sampling, quantization, encoding, companding (A-law, μ-law), DPCM, delta modulation, ADM.', how: 'Implement PCM encoding/decoding for an audio signal. Compare quantization error levels.' },
        { title: 'Digital Modulation Schemes', tag: 'Core', what: 'ASK, FSK, PSK, QPSK, QAM; constellation diagrams, BER analysis, bandwidth efficiency.', how: 'Simulate QPSK and 16-QAM. Plot BER vs SNR curves and compare.' },
        { title: 'Error Control Coding', tag: 'Important', what: 'Hamming codes, CRC, convolutional codes, Viterbi decoding, turbo codes, LDPC codes overview.', how: 'Implement Hamming (7,4) encoder/decoder. Demonstrate error correction capability.' }
      ]},
      { phase: 'Channel & Information Theory', phaseNumber: 3, accent: '#3a5ea9', bg: '#f1f4fd', description: 'Understand the theoretical limits of communication.', topics: [
        { title: 'Information Theory Basics', tag: 'Core', what: 'Entropy, mutual information, channel capacity, Shannon\'s theorem, source coding, Huffman coding.', how: 'Calculate entropy for various sources. Implement Huffman coding for text compression.' },
        { title: 'Channel Models', tag: 'Important', what: 'AWGN channel, Rayleigh/Rician fading, multipath, ISI, equalization, matched filter, correlation receiver.', how: 'Simulate BER for BPSK over AWGN and Rayleigh channels. Compare performance.' },
        { title: 'Spread Spectrum & OFDM', tag: 'Advanced', what: 'DSSS, FHSS, CDMA principles, OFDM modulation, cyclic prefix, applications in WiFi and 4G/5G.', how: 'Simulate a basic OFDM system. Observe the effect of cyclic prefix on ISI.' }
      ]},
      { phase: 'Wireless & Modern Systems', phaseNumber: 4, accent: '#7e3aa9', bg: '#f6f1fd', description: 'Explore real-world wireless systems and protocols.', topics: [
        { title: 'Antenna Fundamentals', tag: 'Important', what: 'Radiation pattern, gain, directivity, polarization, dipole, Yagi, patch antennas, antenna arrays.', how: 'Simulate antenna radiation patterns using MATLAB. Compare dipole vs patch antenna.' },
        { title: 'Cellular & Wireless Networks', tag: 'Must Know', what: 'Cellular concept, frequency reuse, handoff, GSM, 3G/4G/5G evolution, WiFi (802.11), Bluetooth, LoRa.', how: 'Study the architecture of a 4G LTE network. Trace a call setup procedure.' },
        { title: 'Communication Systems Project', tag: 'Project', what: 'End-to-end simulation: transmitter, channel, receiver with modulation, coding, and BER analysis.', how: 'Build a complete digital communication simulator in MATLAB/Python and document results.' }
      ]}
    ]
  },
  {
    slug: 'analog-electronics',
    name: 'Analog Electronics',
    description: 'Master amplifiers, oscillators, and analog circuit design.',
    overview: 'Design and analyze continuous-signal electronic circuits.',
    relevance: 'Analog circuits are at the heart of every electronic device — from sensors to power management.',
    roles: 'Analog IC Designer · Circuit Design Engineer · Test Engineer',
    skills: 'BJT/MOSFET circuits, op-amps, feedback, oscillators, SPICE',
    companies: 'Analog Devices · Texas Instruments · NXP · Infineon',
    careers: 'Analog IC Design · Mixed-Signal Design',
    roadmap: [
      { phase: 'Semiconductor Devices', phaseNumber: 1, accent: '#24685e', bg: '#edf6f4', description: 'Understand the physics behind electronic components.', topics: [
        { title: 'Diodes & Applications', tag: 'Core', what: 'PN junction, V-I characteristics, Zener, Schottky, LED; rectifiers (half/full wave), clippers, clampers.', how: 'Build a full-wave rectifier circuit. Measure ripple voltage and compare with theory.' },
        { title: 'BJT — Bipolar Junction Transistor', tag: 'Core', what: 'NPN/PNP, regions of operation, biasing (fixed, voltage divider), small-signal model, h-parameters.', how: 'Design a voltage-divider biased BJT amplifier. Calculate gain and verify with simulation.' },
        { title: 'MOSFET Fundamentals', tag: 'Must Know', what: 'Enhancement/depletion MOSFET, CMOS basics, biasing, small-signal model, body effect, channel-length modulation.', how: 'Design a common-source MOSFET amplifier and simulate in LTspice.' }
      ]},
      { phase: 'Amplifier Circuits', phaseNumber: 2, accent: '#a94e3a', bg: '#fdf3f1', description: 'Design amplifiers for various applications.', topics: [
        { title: 'Single-Stage Amplifiers', tag: 'Must Know', what: 'Common-emitter, common-base, common-collector (BJT); CS, CG, CD (MOSFET); gain, input/output impedance.', how: 'Design and compare CE and CS amplifiers. Measure frequency response.' },
        { title: 'Multi-Stage & Differential Amplifiers', tag: 'Important', what: 'Cascading, cascode, Darlington pair, differential pair, CMRR, current mirrors, active loads.', how: 'Design a two-stage amplifier with a differential input stage. Simulate AC response.' },
        { title: 'Feedback & Stability', tag: 'Core', what: 'Negative feedback types (voltage/current, series/shunt), gain sensitivity, stability, Barkhausen criterion.', how: 'Apply negative feedback to an amplifier. Measure the improvement in bandwidth and distortion.' }
      ]},
      { phase: 'Op-Amps & Applications', phaseNumber: 3, accent: '#3a5ea9', bg: '#f1f4fd', description: 'Master the most versatile analog building block.', topics: [
        { title: 'Ideal & Real Op-Amp', tag: 'Core', what: 'Ideal characteristics, inverting/non-inverting configurations, summing amplifier, difference amplifier, instrumentation amp.', how: 'Build each basic op-amp configuration on breadboard. Measure gain and compare with theory.' },
        { title: 'Active Filters & Oscillators', tag: 'Must Know', what: 'First/second order active filters (Butterworth, Chebyshev), Wien bridge, RC phase-shift, Colpitts, Hartley oscillators.', how: 'Design a second-order Butterworth low-pass filter. Build and test a Wien bridge oscillator.' },
        { title: 'Waveform Generators & Converters', tag: 'Important', what: '555 timer (astable, monostable), Schmitt trigger, ADC/DAC architectures (SAR, flash, sigma-delta, R-2R).', how: 'Build a function generator using 555 timer and op-amp. Design a 4-bit R-2R DAC.' }
      ]},
      { phase: 'Advanced & Project', phaseNumber: 4, accent: '#7e3aa9', bg: '#f6f1fd', description: 'Apply analog design to real-world applications.', topics: [
        { title: 'Power Amplifiers & Regulators', tag: 'Important', what: 'Class A, B, AB, C, D amplifiers; efficiency comparison; linear regulators (78xx), switching regulators (buck, boost).', how: 'Design a Class AB audio amplifier. Compare efficiency with Class A.' },
        { title: 'SPICE Simulation', tag: 'Practical', what: 'LTspice/NgSpice setup, DC/AC/transient analysis, Monte Carlo simulation, parameterized sweeps.', how: 'Simulate a complete audio amplifier in LTspice including frequency response and THD analysis.' },
        { title: 'Analog Electronics Project', tag: 'Project', what: 'End-to-end analog project: audio amplifier, power supply design, or sensor interface circuit with PCB layout.', how: 'Design and build a portable audio amplifier. Document schematic, simulation, and measurements.' }
      ]}
    ]
  },
  {
    slug: 'embedded-systems',
    name: 'Embedded Systems',
    description: 'Program microcontrollers and design real-time embedded solutions.',
    overview: 'Hardware-software integration for dedicated computing applications.',
    relevance: 'Embedded systems power everything from smartphones to satellites — the intersection of hardware and software.',
    roles: 'Embedded Engineer · Firmware Developer · IoT Developer',
    skills: 'C/C++, ARM, RTOS, peripherals, debugging, PCB basics',
    companies: 'Bosch · Continental · Qualcomm · Samsung · STMicroelectronics',
    careers: 'Embedded Development · IoT · Automotive Electronics',
    roadmap: [
      { phase: 'Microcontroller Basics', phaseNumber: 1, accent: '#24685e', bg: '#edf6f4', description: 'Get started with embedded hardware and programming.', topics: [
        { title: 'Embedded C & Architecture', tag: 'Core', what: 'C for embedded (pointers, bit manipulation, volatile), Harvard vs von Neumann, CPU registers, memory-mapped I/O.', how: 'Write bare-metal LED blink and button read programs for Arduino/STM32.' },
        { title: 'GPIO, Timers & Interrupts', tag: 'Core', what: 'Digital I/O configuration, timer modes (PWM, input capture), interrupt handling, ISR design, debouncing.', how: 'Generate PWM for LED dimming. Write an interrupt-driven button counter.' },
        { title: 'Communication Protocols', tag: 'Must Know', what: 'UART, SPI, I2C — protocol details, timing, master-slave, interfacing sensors and displays.', how: 'Interface a temperature sensor (I2C) and an OLED display (SPI) with a microcontroller.' }
      ]},
      { phase: 'Peripherals & Interfacing', phaseNumber: 2, accent: '#a94e3a', bg: '#fdf3f1', description: 'Connect your microcontroller to the physical world.', topics: [
        { title: 'ADC, DAC & Sensor Interfacing', tag: 'Must Know', what: 'ADC resolution, sampling rate, sensor conditioning, DAC output, analog sensor interfacing (temperature, light, IMU).', how: 'Read an analog temperature sensor via ADC and display on LCD. Generate sine wave via DAC.' },
        { title: 'Motor Control & Actuators', tag: 'Important', what: 'DC motor, stepper motor, servo control, H-bridge, PWM speed control, PID basics for motor control.', how: 'Build a PID-controlled DC motor speed controller using PWM and encoder feedback.' },
        { title: 'Memory & Storage', tag: 'Important', what: 'Flash, EEPROM, SRAM; bootloader concepts, OTA updates, file systems (FAT) on SD card, wear leveling.', how: 'Implement data logging to SD card via SPI. Write/read EEPROM for configuration storage.' }
      ]},
      { phase: 'RTOS & Advanced', phaseNumber: 3, accent: '#3a5ea9', bg: '#f1f4fd', description: 'Build robust, real-time embedded applications.', topics: [
        { title: 'Real-Time Operating Systems (RTOS)', tag: 'Core', what: 'FreeRTOS, tasks, priorities, scheduling (preemptive, cooperative), semaphores, mutexes, queues, memory management.', how: 'Port FreeRTOS to STM32. Create multi-tasking application with semaphore synchronization.' },
        { title: 'Low-Power & Wireless', tag: 'Important', what: 'Sleep modes, power optimization, BLE, Zigbee, LoRa, WiFi modules (ESP32), MQTT for IoT.', how: 'Build a battery-powered sensor node that transmits data over BLE/WiFi every 10 seconds.' },
        { title: 'Debugging & Testing', tag: 'Practical', what: 'JTAG/SWD debugging, logic analyzer, oscilloscope usage, unit testing on embedded, CI/CD for firmware.', how: 'Debug a hard fault using SWD debugger. Set up automated tests for embedded code.' }
      ]},
      { phase: 'IoT & Project', phaseNumber: 4, accent: '#7e3aa9', bg: '#f6f1fd', description: 'Build complete embedded solutions.', topics: [
        { title: 'IoT Architecture & Cloud', tag: 'Important', what: 'IoT layered architecture, MQTT/CoAP protocols, cloud platforms (AWS IoT, Thingspeak), edge computing.', how: 'Connect an ESP32 to AWS IoT Core. Build a dashboard for sensor data visualization.' },
        { title: 'PCB Design Basics', tag: 'Advanced', what: 'Schematic capture, component selection, PCB layout rules, 2-layer design, DRC, Gerber files, assembly.', how: 'Design a simple sensor board PCB in KiCad. Generate Gerber files ready for fabrication.' },
        { title: 'Embedded Systems Project', tag: 'Project', what: 'Complete embedded project: smart home controller, weather station, or autonomous robot with MCU, sensors, and connectivity.', how: 'Build an IoT weather station with sensors, display, WiFi, and cloud dashboard. Document everything.' }
      ]}
    ]
  }
]

// ─────────────────────────── EEE Subjects ───────────────────────────
const eeeSubjects = [
  {
    slug: 'circuit-theory',
    name: 'Circuit Theory',
    description: 'Analyze and solve electrical circuits — the language of EEE.',
    overview: 'Fundamental laws and analysis techniques for electrical circuits.',
    relevance: 'Circuit analysis is the foundation of all electrical engineering — from power systems to electronics.',
    roles: 'Electrical Engineer · Power Systems Engineer · Circuit Designer',
    skills: 'KVL, KCL, mesh/nodal analysis, Thevenin, AC circuits',
    companies: 'Siemens · ABB · Schneider · L&T · BHEL',
    careers: 'Power Engineering · Electrical Design',
    roadmap: [
      { phase: 'DC Circuits', phaseNumber: 1, accent: '#24685e', bg: '#edf6f4', description: 'Master the fundamentals of DC circuit analysis.', topics: [
        { title: 'Ohm\'s Law, KVL & KCL', tag: 'Core', what: 'Voltage, current, resistance, Ohm\'s law, Kirchhoff\'s voltage and current laws, series/parallel combinations.', how: 'Solve 15 circuit problems using KVL and KCL. Build and verify 3 circuits on breadboard.' },
        { title: 'Mesh & Nodal Analysis', tag: 'Core', what: 'Mesh current method, supermesh, nodal voltage method, supernode, choosing the best method.', how: 'Solve a 4-mesh and a 5-node circuit. Compare results with simulation.' },
        { title: 'Network Theorems', tag: 'Must Know', what: 'Thevenin, Norton, superposition, maximum power transfer, reciprocity, Millman\'s theorem.', how: 'Find Thevenin equivalent for 5 circuits. Verify maximum power transfer experimentally.' },
        { title: 'Transient Analysis', tag: 'Important', what: 'First-order RL, RC circuits; time constant, natural/forced response; second-order RLC circuits, damping.', how: 'Analyze step response of RC and RLC circuits. Observe overdamped, underdamped, critically damped.' }
      ]},
      { phase: 'AC Circuits', phaseNumber: 2, accent: '#a94e3a', bg: '#fdf3f1', description: 'Extend analysis to alternating current systems.', topics: [
        { title: 'Phasors & Impedance', tag: 'Core', what: 'Phasor representation, complex impedance, reactance (XL, XC), impedance combinations, phasor diagrams.', how: 'Convert time-domain signals to phasors. Solve AC circuits using impedance method.' },
        { title: 'AC Power Analysis', tag: 'Must Know', what: 'Instantaneous, average, reactive, apparent power; power factor, power triangle, power factor correction.', how: 'Calculate power for RL and RLC circuits. Design a power factor correction capacitor bank.' },
        { title: 'Resonance & Filters', tag: 'Important', what: 'Series/parallel resonance, Q factor, bandwidth, passive filters (LP, HP, BP, BS), Bode plots.', how: 'Build series and parallel resonant circuits. Plot frequency response and identify resonant frequency.' }
      ]},
      { phase: 'Advanced Analysis', phaseNumber: 3, accent: '#3a5ea9', bg: '#f1f4fd', description: 'Handle complex networks and coupled circuits.', topics: [
        { title: 'Coupled Circuits & Transformers', tag: 'Must Know', what: 'Mutual inductance, coupling coefficient, dot convention, ideal transformer, equivalent circuits, turns ratio.', how: 'Analyze a coupled circuit using mesh analysis. Design a simple transformer and measure ratio.' },
        { title: 'Two-Port Networks', tag: 'Important', what: 'Z, Y, h, ABCD parameters, interconnection of two-ports, input/output impedance, reciprocity and symmetry.', how: 'Calculate all parameter sets for a given two-port network. Verify parameter conversions.' },
        { title: 'Laplace in Circuits', tag: 'Advanced', what: 'S-domain circuit analysis, transfer functions, impulse/step response, pole-zero analysis, stability.', how: 'Solve 5 transient circuit problems using Laplace transform. Plot step response from transfer function.' }
      ]},
      { phase: 'Simulation & Projects', phaseNumber: 4, accent: '#7e3aa9', bg: '#f6f1fd', description: 'Apply circuit theory with simulation tools.', topics: [
        { title: 'SPICE & Simulation', tag: 'Practical', what: 'Circuit simulation tools (LTspice, PSPICE), DC/AC/transient analysis, parameter sweeps, Monte Carlo.', how: 'Simulate all circuits from previous phases in LTspice. Compare with hand calculations.' },
        { title: 'Three-Phase Circuits', tag: 'Must Know', what: 'Star/delta connections, line vs phase quantities, balanced/unbalanced loads, 3-phase power measurement.', how: 'Analyze a 3-phase balanced load. Calculate power using two-wattmeter method.' },
        { title: 'Circuit Theory Project', tag: 'Project', what: 'Design project: power supply, filter network, or impedance matching network with full analysis and simulation.', how: 'Design a regulated DC power supply from mains. Simulate, build, and document.' }
      ]}
    ]
  },
  {
    slug: 'electrical-machines',
    name: 'Electrical Machines',
    description: 'Understand motors, generators, and transformers that power the world.',
    overview: 'Electromechanical energy conversion — the machines that run industry.',
    relevance: 'Electrical machines are everywhere — from industrial motors to electric vehicles and power generation.',
    roles: 'Machine Design Engineer · Power Engineer · Drive Systems Engineer',
    skills: 'Transformers, DC/AC machines, drives, energy conversion',
    companies: 'ABB · Siemens · BHEL · Hitachi · GE',
    careers: 'Power Systems · Electric Vehicle Design · Industrial Automation',
    roadmap: [
      { phase: 'Transformer Theory', phaseNumber: 1, accent: '#24685e', bg: '#edf6f4', description: 'Master the static energy conversion device.', topics: [
        { title: 'Single-Phase Transformer', tag: 'Core', what: 'Construction, EMF equation, ideal vs real transformer, equivalent circuit, losses, efficiency, regulation.', how: 'Perform OC and SC tests on a transformer. Calculate efficiency and regulation.' },
        { title: 'Three-Phase Transformers', tag: 'Must Know', what: 'Winding connections (Δ-Y, Y-Δ, Y-Y, Δ-Δ), vector groups, parallel operation, auto-transformer, Scott connection.', how: 'Analyze 3-phase transformer connections. Compare voltage regulation for each.' },
        { title: 'Special Transformers', tag: 'Important', what: 'Auto-transformer, current transformer, potential transformer, pulse transformers, tap-changing transformers.', how: 'Study the application of CT and PT in power system protection.' }
      ]},
      { phase: 'DC Machines', phaseNumber: 2, accent: '#a94e3a', bg: '#fdf3f1', description: 'Learn the original electromechanical machines.', topics: [
        { title: 'DC Generator', tag: 'Core', what: 'Construction, EMF equation, armature reaction, commutation, types (shunt, series, compound), characteristics.', how: 'Plot OCC and external characteristics of a DC shunt generator from lab data.' },
        { title: 'DC Motor', tag: 'Must Know', what: 'Back EMF, torque equation, speed control methods (armature, field, voltage), types, braking, applications.', how: 'Perform speed control of DC motor using armature voltage method. Plot speed-torque characteristics.' },
        { title: 'Testing & Efficiency', tag: 'Important', what: 'Swinburne\'s test, Hopkinson\'s test, brake test, retardation test, losses and efficiency calculation.', how: 'Conduct Swinburne\'s test to pre-determine efficiency at various loads.' }
      ]},
      { phase: 'AC Machines', phaseNumber: 3, accent: '#3a5ea9', bg: '#f1f4fd', description: 'Understand the workhorses of modern power systems.', topics: [
        { title: 'Induction Motor', tag: 'Core', what: 'Construction, rotating magnetic field, slip, equivalent circuit, torque-speed characteristics, starting methods.', how: 'Perform no-load and blocked rotor tests. Plot torque-speed curve of a 3-phase induction motor.' },
        { title: 'Synchronous Machine', tag: 'Must Know', what: 'Construction, EMF equation, phasor diagram, voltage regulation (EMF, MMF, ZPF methods), synchronization.', how: 'Determine voltage regulation using EMF and MMF methods from OC and SC test data.' },
        { title: 'Single-Phase Motors', tag: 'Important', what: 'Split-phase, capacitor-start, shaded-pole, universal motor; double revolving field theory, applications.', how: 'Study starting mechanisms of different single-phase motors. Compare starting torques.' }
      ]},
      { phase: 'Drives & Projects', phaseNumber: 4, accent: '#7e3aa9', bg: '#f6f1fd', description: 'Apply machine theory to modern drive systems.', topics: [
        { title: 'Electric Drives & Speed Control', tag: 'Must Know', what: 'V/f control, vector control, PWM inverters, chopper-fed DC drives, regenerative braking, VFD basics.', how: 'Simulate V/f control of induction motor in MATLAB/Simulink. Observe speed response.' },
        { title: 'Electric Vehicle Motors', tag: 'Advanced', what: 'BLDC, PMSM, SRM for EVs; regenerative braking, motor selection criteria, thermal management.', how: 'Compare BLDC and PMSM for EV application. Simulate motor performance curves.' },
        { title: 'Electrical Machines Project', tag: 'Project', what: 'Design project: motor drive system, transformer design, or EV powertrain analysis with simulation.', how: 'Design a complete VFD-controlled induction motor drive. Simulate and document performance.' }
      ]}
    ]
  },
  {
    slug: 'power-systems',
    name: 'Power Systems',
    description: 'Generate, transmit, and distribute electrical energy reliably.',
    overview: 'The infrastructure that delivers electricity from power plants to consumers.',
    relevance: 'Power systems engineering ensures reliable electricity supply — critical for modern society.',
    roles: 'Power Systems Engineer · Grid Engineer · Renewable Energy Engineer',
    skills: 'Load flow, fault analysis, protection, SCADA, renewable integration',
    companies: 'Power Grid Corp · NTPC · Siemens Energy · GE · Adani Green',
    careers: 'Power Generation · Grid Operations · Renewable Energy',
    roadmap: [
      { phase: 'Power Generation', phaseNumber: 1, accent: '#24685e', bg: '#edf6f4', description: 'Understand how electricity is generated.', topics: [
        { title: 'Power Plant Types', tag: 'Core', what: 'Thermal, hydro, nuclear, solar, wind power plants; efficiency, capacity factor, load curve, load duration curve.', how: 'Compare efficiency and economics of different power plant types. Study a local plant.' },
        { title: 'Transmission Line Parameters', tag: 'Core', what: 'Resistance, inductance, capacitance per unit length; GMD/GMR calculations, skin effect, bundled conductors.', how: 'Calculate line parameters for a given transmission line configuration.' },
        { title: 'Transmission Line Models', tag: 'Must Know', what: 'Short, medium (pi, T model), long line models; ABCD parameters, voltage regulation, surge impedance, SIL.', how: 'Analyze a medium transmission line using pi model. Calculate voltage regulation and efficiency.' }
      ]},
      { phase: 'Power System Analysis', phaseNumber: 2, accent: '#a94e3a', bg: '#fdf3f1', description: 'Analyze power system behavior mathematically.', topics: [
        { title: 'Per-Unit System', tag: 'Must Know', what: 'Base quantities, per-unit conversion, advantages, multi-machine per-unit calculations, impedance diagrams.', how: 'Convert a 3-bus power system to per-unit representation. Solve using per-unit method.' },
        { title: 'Load Flow Analysis', tag: 'Core', what: 'Bus types (slack, PV, PQ), Gauss-Seidel, Newton-Raphson, FDLF methods; convergence, bus power equations.', how: 'Solve a 3-bus load flow problem using Newton-Raphson method by hand and verify with software.' },
        { title: 'Fault Analysis', tag: 'Core', what: 'Symmetrical faults (3-phase), asymmetrical faults (LG, LL, LLG), symmetrical components, sequence networks.', how: 'Calculate fault current for LG and 3-phase faults. Draw sequence networks for a given system.' }
      ]},
      { phase: 'Protection & Stability', phaseNumber: 3, accent: '#3a5ea9', bg: '#f1f4fd', description: 'Protect the system and maintain stability.', topics: [
        { title: 'Power System Protection', tag: 'Must Know', what: 'Relay types (overcurrent, distance, differential), CT/PT, circuit breakers, fuse, protection coordination.', how: 'Design overcurrent protection for a radial distribution system. Coordinate relay settings.' },
        { title: 'Power System Stability', tag: 'Important', what: 'Rotor angle stability, swing equation, equal area criterion, transient/steady-state stability, voltage stability.', how: 'Analyze transient stability using equal area criterion for a fault scenario.' },
        { title: 'Economic Dispatch', tag: 'Important', what: 'Economic load dispatch, merit order, Lagrangian method, unit commitment, optimal power flow basics.', how: 'Solve economic dispatch for 3 generators using Lagrangian multiplier method.' }
      ]},
      { phase: 'Modern Power & Projects', phaseNumber: 4, accent: '#7e3aa9', bg: '#f6f1fd', description: 'Explore renewable integration and smart grids.', topics: [
        { title: 'Renewable Energy Integration', tag: 'Must Know', what: 'Solar PV systems, wind turbines, grid-connected inverters, MPPT, energy storage, microgrid concepts.', how: 'Design a grid-connected solar PV system. Calculate annual energy yield and payback period.' },
        { title: 'Smart Grid & SCADA', tag: 'Advanced', what: 'Smart grid architecture, smart meters, demand response, SCADA systems, IEC 61850, cyber security.', how: 'Study SCADA architecture for a substation. Understand IEC 61850 communication standards.' },
        { title: 'Power Systems Project', tag: 'Project', what: 'Power system analysis project: load flow, fault study, or protection coordination using simulation tools.', how: 'Perform complete power system analysis (load flow + fault analysis) using ETAP/PowerWorld. Document results.' }
      ]}
    ]
  },
  {
    slug: 'control-systems',
    name: 'Control Systems',
    description: 'Design systems that regulate and automate processes.',
    overview: 'Mathematical tools for analyzing and designing feedback control systems.',
    relevance: 'Control theory underpins automation, robotics, industrial processes, and modern engineering systems.',
    roles: 'Control Engineer · Automation Engineer · Robotics Engineer',
    skills: 'Transfer functions, stability, PID, Bode plots, state-space',
    companies: 'ABB · Honeywell · Emerson · Rockwell · Siemens',
    careers: 'Process Automation · Robotics · Industrial Control',
    roadmap: [
      { phase: 'System Modeling', phaseNumber: 1, accent: '#24685e', bg: '#edf6f4', description: 'Model physical systems mathematically.', topics: [
        { title: 'Transfer Functions & Block Diagrams', tag: 'Core', what: 'Laplace transform, transfer function derivation, block diagram algebra, signal flow graphs, Mason\'s gain formula.', how: 'Model an electromechanical system. Reduce a complex block diagram using algebra and Mason\'s formula.' },
        { title: 'Time Response Analysis', tag: 'Core', what: 'First/second order system response, rise time, settling time, overshoot, steady-state error, error constants.', how: 'Analyze step response of second-order systems with varying damping ratios. Plot in MATLAB.' },
        { title: 'Feedback Control Concepts', tag: 'Must Know', what: 'Open vs closed-loop, feedback effects on gain/stability/sensitivity, system types (0, 1, 2), error coefficients.', how: 'Compare open-loop and closed-loop response. Calculate steady-state error for different input types.' }
      ]},
      { phase: 'Stability Analysis', phaseNumber: 2, accent: '#a94e3a', bg: '#fdf3f1', description: 'Determine if a system is stable and how to make it so.', topics: [
        { title: 'Routh-Hurwitz Criterion', tag: 'Must Know', what: 'Routh array construction, special cases, determining stability, range of K for stability, auxiliary polynomial.', how: 'Apply R-H criterion to 5 systems. Find the range of gain K for stability.' },
        { title: 'Root Locus', tag: 'Core', what: 'Rules for sketching, breakaway/break-in points, angle of departure/arrival, gain margin from root locus.', how: 'Sketch root locus for 5 systems. Verify using MATLAB rlocus command.' },
        { title: 'Bode Plot & Frequency Response', tag: 'Must Know', what: 'Magnitude/phase plots, gain/phase margin, stability from Bode, Nyquist criterion, polar plots.', how: 'Draw Bode plots for 5 transfer functions. Determine stability using gain and phase margins.' }
      ]},
      { phase: 'Controller Design', phaseNumber: 3, accent: '#3a5ea9', bg: '#f1f4fd', description: 'Design controllers to meet performance specifications.', topics: [
        { title: 'PID Controller', tag: 'Core', what: 'P, PI, PD, PID actions; tuning methods (Ziegler-Nichols, Cohen-Coon), practical PID implementation.', how: 'Tune a PID controller for a DC motor speed control system. Compare different tuning methods.' },
        { title: 'Compensator Design', tag: 'Important', what: 'Lead, lag, lead-lag compensators; design using root locus, design using Bode plot, specifications mapping.', how: 'Design a lead compensator to improve phase margin. Verify improvement in Bode plot.' },
        { title: 'State-Space Methods', tag: 'Advanced', what: 'State variables, state equations, controllability, observability, pole placement, state observer design.', how: 'Design a state-feedback controller for an inverted pendulum. Simulate in MATLAB.' }
      ]},
      { phase: 'Advanced & Projects', phaseNumber: 4, accent: '#7e3aa9', bg: '#f6f1fd', description: 'Explore modern control techniques.', topics: [
        { title: 'Digital Control Systems', tag: 'Important', what: 'Sampling, ZOH, Z-transform, pulse transfer function, digital PID, jury stability, bilinear transform.', how: 'Implement a digital PID controller on Arduino. Compare with analog simulation.' },
        { title: 'Modern Control Topics', tag: 'Advanced', what: 'Optimal control (LQR), robust control basics, fuzzy logic control, neural network control overview.', how: 'Design an LQR controller for a cart-pole system. Compare with classical PID.' },
        { title: 'Control Systems Project', tag: 'Project', what: 'Control project: ball-balancing, drone stabilization, or process control system with hardware implementation.', how: 'Build a ball-on-plate balancing system using PID control. Document design and results.' }
      ]}
    ]
  },
  {
    slug: 'power-electronics',
    name: 'Power Electronics',
    description: 'Convert and control electrical power using semiconductor devices.',
    overview: 'Efficient power conversion for drives, renewables, and power supplies.',
    relevance: 'Power electronics is key to EVs, solar inverters, UPS systems, and industrial drives.',
    roles: 'Power Electronics Engineer · Drive Engineer · Renewable Energy Engineer',
    skills: 'Converters, inverters, MOSFET/IGBT, PWM, motor drives',
    companies: 'ABB · Siemens · Danfoss · Delta Electronics · Infineon',
    careers: 'Electric Vehicles · Renewable Energy · Industrial Drives',
    roadmap: [
      { phase: 'Power Semiconductor Devices', phaseNumber: 1, accent: '#24685e', bg: '#edf6f4', description: 'Understand the switching devices that enable power conversion.', topics: [
        { title: 'Power Diodes & Thyristors', tag: 'Core', what: 'Power diode characteristics, SCR construction and operation, triggering methods, commutation, gate turn-off thyristor (GTO).', how: 'Study V-I characteristics of SCR. Build a simple SCR-based power control circuit.' },
        { title: 'MOSFET & IGBT', tag: 'Must Know', what: 'Power MOSFET vs IGBT comparison, switching characteristics, gate drivers, thermal considerations, safe operating area.', how: 'Compare switching losses of MOSFET and IGBT. Design a gate driver circuit.' },
        { title: 'Snubber & Protection Circuits', tag: 'Important', what: 'dv/dt and di/dt protection, RC snubber design, thermal management, heat sink design, SOA protection.', how: 'Design an RC snubber for an SCR circuit. Calculate heat sink thermal resistance requirements.' }
      ]},
      { phase: 'AC-DC & DC-DC Converters', phaseNumber: 2, accent: '#a94e3a', bg: '#fdf3f1', description: 'Convert power between AC and DC efficiently.', topics: [
        { title: 'Controlled Rectifiers', tag: 'Core', what: 'Single-phase and three-phase controlled rectifiers, half/full bridge, continuous/discontinuous conduction, power factor.', how: 'Simulate single-phase and three-phase controlled rectifiers. Analyze output voltage vs firing angle.' },
        { title: 'DC-DC Converters', tag: 'Must Know', what: 'Buck, boost, buck-boost topologies; CCM/DCM operation, duty cycle, output voltage ripple, inductor/capacitor selection.', how: 'Design a buck converter for 12V to 5V conversion. Simulate and verify ripple requirements.' },
        { title: 'Isolated Converters', tag: 'Important', what: 'Flyback, forward, push-pull, half-bridge, full-bridge converters; transformer design, magnetic components.', how: 'Design a flyback converter for phone charger specifications. Simulate in LTspice.' }
      ]},
      { phase: 'DC-AC Inverters', phaseNumber: 3, accent: '#3a5ea9', bg: '#f1f4fd', description: 'Convert DC to AC for motor drives and grid applications.', topics: [
        { title: 'Single & Three-Phase Inverters', tag: 'Core', what: 'Half-bridge, full-bridge inverters; PWM techniques (SPWM, SVPWM), harmonic analysis, filter design.', how: 'Simulate a 3-phase SPWM inverter. Analyze output voltage harmonics and design LC filter.' },
        { title: 'Motor Drive Applications', tag: 'Must Know', what: 'V/f control, FOC, DTC for induction motors; BLDC drive, regenerative braking, four-quadrant operation.', how: 'Simulate V/f control of a 3-phase induction motor using PWM inverter in Simulink.' },
        { title: 'Grid-Tied Inverters', tag: 'Important', what: 'Solar inverters, MPPT algorithms (P&O, InC), anti-islanding, grid synchronization, power quality standards.', how: 'Design a single-phase grid-tied solar inverter with MPPT. Simulate grid synchronization.' }
      ]},
      { phase: 'Advanced & Project', phaseNumber: 4, accent: '#7e3aa9', bg: '#f6f1fd', description: 'Apply power electronics to cutting-edge applications.', topics: [
        { title: 'EV Charging & Battery Management', tag: 'Advanced', what: 'On-board/off-board chargers, bidirectional converters, BMS, cell balancing, V2G concept, wireless charging.', how: 'Design a bidirectional DC-DC converter for EV battery charging. Simulate charging profiles.' },
        { title: 'Simulation Tools (MATLAB/PLECS)', tag: 'Practical', what: 'MATLAB Simulink, Simscape Power Systems, PLECS, thermal simulation, converter design automation.', how: 'Build a complete motor drive system in Simulink with power electronics, motor, and control.' },
        { title: 'Power Electronics Project', tag: 'Project', what: 'Design project: solar inverter, EV charger, motor drive, or SMPS with simulation and optional hardware.', how: 'Build a solar MPPT charge controller with buck converter. Document design, simulation, and results.' }
      ]}
    ]
  }
]

// ─────────────────────────── ME Subjects ───────────────────────────
const meSubjects = [
  {
    slug: 'engineering-mechanics',
    name: 'Engineering Mechanics',
    description: 'Analyze forces, motion, and equilibrium in mechanical systems.',
    overview: 'The physics of forces and motion applied to engineering structures and machines.',
    relevance: 'Foundation for all mechanical design, structural analysis, and dynamic system design.',
    roles: 'Design Engineer · Structural Analyst · R&D Engineer',
    skills: 'Statics, dynamics, free body diagrams, friction, kinematics',
    companies: 'Tata Motors · L&T · ISRO · Boeing · Caterpillar',
    careers: 'Mechanical Design · Structural Engineering',
    roadmap: [
      { phase: 'Statics', phaseNumber: 1, accent: '#24685e', bg: '#edf6f4', description: 'Analyze bodies in equilibrium.', topics: [
        { title: 'Force Systems & Equilibrium', tag: 'Core', what: 'Force vectors, moments, couples, resultants, free body diagrams, equilibrium equations (2D and 3D).', how: 'Draw FBDs for 10 real structures. Solve equilibrium equations for each.' },
        { title: 'Friction & Its Applications', tag: 'Must Know', what: 'Dry friction, coefficient of friction, wedge, belt friction, screw jack, disc/pivot friction.', how: 'Analyze a belt-pulley system. Calculate minimum force to prevent slipping on an inclined plane.' },
        { title: 'Centroids & Moments of Inertia', tag: 'Must Know', what: 'Centroid of composite areas, first/second moment of area, parallel axis theorem, radius of gyration.', how: 'Calculate MOI for 5 composite cross-sections. Verify using integration methods.' }
      ]},
      { phase: 'Dynamics', phaseNumber: 2, accent: '#a94e3a', bg: '#fdf3f1', description: 'Analyze bodies in motion.', topics: [
        { title: 'Kinematics of Particles', tag: 'Core', what: 'Rectilinear/curvilinear motion, projectile, relative motion, dependent motion, normal-tangential coordinates.', how: 'Solve 10 kinematics problems involving projectiles and relative motion.' },
        { title: 'Kinetics — Newton\'s Laws', tag: 'Must Know', what: 'F=ma applications, dynamic equilibrium, pulley systems, banked curves, spring-mass systems.', how: 'Analyze the motion of connected bodies on inclined planes with friction.' },
        { title: 'Work, Energy & Impulse', tag: 'Important', what: 'Work-energy theorem, conservation of energy, impulse-momentum, coefficient of restitution, impact.', how: 'Solve collision problems using conservation laws. Compare elastic and inelastic impacts.' }
      ]},
      { phase: 'Rigid Body Dynamics', phaseNumber: 3, accent: '#3a5ea9', bg: '#f1f4fd', description: 'Extend dynamics to rotating and translating rigid bodies.', topics: [
        { title: 'Rotation of Rigid Bodies', tag: 'Core', what: 'Angular kinematics, moment of inertia (mass), angular momentum, torque equations, gyroscope basics.', how: 'Analyze rotation of a flywheel under applied torque. Calculate angular acceleration and momentum.' },
        { title: 'Vibrations Introduction', tag: 'Important', what: 'Free vibration, damped vibration, forced vibration, natural frequency, resonance, vibration isolation.', how: 'Model a single-DOF spring-mass-damper system. Observe response for different damping ratios.' },
        { title: 'Virtual Work & Stability', tag: 'Advanced', what: 'Principle of virtual work, virtual displacements, stability of equilibrium, potential energy method.', how: 'Use virtual work to solve equilibrium of linkage mechanisms.' }
      ]},
      { phase: 'Applications & Project', phaseNumber: 4, accent: '#7e3aa9', bg: '#f6f1fd', description: 'Apply mechanics to real engineering problems.', topics: [
        { title: 'Mechanism Analysis', tag: 'Important', what: 'Four-bar linkage, slider-crank, velocity/acceleration analysis, instant centers, mechanical advantage.', how: 'Analyze a four-bar mechanism. Find velocity and acceleration of each link using graphical method.' },
        { title: 'FEA Basics', tag: 'Advanced', what: 'Introduction to finite element analysis, meshing, boundary conditions, stress analysis using software (ANSYS basics).', how: 'Set up a simple 2D stress analysis problem in ANSYS. Compare with analytical solution.' },
        { title: 'Mechanics Project', tag: 'Project', what: 'Design and analysis project: truss bridge, crane, or mechanism with hand calculations and FEA verification.', how: 'Design a truss bridge for given load specifications. Analyze using both manual and FEA methods.' }
      ]}
    ]
  },
  {
    slug: 'thermodynamics',
    name: 'Thermodynamics',
    description: 'Understand energy transformations that drive engines and power plants.',
    overview: 'The science of energy, heat, and work in engineering systems.',
    relevance: 'Core to power generation, HVAC, refrigeration, IC engines, and sustainable energy systems.',
    roles: 'Thermal Engineer · HVAC Engineer · Power Plant Engineer',
    skills: 'Laws of thermodynamics, cycles, properties, psychrometry',
    companies: 'GE · Siemens · Carrier · Daikin · NTPC',
    careers: 'Power Generation · HVAC · Automotive Engineering',
    roadmap: [
      { phase: 'Fundamentals', phaseNumber: 1, accent: '#24685e', bg: '#edf6f4', description: 'Build the conceptual foundation of thermodynamics.', topics: [
        { title: 'Basic Concepts & Zeroth Law', tag: 'Core', what: 'System types, properties, state, process, cycle, equilibrium, zeroth law, temperature scales, thermometers.', how: 'Classify 10 engineering systems and their boundaries. Identify state variables for each.' },
        { title: 'First Law of Thermodynamics', tag: 'Core', what: 'Energy conservation, internal energy, enthalpy, specific heats, first law for closed/open systems, SFEE.', how: 'Apply first law to 10 different systems (turbines, compressors, nozzles, heat exchangers).' },
        { title: 'Second Law & Entropy', tag: 'Core', what: 'Kelvin-Planck and Clausius statements, Carnot cycle, entropy, T-s diagram, irreversibility, exergy analysis.', how: 'Calculate entropy change for various processes. Determine Carnot efficiency for given conditions.' }
      ]},
      { phase: 'Properties & Cycles', phaseNumber: 2, accent: '#a94e3a', bg: '#fdf3f1', description: 'Work with real substances and power cycles.', topics: [
        { title: 'Properties of Pure Substances', tag: 'Must Know', what: 'Phase diagrams, steam tables, superheated/subcooled states, quality, Mollier diagram, interpolation.', how: 'Use steam tables to solve 10 problems involving mixed-phase and superheated steam.' },
        { title: 'Gas Power Cycles', tag: 'Must Know', what: 'Otto, Diesel, Dual, Brayton cycles; air standard analysis, efficiency, mean effective pressure, comparison.', how: 'Analyze Otto and Diesel cycles. Compare efficiencies for same compression ratio.' },
        { title: 'Vapor Power Cycles', tag: 'Important', what: 'Rankine cycle, reheat, regeneration, feedwater heaters, combined cycle, cogeneration, supercritical cycles.', how: 'Design a Rankine cycle with reheat and regeneration. Calculate efficiency improvement.' }
      ]},
      { phase: 'Refrigeration & Mixtures', phaseNumber: 3, accent: '#3a5ea9', bg: '#f1f4fd', description: 'Apply thermodynamics to cooling and gas mixtures.', topics: [
        { title: 'Refrigeration Cycles', tag: 'Must Know', what: 'Vapor compression cycle, COP, refrigerants, vapor absorption cycle, heat pump, cascade systems.', how: 'Analyze a VCR cycle on P-h diagram. Compare COP with different refrigerants.' },
        { title: 'Psychrometry', tag: 'Important', what: 'Psychrometric chart, humidity, dew point, wet bulb, HVAC processes (heating, cooling, humidification, mixing).', how: 'Design an air conditioning system using psychrometric chart. Calculate cooling load.' },
        { title: 'Gas Mixtures & Combustion', tag: 'Important', what: 'Dalton\'s/Amagat\'s law, air-fuel ratio, adiabatic flame temperature, enthalpy of combustion, flue gas analysis.', how: 'Calculate air-fuel ratio for complete combustion of methane. Analyze flue gas composition.' }
      ]},
      { phase: 'Advanced & Project', phaseNumber: 4, accent: '#7e3aa9', bg: '#f6f1fd', description: 'Explore advanced topics and applications.', topics: [
        { title: 'IC Engines', tag: 'Must Know', what: 'SI and CI engine cycles, valve timing, carburetion/fuel injection, performance parameters, emissions, turbocharging.', how: 'Analyze performance curves of an SI engine from test data. Compare with ideal Otto cycle.' },
        { title: 'Renewable Energy Thermodynamics', tag: 'Advanced', what: 'Solar thermal systems, geothermal, biomass, fuel cells, hydrogen energy, thermodynamic analysis of renewables.', how: 'Analyze a solar thermal power plant. Calculate collector efficiency and overall system COP.' },
        { title: 'Thermodynamics Project', tag: 'Project', what: 'Design project: power plant analysis, HVAC system design, or IC engine performance study with calculations.', how: 'Design a combined cycle power plant. Calculate efficiency and compare with simple cycles.' }
      ]}
    ]
  },
  {
    slug: 'strength-of-materials',
    name: 'Strength of Materials',
    description: 'Analyze stress, strain, and deformation in engineering components.',
    overview: 'How materials respond to forces — essential for safe structural design.',
    relevance: 'Critical for designing safe, efficient machine components and structures.',
    roles: 'Structural Engineer · Design Engineer · FEA Analyst',
    skills: 'Stress analysis, beam bending, torsion, deflection, failure theories',
    companies: 'Tata Steel · L&T · ISRO · Boeing · Mahindra',
    careers: 'Structural Design · Product Design · Manufacturing',
    roadmap: [
      { phase: 'Stress & Strain', phaseNumber: 1, accent: '#24685e', bg: '#edf6f4', description: 'Understand how materials respond to loads.', topics: [
        { title: 'Simple Stress & Strain', tag: 'Core', what: 'Normal and shear stress, strain, Hooke\'s law, stress-strain diagram, elastic constants, Poisson\'s ratio.', how: 'Analyze stress in 10 loaded bars. Draw stress-strain curves from tensile test data.' },
        { title: 'Thermal Stresses', tag: 'Must Know', what: 'Thermal expansion, composite bars, temperature stresses in restrained members, stepped bars.', how: 'Calculate thermal stress in a composite bar with different materials and temperatures.' },
        { title: 'Compound Stresses', tag: 'Must Know', what: 'Biaxial stress, Mohr\'s circle, principal stresses, maximum shear stress, oblique planes.', how: 'Construct Mohr\'s circle for 5 stress states. Find principal stresses and maximum shear.' }
      ]},
      { phase: 'Beams & Bending', phaseNumber: 2, accent: '#a94e3a', bg: '#fdf3f1', description: 'Analyze beams under various loading conditions.', topics: [
        { title: 'Shear Force & Bending Moment', tag: 'Core', what: 'SFD and BMD for cantilever, simply supported, and overhanging beams; point loads, UDL, varying loads.', how: 'Draw SFD and BMD for 10 different beam loading cases. Identify maximum values.' },
        { title: 'Bending Stress', tag: 'Must Know', what: 'Flexure formula (M/I = σ/y), neutral axis, section modulus, composite beams, unsymmetrical bending.', how: 'Calculate bending stress for I, T, and L section beams. Design a beam for given load.' },
        { title: 'Deflection of Beams', tag: 'Important', what: 'Double integration, Macaulay\'s method, moment area, conjugate beam, superposition for deflection.', how: 'Calculate deflection at key points using multiple methods. Compare accuracy.' }
      ]},
      { phase: 'Torsion & Columns', phaseNumber: 3, accent: '#3a5ea9', bg: '#f1f4fd', description: 'Analyze shafts and compression members.', topics: [
        { title: 'Torsion of Shafts', tag: 'Core', what: 'Torsion formula (T/J = τ/r = Gθ/L), hollow/solid shafts, power transmission, combined bending and torsion.', how: 'Design a shaft for given power and speed specifications. Calculate angle of twist.' },
        { title: 'Springs & Pressure Vessels', tag: 'Important', what: 'Helical springs (Wahl factor, stiffness), thin/thick cylinders, Lame\'s equations, compound cylinders.', how: 'Design a helical spring for given load and deflection. Analyze stresses in a pressure vessel.' },
        { title: 'Columns & Buckling', tag: 'Must Know', what: 'Euler\'s formula, effective length, slenderness ratio, Rankine\'s formula, Johnson\'s formula, column design.', how: 'Calculate critical buckling load for columns with different end conditions.' }
      ]},
      { phase: 'Advanced & Project', phaseNumber: 4, accent: '#7e3aa9', bg: '#f6f1fd', description: 'Apply SOM to real design problems.', topics: [
        { title: 'Theories of Failure', tag: 'Must Know', what: 'Maximum stress, maximum strain, maximum shear stress (Tresca), von Mises, Mohr\'s theory; application to design.', how: 'Apply all failure theories to a given loading case. Compare failure predictions.' },
        { title: 'Energy Methods', tag: 'Advanced', what: 'Strain energy, resilience, Castigliano\'s theorem, unit load method, complementary energy, impact loading.', how: 'Solve 5 deflection problems using Castigliano\'s theorem. Compare with other methods.' },
        { title: 'SOM Project', tag: 'Project', what: 'Design project: machine component design with stress analysis, FEA verification, and material selection.', how: 'Design a pressure vessel or crane hook. Perform hand calculations and verify with FEA.' }
      ]}
    ]
  },
  {
    slug: 'fluid-mechanics',
    name: 'Fluid Mechanics',
    description: 'Analyze fluid behavior in pipes, channels, and around objects.',
    overview: 'The science of fluids at rest and in motion — essential for many ME applications.',
    relevance: 'Core to hydraulics, aerodynamics, HVAC, turbomachinery, and environmental engineering.',
    roles: 'CFD Engineer · Hydraulics Engineer · Aerodynamics Engineer',
    skills: 'Fluid statics, Bernoulli, Navier-Stokes, pipe flow, CFD',
    companies: 'ISRO · HAL · Airbus · Shell · Thermax',
    careers: 'Aerospace · Oil & Gas · HVAC · Automotive',
    roadmap: [
      { phase: 'Fluid Statics', phaseNumber: 1, accent: '#24685e', bg: '#edf6f4', description: 'Analyze fluids at rest.', topics: [
        { title: 'Properties & Pressure', tag: 'Core', what: 'Density, viscosity, surface tension, compressibility; Pascal\'s law, hydrostatic pressure, manometry, barometry.', how: 'Solve 10 manometer problems. Calculate forces on submerged surfaces.' },
        { title: 'Forces on Submerged Bodies', tag: 'Must Know', what: 'Hydrostatic force on plane/curved surfaces, center of pressure, buoyancy, Archimedes\' principle, metacenter.', how: 'Calculate hydrostatic force on a dam gate. Determine stability of a floating vessel.' },
        { title: 'Fluid Kinematics', tag: 'Core', what: 'Lagrangian/Eulerian description, streamlines, pathlines, streaklines, velocity field, acceleration, vorticity.', how: 'Plot streamlines for given velocity fields. Calculate acceleration at specific points.' }
      ]},
      { phase: 'Fluid Dynamics', phaseNumber: 2, accent: '#a94e3a', bg: '#fdf3f1', description: 'Analyze fluids in motion.', topics: [
        { title: 'Bernoulli\'s Equation', tag: 'Core', what: 'Energy equation, Bernoulli\'s theorem, applications (Venturimeter, pitot tube, orifice), limitations.', how: 'Design a Venturimeter. Calculate flow rate using Bernoulli\'s equation and discharge coefficient.' },
        { title: 'Momentum Equation', tag: 'Must Know', what: 'Linear momentum, forces on pipe bends, jet impact on vanes (flat, curved, moving), rocket propulsion basics.', how: 'Calculate forces on a pipe bend. Analyze jet impact on a series of curved vanes.' },
        { title: 'Dimensional Analysis', tag: 'Important', what: 'Buckingham Pi theorem, Rayleigh method, dimensionless numbers (Re, Fr, Ma, Eu), similitude and modeling.', how: 'Derive dimensionless groups for pipe flow. Design a model test using similitude laws.' }
      ]},
      { phase: 'Viscous Flow', phaseNumber: 3, accent: '#3a5ea9', bg: '#f1f4fd', description: 'Handle real fluid effects.', topics: [
        { title: 'Laminar & Turbulent Pipe Flow', tag: 'Core', what: 'Reynolds number, Hagen-Poiseuille flow, Moody chart, Darcy-Weisbach, minor losses, pipe networks.', how: 'Design a pipe system for given flow rate. Calculate total head loss using Moody chart.' },
        { title: 'Boundary Layer Theory', tag: 'Important', what: 'Boundary layer concept, displacement/momentum thickness, von Karman equation, separation, drag.', how: 'Calculate boundary layer thickness over a flat plate. Determine drag force.' },
        { title: 'Open Channel Flow', tag: 'Important', what: 'Chezy/Manning equations, most economical sections, specific energy, hydraulic jump, critical flow.', how: 'Design the most economical trapezoidal channel. Analyze a hydraulic jump.' }
      ]},
      { phase: 'Applications & Project', phaseNumber: 4, accent: '#7e3aa9', bg: '#f6f1fd', description: 'Apply fluid mechanics to engineering systems.', topics: [
        { title: 'Turbomachinery', tag: 'Must Know', what: 'Centrifugal/axial pumps, Euler\'s equation, specific speed, cavitation, NPSH, performance curves, turbines.', how: 'Select a pump for a given system. Plot system and pump characteristic curves.' },
        { title: 'CFD Introduction', tag: 'Advanced', what: 'Navier-Stokes equations, finite volume method, meshing, boundary conditions, ANSYS Fluent/OpenFOAM basics.', how: 'Simulate flow over a cylinder in ANSYS Fluent. Compare drag coefficient with experiments.' },
        { title: 'Fluid Mechanics Project', tag: 'Project', what: 'Design project: pipe network analysis, aerodynamic study, or pump selection with CFD verification.', how: 'Perform CFD analysis of flow around an airfoil. Compare lift/drag with NACA data.' }
      ]}
    ]
  },
  {
    slug: 'manufacturing-processes',
    name: 'Manufacturing Processes',
    description: 'Learn how products are made — from casting to 3D printing.',
    overview: 'Methods for converting raw materials into finished engineering products.',
    relevance: 'Manufacturing knowledge is essential for product design, quality control, and production engineering.',
    roles: 'Manufacturing Engineer · Production Engineer · Quality Engineer',
    skills: 'Casting, machining, welding, forming, CNC, additive manufacturing',
    companies: 'Tata Motors · Bosch · Toyota · Mahindra · Godrej',
    careers: 'Manufacturing · Production · Quality Control',
    roadmap: [
      { phase: 'Casting & Forming', phaseNumber: 1, accent: '#24685e', bg: '#edf6f4', description: 'Primary manufacturing processes.', topics: [
        { title: 'Casting Processes', tag: 'Core', what: 'Sand casting, pattern, mold design, gating system, risering, defects; die casting, investment casting, centrifugal casting.', how: 'Design a gating system for a simple casting. Calculate shrinkage allowances.' },
        { title: 'Metal Forming', tag: 'Core', what: 'Rolling, forging, extrusion, drawing, sheet metal (bending, deep drawing, blanking); hot vs cold working.', how: 'Calculate forces in rolling and forging operations. Design a blanking die layout.' },
        { title: 'Welding Technology', tag: 'Must Know', what: 'Arc welding (SMAW, GMAW, GTAW), resistance welding, brazing, soldering; joint types, defects, testing (NDT).', how: 'Compare different welding processes. Study a welding procedure specification (WPS).' }
      ]},
      { phase: 'Machining', phaseNumber: 2, accent: '#a94e3a', bg: '#fdf3f1', description: 'Material removal processes.', topics: [
        { title: 'Cutting Theory & Tool Life', tag: 'Core', what: 'Orthogonal cutting, chip formation, cutting forces (Merchant circle), Taylor\'s tool life, cutting fluids, tool materials.', how: 'Calculate cutting forces using Merchant\'s analysis. Determine tool life using Taylor\'s equation.' },
        { title: 'Machining Operations', tag: 'Must Know', what: 'Turning, milling, drilling, grinding, boring, shaping; machining parameters (speed, feed, depth of cut), time estimation.', how: 'Calculate machining time and MRR for turning and milling operations.' },
        { title: 'CNC & CAM', tag: 'Important', what: 'CNC basics, G-codes, M-codes, part programming, CAM software, toolpath generation, fixtures, DNC.', how: 'Write CNC part programs for simple components. Simulate toolpath in CAM software.' }
      ]},
      { phase: 'Advanced Processes', phaseNumber: 3, accent: '#3a5ea9', bg: '#f1f4fd', description: 'Non-traditional and modern manufacturing.', topics: [
        { title: 'Non-Traditional Machining', tag: 'Important', what: 'EDM, ECM, laser cutting, water jet, ultrasonic machining; process selection, MRR, surface finish, applications.', how: 'Compare NTM processes for machining hardened steel. Select the best process for a given application.' },
        { title: 'Additive Manufacturing', tag: 'Must Know', what: 'FDM, SLA, SLS, DMLS, binder jetting; design for AM, post-processing, materials, applications, economics.', how: 'Design a part optimized for 3D printing. Print using FDM and evaluate quality.' },
        { title: 'Metrology & Quality', tag: 'Important', what: 'Limits, fits, tolerances (ISO system), surface roughness, comparators, GD&T basics, SPC, control charts.', how: 'Interpret GD&T symbols on a drawing. Create a control chart from measurement data.' }
      ]},
      { phase: 'Integration & Project', phaseNumber: 4, accent: '#7e3aa9', bg: '#f6f1fd', description: 'Integrate manufacturing knowledge into design.', topics: [
        { title: 'Design for Manufacturing', tag: 'Must Know', what: 'DFM/DFA principles, process selection methodology, cost estimation, value engineering, lean manufacturing.', how: 'Redesign a product for easier manufacturing. Compare cost before and after DFM.' },
        { title: 'Industry 4.0 & Smart Manufacturing', tag: 'Advanced', what: 'IoT in manufacturing, digital twin, predictive maintenance, robotic assembly, AI in quality inspection.', how: 'Study a smart factory case study. Identify Industry 4.0 elements in a production line.' },
        { title: 'Manufacturing Project', tag: 'Project', what: 'Process planning project: design a component, select manufacturing processes, estimate cost, and create process sheet.', how: 'Create a complete process plan for a mechanical component from raw material to finished product.' }
      ]}
    ]
  }
]

// ─────────────────────────── CE Subjects ───────────────────────────
const ceSubjects = [
  {
    slug: 'structural-analysis',
    name: 'Structural Analysis',
    description: 'Analyze forces and deformations in beams, trusses, and frames.',
    overview: 'Methods for determining internal forces and displacements in structures.',
    relevance: 'Core to designing safe buildings, bridges, and infrastructure.',
    roles: 'Structural Engineer · Bridge Engineer · Design Consultant',
    skills: 'Force methods, displacement methods, matrix analysis, FEM',
    companies: 'L&T · Shapoorji Pallonji · Arup · AECOM · Jacobs',
    careers: 'Structural Engineering · Bridge Design · Construction',
    roadmap: [
      { phase: 'Determinacy & Trusses', phaseNumber: 1, accent: '#24685e', bg: '#edf6f4', description: 'Analyze statically determinate structures.', topics: [
        { title: 'Structural Forms & Loads', tag: 'Core', what: 'Types of structures (beam, truss, frame, arch, cable), load types, support reactions, determinacy, stability.', how: 'Classify 10 real structures by type and determinacy. Calculate support reactions.' },
        { title: 'Truss Analysis', tag: 'Must Know', what: 'Method of joints, method of sections, zero-force members, compound trusses, space trusses.', how: 'Analyze a Pratt and Warren truss using both methods. Identify zero-force members.' },
        { title: 'Influence Lines', tag: 'Must Know', what: 'IL for reactions, shear, moment; qualitative ILs, moving loads, maximum effect calculations, Müller-Breslau principle.', how: 'Draw ILs for a simply supported beam. Calculate maximum bending moment under a train of loads.' }
      ]},
      { phase: 'Energy Methods', phaseNumber: 2, accent: '#a94e3a', bg: '#fdf3f1', description: 'Use energy principles for analysis.', topics: [
        { title: 'Virtual Work & Unit Load', tag: 'Core', what: 'Principle of virtual work, unit load method for deflections (beams, trusses, frames), Maxwell\'s reciprocal theorem.', how: 'Calculate deflections at 5 points on a beam and truss using unit load method.' },
        { title: 'Castigliano\'s Theorems', tag: 'Important', what: 'Castigliano\'s first and second theorems, strain energy for axial/bending/shear/torsion, deflection calculation.', how: 'Use Castigliano\'s theorem to find deflections in curved beams and frames.' },
        { title: 'Three-Moment Equation', tag: 'Important', what: 'Clapeyron\'s three-moment equation for continuous beams, settlement effects, application to multi-span beams.', how: 'Analyze a 3-span continuous beam using three-moment equation.' }
      ]},
      { phase: 'Indeterminate Structures', phaseNumber: 3, accent: '#3a5ea9', bg: '#f1f4fd', description: 'Analyze statically indeterminate structures.', topics: [
        { title: 'Slope-Deflection Method', tag: 'Core', what: 'Fixed-end moments, slope-deflection equations, analysis of continuous beams and portal frames, sway analysis.', how: 'Analyze a 2-bay portal frame with sway using slope-deflection method.' },
        { title: 'Moment Distribution Method', tag: 'Must Know', what: 'Distribution/carry-over factors, fixed-end moments, non-sway/sway frames, modified stiffness for symmetric structures.', how: 'Analyze a multi-span beam and a portal frame using moment distribution.' },
        { title: 'Matrix Methods', tag: 'Advanced', what: 'Stiffness method (direct stiffness), flexibility method, assembly of global stiffness matrix, computer implementation.', how: 'Formulate and solve the stiffness matrix for a simple frame. Compare with hand calculation.' }
      ]},
      { phase: 'Advanced & Project', phaseNumber: 4, accent: '#7e3aa9', bg: '#f6f1fd', description: 'Modern analysis techniques and applications.', topics: [
        { title: 'Arches & Cables', tag: 'Important', what: 'Three-hinged arch, two-hinged arch, cable under uniform/point loads, catenary, suspension bridge analysis.', how: 'Analyze a parabolic arch under distributed load. Compare with cable analysis.' },
        { title: 'FEM for Structures', tag: 'Advanced', what: 'Finite element concepts, bar/beam elements, assembly, boundary conditions, STAAD Pro / ETABS basics.', how: 'Model a multi-story frame in STAAD Pro. Compare results with hand calculations.' },
        { title: 'Structural Analysis Project', tag: 'Project', what: 'Analysis project: multi-story building frame or bridge analysis using both manual and software methods.', how: 'Analyze a 3-story frame for dead, live, and wind loads. Compare manual and software results.' }
      ]}
    ]
  },
  {
    slug: 'geotechnical-engineering',
    name: 'Geotechnical Engineering',
    description: 'Understand soil behavior for safe foundation and earthwork design.',
    overview: 'Properties and behavior of soils for engineering applications.',
    relevance: 'Every structure rests on soil — geotechnical knowledge prevents foundation failures.',
    roles: 'Geotechnical Engineer · Foundation Engineer · Tunnel Engineer',
    skills: 'Soil testing, bearing capacity, slope stability, foundation design',
    companies: 'L&T · Gammon · Keller · AECOM · Fugro',
    careers: 'Geotechnical Engineering · Foundation Design · Tunneling',
    roadmap: [
      { phase: 'Soil Properties', phaseNumber: 1, accent: '#24685e', bg: '#edf6f4', description: 'Classify and characterize soils.', topics: [
        { title: 'Index Properties & Classification', tag: 'Core', what: 'Water content, specific gravity, grain size, Atterberg limits, IS/USCS classification, compaction.', how: 'Perform grain size analysis and Atterberg limit tests. Classify 5 soil samples.' },
        { title: 'Permeability & Seepage', tag: 'Must Know', what: 'Darcy\'s law, permeability tests, flow nets, seepage calculations, quicksand condition, filter design.', how: 'Draw flow nets for a sheet pile and a dam. Calculate seepage quantities.' },
        { title: 'Compaction & Consolidation', tag: 'Core', what: 'Proctor test, OMC/MDD, field compaction; Terzaghi\'s consolidation theory, settlement calculations, time rate.', how: 'Perform Proctor compaction test. Calculate settlement and time for 90% consolidation.' }
      ]},
      { phase: 'Shear Strength & Stability', phaseNumber: 2, accent: '#a94e3a', bg: '#fdf3f1', description: 'Analyze soil strength and stability.', topics: [
        { title: 'Shear Strength of Soils', tag: 'Core', what: 'Mohr-Coulomb failure criterion, direct shear test, triaxial test (UU, CU, CD), pore pressure parameters.', how: 'Plot Mohr circles from triaxial test data. Determine cohesion and friction angle.' },
        { title: 'Lateral Earth Pressure', tag: 'Must Know', what: 'Rankine and Coulomb theories, active/passive/at-rest pressure, retaining wall design, surcharge effects.', how: 'Design a gravity retaining wall. Calculate active and passive earth pressures.' },
        { title: 'Slope Stability', tag: 'Important', what: 'Infinite slopes, circular failure surfaces, Swedish circle, Bishop\'s method, factor of safety, slope stabilization.', how: 'Analyze slope stability using ordinary method of slices. Calculate factor of safety.' }
      ]},
      { phase: 'Foundation Engineering', phaseNumber: 3, accent: '#3a5ea9', bg: '#f1f4fd', description: 'Design foundations for structures.', topics: [
        { title: 'Bearing Capacity', tag: 'Core', what: 'Terzaghi, Meyerhof, IS code methods; shallow foundations, effect of water table, plate load test.', how: 'Calculate bearing capacity for a footing using Terzaghi\'s equation. Design footing size.' },
        { title: 'Pile Foundations', tag: 'Must Know', what: 'Pile types, load capacity (static formula, dynamic formula), group action, negative skin friction, pile load test.', how: 'Design a pile foundation for a given column load. Calculate group capacity.' },
        { title: 'Ground Improvement', tag: 'Important', what: 'Compaction, preloading, stone columns, geosynthetics, soil nailing, grouting, dewatering techniques.', how: 'Select ground improvement technique for given soil conditions. Design preloading scheme.' }
      ]},
      { phase: 'Advanced & Project', phaseNumber: 4, accent: '#7e3aa9', bg: '#f6f1fd', description: 'Apply geotechnical knowledge to real projects.', topics: [
        { title: 'Site Investigation', tag: 'Practical', what: 'Boring methods, SPT, CPT, vane shear, sampling, bore log interpretation, site investigation planning.', how: 'Interpret bore log data for a site. Plan a site investigation for a multi-story building.' },
        { title: 'Geotechnical Software', tag: 'Advanced', what: 'PLAXIS, GeoStudio, slope stability software, settlement analysis tools, soil modeling.', how: 'Model a retaining wall in PLAXIS. Compare results with analytical methods.' },
        { title: 'Geotechnical Project', tag: 'Project', what: 'Foundation design project: site investigation, bearing capacity, settlement, foundation type selection, design details.', how: 'Complete foundation design for a 5-story building with site investigation report.' }
      ]}
    ]
  },
  {
    slug: 'surveying',
    name: 'Surveying & Geomatics',
    description: 'Measure and map the Earth for civil engineering projects.',
    overview: 'Techniques for measuring distances, angles, and elevations for engineering works.',
    relevance: 'Every construction project starts with a survey — essential for layout, grading, and monitoring.',
    roles: 'Survey Engineer · GIS Analyst · Land Surveyor',
    skills: 'Total station, GPS, GIS, leveling, photogrammetry, remote sensing',
    companies: 'L&T · NHAI · Survey of India · Trimble · Esri',
    careers: 'Land Surveying · GIS · Remote Sensing · Construction',
    roadmap: [
      { phase: 'Basic Surveying', phaseNumber: 1, accent: '#24685e', bg: '#edf6f4', description: 'Master fundamental measurement techniques.', topics: [
        { title: 'Distance & Angle Measurement', tag: 'Core', what: 'Chain/tape surveying, compass surveying, theodolite, vernier, angles, bearings, traverse computations.', how: 'Conduct a compass traverse survey. Calculate bearings and close the traverse.' },
        { title: 'Leveling', tag: 'Core', what: 'Dumpy level, auto level, benchmark, RL calculation, profile leveling, contouring, digital levels.', how: 'Perform a profile leveling survey along a road. Plot longitudinal and cross sections.' },
        { title: 'Plane Table Surveying', tag: 'Important', what: 'Radiation, intersection, resection methods, advantages/limitations, three-point problem.', how: 'Map a small area using plane table radiation and intersection methods.' }
      ]},
      { phase: 'Advanced Instruments', phaseNumber: 2, accent: '#a94e3a', bg: '#fdf3f1', description: 'Use modern surveying technology.', topics: [
        { title: 'Total Station', tag: 'Must Know', what: 'EDM principles, total station operation, coordinate measurement, setting out, data transfer, reflectorless mode.', how: 'Use a total station to survey a building plot. Generate coordinates and plot map.' },
        { title: 'GPS & GNSS', tag: 'Must Know', what: 'GPS principles, satellite geometry, DGPS, RTK, CORS, coordinate systems, datum, transformations.', how: 'Collect RTK-GPS data for a survey area. Compare accuracy with total station data.' },
        { title: 'Curves & Setting Out', tag: 'Important', what: 'Simple, compound, reverse curves; transition curves; vertical curves; setting out methods for construction.', how: 'Design a horizontal curve for a highway. Calculate setting out data for the curve.' }
      ]},
      { phase: 'GIS & Remote Sensing', phaseNumber: 3, accent: '#3a5ea9', bg: '#f1f4fd', description: 'Process and analyze spatial data digitally.', topics: [
        { title: 'GIS Fundamentals', tag: 'Core', what: 'Vector/raster data, layers, attribute data, spatial analysis, overlay, buffer, network analysis, QGIS/ArcGIS.', how: 'Create a GIS project in QGIS. Perform buffer and overlay analysis for a land use study.' },
        { title: 'Remote Sensing', tag: 'Important', what: 'Electromagnetic spectrum, satellite imagery, resolution types, image classification, NDVI, change detection.', how: 'Classify land use from satellite imagery. Calculate NDVI for vegetation analysis.' },
        { title: 'Photogrammetry & LiDAR', tag: 'Advanced', what: 'Aerial photography, stereo viewing, DEM generation, LiDAR point clouds, drone surveying, 3D modeling.', how: 'Process drone imagery to create an orthomosaic and DEM using photogrammetry software.' }
      ]},
      { phase: 'Applications & Project', phaseNumber: 4, accent: '#7e3aa9', bg: '#f6f1fd', description: 'Apply surveying to civil engineering projects.', topics: [
        { title: 'Construction Surveying', tag: 'Must Know', what: 'Setting out buildings, roads, bridges; as-built surveys, deformation monitoring, quantity estimation from surveys.', how: 'Create a setting out plan for a building. Calculate earthwork quantities from survey data.' },
        { title: 'Geodesy & Map Projections', tag: 'Advanced', what: 'Geoid, ellipsoid, datum, UTM, map projections, coordinate transformations, geodetic networks.', how: 'Convert coordinates between geographic and projected systems. Understand UTM zones.' },
        { title: 'Surveying Project', tag: 'Project', what: 'Complete survey project: topographic survey, mapping, volume calculation, and plan preparation with modern instruments.', how: 'Conduct a complete topographic survey using total station and GPS. Produce a contour map.' }
      ]}
    ]
  },
  {
    slug: 'concrete-technology',
    name: 'Concrete Technology',
    description: 'Design and test concrete mixes for construction.',
    overview: 'Properties, mix design, and testing of concrete — the most used construction material.',
    relevance: 'Concrete is the backbone of construction — understanding it ensures durable, safe structures.',
    roles: 'Concrete Technologist · QC Engineer · Construction Manager',
    skills: 'Mix design, testing, durability, special concretes, quality control',
    companies: 'UltraTech · ACC · Ambuja · L&T · Gammon',
    careers: 'Construction · Quality Control · Materials Engineering',
    roadmap: [
      { phase: 'Concrete Materials', phaseNumber: 1, accent: '#24685e', bg: '#edf6f4', description: 'Understand the ingredients of concrete.', topics: [
        { title: 'Cement — Types & Properties', tag: 'Core', what: 'OPC, PPC, PSC; Bogue compounds, hydration, setting, testing (fineness, consistency, setting time, strength).', how: 'Test cement samples for fineness, consistency, and setting time. Compare OPC and PPC results.' },
        { title: 'Aggregates', tag: 'Must Know', what: 'Classification, gradation (sieve analysis), properties (specific gravity, water absorption, impact, crushing), alkali-silica reaction.', how: 'Perform sieve analysis. Calculate fineness modulus and check with IS standards.' },
        { title: 'Water & Admixtures', tag: 'Important', what: 'Water quality requirements, w/c ratio significance, chemical admixtures (plasticizers, superplasticizers, retarders), mineral admixtures.', how: 'Study the effect of w/c ratio on strength. Test concrete with and without superplasticizer.' }
      ]},
      { phase: 'Fresh & Hardened Concrete', phaseNumber: 2, accent: '#a94e3a', bg: '#fdf3f1', description: 'Test and control concrete quality.', topics: [
        { title: 'Workability & Fresh Properties', tag: 'Core', what: 'Slump test, compaction factor, Vee-Bee, flow table; factors affecting workability, bleeding, segregation.', how: 'Conduct slump and compaction factor tests for different mixes. Study effects of water content.' },
        { title: 'Strength & Durability', tag: 'Must Know', what: 'Compressive, tensile, flexural strength; factors affecting strength; durability (carbonation, chloride attack, sulfate attack).', how: 'Cast and test cubes at 7 and 28 days. Relate strength gain to curing conditions.' },
        { title: 'NDT of Concrete', tag: 'Important', what: 'Rebound hammer, UPV test, core cutting, half-cell potential, cover meter, load testing of structures.', how: 'Perform rebound hammer and UPV tests on existing concrete. Assess quality.' }
      ]},
      { phase: 'Mix Design', phaseNumber: 3, accent: '#3a5ea9', bg: '#f1f4fd', description: 'Design concrete mixes for specific requirements.', topics: [
        { title: 'IS Method Mix Design', tag: 'Core', what: 'IS 10262 method, target strength, w/c ratio selection, aggregate proportioning, trial mix adjustments.', how: 'Design M25 and M40 grade concrete mixes using IS method. Prepare trial mixes and test.' },
        { title: 'Special Concretes', tag: 'Important', what: 'SCC, fiber-reinforced, high-strength, lightweight, heavyweight, geopolymer, pervious concrete; applications.', how: 'Design and prepare a self-compacting concrete mix. Test flow and L-box.' },
        { title: 'Quality Control & Statistics', tag: 'Must Know', what: 'Acceptance criteria (IS 456), statistical quality control, characteristic strength, standard deviation, control charts.', how: 'Analyze 30 cube test results statistically. Check conformity with IS 456 acceptance criteria.' }
      ]},
      { phase: 'Applications & Project', phaseNumber: 4, accent: '#7e3aa9', bg: '#f6f1fd', description: 'Apply concrete technology to real construction.', topics: [
        { title: 'Concrete in Practice', tag: 'Must Know', what: 'Batching, mixing, transporting, placing, compaction, curing methods, joints, formwork, RMC plant operations.', how: 'Visit an RMC plant. Document the entire process from batching to delivery.' },
        { title: 'Repair & Rehabilitation', tag: 'Advanced', what: 'Distress assessment, repair materials, jacketing, shotcrete, FRP wrapping, corrosion protection, life cycle cost.', how: 'Assess a deteriorated concrete structure. Propose repair strategy with cost estimate.' },
        { title: 'Concrete Technology Project', tag: 'Project', what: 'Mix design project: design for specific application, test at multiple ages, analyze results, optimize proportions.', how: 'Design and optimize concrete for a bridge deck. Test durability properties and document findings.' }
      ]}
    ]
  },
  {
    slug: 'environmental-engineering',
    name: 'Environmental Engineering',
    description: 'Design systems for clean water, wastewater treatment, and pollution control.',
    overview: 'Engineering solutions for water supply, sanitation, and environmental protection.',
    relevance: 'Clean water and sanitation are fundamental needs — environmental engineers make them possible.',
    roles: 'Environmental Engineer · Water Resources Engineer · Sustainability Consultant',
    skills: 'Water treatment, wastewater design, air quality, solid waste management',
    companies: 'SUEZ · Veolia · L&T · Thermax · VA Tech Wabag',
    careers: 'Water Treatment · Environmental Consulting · Sustainability',
    roadmap: [
      { phase: 'Water Supply', phaseNumber: 1, accent: '#24685e', bg: '#edf6f4', description: 'Design water supply systems.', topics: [
        { title: 'Water Demand & Sources', tag: 'Core', what: 'Population forecasting, water demand estimation, sources (surface, ground), intakes, water quality standards.', how: 'Estimate water demand for a town of 50,000. Identify suitable water sources.' },
        { title: 'Water Treatment', tag: 'Must Know', what: 'Screening, sedimentation, coagulation, flocculation, filtration (rapid sand), disinfection (chlorination), softening.', how: 'Design a conventional water treatment plant for given flow and quality parameters.' },
        { title: 'Water Distribution', tag: 'Important', what: 'Distribution layouts, Hardy-Cross method, pipe network analysis, service reservoirs, pumping stations.', how: 'Analyze a pipe network using Hardy-Cross method. Design a distribution system.' }
      ]},
      { phase: 'Wastewater Engineering', phaseNumber: 2, accent: '#a94e3a', bg: '#fdf3f1', description: 'Treat wastewater before discharge.', topics: [
        { title: 'Sewage Characteristics', tag: 'Core', what: 'BOD, COD, TSS, sewage flow estimation, sewer design, self-purification of streams, DO sag curve.', how: 'Calculate BOD and COD from lab data. Design a sewer for given population.' },
        { title: 'Wastewater Treatment', tag: 'Must Know', what: 'Primary (sedimentation), secondary (ASP, trickling filter, SBR, UASB), tertiary treatment, sludge management.', how: 'Design an activated sludge process for a city of 100,000. Calculate aeration requirements.' },
        { title: 'Advanced Treatment', tag: 'Important', what: 'Membrane technology (MF, UF, RO), constructed wetlands, MBR, nutrient removal, water reuse and recycling.', how: 'Compare treatment technologies for industrial wastewater. Select most suitable option.' }
      ]},
      { phase: 'Air & Solid Waste', phaseNumber: 3, accent: '#3a5ea9', bg: '#f1f4fd', description: 'Control pollution in air and manage solid waste.', topics: [
        { title: 'Air Pollution & Control', tag: 'Must Know', what: 'Air pollutants, sources, Gaussian dispersion, AQI, control devices (cyclone, ESP, scrubber, baghouse), NAAQ standards.', how: 'Calculate pollutant concentration using Gaussian model. Select control equipment for a factory.' },
        { title: 'Solid Waste Management', tag: 'Important', what: 'Waste characterization, collection, transfer stations, landfill design, composting, incineration, recycling, 3R concept.', how: 'Design a sanitary landfill for a city. Calculate daily and total waste volumes.' },
        { title: 'Environmental Impact Assessment', tag: 'Important', what: 'EIA process, baseline studies, impact prediction, mitigation measures, public hearing, environmental clearance.', how: 'Prepare an EIA outline for a proposed industrial project. Identify key impacts.' }
      ]},
      { phase: 'Sustainability & Project', phaseNumber: 4, accent: '#7e3aa9', bg: '#f6f1fd', description: 'Apply sustainable solutions.', topics: [
        { title: 'Green Building & Sustainability', tag: 'Must Know', what: 'Green building rating (IGBC, LEED), rainwater harvesting, greywater recycling, energy efficiency, carbon footprint.', how: 'Evaluate a building project against IGBC criteria. Propose green features.' },
        { title: 'Climate Change & Adaptation', tag: 'Advanced', what: 'GHG emissions, carbon trading, climate modeling basics, adaptation strategies, disaster risk reduction.', how: 'Calculate carbon footprint for a construction project. Propose mitigation strategies.' },
        { title: 'Environmental Engineering Project', tag: 'Project', what: 'Design project: water/wastewater treatment plant, SWM system, or EIA study with calculations and drawings.', how: 'Design a complete wastewater treatment plant for a small town. Document design basis and calculations.' }
      ]}
    ]
  }
]

// ─────────────────────────── IT Subjects ───────────────────────────
const itSubjects = [
  {
    slug: 'web-technologies',
    name: 'Web Technologies',
    description: 'Build modern, responsive web applications from scratch.',
    overview: 'Full-stack web development — frontend to backend and everything in between.',
    relevance: 'Web technologies power the internet — the most in-demand skill set in IT.',
    roles: 'Full-Stack Developer · Frontend Engineer · Web Developer',
    skills: 'HTML, CSS, JavaScript, React, Node.js, REST APIs',
    companies: 'Google · Meta · Amazon · Flipkart · Zoho',
    careers: 'Web Development · Full-Stack Engineering',
    roadmap: [
      { phase: 'Frontend Foundations', phaseNumber: 1, accent: '#24685e', bg: '#edf6f4', description: 'Build the visual layer of web applications.', topics: [
        { title: 'HTML5 & Semantic Markup', tag: 'Core', what: 'HTML5 elements, forms, tables, semantic tags (header, nav, article, section), accessibility, SEO basics.', how: 'Build a multi-page website using semantic HTML. Validate accessibility with tools.' },
        { title: 'CSS3 & Responsive Design', tag: 'Core', what: 'Selectors, box model, Flexbox, Grid, animations, media queries, mobile-first, CSS variables, BEM methodology.', how: 'Create a responsive portfolio website. Implement dark mode with CSS variables.' },
        { title: 'JavaScript Fundamentals', tag: 'Core', what: 'Variables, functions, DOM manipulation, events, ES6+ (arrow functions, destructuring, promises, async/await).', how: 'Build an interactive to-do app with local storage. Use only vanilla JavaScript.' }
      ]},
      { phase: 'Frontend Frameworks', phaseNumber: 2, accent: '#a94e3a', bg: '#fdf3f1', description: 'Build complex, dynamic user interfaces.', topics: [
        { title: 'React.js', tag: 'Must Know', what: 'Components, JSX, props, state, hooks (useState, useEffect, useContext), React Router, conditional rendering.', how: 'Build a movie search app with React. Implement routing and API integration.' },
        { title: 'State Management & API Integration', tag: 'Important', what: 'Context API, Redux basics, REST API consumption (fetch/axios), loading states, error handling, SWR/React Query.', how: 'Build a dashboard that fetches and displays data from a public API with caching.' },
        { title: 'UI Libraries & Testing', tag: 'Important', what: 'Tailwind CSS, Material UI, component testing (Jest, React Testing Library), Storybook, design systems.', how: 'Build a reusable component library. Write tests for key components.' }
      ]},
      { phase: 'Backend Development', phaseNumber: 3, accent: '#3a5ea9', bg: '#f1f4fd', description: 'Build server-side applications and APIs.', topics: [
        { title: 'Node.js & Express', tag: 'Must Know', what: 'Node.js runtime, Express framework, middleware, routing, RESTful API design, error handling, file uploads.', how: 'Build a REST API for a blog platform with CRUD operations, validation, and error handling.' },
        { title: 'Databases — SQL & NoSQL', tag: 'Core', what: 'MySQL/PostgreSQL, MongoDB, ORM (Sequelize/Mongoose), schema design, indexing, aggregation, migration.', how: 'Design and implement database for an e-commerce app. Use both SQL and MongoDB.' },
        { title: 'Authentication & Security', tag: 'Must Know', what: 'JWT, session management, OAuth 2.0, password hashing (bcrypt), CORS, CSRF, XSS prevention, rate limiting.', how: 'Implement JWT-based authentication with refresh tokens. Add rate limiting and input sanitization.' }
      ]},
      { phase: 'Deployment & Projects', phaseNumber: 4, accent: '#7e3aa9', bg: '#f6f1fd', description: 'Deploy and maintain production web applications.', topics: [
        { title: 'DevOps for Web', tag: 'Important', what: 'Git workflows, Docker basics, CI/CD (GitHub Actions), cloud deployment (Vercel, Netlify, AWS), environment management.', how: 'Dockerize a full-stack app. Set up CI/CD pipeline for automated testing and deployment.' },
        { title: 'Performance & SEO', tag: 'Important', what: 'Lighthouse audit, Core Web Vitals, lazy loading, code splitting, SSR/SSG, image optimization, meta tags, sitemap.', how: 'Optimize a web app to score 90+ on Lighthouse. Implement SSR with Next.js.' },
        { title: 'Full-Stack Project', tag: 'Project', what: 'End-to-end project: full-stack web app with authentication, database, responsive UI, testing, deployment, and documentation.', how: 'Build a social platform or e-commerce app. Deploy to production with full CI/CD pipeline.' }
      ]}
    ]
  },
  {
    slug: 'software-engineering',
    name: 'Software Engineering',
    description: 'Plan, design, and deliver software using engineering principles.',
    overview: 'Systematic approaches to building reliable, maintainable software systems.',
    relevance: 'Software engineering practices ensure projects are delivered on time, within budget, and without critical bugs.',
    roles: 'Software Engineer · Project Manager · Quality Analyst',
    skills: 'SDLC, Agile, UML, testing, CI/CD, version control',
    companies: 'Microsoft · TCS · Infosys · Wipro · Zoho',
    careers: 'Software Development · Project Management · QA',
    roadmap: [
      { phase: 'SDLC & Requirements', phaseNumber: 1, accent: '#24685e', bg: '#edf6f4', description: 'Understand how software projects are planned and managed.', topics: [
        { title: 'SDLC Models', tag: 'Core', what: 'Waterfall, iterative, spiral, V-model, RAD, prototyping; choosing the right model for a project.', how: 'Compare 3 SDLC models for a given project scenario. Justify your choice.' },
        { title: 'Requirements Engineering', tag: 'Core', what: 'Elicitation, analysis, specification (SRS), validation; functional vs non-functional requirements, use case diagrams.', how: 'Write an SRS document for a library management system. Create use case diagrams.' },
        { title: 'Agile & Scrum', tag: 'Must Know', what: 'Agile manifesto, Scrum (sprints, ceremonies, roles), Kanban, user stories, story points, velocity, burndown charts.', how: 'Run a 2-week Scrum sprint for a team project. Use Jira/Trello for task tracking.' }
      ]},
      { phase: 'Design & Architecture', phaseNumber: 2, accent: '#a94e3a', bg: '#fdf3f1', description: 'Design software before coding.', topics: [
        { title: 'UML Diagrams', tag: 'Must Know', what: 'Class, sequence, activity, state, component, deployment diagrams; UML tools (PlantUML, draw.io).', how: 'Draw UML diagrams for an online shopping system. Cover all 6 diagram types.' },
        { title: 'Architectural Patterns', tag: 'Important', what: 'MVC, layered, microservices, event-driven, client-server, SOA; choosing architecture for a system.', how: 'Design the architecture for a food delivery app. Justify monolith vs microservices choice.' },
        { title: 'Design Principles', tag: 'Important', what: 'SOLID, DRY, KISS, YAGNI, separation of concerns, coupling/cohesion, design patterns (GoF overview).', how: 'Refactor a poorly designed codebase applying SOLID principles. Document improvements.' }
      ]},
      { phase: 'Testing & Quality', phaseNumber: 3, accent: '#3a5ea9', bg: '#f1f4fd', description: 'Ensure software quality through systematic testing.', topics: [
        { title: 'Testing Fundamentals', tag: 'Core', what: 'Unit, integration, system, acceptance testing; black-box vs white-box; boundary value, equivalence partitioning.', how: 'Write test cases for a calculator app using boundary value and equivalence partitioning.' },
        { title: 'Automation & CI/CD', tag: 'Must Know', what: 'Test automation (Selenium, Cypress), CI/CD pipelines, Jenkins/GitHub Actions, code coverage, regression testing.', how: 'Set up automated testing with GitHub Actions. Achieve 80%+ code coverage.' },
        { title: 'Code Quality & Reviews', tag: 'Important', what: 'Static analysis (SonarQube, ESLint), code review best practices, refactoring, technical debt, metrics.', how: 'Run SonarQube on a project. Fix critical code smells and improve quality score.' }
      ]},
      { phase: 'Project Management & Capstone', phaseNumber: 4, accent: '#7e3aa9', bg: '#f6f1fd', description: 'Deliver software projects professionally.', topics: [
        { title: 'Project Planning & Estimation', tag: 'Must Know', what: 'WBS, Gantt charts, PERT/CPM, effort estimation (FP, COCOMO), risk management, configuration management.', how: 'Create a project plan with WBS, Gantt chart, and risk register for a 3-month project.' },
        { title: 'DevOps & Deployment', tag: 'Important', what: 'DevOps culture, infrastructure as code, monitoring (Grafana, Prometheus), incident management, SRE basics.', how: 'Set up monitoring for a deployed application. Create alerting rules and runbooks.' },
        { title: 'Software Engineering Capstone', tag: 'Project', what: 'Complete SE project: requirements → design → implementation → testing → deployment with all documentation.', how: 'Build a complete software product following the full SDLC. Present final demo with documentation.' }
      ]}
    ]
  },
  {
    slug: 'information-security',
    name: 'Information Security',
    description: 'Protect systems, data, and networks from cyber threats.',
    overview: 'Security principles and practices for protecting digital assets.',
    relevance: 'Cybersecurity is critical as digital threats grow — every organization needs security professionals.',
    roles: 'Security Analyst · Penetration Tester · Security Engineer',
    skills: 'Cryptography, network security, ethical hacking, SIEM, compliance',
    companies: 'Palo Alto · CrowdStrike · TCS · Wipro · Deloitte',
    careers: 'Cybersecurity · Security Consulting · Compliance',
    roadmap: [
      { phase: 'Security Fundamentals', phaseNumber: 1, accent: '#24685e', bg: '#edf6f4', description: 'Understand the basics of information security.', topics: [
        { title: 'CIA Triad & Security Principles', tag: 'Core', what: 'Confidentiality, integrity, availability; AAA (authentication, authorization, accounting); least privilege, defense in depth.', how: 'Analyze the security posture of a web application. Identify CIA violations.' },
        { title: 'Cryptography Basics', tag: 'Core', what: 'Symmetric (AES, DES), asymmetric (RSA, ECC), hashing (SHA, MD5), digital signatures, certificates, PKI.', how: 'Implement AES encryption/decryption. Create a digital signature using RSA.' },
        { title: 'Network Security', tag: 'Must Know', what: 'Firewalls, IDS/IPS, VPN, SSL/TLS, network segmentation, DMZ, port scanning, common network attacks.', how: 'Configure firewall rules. Perform a network scan using Nmap and analyze results.' }
      ]},
      { phase: 'Threats & Vulnerabilities', phaseNumber: 2, accent: '#a94e3a', bg: '#fdf3f1', description: 'Identify and understand security threats.', topics: [
        { title: 'Web Application Security', tag: 'Must Know', what: 'OWASP Top 10, SQL injection, XSS, CSRF, session hijacking, broken authentication, security headers.', how: 'Practice on OWASP WebGoat. Exploit and then fix each vulnerability type.' },
        { title: 'Malware & Social Engineering', tag: 'Important', what: 'Virus, worm, trojan, ransomware, rootkit; phishing, spear phishing, pretexting; user awareness training.', how: 'Analyze malware behavior in a sandbox. Create a phishing awareness presentation.' },
        { title: 'Vulnerability Assessment', tag: 'Important', what: 'Vulnerability scanning (Nessus, OpenVAS), CVE database, CVSS scoring, patch management, remediation.', how: 'Run a vulnerability scan on a test network. Prioritize findings by CVSS score.' }
      ]},
      { phase: 'Ethical Hacking', phaseNumber: 3, accent: '#3a5ea9', bg: '#f1f4fd', description: 'Learn to think like an attacker to defend better.', topics: [
        { title: 'Penetration Testing', tag: 'Core', what: 'Methodology (reconnaissance, scanning, exploitation, post-exploitation), tools (Metasploit, Burp Suite), reporting.', how: 'Perform a penetration test on a CTF lab. Document findings in a professional report.' },
        { title: 'Incident Response', tag: 'Must Know', what: 'IR lifecycle (preparation, detection, containment, eradication, recovery), forensics basics, chain of custody, SIEM.', how: 'Create an incident response plan. Practice responding to a simulated security breach.' },
        { title: 'Security Operations', tag: 'Important', what: 'SIEM (Splunk, ELK), log analysis, threat hunting, SOC operations, threat intelligence, indicators of compromise.', how: 'Set up ELK stack. Create dashboards for monitoring security events.' }
      ]},
      { phase: 'Compliance & Project', phaseNumber: 4, accent: '#7e3aa9', bg: '#f6f1fd', description: 'Understand governance and put it all together.', topics: [
        { title: 'Security Frameworks & Compliance', tag: 'Must Know', what: 'ISO 27001, NIST, GDPR, PCI-DSS, SOC 2, IT Act (India); risk assessment, policy development, audit.', how: 'Map an organization\'s security controls to ISO 27001. Identify gaps.' },
        { title: 'Cloud Security', tag: 'Important', what: 'Shared responsibility model, IAM, encryption at rest/in transit, security groups, cloud security posture management.', how: 'Audit an AWS account for security best practices. Fix misconfigurations.' },
        { title: 'Security Capstone Project', tag: 'Project', what: 'Security assessment project: vulnerability assessment, penetration test, and security report for an application or network.', how: 'Conduct a full security assessment of a web application. Present findings and remediation plan.' }
      ]}
    ]
  },
  {
    slug: 'cloud-computing',
    name: 'Cloud Computing',
    description: 'Deploy and manage applications on cloud platforms.',
    overview: 'Cloud infrastructure, services, and deployment strategies for modern applications.',
    relevance: 'Cloud is the backbone of modern IT — every organization is migrating to cloud platforms.',
    roles: 'Cloud Engineer · DevOps Engineer · Solutions Architect',
    skills: 'AWS/Azure/GCP, Docker, Kubernetes, IaC, CI/CD',
    companies: 'AWS · Microsoft · Google Cloud · Razorpay · Freshworks',
    careers: 'Cloud Engineering · DevOps · Solutions Architecture',
    roadmap: [
      { phase: 'Cloud Fundamentals', phaseNumber: 1, accent: '#24685e', bg: '#edf6f4', description: 'Understand cloud computing models and services.', topics: [
        { title: 'Cloud Service Models', tag: 'Core', what: 'IaaS, PaaS, SaaS, FaaS; public/private/hybrid cloud; shared responsibility, CapEx vs OpEx, cloud economics.', how: 'Compare AWS, Azure, and GCP services. Map IaaS/PaaS/SaaS for each provider.' },
        { title: 'Compute & Storage Services', tag: 'Core', what: 'VMs (EC2, Azure VM), auto-scaling, load balancing; S3, EBS, Blob storage; serverless (Lambda), containers.', how: 'Deploy a web app on EC2. Configure auto-scaling and load balancer.' },
        { title: 'Networking & Security', tag: 'Must Know', what: 'VPC, subnets, security groups, NACLs, Route 53, CDN, IAM, encryption, key management, compliance.', how: 'Design a VPC architecture with public/private subnets. Configure IAM policies.' }
      ]},
      { phase: 'Containers & Orchestration', phaseNumber: 2, accent: '#a94e3a', bg: '#fdf3f1', description: 'Containerize and orchestrate applications.', topics: [
        { title: 'Docker', tag: 'Must Know', what: 'Images, containers, Dockerfile, docker-compose, volumes, networking, multi-stage builds, container registry.', how: 'Containerize a full-stack application with docker-compose. Push to container registry.' },
        { title: 'Kubernetes', tag: 'Important', what: 'Pods, deployments, services, ingress, config maps, secrets, volumes, Helm charts, cluster management.', how: 'Deploy a microservices app on Kubernetes. Set up ingress and auto-scaling.' },
        { title: 'Service Mesh & Monitoring', tag: 'Advanced', what: 'Istio basics, Prometheus, Grafana, ELK stack, distributed tracing (Jaeger), health checks, alerting.', how: 'Set up Prometheus and Grafana for a Kubernetes cluster. Create custom dashboards and alerts.' }
      ]},
      { phase: 'Infrastructure as Code', phaseNumber: 3, accent: '#3a5ea9', bg: '#f1f4fd', description: 'Automate infrastructure provisioning.', topics: [
        { title: 'Terraform', tag: 'Must Know', what: 'HCL syntax, providers, resources, modules, state management, workspaces, plan/apply workflow.', how: 'Provision a complete infrastructure (VPC, EC2, RDS, S3) using Terraform.' },
        { title: 'CI/CD Pipelines', tag: 'Core', what: 'GitHub Actions, Jenkins, GitLab CI; build/test/deploy stages, artifacts, secrets management, blue-green deployment.', how: 'Set up a complete CI/CD pipeline for a microservices app with automated testing.' },
        { title: 'Configuration Management', tag: 'Important', what: 'Ansible basics, playbooks, roles, inventory; comparison with Chef/Puppet; immutable infrastructure.', how: 'Write Ansible playbooks to configure a fleet of servers. Automate application deployment.' }
      ]},
      { phase: 'Architecture & Project', phaseNumber: 4, accent: '#7e3aa9', bg: '#f6f1fd', description: 'Design cloud-native architectures.', topics: [
        { title: 'Cloud Architecture Patterns', tag: 'Must Know', what: 'Microservices, serverless, event-driven; well-architected framework, high availability, disaster recovery, cost optimization.', how: 'Design a highly available, scalable architecture for a social media app. Document trade-offs.' },
        { title: 'Serverless & Event-Driven', tag: 'Important', what: 'AWS Lambda, API Gateway, DynamoDB, SQS/SNS, Step Functions, event sourcing, CQRS patterns.', how: 'Build a serverless REST API with Lambda and API Gateway. Implement event-driven processing.' },
        { title: 'Cloud Engineering Project', tag: 'Project', what: 'End-to-end cloud project: containerized app, Kubernetes, CI/CD, monitoring, IaC, with architecture documentation.', how: 'Deploy a production-ready application on cloud with full DevOps pipeline. Document architecture decisions.' }
      ]}
    ]
  },
  {
    slug: 'data-science-and-analytics',
    name: 'Data Science & Analytics',
    description: 'Extract insights from data using statistics, ML, and visualization.',
    overview: 'Turning data into actionable insights and predictive models.',
    relevance: 'Data drives decisions in every industry — data scientists are among the most sought-after professionals.',
    roles: 'Data Scientist · ML Engineer · Business Analyst',
    skills: 'Python, statistics, ML, visualization, SQL, big data',
    companies: 'Google · Amazon · Flipkart · Swiggy · Mu Sigma',
    careers: 'Data Science · Machine Learning · Business Intelligence',
    roadmap: [
      { phase: 'Foundations', phaseNumber: 1, accent: '#24685e', bg: '#edf6f4', description: 'Build mathematical and programming foundations.', topics: [
        { title: 'Python for Data Science', tag: 'Core', what: 'NumPy, Pandas, data manipulation, cleaning, aggregation, merge/join, datetime handling, file I/O.', how: 'Clean and analyze a real-world dataset (e.g., Titanic, COVID). Handle missing values and outliers.' },
        { title: 'Statistics & Probability', tag: 'Core', what: 'Descriptive stats, distributions, hypothesis testing (t-test, chi-square), correlation, p-values, confidence intervals.', how: 'Perform hypothesis testing on A/B test data. Calculate and interpret confidence intervals.' },
        { title: 'Data Visualization', tag: 'Must Know', what: 'Matplotlib, Seaborn, Plotly; chart types (bar, scatter, heatmap, box), storytelling with data, dashboard design.', how: 'Create an interactive dashboard analyzing sales data with Plotly. Tell a story with visualizations.' }
      ]},
      { phase: 'Machine Learning', phaseNumber: 2, accent: '#a94e3a', bg: '#fdf3f1', description: 'Build predictive models from data.', topics: [
        { title: 'Supervised Learning', tag: 'Core', what: 'Linear/logistic regression, decision trees, random forest, SVM, KNN; train/test split, cross-validation, metrics.', how: 'Build a classification model to predict customer churn. Compare multiple algorithms.' },
        { title: 'Unsupervised Learning', tag: 'Important', what: 'K-means, hierarchical clustering, DBSCAN, PCA, dimensionality reduction, anomaly detection, association rules.', how: 'Perform customer segmentation using K-means. Visualize clusters with PCA.' },
        { title: 'Model Evaluation & Feature Engineering', tag: 'Must Know', what: 'Accuracy, precision, recall, F1, ROC-AUC, confusion matrix; feature scaling, encoding, selection, polynomial features.', how: 'Optimize a model through feature engineering. Compare metrics before and after.' }
      ]},
      { phase: 'Advanced Topics', phaseNumber: 3, accent: '#3a5ea9', bg: '#f1f4fd', description: 'Explore deep learning and big data tools.', topics: [
        { title: 'Deep Learning Basics', tag: 'Important', what: 'Neural networks, activation functions, backpropagation, CNN for images, RNN/LSTM for sequences, transfer learning.', how: 'Build an image classifier using CNN. Fine-tune a pre-trained model for custom data.' },
        { title: 'NLP & Text Analytics', tag: 'Important', what: 'Text preprocessing, TF-IDF, word embeddings, sentiment analysis, named entity recognition, transformers overview.', how: 'Build a sentiment analysis model for product reviews. Compare TF-IDF vs embeddings.' },
        { title: 'Big Data Tools', tag: 'Advanced', what: 'Hadoop ecosystem, Spark (PySpark), data pipelines, ETL, data warehousing, Hive, streaming basics (Kafka).', how: 'Process a large dataset using PySpark. Build a data pipeline from ingestion to analysis.' }
      ]},
      { phase: 'Deployment & Project', phaseNumber: 4, accent: '#7e3aa9', bg: '#f6f1fd', description: 'Deploy models and complete an end-to-end project.', topics: [
        { title: 'ML Deployment', tag: 'Must Know', what: 'Flask/FastAPI for model serving, MLflow, model versioning, A/B testing, monitoring, drift detection, MLOps basics.', how: 'Deploy an ML model as a REST API. Set up model monitoring and versioning.' },
        { title: 'SQL & BI Tools', tag: 'Important', what: 'Advanced SQL, window functions, Tableau/Power BI, dashboard design, KPI definition, business reporting.', how: 'Build an executive dashboard in Tableau/Power BI connecting to a database.' },
        { title: 'Data Science Capstone', tag: 'Project', what: 'End-to-end DS project: problem definition, data collection, EDA, modeling, evaluation, deployment, presentation.', how: 'Complete a Kaggle competition or real-world project. Deploy model and present insights.' }
      ]}
    ]
  }
]

// ─────────────────────────── Branch Map ───────────────────────────
export const subjectsByBranch = {
  CSE: cseSubjects,
  ECE: eceSubjects,
  EEE: eeeSubjects,
  ME: meSubjects,
  CE: ceSubjects,
  IT: itSubjects,
}

// Backward-compatible default export (CSE)
export const subjects = cseSubjects

export default subjects
