export const subjects = [
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
        phase: 'Fundamentals',
        phaseNumber: 1,
        accent: '#24685e',
        bg: '#edf6f4',
        description: 'Learn how to think algorithmically before touching a data structure.',
        topics: [
          {
            title: 'Big O Notation & Complexity Analysis',
            tag: 'Core',
            what: 'Time and space complexity, Big O / Θ / Ω notations, best/worst/average case, amortized analysis.',
            how: 'Analyze the complexity of 10 small code snippets and practice estimating cost before running them.',
          },
          {
            title: 'Arrays & Strings',
            tag: 'Core',
            what: 'Static vs dynamic arrays, multi-dimensional arrays, string manipulation, StringBuilder, in-place operations.',
            how: 'Implement a dynamic array from scratch, then solve 5 array problems on LeetCode (Easy).',
          },
          {
            title: 'Linked Lists',
            tag: 'Core',
            what: 'Singly, doubly and circular linked lists; insert, delete, reverse; Floyd\'s cycle detection; runner technique.',
            how: 'Implement all three types by hand. Then reverse a linked list both iteratively and recursively.',
          }
        ]
      },
      {
        phase: 'Linear Structures',
        phaseNumber: 2,
        accent: '#a94e3a',
        bg: '#fdf3f1',
        description: 'Master the essential building blocks used in nearly every algorithm.',
        topics: [
          {
            title: 'Stacks & Queues',
            tag: 'Must Know',
            what: 'Stack (LIFO), queue (FIFO), deque, monotonic stack; applications: balanced parentheses, undo systems, BFS.',
            how: 'Implement a stack using an array and a queue using two stacks. Solve bracket validation and next-greater-element.',
          },
          {
            title: 'Hash Maps & Hash Tables',
            tag: 'Must Know',
            what: 'Hash functions, collision resolution (chaining, open addressing), load factor, HashMap vs HashSet, frequency counting.',
            how: 'Implement a hash map from scratch with chaining. Solve two-sum and group-anagrams using hashmaps.',
          },
          {
            title: 'Recursion & Backtracking',
            tag: 'Important',
            what: 'Call stack, base case, recursive tree, memoization basics; backtracking for permutations, combinations, N-Queens.',
            how: 'Visualize recursion trees for Fibonacci and factorials. Solve subsets and permutations with backtracking.',
          }
        ]
      },
      {
        phase: 'Trees & Heaps',
        phaseNumber: 3,
        accent: '#3a5ea9',
        bg: '#f1f4fd',
        description: 'Non-linear structures at the heart of search, priority, and hierarchy.',
        topics: [
          {
            title: 'Binary Trees & BST',
            tag: 'Core',
            what: 'Binary tree properties, traversals (inorder, preorder, postorder, level-order), BST insert/delete/search.',
            how: 'Draw and trace each traversal by hand, then implement them recursively and iteratively.',
          },
          {
            title: 'AVL Trees & Balanced BSTs',
            tag: 'Advanced',
            what: 'Height-balanced BSTs, rotation operations (LL, RR, LR, RL), AVL insert/delete, Red-Black tree overview.',
            how: 'Trace AVL rotations on paper for a sequence of insertions, then verify with a visualizer tool.',
          },
          {
            title: 'Heaps & Priority Queues',
            tag: 'Important',
            what: 'Min-heap, max-heap, heapify, heap sort, priority queue operations, applications: K-largest, median stream.',
            how: 'Implement a min-heap from scratch. Solve "kth largest element" and "merge k sorted lists".',
          },
          {
            title: 'Tries & Segment Trees',
            tag: 'Advanced',
            what: 'Trie insert/search/prefix, word search applications; segment tree for range queries; Fenwick tree basics.',
            how: 'Build a trie-based autocomplete system. Solve range-sum-query using a segment tree.',
          }
        ]
      },
      {
        phase: 'Graphs & Shortest Paths',
        phaseNumber: 4,
        accent: '#7e3aa9',
        bg: '#f6f1fd',
        description: 'Model and solve real-world connectivity and routing problems.',
        topics: [
          {
            title: 'Graph Representation & BFS/DFS',
            tag: 'Core',
            what: 'Adjacency list vs matrix, directed/undirected, weighted graphs, BFS (level traversal) and DFS (recursion/stack).',
            how: 'Implement both BFS and DFS. Solve "number of islands" and "word ladder" using them.',
          },
          {
            title: 'Shortest Path Algorithms',
            tag: 'Must Know',
            what: 'Dijkstra\'s (weighted, non-negative), Bellman-Ford (negative weights), Floyd-Warshall (all pairs), A* overview.',
            how: 'Implement Dijkstra using a min-heap. Compare it with Bellman-Ford on a graph with a negative edge.',
          },
          {
            title: 'Topological Sort & Union-Find',
            tag: 'Important',
            what: 'Topological ordering (Kahn\'s algo, DFS-based), DAGs, cycle detection; Union-Find (DSU) for connected components.',
            how: 'Solve course-schedule dependency using topological sort. Use Union-Find for the number-of-provinces problem.',
          }
        ]
      },
      {
        phase: 'Algorithm Patterns & Interview Prep',
        phaseNumber: 5,
        accent: '#2a7a2a',
        bg: '#f1fdf1',
        description: 'Learn the patterns behind 90% of interview problems.',
        topics: [
          {
            title: 'Two Pointers & Sliding Window',
            tag: 'Must Know',
            what: 'Two-pointer technique for sorted arrays and strings; sliding window for subarray/substring problems.',
            how: 'Solve "container with most water", "longest substring without repeating characters", and "minimum window substring".',
          },
          {
            title: 'Dynamic Programming',
            tag: 'Core',
            what: 'Memoization vs tabulation, 1D and 2D DP, classic problems: knapsack, LCS, LIS, coin change, edit distance.',
            how: 'Solve Fibonacci bottom-up, then tackle knapsack and LCS. Draw the DP table for each before coding.',
          },
          {
            title: 'Greedy Algorithms',
            tag: 'Important',
            what: 'Greedy choice property, local vs global optimum; activity selection, interval scheduling, Huffman coding.',
            how: 'Solve "jump game", "meeting rooms", and "task scheduler" using the greedy approach.',
          },
          {
            title: 'Bit Manipulation',
            tag: 'Advanced',
            what: 'AND, OR, XOR, NOT, left/right shift; find single number, count set bits, power of two, subset generation with bits.',
            how: 'Solve "single number", "number of 1 bits", and "subsets" using bitwise operations.',
          }
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
        phase: 'OS Basics',
        phaseNumber: 1,
        accent: '#24685e',
        bg: '#edf6f4',
        description: 'Understand what an operating system does and how it starts up.',
        topics: [
          {
            title: 'Introduction to Operating Systems',
            tag: 'Core',
            what: 'Role of an OS, types (batch, time-sharing, real-time, distributed), kernel vs user space, system calls, OS services.',
            how: 'Watch the intro and then trace exactly what happens (in 10 steps) when you double-click an app.',
          },
          {
            title: 'Process vs Thread',
            tag: 'Core',
            what: 'Process creation (fork, exec), PCB, thread types (user-level, kernel-level), multithreading models, context switching.',
            how: 'Write a program that spawns 3 child processes and 3 threads. Observe their behavior using `ps` and `top`.',
          },
          {
            title: 'CPU Scheduling Algorithms',
            tag: 'Core',
            what: 'FCFS, SJF, SRTF, Round Robin, Priority Scheduling, Multilevel Queue; turnaround time, waiting time, throughput.',
            how: 'Simulate Round Robin and SJF scheduling manually for 5 processes and compute all metrics.',
          },
          {
            title: 'Inter-Process Communication (IPC)',
            tag: 'Important',
            what: 'Pipes, message queues, shared memory, semaphores, sockets; producer-consumer problem setup.',
            how: 'Implement a producer-consumer program using shared memory and a semaphore.',
          }
        ]
      },
      {
        phase: 'Memory Management',
        phaseNumber: 2,
        accent: '#a94e3a',
        bg: '#fdf3f1',
        description: 'Learn how the OS juggles memory between competing processes.',
        topics: [
          {
            title: 'Memory Hierarchy & Caching',
            tag: 'Core',
            what: 'Registers, cache (L1/L2/L3), RAM, disk; locality of reference; cache hit/miss, direct-mapped vs associative caches.',
            how: 'Profile a small C program and observe cache miss rates using `perf stat` or Valgrind.',
          },
          {
            title: 'Virtual Memory & Paging',
            tag: 'Must Know',
            what: 'Address space, paging, page table, TLB, page fault, demand paging, copy-on-write, page replacement policies.',
            how: 'Trace a virtual address translation step by step through the page table and TLB.',
          },
          {
            title: 'Page Replacement Algorithms',
            tag: 'Important',
            what: 'FIFO, LRU, Optimal (OPT), LFU, Clock algorithm; Belady\'s anomaly; thrashing and working-set model.',
            how: 'Simulate FIFO and LRU for a reference string with 3 frames and count page faults for each.',
          },
          {
            title: 'Segmentation & Memory Allocation',
            tag: 'Advanced',
            what: 'Segmentation, internal/external fragmentation, compaction; first-fit, best-fit, worst-fit; buddy system.',
            how: 'Simulate first-fit and best-fit allocation for 6 processes and compare fragmentation outcomes.',
          }
        ]
      },
      {
        phase: 'Concurrency & Synchronization',
        phaseNumber: 3,
        accent: '#3a5ea9',
        bg: '#f1f4fd',
        description: 'Manage multiple processes safely without race conditions or deadlocks.',
        topics: [
          {
            title: 'Race Conditions & Critical Sections',
            tag: 'Core',
            what: 'Race condition definition, critical section, mutual exclusion, progress and bounded waiting requirements.',
            how: 'Reproduce a race condition in a two-thread counter program, then fix it with a mutex.',
          },
          {
            title: 'Semaphores & Monitors',
            tag: 'Must Know',
            what: 'Binary and counting semaphores, P/V operations, monitors, condition variables, dining philosophers problem.',
            how: 'Implement the dining philosophers problem using semaphores without deadlock.',
          },
          {
            title: 'Deadlocks — Detection & Prevention',
            tag: 'Must Know',
            what: 'Deadlock conditions (Coffman), prevention, avoidance (Banker\'s algorithm), detection (wait-for graph), recovery.',
            how: 'Run Banker\'s algorithm manually on a 3-process, 3-resource system to determine safe state.',
          }
        ]
      },
      {
        phase: 'File Systems & I/O',
        phaseNumber: 4,
        accent: '#7e3aa9',
        bg: '#f6f1fd',
        description: 'Understand how data is stored, named, and retrieved from disk.',
        topics: [
          {
            title: 'File Systems & Disk Structure',
            tag: 'Core',
            what: 'File concepts, directory structures, file allocation methods (contiguous, linked, indexed), FAT, inode, ext4.',
            how: 'Use `stat` and `ls -i` on Linux to inspect inodes and study how the ext4 filesystem is structured.',
          },
          {
            title: 'Disk Scheduling Algorithms',
            tag: 'Important',
            what: 'FCFS, SSTF, SCAN (Elevator), C-SCAN, LOOK; seek time, rotational latency, transfer time calculations.',
            how: 'Trace SSTF and SCAN for a disk head at position 50 with a queue of 10 requests.',
          },
          {
            title: 'Linux Commands & Shell Scripting',
            tag: 'Practical',
            what: 'File permissions (chmod, chown), process management (ps, kill, top), piping, redirection, bash scripting basics.',
            how: 'Write a bash script that backs up a directory, lists all running processes, and logs output to a file.',
          },
          {
            title: 'OS Security & System Hardening',
            tag: 'Advanced',
            what: 'Users and groups, sudo, SELinux/AppArmor, firewall basics, system call auditing, kernel patches.',
            how: 'Set up a Linux VM, configure a non-root user with sudo, enable UFW firewall, and audit login attempts.',
          }
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
        phase: 'Network Models & Basics',
        phaseNumber: 1,
        accent: '#24685e',
        bg: '#edf6f4',
        description: 'Understand how data moves from one machine to another at every layer.',
        topics: [
          {
            title: 'OSI Model & TCP/IP Stack',
            tag: 'Core',
            what: 'All 7 OSI layers and their responsibilities; TCP/IP 4-layer model; encapsulation and decapsulation; PDUs.',
            how: 'Follow a single browser request (google.com) and describe what happens at each layer.',
          },
          {
            title: 'Network Devices & Topologies',
            tag: 'Core',
            what: 'Hub, switch, router, bridge, gateway, modem; LAN, WAN, MAN; bus, ring, star, mesh topologies.',
            how: 'Draw a home network topology and label every device with its OSI layer and function.',
          },
          {
            title: 'Data Link Layer & Ethernet',
            tag: 'Important',
            what: 'MAC addresses, Ethernet frame, ARP, CSMA/CD, switches and VLANs, STP, error detection (CRC).',
            how: 'Use Wireshark to capture Ethernet frames on your local network and inspect the ARP traffic.',
          }
        ]
      },
      {
        phase: 'IP Addressing & Routing',
        phaseNumber: 2,
        accent: '#a94e3a',
        bg: '#fdf3f1',
        description: 'Master the addressing and routing layer that glues the internet together.',
        topics: [
          {
            title: 'IPv4, Subnetting & CIDR',
            tag: 'Must Know',
            what: 'IPv4 structure, classes, subnetting, CIDR notation, subnet masks, broadcast/network addresses, VLSM.',
            how: 'Practice subnetting: divide 192.168.10.0/24 into 8 equal subnets and calculate host ranges.',
          },
          {
            title: 'IPv6 & Address Management',
            tag: 'Important',
            what: 'IPv6 format, link-local vs global addresses, NDP (replaces ARP), DHCPv6, dual-stack, tunneling.',
            how: 'Enable IPv6 on a VM and verify connectivity using ping6 and tracepath6.',
          },
          {
            title: 'DNS, DHCP & NAT',
            tag: 'Must Know',
            what: 'DNS resolution (recursive, iterative), record types (A, AAAA, MX, CNAME, NS), DHCP lease process, NAT (Static, PAT).',
            how: 'Use nslookup and dig to trace a domain name to IP. Set up a DHCP server in a VM lab.',
          },
          {
            title: 'Routing Protocols',
            tag: 'Advanced',
            what: 'Static vs dynamic routing, RIP, OSPF (link-state), BGP (path-vector), routing table, administrative distance.',
            how: 'Configure OSPF between 3 routers in Cisco Packet Tracer and verify end-to-end connectivity.',
          }
        ]
      },
      {
        phase: 'Transport & Application Layers',
        phaseNumber: 3,
        accent: '#3a5ea9',
        bg: '#f1f4fd',
        description: 'Understand reliable data delivery and high-level application protocols.',
        topics: [
          {
            title: 'TCP vs UDP & Handshakes',
            tag: 'Must Know',
            what: 'TCP 3-way handshake, 4-way close, reliability, flow control (sliding window), congestion control; UDP use cases.',
            how: 'Capture a TCP handshake in Wireshark. Write a simple UDP echo server and client.',
          },
          {
            title: 'HTTP, HTTPS & REST',
            tag: 'Must Know',
            what: 'HTTP methods, status codes, headers, HTTP/1.1 vs HTTP/2 vs HTTP/3, HTTPS, cookies, sessions, REST principles.',
            how: 'Use curl and Postman to make HTTP requests. Inspect request/response headers in browser DevTools.',
          },
          {
            title: 'TLS/SSL & Certificate Authority',
            tag: 'Important',
            what: 'TLS handshake, symmetric vs asymmetric encryption, certificates, PKI, chain of trust, HTTPS setup.',
            how: 'Generate a self-signed certificate with OpenSSL and set up HTTPS on a local Nginx server.',
          },
          {
            title: 'Application Protocols — SMTP, FTP, SSH',
            tag: 'Important',
            what: 'Email flow (SMTP, POP3, IMAP), FTP vs SFTP, SSH public-key auth, WebSocket, gRPC overview.',
            how: 'Set up an SSH key pair, configure key-based login on a remote server, and disable password auth.',
          }
        ]
      },
      {
        phase: 'Security & Troubleshooting',
        phaseNumber: 4,
        accent: '#7e3aa9',
        bg: '#f6f1fd',
        description: 'Defend networks and diagnose problems like a professional engineer.',
        topics: [
          {
            title: 'Network Security & Firewalls',
            tag: 'Core',
            what: 'Stateful vs stateless firewalls, iptables/UFW, ACLs, DMZ, IDS vs IPS, common attacks (DDoS, MITM, spoofing).',
            how: 'Configure UFW rules to allow only SSH and HTTP, block all else, and test with nmap.',
          },
          {
            title: 'VPNs & Proxies',
            tag: 'Important',
            what: 'VPN protocols (OpenVPN, WireGuard, IPSec), tunneling, forward/reverse proxies, load balancers, CDN.',
            how: 'Set up a WireGuard VPN between two cloud VMs and verify encrypted tunnel traffic.',
          },
          {
            title: 'Wireshark & Packet Analysis',
            tag: 'Practical',
            what: 'Capturing packets, display filters, following TCP streams, detecting anomalies, HTTP inspection, DNS analysis.',
            how: 'Capture 5 minutes of traffic, find an HTTP GET request, and reconstruct the full request-response cycle.',
          },
          {
            title: 'Network Troubleshooting',
            tag: 'Practical',
            what: 'ping, traceroute, netstat, ss, nmap, dig, tcpdump; systematic troubleshooting methodology.',
            how: 'Diagnose 5 intentionally broken connection scenarios on a VM lab and document the root cause and fix.',
          }
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
        phase: 'Core Concepts',
        phaseNumber: 1,
        accent: '#24685e',
        bg: '#edf6f4',
        description: 'Build your mental model of objects and classes before writing complex code.',
        topics: [
          {
            title: 'Classes, Objects & Methods',
            tag: 'Core',
            what: 'Class definition, object instantiation, instance variables vs class variables, methods, `this` keyword.',
            how: 'Model 3 real-world entities (Car, BankAccount, Student) as classes with attributes and behaviors.',
          },
          {
            title: 'Constructors & Access Modifiers',
            tag: 'Core',
            what: 'Default, parameterized, and copy constructors; public, private, protected, package-private; getters/setters.',
            how: 'Create a BankAccount class with private fields, getters/setters, and both default and parameterized constructors.',
          },
          {
            title: 'Encapsulation',
            tag: 'Must Know',
            what: 'Data hiding, information hiding, benefits of encapsulation, designing APIs that don\'t expose internals.',
            how: 'Refactor a class with public fields into a properly encapsulated version with validation in setters.',
          },
          {
            title: 'Static Members & Inner Classes',
            tag: 'Important',
            what: 'Static fields, static methods, static blocks, singleton using static; inner classes, anonymous classes, lambda basics.',
            how: 'Implement a singleton Logger class. Create an anonymous comparator for sorting a list.',
          }
        ]
      },
      {
        phase: 'The Four Pillars',
        phaseNumber: 2,
        accent: '#a94e3a',
        bg: '#fdf3f1',
        description: 'Master the fundamental principles that define object-oriented design.',
        topics: [
          {
            title: 'Inheritance & Method Overriding',
            tag: 'Must Know',
            what: 'Single and multilevel inheritance, `super`, method overriding vs overloading, `final` classes, constructor chaining.',
            how: 'Build an Animal hierarchy: Animal → Mammal → Dog. Override sound() at each level and observe dispatch.',
          },
          {
            title: 'Polymorphism',
            tag: 'Must Know',
            what: 'Compile-time (overloading) vs runtime polymorphism (overriding), dynamic dispatch, upcasting/downcasting, instanceof.',
            how: 'Create a Shape hierarchy and use a Shape[] array to call draw() on Circle, Rectangle, and Triangle polymorphically.',
          },
          {
            title: 'Abstraction & Abstract Classes',
            tag: 'Must Know',
            what: 'Abstract classes and methods, when to use abstract class vs interface, template method pattern basics.',
            how: 'Design an abstract Vehicle class and force subclasses to implement fuelType() and maxSpeed().',
          },
          {
            title: 'Interfaces & Multiple Inheritance',
            tag: 'Must Know',
            what: 'Interface definition, default and static methods, implementing multiple interfaces, marker interfaces, functional interfaces.',
            how: 'Create Flyable and Swimmable interfaces and make a Duck implement both.',
          }
        ]
      },
      {
        phase: 'Advanced Design',
        phaseNumber: 3,
        accent: '#3a5ea9',
        bg: '#f1f4fd',
        description: 'Write software that is easy to extend, test, and maintain.',
        topics: [
          {
            title: 'Composition vs Inheritance',
            tag: 'Core',
            what: '"Favor composition over inheritance", HAS-A vs IS-A, delegation, mixin patterns, avoiding fragile base class.',
            how: 'Redesign an inheritance hierarchy using composition. Justify why the new design is more flexible.',
          },
          {
            title: 'SOLID Principles',
            tag: 'Must Know',
            what: 'Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion — with examples.',
            how: 'Take a "god class" and refactor it so each SOLID principle is satisfied. Write before/after comparisons.',
          },
          {
            title: 'UML & Class Diagrams',
            tag: 'Important',
            what: 'Class diagram notation, associations, aggregation, composition, dependency, generalization; sequence diagrams.',
            how: 'Draw a UML class diagram for a hotel booking system before writing any code.',
          },
          {
            title: 'Dependency Injection & IoC',
            tag: 'Advanced',
            what: 'Constructor injection, setter injection, interface injection, IoC containers basics (Spring/DI frameworks).',
            how: 'Refactor a tightly-coupled EmailService to use dependency injection and write a unit test for it.',
          }
        ]
      },
      {
        phase: 'Design Patterns',
        phaseNumber: 4,
        accent: '#7e3aa9',
        bg: '#f6f1fd',
        description: 'Learn the 12 most important GoF patterns used in professional codebases.',
        topics: [
          {
            title: 'Creational Patterns',
            tag: 'Must Know',
            what: 'Singleton, Factory Method, Abstract Factory, Builder, Prototype — when to use each and trade-offs.',
            how: 'Implement a pizza-ordering system using Factory Method and Builder. Test each creation path.',
          },
          {
            title: 'Structural Patterns',
            tag: 'Important',
            what: 'Adapter, Decorator, Proxy, Facade, Composite, Bridge, Flyweight — diagram and implement 2–3 of these.',
            how: 'Use Decorator to add logging and caching to a service without changing the original class.',
          },
          {
            title: 'Behavioral Patterns',
            tag: 'Important',
            what: 'Observer, Strategy, Command, Iterator, Template Method, State, Chain of Responsibility.',
            how: 'Implement an event notification system using the Observer pattern and a payment system using Strategy.',
          }
        ]
      },
      {
        phase: 'Testing & Production Habits',
        phaseNumber: 5,
        accent: '#2a7a2a',
        bg: '#f1fdf1',
        description: 'Ship clean, tested, and maintainable object-oriented code.',
        topics: [
          {
            title: 'Unit Testing & TDD',
            tag: 'Must Know',
            what: 'JUnit/pytest basics, Arrange-Act-Assert pattern, mocking (Mockito), test-driven development cycle.',
            how: 'Write unit tests for a BankAccount class covering all edge cases before implementing the methods.',
          },
          {
            title: 'Refactoring Techniques',
            tag: 'Important',
            what: 'Code smells (long method, large class, feature envy), extract method, rename, replace conditional with polymorphism.',
            how: 'Take 200 lines of spaghetti code and refactor it step by step without breaking tests.',
          },
          {
            title: 'OOP Capstone Project',
            tag: 'Project',
            what: 'Full OOP application: class hierarchy, design patterns (2+), SOLID compliance, unit tests, Git history, README.',
            how: 'Build a library management, inventory, or task management system. Publish on GitHub and write a design document.',
          }
        ]
      }
    ]
  }
]

export default subjects
