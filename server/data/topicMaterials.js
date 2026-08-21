// Curated, direct, high-quality educational links and problem sets for all roadmap topics

const TOPIC_MATERIALS_DATABASE = {
  // ── Database Management System (DBMS) ───────────────────────────────────────
  'introduction to dbms': [
    { title: 'Introduction of DBMS (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/introduction-of-dbms-database-management-system-set-1/', platform: 'GeeksforGeeks' },
    { title: 'DBMS Architecture & File System vs DBMS (TutorialsPoint)', url: 'https://www.tutorialspoint.com/dbms/dbms_overview.htm', platform: 'TutorialsPoint' },
    { title: 'SQL & Database Basics (W3Schools)', url: 'https://www.w3schools.com/sql/sql_intro.asp', platform: 'W3Schools' }
  ],
  'database architecture & models': [
    { title: 'DBMS 3-Tier Architecture (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/three-level-architecture-of-dbms/', platform: 'GeeksforGeeks' },
    { title: 'Database Schemas and Instances (JavaTpoint)', url: 'https://www.javatpoint.com/dbms-schemas', platform: 'JavaTpoint' },
    { title: 'DBMS Data Models & Types (Guru99)', url: 'https://www.guru99.com/dbms-data-models.html', platform: 'Guru99' }
  ],
  'entity-relationship (er) model': [
    { title: 'Introduction to ER Model (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/introduction-of-er-model/', platform: 'GeeksforGeeks' },
    { title: 'ER Diagram Tutorial with Examples (Lucidchart Guide)', url: 'https://www.lucidchart.com/pages/er-diagrams', platform: 'Guide' },
    { title: 'Entities, Attributes & Cardinality in DBMS (JavaTpoint)', url: 'https://www.javatpoint.com/er-model', platform: 'JavaTpoint' }
  ],
  'relational model & keys': [
    { title: 'Relational Model Concepts & Keys (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/relational-model-in-dbms/', platform: 'GeeksforGeeks' },
    { title: 'Primary Key, Foreign Key & Candidate Keys (W3Schools)', url: 'https://www.w3schools.com/sql/sql_primarykey.asp', platform: 'W3Schools' },
    { title: 'LeetCode 175: Combine Two Tables (Key Constraints & Joins)', url: 'https://leetcode.com/problems/combine-two-tables/', platform: 'LeetCode' }
  ],
  'sql basics — ddl & dml': [
    { title: 'SQL Syntax, DDL & DML Complete Guide (W3Schools)', url: 'https://www.w3schools.com/sql/sql_syntax.asp', platform: 'W3Schools' },
    { title: 'SQL DDL, DQL, DML, DCL and TCL Commands (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/sql-ddl-dql-dml-dcl-tcl-commands/', platform: 'GeeksforGeeks' },
    { title: 'LeetCode 595: Big Countries (SQL SELECT & WHERE)', url: 'https://leetcode.com/problems/big-countries/', platform: 'LeetCode' },
    { title: 'LeetCode 1757: Recyclable and Low Fat Products', url: 'https://leetcode.com/problems/recyclable-and-low-fat-products/', platform: 'LeetCode' }
  ],
  'joins & set operations': [
    { title: 'SQL Joins Complete Reference (W3Schools)', url: 'https://www.w3schools.com/sql/sql_join.asp', platform: 'W3Schools' },
    { title: 'INNER, LEFT, RIGHT, FULL OUTER & CROSS Joins (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/sql-join-set-1-inner-left-right-and-full-joins/', platform: 'GeeksforGeeks' },
    { title: 'LeetCode 175: Combine Two Tables', url: 'https://leetcode.com/problems/combine-two-tables/', platform: 'LeetCode' },
    { title: 'LeetCode 1581: Customer Who Visited but Did Not Make Any Transactions', url: 'https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/', platform: 'LeetCode' }
  ],
  'subqueries & advanced filtering': [
    { title: 'SQL Subqueries & Correlated Subqueries (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/sql-subquery/', platform: 'GeeksforGeeks' },
    { title: 'SQL Common Table Expressions (CTE / WITH clause) (PostgreSQL Tutorial)', url: 'https://www.postgresqltutorial.com/postgresql-queries/postgresql-cte/', platform: 'PostgreSQL Tutorial' },
    { title: 'LeetCode 184: Department Highest Salary', url: 'https://leetcode.com/problems/department-highest-salary/', platform: 'LeetCode' },
    { title: 'LeetCode 185: Department Top Three Salaries', url: 'https://leetcode.com/problems/department-top-three-salaries/', platform: 'LeetCode' }
  ],
  'aggregate functions & window functions': [
    { title: 'SQL Aggregate Functions (COUNT, SUM, AVG, GROUP BY) (W3Schools)', url: 'https://www.w3schools.com/sql/sql_groupby.asp', platform: 'W3Schools' },
    { title: 'SQL Window Functions (ROW_NUMBER, RANK, DENSE_RANK, LEAD, LAG) (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/window-table-in-sql/', platform: 'GeeksforGeeks' },
    { title: 'LeetCode 178: Rank Scores (Window Functions)', url: 'https://leetcode.com/problems/rank-scores/', platform: 'LeetCode' },
    { title: 'LeetCode 180: Consecutive Numbers', url: 'https://leetcode.com/problems/consecutive-numbers/', platform: 'LeetCode' }
  ],
  'views, stored procedures & triggers': [
    { title: 'SQL CREATE VIEW Statement & Examples (W3Schools)', url: 'https://www.w3schools.com/sql/sql_view.asp', platform: 'W3Schools' },
    { title: 'Stored Procedures & Triggers in SQL (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/sql-stored-procedures/', platform: 'GeeksforGeeks' },
    { title: 'Triggers in DBMS with Real Examples (JavaTpoint)', url: 'https://www.javatpoint.com/dbms-triggers', platform: 'JavaTpoint' }
  ],
  'functional dependencies': [
    { title: 'Functional Dependency and Attribute Closure (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/functional-dependency-and-attribute-closure/', platform: 'GeeksforGeeks' },
    { title: 'Armstrong Axioms in DBMS (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/armstrongs-axioms-in-dbms/', platform: 'GeeksforGeeks' },
    { title: 'Canonical Cover / Minimal Cover in Relational Databases (GateVidyalay)', url: 'https://www.gatevidyalay.com/canonical-cover-minimal-cover-functional-dependencies/', platform: 'GateVidyalay' }
  ],
  'normalization — 1nf to bcnf': [
    { title: 'Database Normalization: 1NF, 2NF, 3NF & BCNF (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/database-normalization/', platform: 'GeeksforGeeks' },
    { title: 'Database Normalization Complete Step-by-Step Guide (Guru99)', url: 'https://www.guru99.com/database-normalization.html', platform: 'Guru99' },
    { title: 'Lossless Join and Dependency Preserving Decomposition (GateVidyalay)', url: 'https://www.gatevidyalay.com/lossless-decomposition-dbms/', platform: 'GateVidyalay' }
  ],
  'indexes & query optimization': [
    { title: 'Indexing in Databases (B-Tree vs Hash Indexing) (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/indexing-in-databases-set-1/', platform: 'GeeksforGeeks' },
    { title: 'Use The Index, Luke! — SQL Indexing and Tuning Guide', url: 'https://use-the-index-luke.com/', platform: 'Official Guide' },
    { title: 'PostgreSQL EXPLAIN ANALYZE & Query Optimization (PostgreSQL Tutorial)', url: 'https://www.postgresqltutorial.com/postgresql-administration/postgresql-explain/', platform: 'PostgreSQL' }
  ],
  'transaction management & acid': [
    { title: 'ACID Properties in DBMS (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/acid-properties-in-dbms/', platform: 'GeeksforGeeks' },
    { title: 'Transaction Management in DBMS (JavaTpoint)', url: 'https://www.javatpoint.com/dbms-transaction-management', platform: 'JavaTpoint' },
    { title: 'SQL COMMIT, ROLLBACK and SAVEPOINT (W3Schools)', url: 'https://www.w3schools.com/sql/sql_transactions.asp', platform: 'W3Schools' }
  ],
  'concurrency control': [
    { title: 'Concurrency Control Protocols in DBMS (2PL, Timestamping, MVCC) (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/concurrency-control-in-dbms/', platform: 'GeeksforGeeks' },
    { title: 'SQL Transaction Isolation Levels & Read Phenomena (Baeldung)', url: 'https://www.baeldung.com/cs/database-isolation-levels', platform: 'Baeldung' },
    { title: 'Two-Phase Locking (2PL) Protocol (GateVidyalay)', url: 'https://www.gatevidyalay.com/two-phase-locking-protocol-2pl-concurrency-control/', platform: 'GateVidyalay' }
  ],
  'deadlocks & recovery': [
    { title: 'Deadlock in DBMS: Prevention, Detection, and Recovery (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/deadlock-in-dbms-set-1/', platform: 'GeeksforGeeks' },
    { title: 'Database Recovery Techniques (Log-Based, ARIES, Checkpoints) (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/dbms-recovery-system/', platform: 'GeeksforGeeks' },
    { title: 'Wait-For Graph in DBMS Deadlock Detection (JavaTpoint)', url: 'https://www.javatpoint.com/dbms-deadlock', platform: 'JavaTpoint' }
  ],
  'nosql & when to use it': [
    { title: 'Introduction to NoSQL Databases & CAP Theorem (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/introduction-to-nosql/', platform: 'GeeksforGeeks' },
    { title: 'MongoDB Official Developer Getting Started Tutorial', url: 'https://www.mongodb.com/docs/manual/tutorial/getting-started/', platform: 'MongoDB Docs' },
    { title: 'SQL vs NoSQL: High-Level Comparison & Trade-offs (AWS Architecture)', url: 'https://aws.amazon.com/compare/the-difference-between-sql-and-nosql/', platform: 'AWS' }
  ],
  'mysql & postgresql hands-on': [
    { title: 'PostgreSQL Official Interactive Tutorial', url: 'https://www.postgresqltutorial.com/', platform: 'PostgreSQL' },
    { title: 'MySQL Official Workbench and CLI Tutorial (MySQL Docs)', url: 'https://dev.mysql.com/doc/refman/8.0/en/tutorial.html', platform: 'MySQL' },
    { title: 'SQLZoo Interactive SQL Practice Playground', url: 'https://sqlzoo.net/', platform: 'SQLZoo' }
  ],
  'schema design for a real app': [
    { title: 'Database Schema Design Best Practices (Prisma Guide)', url: 'https://www.prisma.io/dataguide/database-modeling/what-is-a-database-schema', platform: 'Prisma Guide' },
    { title: 'Designing E-Commerce Database Schemas (Medium Architecture)', url: 'https://medium.com/@database_design/ecommerce-database-design-399a9b71e1ad', platform: 'Medium' },
    { title: 'DBDiagram.io — Free Online Database Schema Designer', url: 'https://dbdiagram.io/', platform: 'Tool' }
  ],
  'portfolio project — build & publish': [
    { title: 'Full Stack Database Project Guide (FreeCodeCamp)', url: 'https://www.freecodecamp.org/news/how-to-build-a-relational-database-project/', platform: 'freeCodeCamp' },
    { title: 'GitHub Open-Source Database Projects & Templates', url: 'https://github.com/topics/database-project', platform: 'GitHub' },
    { title: 'PostgreSQL Database Seeding and Sample Datasets', url: 'https://github.com/devrimgunduz/pagila', platform: 'GitHub' }
  ],

  // ── Data Structures & Algorithms (DSA) ──────────────────────────────────────
  'big o notation & complexity analysis': [
    { title: 'Big O Notation Guide with Visual Charts (freeCodeCamp)', url: 'https://www.freecodecamp.org/news/big-o-notation-why-it-matters-and-why-it-doesnt-1674cfa8a23c/', platform: 'freeCodeCamp' },
    { title: 'Time and Space Complexity Analysis of Algorithms (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/analysis-of-algorithms-set-1-asymptotic-analysis/', platform: 'GeeksforGeeks' },
    { title: 'Big-O Cheat Sheet (Time Complexity Tables)', url: 'https://www.bigocheatsheet.com/', platform: 'Cheat Sheet' }
  ],
  'arrays & strings': [
    { title: 'Array Data Structure Complete Tutorial (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/array-data-structure-guide/', platform: 'GeeksforGeeks' },
    { title: 'LeetCode 1: Two Sum (Core Array & Hash Map)', url: 'https://leetcode.com/problems/two-sum/', platform: 'LeetCode' },
    { title: 'LeetCode 242: Valid Anagram (String Manipulation)', url: 'https://leetcode.com/problems/valid-anagram/', platform: 'LeetCode' },
    { title: 'LeetCode 121: Best Time to Buy and Sell Stock', url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/', platform: 'LeetCode' }
  ],
  'linked lists': [
    { title: 'Linked List Data Structure (Singly, Doubly, Circular) (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/data-structures/linked-list/', platform: 'GeeksforGeeks' },
    { title: 'LeetCode 206: Reverse Linked List', url: 'https://leetcode.com/problems/reverse-linked-list/', platform: 'LeetCode' },
    { title: 'LeetCode 141: Linked List Cycle (Floyd\'s Tortoise and Hare)', url: 'https://leetcode.com/problems/linked-list-cycle/', platform: 'LeetCode' },
    { title: 'LeetCode 21: Merge Two Sorted Lists', url: 'https://leetcode.com/problems/merge-two-sorted-lists/', platform: 'LeetCode' }
  ],
  'stacks & queues': [
    { title: 'Stack & Queue Data Structures (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/stack-data-structure/', platform: 'GeeksforGeeks' },
    { title: 'LeetCode 20: Valid Parentheses (Stack)', url: 'https://leetcode.com/problems/valid-parentheses/', platform: 'LeetCode' },
    { title: 'LeetCode 232: Implement Queue using Stacks', url: 'https://leetcode.com/problems/implement-queue-using-stacks/', platform: 'LeetCode' },
    { title: 'LeetCode 739: Daily Temperatures (Monotonic Stack)', url: 'https://leetcode.com/problems/daily-temperatures/', platform: 'LeetCode' }
  ],
  'hash maps & hash tables': [
    { title: 'Hashing Data Structure & Hash Tables (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/hashing-data-structure/', platform: 'GeeksforGeeks' },
    { title: 'LeetCode 49: Group Anagrams (Hash Map)', url: 'https://leetcode.com/problems/group-anagrams/', platform: 'LeetCode' },
    { title: 'LeetCode 347: Top K Frequent Elements', url: 'https://leetcode.com/problems/top-k-frequent-elements/', platform: 'LeetCode' },
    { title: 'LeetCode 128: Longest Consecutive Sequence', url: 'https://leetcode.com/problems/longest-consecutive-sequence/', platform: 'LeetCode' }
  ],
  'recursion & backtracking': [
    { title: 'Recursion and Backtracking Algorithms Tutorial (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/backtracking-algorithms/', platform: 'GeeksforGeeks' },
    { title: 'LeetCode 78: Subsets (Backtracking)', url: 'https://leetcode.com/problems/subsets/', platform: 'LeetCode' },
    { title: 'LeetCode 46: Permutations', url: 'https://leetcode.com/problems/permutations/', platform: 'LeetCode' },
    { title: 'LeetCode 51: N-Queens (Classic Backtracking)', url: 'https://leetcode.com/problems/n-queens/', platform: 'LeetCode' }
  ],
  'binary trees & bst': [
    { title: 'Binary Tree and BST Complete Guide (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/binary-tree-data-structure/', platform: 'GeeksforGeeks' },
    { title: 'LeetCode 94: Binary Tree Inorder Traversal', url: 'https://leetcode.com/problems/binary-tree-inorder-traversal/', platform: 'LeetCode' },
    { title: 'LeetCode 102: Binary Tree Level Order Traversal', url: 'https://leetcode.com/problems/binary-tree-level-order-traversal/', platform: 'LeetCode' },
    { title: 'LeetCode 98: Validate Binary Search Tree', url: 'https://leetcode.com/problems/validate-binary-search-tree/', platform: 'LeetCode' },
    { title: 'LeetCode 226: Invert Binary Tree', url: 'https://leetcode.com/problems/invert-binary-tree/', platform: 'LeetCode' }
  ],
  'avl trees & balanced bsts': [
    { title: 'AVL Tree Insertion and Rotation (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/avl-tree-set-1-insertion/', platform: 'GeeksforGeeks' },
    { title: 'Red-Black Tree Data Structure and Properties (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/red-black-tree-set-1-introduction-2/', platform: 'GeeksforGeeks' },
    { title: 'Visualgo Binary Search Tree & AVL Tree Visualizer', url: 'https://visualgo.net/en/bst', platform: 'Visualgo' }
  ],
  'heaps & priority queues': [
    { title: 'Binary Heap & Heap Sort (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/binary-heap/', platform: 'GeeksforGeeks' },
    { title: 'LeetCode 215: Kth Largest Element in an Array', url: 'https://leetcode.com/problems/kth-largest-element-in-an-array/', platform: 'LeetCode' },
    { title: 'LeetCode 23: Merge k Sorted Lists', url: 'https://leetcode.com/problems/merge-k-sorted-lists/', platform: 'LeetCode' },
    { title: 'LeetCode 295: Find Median from Data Stream (Two Heaps)', url: 'https://leetcode.com/problems/find-median-from-data-stream/', platform: 'LeetCode' }
  ],
  'tries & segment trees': [
    { title: 'Trie (Prefix Tree) Data Structure (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/trie-insert-and-search/', platform: 'GeeksforGeeks' },
    { title: 'LeetCode 208: Implement Trie (Prefix Tree)', url: 'https://leetcode.com/problems/implement-trie-prefix-tree/', platform: 'LeetCode' },
    { title: 'LeetCode 211: Design Add and Search Words Data Structure', url: 'https://leetcode.com/problems/design-add-and-search-words-data-structure/', platform: 'LeetCode' },
    { title: 'Segment Tree Range Minimum / Sum Queries (CP-Algorithms)', url: 'https://cp-algorithms.com/data_structures/segment_tree.html', platform: 'CP-Algorithms' }
  ],
  'graph representation & bfs/dfs': [
    { title: 'Graph Data Structure and Algorithms (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/', platform: 'GeeksforGeeks' },
    { title: 'LeetCode 200: Number of Islands (BFS / DFS)', url: 'https://leetcode.com/problems/number-of-islands/', platform: 'LeetCode' },
    { title: 'LeetCode 133: Clone Graph', url: 'https://leetcode.com/problems/clone-graph/', platform: 'LeetCode' },
    { title: 'LeetCode 127: Word Ladder (BFS Shortest Path)', url: 'https://leetcode.com/problems/word-ladder/', platform: 'LeetCode' }
  ],
  'shortest path algorithms': [
    { title: 'Dijkstra\'s Shortest Path Algorithm (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/', platform: 'GeeksforGeeks' },
    { title: 'Bellman-Ford Algorithm for Negative Weight Cycles (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/bellman-ford-algorithm-dp-23/', platform: 'GeeksforGeeks' },
    { title: 'LeetCode 743: Network Delay Time (Dijkstra)', url: 'https://leetcode.com/problems/network-delay-time/', platform: 'LeetCode' },
    { title: 'LeetCode 787: Cheapest Flights Within K Stops', url: 'https://leetcode.com/problems/cheapest-flights-within-k-stops/', platform: 'LeetCode' }
  ],
  'topological sort & union-find': [
    { title: 'Topological Sorting & Kahn\'s Algorithm (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/topological-sorting/', platform: 'GeeksforGeeks' },
    { title: 'Disjoint Set Union (Union-Find) with Path Compression (CP-Algorithms)', url: 'https://cp-algorithms.com/data_structures/disjoint_set_union.html', platform: 'CP-Algorithms' },
    { title: 'LeetCode 207: Course Schedule (Topological Sort / Cycle Detection)', url: 'https://leetcode.com/problems/course-schedule/', platform: 'LeetCode' },
    { title: 'LeetCode 547: Number of Provinces (Union-Find / Connected Components)', url: 'https://leetcode.com/problems/number-of-provinces/', platform: 'LeetCode' }
  ],
  'two pointers & sliding window': [
    { title: 'Two Pointers Technique with Examples (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/two-pointers-technique/', platform: 'GeeksforGeeks' },
    { title: 'LeetCode 11: Container With Most Water', url: 'https://leetcode.com/problems/container-with-most-water/', platform: 'LeetCode' },
    { title: 'LeetCode 3: Longest Substring Without Repeating Characters (Sliding Window)', url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/', platform: 'LeetCode' },
    { title: 'LeetCode 76: Minimum Window Substring', url: 'https://leetcode.com/problems/minimum-window-substring/', platform: 'LeetCode' }
  ],
  'dynamic programming': [
    { title: 'Dynamic Programming Patterns & Tutorial (freeCodeCamp)', url: 'https://www.freecodecamp.org/news/demystifying-dynamic-programming-3ef712023cb2/', platform: 'freeCodeCamp' },
    { title: 'LeetCode 70: Climbing Stairs (1D DP)', url: 'https://leetcode.com/problems/climbing-stairs/', platform: 'LeetCode' },
    { title: 'LeetCode 322: Coin Change (Knapsack Pattern)', url: 'https://leetcode.com/problems/coin-change/', platform: 'LeetCode' },
    { title: 'LeetCode 1143: Longest Common Subsequence (2D DP)', url: 'https://leetcode.com/problems/longest-common-subsequence/', platform: 'LeetCode' },
    { title: 'LeetCode 300: Longest Increasing Subsequence', url: 'https://leetcode.com/problems/longest-increasing-subsequence/', platform: 'LeetCode' }
  ],
  'greedy algorithms': [
    { title: 'Greedy Algorithms Design and Problems (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/greedy-algorithms/', platform: 'GeeksforGeeks' },
    { title: 'LeetCode 55: Jump Game', url: 'https://leetcode.com/problems/jump-game/', platform: 'LeetCode' },
    { title: 'LeetCode 435: Non-overlapping Intervals', url: 'https://leetcode.com/problems/non-overlapping-intervals/', platform: 'LeetCode' },
    { title: 'LeetCode 621: Task Scheduler', url: 'https://leetcode.com/problems/task-scheduler/', platform: 'LeetCode' }
  ],
  'bit manipulation': [
    { title: 'Bit Manipulation Algorithms & Tricks (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/bitwise-hacks-for-competitive-programming/', platform: 'GeeksforGeeks' },
    { title: 'LeetCode 136: Single Number (XOR Property)', url: 'https://leetcode.com/problems/single-number/', platform: 'LeetCode' },
    { title: 'LeetCode 191: Number of 1 Bits (Hamming Weight)', url: 'https://leetcode.com/problems/number-of-1-bits/', platform: 'LeetCode' },
    { title: 'LeetCode 338: Counting Bits', url: 'https://leetcode.com/problems/counting-bits/', platform: 'LeetCode' }
  ],

  // ── Operating Systems ───────────────────────────────────────────────────────
  'introduction to operating systems': [
    { title: 'Operating Systems Overview & Architecture (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/introduction-of-operating-system-set-1/', platform: 'GeeksforGeeks' },
    { title: 'System Calls in OS (fork, exec, read, write) (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/system-call-in-os/', platform: 'GeeksforGeeks' },
    { title: 'Operating Systems: Three Easy Pieces (Free Textbook)', url: 'https://pages.cs.wisc.edu/~remzi/OSTEP/', platform: 'Free Textbook' }
  ],
  'process vs thread': [
    { title: 'Difference Between Process and Thread (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/difference-between-process-and-thread/', platform: 'GeeksforGeeks' },
    { title: 'Process Control Block (PCB) & State Transitions (TutorialsPoint)', url: 'https://www.tutorialspoint.com/operating_system/os_processes.htm', platform: 'TutorialsPoint' },
    { title: 'Multithreading and Context Switching in Operating Systems (Baeldung)', url: 'https://www.baeldung.com/cs/process-vs-thread', platform: 'Baeldung' }
  ],
  'cpu scheduling algorithms': [
    { title: 'CPU Scheduling in Operating Systems (FCFS, SJF, Round Robin) (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/cpu-scheduling-in-operating-systems/', platform: 'GeeksforGeeks' },
    { title: 'Preemptive vs Non-Preemptive Scheduling Algorithms (Guru99)', url: 'https://www.guru99.com/cpu-scheduling-algorithms.html', platform: 'Guru99' },
    { title: 'Round Robin CPU Scheduling Simulation & Code (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/program-round-robin-scheduling-set-1/', platform: 'GeeksforGeeks' }
  ],
  'inter-process communication (ipc)': [
    { title: 'Inter Process Communication (IPC) Mechanisms (Pipes, Shared Memory, Message Queues) (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/inter-process-communication-ipc/', platform: 'GeeksforGeeks' },
    { title: 'Producer-Consumer Problem in Operating Systems (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/producer-consumer-problem-using-semaphores-set-1/', platform: 'GeeksforGeeks' },
    { title: 'POSIX Pipes and Shared Memory in C (Linux Man Pages)', url: 'https://man7.org/linux/man-pages/man2/pipe.2.html', platform: 'Linux Manual' }
  ],
  'memory hierarchy & caching': [
    { title: 'Memory Hierarchy in Computer Architecture & Locality of Reference (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/memory-hierarchy-design-and-its-characteristics/', platform: 'GeeksforGeeks' },
    { title: 'Cache Memory in Computer Organization (L1, L2, L3 Caches) (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/cache-memory-in-computer-organization/', platform: 'GeeksforGeeks' },
    { title: 'What Every Programmer Should Know About Memory (Ulrich Drepper)', url: 'https://people.freebsd.org/~lstewart/articles/cpumemory.pdf', platform: 'Paper' }
  ],
  'virtual memory & paging': [
    { title: 'Virtual Memory and Demand Paging (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/virtual-memory-in-operating-system/', platform: 'GeeksforGeeks' },
    { title: 'Paging and Translation Lookaside Buffer (TLB) (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/translation-lookaside-buffer-tlb-in-paging/', platform: 'GeeksforGeeks' },
    { title: 'Page Fault Handling & Address Translation Step-by-Step (GateVidyalay)', url: 'https://www.gatevidyalay.com/page-fault-handling-in-operating-system/', platform: 'GateVidyalay' }
  ],
  'page replacement algorithms': [
    { title: 'Page Replacement Algorithms (FIFO, LRU, Optimal, Clock) (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/page-replacement-algorithms-in-operating-systems/', platform: 'GeeksforGeeks' },
    { title: 'LeetCode 146: LRU Cache (Implement LRU Page Replacement in Code)', url: 'https://leetcode.com/problems/lru-cache/', platform: 'LeetCode' },
    { title: 'LeetCode 460: LFU Cache', url: 'https://leetcode.com/problems/lfu-cache/', platform: 'LeetCode' }
  ],
  'segmentation & memory allocation': [
    { title: 'Segmentation in Operating System vs Paging (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/segmentation-in-operating-system/', platform: 'GeeksforGeeks' },
    { title: 'Memory Allocation: First Fit, Best Fit, and Worst Fit (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/program-first-fit-algorithm-memory-management/', platform: 'GeeksforGeeks' },
    { title: 'Internal vs External Fragmentation & Compaction (JavaTpoint)', url: 'https://www.javatpoint.com/fragmentation-in-operating-system', platform: 'JavaTpoint' }
  ],
  'race conditions & critical sections': [
    { title: 'Process Synchronization & Critical Section Problem (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/introduction-of-process-synchronization/', platform: 'GeeksforGeeks' },
    { title: 'Peterson\'s Algorithm & Mutex Locks (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/petersons-algorithm-for-mutual-exclusion-set-1/', platform: 'GeeksforGeeks' },
    { title: 'LeetCode 1114: Print in Order (Concurrency / Thread Synchronization)', url: 'https://leetcode.com/problems/print-in-order/', platform: 'LeetCode' }
  ],
  'semaphores & monitors': [
    { title: 'Semaphores in Process Synchronization (Counting vs Binary) (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/semaphores-in-process-synchronization/', platform: 'GeeksforGeeks' },
    { title: 'Dining Philosophers Problem using Semaphores (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/dining-philosopher-problem-using-semaphores/', platform: 'GeeksforGeeks' },
    { title: 'LeetCode 1115: Print FooBar Alternately (Threads & Semaphores)', url: 'https://leetcode.com/problems/print-foobar-alternately/', platform: 'LeetCode' },
    { title: 'LeetCode 1116: Print Zero Even Odd', url: 'https://leetcode.com/problems/print-zero-even-odd/', platform: 'LeetCode' }
  ],
  'deadlocks — detection & prevention': [
    { title: 'Deadlock in Operating System & Coffman Conditions (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/introduction-of-deadlock-in-operating-system/', platform: 'GeeksforGeeks' },
    { title: 'Banker\'s Algorithm for Deadlock Avoidance (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/bankers-algorithm-in-operating-system-2/', platform: 'GeeksforGeeks' },
    { title: 'Resource Allocation Graph (RAG) & Wait-For Graph (GateVidyalay)', url: 'https://www.gatevidyalay.com/resource-allocation-graph-deadlock-detection/', platform: 'GateVidyalay' }
  ],
  'file systems & disk structure': [
    { title: 'File System Implementation & Inodes in Linux (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/file-systems-in-operating-system/', platform: 'GeeksforGeeks' },
    { title: 'File Allocation Methods (Contiguous, Linked, Indexed) (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/file-allocation-methods/', platform: 'GeeksforGeeks' },
    { title: 'Linux File System Hierarchy & Ext4 Architecture (HowToGeek)', url: 'https://www.howtogeek.com/117435/htg-explains-the-linux-directory-structure-explained/', platform: 'Guide' }
  ],
  'disk scheduling algorithms': [
    { title: 'Disk Scheduling Algorithms (FCFS, SSTF, SCAN, C-SCAN, LOOK) (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/disk-scheduling-algorithms/', platform: 'GeeksforGeeks' },
    { title: 'SCAN (Elevator) and C-SCAN Disk Scheduling (TutorialsPoint)', url: 'https://www.tutorialspoint.com/operating_system/os_disk_scheduling.htm', platform: 'TutorialsPoint' }
  ],
  'linux commands & shell scripting': [
    { title: 'Linux Command Line Basics for Developers (freeCodeCamp)', url: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/', platform: 'freeCodeCamp' },
    { title: 'Bash Shell Scripting Tutorial for Beginners (Linuxize)', url: 'https://linuxize.com/post/bash-scripting-how-to-write-bash-scripts/', platform: 'Linuxize' },
    { title: 'OverTheWire: Bandit (Interactive Linux Wargame for Beginners)', url: 'https://overthewire.org/wargames/bandit/', platform: 'Interactive Lab' }
  ],
  'os security & system hardening': [
    { title: 'Linux System Security and Hardening Best Practices (CIS Benchmarks)', url: 'https://www.cisecurity.org/benchmark/ubuntu_linux', platform: 'CIS Security' },
    { title: 'Linux File Permissions (chmod, chown, sudo) (DigitalOcean)', url: 'https://www.digitalocean.com/community/tutorials/an-introduction-to-linux-permissions', platform: 'DigitalOcean' },
    { title: 'UFW Firewall and Network Security Configuration Guide (Ubuntu Docs)', url: 'https://ubuntu.com/server/docs/security-firewall', platform: 'Ubuntu Docs' }
  ],

  // ── Computer Networks ───────────────────────────────────────────────────────
  'osi model & tcp/ip stack': [
    { title: 'The 7 Layers of the OSI Model Explained (Cloudflare Learning)', url: 'https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/', platform: 'Cloudflare' },
    { title: 'TCP/IP vs OSI Model Detailed Comparison (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/tcp-ip-model/', platform: 'GeeksforGeeks' },
    { title: 'Data Encapsulation and Protocol Data Units (PDUs) (Network World)', url: 'https://www.networkworld.com/article/967664/what-is-encapsulation-in-networking.html', platform: 'Network World' }
  ],
  'network devices & topologies': [
    { title: 'Network Devices: Hub, Switch, Router, Bridge, Gateway (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/network-devices-hub-repeater-bridge-switch-router-gateways/', platform: 'GeeksforGeeks' },
    { title: 'Network Topologies (Star, Mesh, Ring, Bus, Tree) (TutorialsPoint)', url: 'https://www.tutorialspoint.com/data_communication_computer_network/computer_network_topologies.htm', platform: 'TutorialsPoint' }
  ],
  'data link layer & ethernet': [
    { title: 'Data Link Layer Responsibilities & MAC Address (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/data-link-layer/', platform: 'GeeksforGeeks' },
    { title: 'Address Resolution Protocol (ARP) & How ARP Works (Cloudflare)', url: 'https://www.cloudflare.com/learning/network-layer/what-is-arp/', platform: 'Cloudflare' },
    { title: 'CSMA/CD and Ethernet Frame Format (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/carrier-sense-multiple-access-csma/', platform: 'GeeksforGeeks' }
  ],
  'ipv4, subnetting & cidr': [
    { title: 'IPv4 Addressing, Subnetting & CIDR Notation Guide (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/ip-addressing-introduction-and-classful-addressing/', platform: 'GeeksforGeeks' },
    { title: 'Subnetting Practice & VLSM Calculator (Practical Networking)', url: 'https://www.practicalnetworking.net/stand-alone/subnetting-practice/', platform: 'Interactive' },
    { title: 'IP Subnet Mask Cheatsheet & Calculations (Cisco Learning)', url: 'https://learningnetwork.cisco.com/s/article/ip-subnetting-quick-guide', platform: 'Cisco' }
  ],
  'ipv6 & address management': [
    { title: 'IPv6 Addressing & Comparison with IPv4 (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/ipv6-addressing-modes/', platform: 'GeeksforGeeks' },
    { title: 'Neighbor Discovery Protocol (NDP) in IPv6 (Cisco)', url: 'https://www.cisco.com/c/en/us/support/docs/ip/ip-version-6-ipv6/113328-ipv6-nd-p.html', platform: 'Cisco' }
  ],
  'dns, dhcp & nat': [
    { title: 'What is DNS and How Does It Work? (Cloudflare Learning)', url: 'https://www.cloudflare.com/learning/dns/what-is-dns/', platform: 'Cloudflare' },
    { title: 'Dynamic Host Configuration Protocol (DHCP) (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/dynamic-host-configuration-protocol-dhcp/', platform: 'GeeksforGeeks' },
    { title: 'Network Address Translation (NAT & PAT) Explained (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/network-address-translation-nat/', platform: 'GeeksforGeeks' }
  ],
  'routing protocols': [
    { title: 'Routing Protocols Overview: RIP, OSPF, and BGP (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/routing-protocols-in-computer-network/', platform: 'GeeksforGeeks' },
    { title: 'How BGP Routing Runs the Entire Internet (Cloudflare Learning)', url: 'https://www.cloudflare.com/learning/security/glossary/what-is-bgp/', platform: 'Cloudflare' },
    { title: 'Link State vs Distance Vector Routing (GateVidyalay)', url: 'https://www.gatevidyalay.com/distance-vector-routing-algorithm/', platform: 'GateVidyalay' }
  ],
  'tcp vs udp & handshakes': [
    { title: 'TCP 3-Way Handshake and 4-Way Termination (Cloudflare)', url: 'https://www.cloudflare.com/learning/ddos/glossary/tcp-3-way-handshake/', platform: 'Cloudflare' },
    { title: 'TCP vs UDP: Key Differences & Trade-offs (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/differences-between-tcp-and-udp/', platform: 'GeeksforGeeks' },
    { title: 'TCP Flow Control & Sliding Window Protocol (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/sliding-window-protocol-set-1/', platform: 'GeeksforGeeks' }
  ],
  'http, https & rest': [
    { title: 'HTTP Methods, Headers & Status Codes Reference (MDN Web Docs)', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview', platform: 'MDN Web Docs' },
    { title: 'HTTP/1.1 vs HTTP/2 vs HTTP/3 (Cloudflare Learning)', url: 'https://www.cloudflare.com/learning/performance/http2-vs-http1.1/', platform: 'Cloudflare' },
    { title: 'REST API Architectural Principles & Best Practices (RESTful API)', url: 'https://restfulapi.net/', platform: 'Guide' }
  ],
  'tls/ssl & certificate authority': [
    { title: 'How Does SSL/TLS Handshake Work? (Cloudflare Learning)', url: 'https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/', platform: 'Cloudflare' },
    { title: 'Public Key Infrastructure (PKI) & Digital Certificates (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/public-key-infrastructure-pki/', platform: 'GeeksforGeeks' }
  ],
  'application protocols — smtp, ftp, ssh': [
    { title: 'Application Layer Protocols: SMTP, POP3, IMAP, FTP, SSH (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/application-layer-in-osi-model/', platform: 'GeeksforGeeks' },
    { title: 'How SSH Authentication Works (Public Key Cryptography) (DigitalOcean)', url: 'https://www.digitalocean.com/community/tutorials/understanding-the-ssh-encryption-and-connection-process', platform: 'DigitalOcean' },
    { title: 'WebSocket Protocol vs HTTP Polling (MDN Web Docs)', url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API', platform: 'MDN' }
  ],
  'network security & firewalls': [
    { title: 'Firewalls: Stateful vs Stateless & Architecture (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/types-of-firewall/', platform: 'GeeksforGeeks' },
    { title: 'Common Network Attacks: DDoS, Man-in-the-Middle, DNS Poisoning (Cloudflare)', url: 'https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/', platform: 'Cloudflare' }
  ],
  'vpns & proxies': [
    { title: 'What is a VPN (Virtual Private Network)? (Cloudflare)', url: 'https://www.cloudflare.com/learning/access-management/what-is-a-vpn/', platform: 'Cloudflare' },
    { title: 'Forward Proxy vs Reverse Proxy Architecture (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/difference-between-forward-proxy-and-reverse-proxy/', platform: 'GeeksforGeeks' }
  ],
  'wireshark & packet analysis': [
    { title: 'Wireshark Official User Guide & Packet Capturing Tutorial', url: 'https://www.wireshark.org/docs/wsug_html_chunked/', platform: 'Wireshark' },
    { title: 'Wireshark Tutorial for Beginners (freeCodeCamp)', url: 'https://www.freecodecamp.org/news/wireshark-tutorial-for-beginners/', platform: 'freeCodeCamp' }
  ],
  'network troubleshooting': [
    { title: 'Essential Network Troubleshooting Tools (ping, traceroute, netstat, nmap) (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/basic-network-troubleshooting-commands-in-linux/', platform: 'GeeksforGeeks' },
    { title: 'Systematic Network Troubleshooting Methodology (Cisco Guide)', url: 'https://www.cisco.com/c/en/us/support/docs/ip/routing-information-protocol-rip/13768-troubleshooting-methodology.html', platform: 'Cisco' }
  ],

  // ── Object-Oriented Programming (OOP) ───────────────────────────────────────
  'classes, objects & methods': [
    { title: 'Classes and Objects in Java / C++ (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/classes-objects-java/', platform: 'GeeksforGeeks' },
    { title: 'Java OOP Concepts Tutorial (W3Schools)', url: 'https://www.w3schools.com/java/java_oop.asp', platform: 'W3Schools' },
    { title: 'Object-Oriented Design in Python (Real Python)', url: 'https://realpython.com/python3-object-oriented-programming/', platform: 'Real Python' }
  ],
  'constructors & access modifiers': [
    { title: 'Constructors in OOP (Default, Parameterized, Copy) (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/constructors-in-java/', platform: 'GeeksforGeeks' },
    { title: 'Access Modifiers in Java (public, private, protected) (Baeldung)', url: 'https://www.baeldung.com/java-access-modifiers', platform: 'Baeldung' }
  ],
  'encapsulation': [
    { title: 'Encapsulation in Object-Oriented Programming (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/encapsulation-in-java/', platform: 'GeeksforGeeks' },
    { title: 'Data Hiding vs Encapsulation (Baeldung)', url: 'https://www.baeldung.com/java-data-hiding-vs-encapsulation', platform: 'Baeldung' },
    { title: 'LeetCode 380: Insert Delete GetRandom O(1) (Encapsulated Class Design)', url: 'https://leetcode.com/problems/insert-delete-getrandom-o1/', platform: 'LeetCode' }
  ],
  'static members & inner classes': [
    { title: 'Static Keyword in Java (Variables, Methods, Blocks, Classes) (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/static-keyword-java/', platform: 'GeeksforGeeks' },
    { title: 'Java Inner Classes & Anonymous Classes (Baeldung)', url: 'https://www.baeldung.com/java-nested-classes', platform: 'Baeldung' }
  ],
  'inheritance & method overriding': [
    { title: 'Inheritance in Java & Method Overriding (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/inheritance-in-java/', platform: 'GeeksforGeeks' },
    { title: 'Super Keyword and Constructor Chaining in Java (Baeldung)', url: 'https://www.baeldung.com/java-this-super', platform: 'Baeldung' }
  ],
  'polymorphism': [
    { title: 'Polymorphism in OOP (Compile-time vs Runtime / Dynamic Dispatch) (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/polymorphism-in-java/', platform: 'GeeksforGeeks' },
    { title: 'Method Overloading vs Method Overriding (Baeldung)', url: 'https://www.baeldung.com/java-method-overload-override', platform: 'Baeldung' }
  ],
  'abstraction & abstract classes': [
    { title: 'Abstraction in Java & Abstract Classes (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/abstraction-in-java-2/', platform: 'GeeksforGeeks' },
    { title: 'Abstract Class vs Interface in Java (Baeldung)', url: 'https://www.baeldung.com/java-interface-vs-abstract-class', platform: 'Baeldung' }
  ],
  'interfaces & multiple inheritance': [
    { title: 'Interfaces in Java & Default Methods (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/interfaces-in-java/', platform: 'GeeksforGeeks' },
    { title: 'Functional Interfaces & Lambda Expressions in Java 8+ (Baeldung)', url: 'https://www.baeldung.com/java-8-functional-interfaces', platform: 'Baeldung' }
  ],
  'composition vs inheritance': [
    { title: 'Favor Composition Over Inheritance (Design Principle) (Baeldung)', url: 'https://www.baeldung.com/cs/composition-vs-inheritance', platform: 'Baeldung' },
    { title: 'Association, Aggregation, and Composition in OOP (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/association-composition-aggregation-java/', platform: 'GeeksforGeeks' }
  ],
  'solid principles': [
    { title: 'SOLID Principles Explained in Plain English (freeCodeCamp)', url: 'https://www.freecodecamp.org/news/solid-principles-explained-in-plain-english/', platform: 'freeCodeCamp' },
    { title: 'A Solid Guide to SOLID Principles (Baeldung)', url: 'https://www.baeldung.com/solid-principles', platform: 'Baeldung' },
    { title: 'Refactoring Guru: Code Smells & Clean Architecture', url: 'https://refactoring.guru/refactoring/smells', platform: 'Refactoring Guru' }
  ],
  'uml & class diagrams': [
    { title: 'UML Class Diagrams Tutorial with Examples (Lucidchart)', url: 'https://www.lucidchart.com/pages/uml-class-diagram', platform: 'Lucidchart' },
    { title: 'Unified Modeling Language (UML) Class Diagram Guide (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/unified-modeling-language-uml-class-diagrams/', platform: 'GeeksforGeeks' }
  ],
  'dependency injection & ioc': [
    { title: 'Inversion of Control (IoC) and Dependency Injection (DI) (Martin Fowler)', url: 'https://martinfowler.com/articles/injection.html', platform: 'Martin Fowler' },
    { title: 'Intro to Inversion of Control and Dependency Injection in Spring (Baeldung)', url: 'https://www.baeldung.com/inversion-control-and-dependency-injection-in-spring', platform: 'Baeldung' }
  ],
  'creational patterns': [
    { title: 'Creational Design Patterns (Singleton, Factory, Builder) (Refactoring Guru)', url: 'https://refactoring.guru/design-patterns/creational-patterns', platform: 'Refactoring Guru' },
    { title: 'Gang of Four (GoF) Design Patterns in Java (Baeldung)', url: 'https://www.baeldung.com/creational-design-patterns', platform: 'Baeldung' }
  ],
  'structural patterns': [
    { title: 'Structural Design Patterns (Adapter, Decorator, Facade, Proxy) (Refactoring Guru)', url: 'https://refactoring.guru/design-patterns/structural-patterns', platform: 'Refactoring Guru' },
    { title: 'Decorator Pattern in Java with Real-world Examples (Baeldung)', url: 'https://www.baeldung.com/java-decorator-pattern', platform: 'Baeldung' }
  ],
  'behavioral patterns': [
    { title: 'Behavioral Design Patterns (Observer, Strategy, Command, State) (Refactoring Guru)', url: 'https://refactoring.guru/design-patterns/behavioral-patterns', platform: 'Refactoring Guru' },
    { title: 'Observer Pattern & Strategy Pattern Tutorial (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/observer-pattern-set-1-introduction/', platform: 'GeeksforGeeks' }
  ],
  'unit testing & tdd': [
    { title: 'Unit Testing and Test-Driven Development (TDD) Guide (freeCodeCamp)', url: 'https://www.freecodecamp.org/news/test-driven-development-tutorial-how-to-test-software-with-tdd/', platform: 'freeCodeCamp' },
    { title: 'JUnit 5 Complete Tutorial for Beginners (Baeldung)', url: 'https://www.baeldung.com/junit-5', platform: 'Baeldung' },
    { title: 'Mockito Framework for Java Unit Testing (Baeldung)', url: 'https://www.baeldung.com/mockito-series', platform: 'Baeldung' }
  ],
  'refactoring techniques': [
    { title: 'Refactoring Techniques & Code Smells Catalog (Refactoring Guru)', url: 'https://refactoring.guru/refactoring/techniques', platform: 'Refactoring Guru' },
    { title: 'Clean Code: A Handbook of Agile Software Craftsmanship (Summary & Tips)', url: 'https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29', platform: 'Clean Code' }
  ],
  'oop capstone project': [
    { title: 'Object-Oriented Design Case Studies (Library, Parking Lot, Chess) (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/top-10-system-design-interview-questions-and-answers/', platform: 'GeeksforGeeks' },
    { title: 'Awesome Low-Level Design & Object-Oriented Design Repositories (GitHub)', url: 'https://github.com/ashishps1/awesome-low-level-design', platform: 'GitHub' }
  ]
}

/**
 * Normalizes a topic query string to match database keys.
 */
function normalizeKey(str) {
  if (!str) return ''
  return str
    .toLowerCase()
    .replace(/[—–-]/g, ' ')
    .replace(/[&]/g, 'and')
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * Returns curated high-quality materials for a given topic.
 * Uses exact match, fuzzy normalized match, or fallback keywords.
 */
function getCuratedMaterials(topic) {
  if (!topic || typeof topic !== 'string') return []
  
  const rawKey = topic.toLowerCase().trim()
  
  // 1. Direct match
  if (TOPIC_MATERIALS_DATABASE[rawKey]) {
    return TOPIC_MATERIALS_DATABASE[rawKey]
  }

  // 2. Normalized match
  const normQuery = normalizeKey(topic)
  for (const [key, links] of Object.entries(TOPIC_MATERIALS_DATABASE)) {
    const normKey = normalizeKey(key)
    if (normKey === normQuery || normKey.includes(normQuery) || normQuery.includes(normKey)) {
      return links
    }
  }

  // 3. Keyword-based matching
  const words = normQuery.split(' ').filter(w => w.length > 2)
  let bestMatch = null
  let maxScore = 0

  for (const [key, links] of Object.entries(TOPIC_MATERIALS_DATABASE)) {
    const normKey = normalizeKey(key)
    let score = 0
    for (const w of words) {
      if (normKey.includes(w)) score++
    }
    if (score > maxScore) {
      maxScore = score
      bestMatch = links
    }
  }

  if (bestMatch && maxScore > 0) {
    return bestMatch
  }

  // 4. Default high quality direct learning portals if novel topic
  return [
    {
      title: `Learn ${topic} (GeeksforGeeks CS Guide)`,
      url: `https://www.geeksforgeeks.org/search/?q=${encodeURIComponent(topic)}`,
      platform: 'GeeksforGeeks'
    },
    {
      title: `Practice ${topic} Problems on LeetCode`,
      url: `https://leetcode.com/problemset/all/?search=${encodeURIComponent(topic)}`,
      platform: 'LeetCode'
    },
    {
      title: `Search ${topic} Technical Docs on W3Schools`,
      url: `https://www.w3schools.com/howto/howto_css_searchbar.asp?q=${encodeURIComponent(topic)}`,
      platform: 'W3Schools'
    }
  ]
}

module.exports = {
  TOPIC_MATERIALS_DATABASE,
  getCuratedMaterials,
}
