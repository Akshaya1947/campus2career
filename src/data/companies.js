/**
 * Campus Placement Intelligence & Skill Gap Mappings
 * Top College Recruiter Profiles: TCS, Cognizant, Accenture, Wipro, and Soliton.
 */

export const companies = [
  {
    id: 'tcs',
    name: 'TCS',
    fullName: 'Tata Consultancy Services',
    logoEmoji: '🏢',
    brandColor: '#1d4ed8',
    accentColor: '#3b82f6',
    bgSoft: '#eff6ff',
    badge: 'Mass & Premium Recruiter',
    tier: 'Tier 1 & Tier 2',
    ctcRange: '₹3.6 LPA – ₹11.5 LPA',
    tracks: [
      { name: 'TCS Ninja', ctc: '₹3.6 - ₹4.0 LPA', difficulty: 'Moderate', focus: 'Aptitude + Foundation Coding + Core CS' },
      { name: 'TCS Digital', ctc: '₹7.0 - ₹7.5 LPA', difficulty: 'Hard', focus: 'Advanced DSA + System Fundamentals + SQL' },
      { name: 'TCS Prime', ctc: '₹9.0 - ₹11.5 LPA', difficulty: 'Very Hard', focus: 'Complex Algorithmic Problem Solving + Architecture' },
    ],
    tagline: 'India’s largest IT powerhouse with multi-tier hiring (Ninja, Digital & Prime)',
    description: 'TCS NQT assesses cognitive aptitude, advanced coding (Automata), and strong CS fundamentals across DBMS, Operating Systems, Computer Networks, and OOPs.',
    rounds: [
      {
        roundNumber: 1,
        title: 'TCS NQT — Cognitive & Technical MCQ',
        duration: '75 Mins',
        detail: 'Numerical, Verbal, Reasoning Ability + Technical MCQ (Data Structures, SQL, OOPS, OS & Networks).',
      },
      {
        roundNumber: 2,
        title: 'NQT Hands-on Coding Assessment',
        duration: '90 Mins',
        detail: '2 DSA problems (1 Standard array/string for Ninja, 1 Advanced DP/Graph/Tree for Digital/Prime).',
      },
      {
        roundNumber: 3,
        title: 'Technical + Managerial Interview',
        duration: '35-45 Mins',
        detail: 'In-depth questions on Project, SQL Joins & Normalization, OOPS 4 pillars, Process vs Thread, and live coding.',
      },
      {
        roundNumber: 4,
        title: 'HR Interview',
        duration: '15-20 Mins',
        detail: 'Relocation willingness, shift flexibility, background verification, and company values.',
      },
    ],
    focusWeights: {
      dsa: 35,
      dbms: 25,
      oops: 20,
      os: 10,
      cn: 10,
    },
    targetTopics: [
      { subjectSlug: 'data-structures', topicTitle: 'Arrays & Strings', priority: 'Critical' },
      { subjectSlug: 'data-structures', topicTitle: 'Linked Lists', priority: 'Critical' },
      { subjectSlug: 'data-structures', topicTitle: 'Stacks & Queues', priority: 'Critical' },
      { subjectSlug: 'data-structures', topicTitle: 'Hash Maps & Hash Tables', priority: 'High' },
      { subjectSlug: 'data-structures', topicTitle: 'Binary Trees & BST', priority: 'High' },
      { subjectSlug: 'data-structures', topicTitle: 'Two Pointers & Sliding Window', priority: 'High' },
      { subjectSlug: 'data-structures', topicTitle: 'Dynamic Programming', priority: 'Medium' },
      { subjectSlug: 'database-management-system', topicTitle: 'Relational Model & Keys', priority: 'Critical' },
      { subjectSlug: 'database-management-system', topicTitle: 'SQL Basics — DDL & DML', priority: 'Critical' },
      { subjectSlug: 'database-management-system', topicTitle: 'Joins & Set Operations', priority: 'Critical' },
      { subjectSlug: 'database-management-system', topicTitle: 'Subqueries & Advanced Filtering', priority: 'High' },
      { subjectSlug: 'database-management-system', topicTitle: 'Normalization — 1NF to BCNF', priority: 'High' },
      { subjectSlug: 'database-management-system', topicTitle: 'Transaction Management & ACID', priority: 'High' },
      { subjectSlug: 'object-oriented-programming', topicTitle: 'Classes, Objects & Methods', priority: 'Critical' },
      { subjectSlug: 'object-oriented-programming', topicTitle: 'Inheritance & Method Overriding', priority: 'Critical' },
      { subjectSlug: 'object-oriented-programming', topicTitle: 'Polymorphism', priority: 'Critical' },
      { subjectSlug: 'object-oriented-programming', topicTitle: 'Abstraction & Abstract Classes', priority: 'High' },
      { subjectSlug: 'object-oriented-programming', topicTitle: 'Interfaces & Multiple Inheritance', priority: 'High' },
      { subjectSlug: 'operating-systems', topicTitle: 'Process vs Thread', priority: 'High' },
      { subjectSlug: 'operating-systems', topicTitle: 'CPU Scheduling Algorithms', priority: 'High' },
      { subjectSlug: 'operating-systems', topicTitle: 'Virtual Memory & Paging', priority: 'Medium' },
      { subjectSlug: 'computer-networks', topicTitle: 'IPv4, Subnetting & CIDR', priority: 'High' },
      { subjectSlug: 'computer-networks', topicTitle: 'TCP vs UDP & Handshakes', priority: 'High' },
      { subjectSlug: 'computer-networks', topicTitle: 'HTTP, HTTPS & REST', priority: 'Medium' },
    ],
    sprintPlan: [
      { day: 1, title: 'Array, String & Two-Pointer Blitz', focus: 'Solve top 5 TCS NQT array & string manipulation questions' },
      { day: 2, title: 'SQL Joins, Group By & Subqueries', focus: 'Practice 2nd highest salary, duplicate removal & inner/outer joins' },
      { day: 3, title: 'Core OOPS & Java/C++ Polymorphism', focus: 'Revise method overloading vs overriding and interface rules' },
      { day: 4, title: 'Linked Lists, Stacks & Queue Drills', focus: 'Cycle detection, reverse list, balanced parentheses' },
      { day: 5, title: 'OS Process vs Thread & CPU Scheduling', focus: 'Round Robin, Deadlock 4 conditions, Semaphore basics' },
      { day: 6, title: 'Computer Networks & TCP Handshake', focus: 'OSI vs TCP/IP, 3-way handshake, DNS and Subnetting math' },
      { day: 7, title: 'TCS Full Mock Interview & Live Coding', focus: 'Timed 90-minute dual-question coding drill + AI Study Buddy mock' },
    ],
    drills: [
      {
        question: 'Write a program to find the 2nd Highest Salary from an Employee table without using LIMIT/TOP.',
        category: 'SQL / DBMS',
        difficulty: 'Medium',
        solution: `SELECT MAX(salary) AS SecondHighestSalary 
FROM Employee 
WHERE salary < (SELECT MAX(salary) FROM Employee);

-- Alternative using Dense_Rank Window Function:
WITH RankedSalaries AS (
  SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) as rank_pos
  FROM Employee
)
SELECT salary FROM RankedSalaries WHERE rank_pos = 2;`,
        explanation: 'The inner subquery gets the absolute maximum salary, and the outer query picks the maximum of all values strictly less than that maximum.',
      },
      {
        question: 'Given an array of integers, find the maximum sum contiguous subarray (Kadane’s Algorithm).',
        category: 'Data Structures & Algorithms',
        difficulty: 'Medium',
        solution: `function maxSubArray(nums) {
  let maxSoFar = nums[0];
  let currentMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(nums[i], currentMax + nums[i]);
    maxSoFar = Math.max(maxSoFar, currentMax);
  }
  return maxSoFar;
}`,
        explanation: 'Kadane’s algorithm runs in O(N) time and O(1) auxiliary space by deciding at each index whether to add the current element to the running subarray or start fresh.',
      },
      {
        question: 'Explain the difference between Process and Thread with memory layout details.',
        category: 'Operating Systems',
        difficulty: 'Standard',
        solution: `1. Memory Space: A Process has its own independent address space (Code, Data, Heap, Stack). A Thread shares the Code, Data, and Heap of its parent process but maintains its own private Stack and Register set.
2. Context Switching: Process context switching is expensive because CPU page tables (CR3 register) and TLB must be flushed. Thread switching is fast and lightweight.
3. IPC: Processes require IPC (Pipes, Sockets, Shared Memory) to communicate. Threads communicate directly via shared memory.`,
        explanation: 'This is the most asked OS question across all TCS Ninja and Digital technical interviews.',
      },
      {
        question: 'What is the Diamond Problem in Multiple Inheritance and how do Java/C++ solve it?',
        category: 'OOP Concepts',
        difficulty: 'High Frequency',
        solution: `The Diamond problem occurs when class D inherits from classes B and C, which both inherit from class A. If B and C override a method from A, D doesn't know which method to call.

• C++ solution: Virtual Base Classes (e.g., class B : virtual public A).
• Java solution: Java disallows multiple inheritance of classes, but allows implementing multiple Interfaces (with default methods requiring explicit override if conflicting).`,
        explanation: 'Essential OOP concept checked in almost every TCS technical panel round.',
      },
    ],
  },

  {
    id: 'cognizant',
    name: 'Cognizant',
    fullName: 'Cognizant Technology Solutions',
    logoEmoji: '⚡',
    brandColor: '#0369a1',
    accentColor: '#0ea5e9',
    bgSoft: '#f0f9ff',
    badge: 'GenC & GenC Next Drive',
    tier: 'Tier 1 & Tier 2',
    ctcRange: '₹4.0 LPA – ₹9.5 LPA',
    tracks: [
      { name: 'GenC', ctc: '₹4.0 - ₹4.5 LPA', difficulty: 'Moderate', focus: 'Analytical + Foundational Java/Python + SQL' },
      { name: 'GenC Elevate', ctc: '₹5.5 - ₹6.5 LPA', difficulty: 'Hard', focus: 'Full Stack Basics + Algorithm Coding + OOPS' },
      { name: 'GenC Next', ctc: '₹8.5 - ₹9.5 LPA', difficulty: 'Very Hard', focus: 'Cloud/AI Concepts + Advanced DSA + System Design' },
    ],
    tagline: 'Enterprise digital engineering and cloud transformation leader',
    description: 'Cognizant focuses heavily on Automata coding (Strings, Matrix, Stacks), SQL Queries with Aggregate Functions, and clear object-oriented design.',
    rounds: [
      {
        roundNumber: 1,
        title: 'Communication Assessment',
        duration: '45 Mins',
        detail: 'AI-evaluated reading, listening, comprehension, and spontaneous speaking test.',
      },
      {
        roundNumber: 2,
        title: 'Technical Skill & Coding Assessment',
        duration: '90 Mins',
        detail: 'Coding questions in Java/C++/Python focusing on string parsing, matrices, hashing, and arrays.',
      },
      {
        roundNumber: 3,
        title: 'Technical Interview',
        duration: '30-40 Mins',
        detail: 'Core Java / Python / C++ concepts, Exception handling, Collections framework, and SQL joins.',
      },
      {
        roundNumber: 4,
        title: 'HR / Behavioral Interview',
        duration: '15 Mins',
        detail: 'Communication, project contributions, teamwork scenarios, and role alignment.',
      },
    ],
    focusWeights: {
      dsa: 35,
      dbms: 25,
      oops: 25,
      os: 8,
      cn: 7,
    },
    targetTopics: [
      { subjectSlug: 'data-structures', topicTitle: 'Arrays & Strings', priority: 'Critical' },
      { subjectSlug: 'data-structures', topicTitle: 'Stacks & Queues', priority: 'Critical' },
      { subjectSlug: 'data-structures', topicTitle: 'Hash Maps & Hash Tables', priority: 'Critical' },
      { subjectSlug: 'data-structures', topicTitle: 'Two Pointers & Sliding Window', priority: 'High' },
      { subjectSlug: 'data-structures', topicTitle: 'Binary Trees & BST', priority: 'High' },
      { subjectSlug: 'database-management-system', topicTitle: 'SQL Basics — DDL & DML', priority: 'Critical' },
      { subjectSlug: 'database-management-system', topicTitle: 'Joins & Set Operations', priority: 'Critical' },
      { subjectSlug: 'database-management-system', topicTitle: 'Aggregate Functions & Window Functions', priority: 'Critical' },
      { subjectSlug: 'database-management-system', topicTitle: 'Indexes & Query Optimization', priority: 'High' },
      { subjectSlug: 'object-oriented-programming', topicTitle: 'Classes, Objects & Methods', priority: 'Critical' },
      { subjectSlug: 'object-oriented-programming', topicTitle: 'Encapsulation', priority: 'Critical' },
      { subjectSlug: 'object-oriented-programming', topicTitle: 'Inheritance & Method Overriding', priority: 'Critical' },
      { subjectSlug: 'object-oriented-programming', topicTitle: 'Polymorphism', priority: 'Critical' },
      { subjectSlug: 'object-oriented-programming', topicTitle: 'Interfaces & Multiple Inheritance', priority: 'High' },
      { subjectSlug: 'object-oriented-programming', topicTitle: 'SOLID Principles', priority: 'High' },
      { subjectSlug: 'operating-systems', topicTitle: 'Process vs Thread', priority: 'High' },
      { subjectSlug: 'operating-systems', topicTitle: 'Deadlocks & Recovery', priority: 'High' },
      { subjectSlug: 'computer-networks', topicTitle: 'TCP vs UDP & Handshakes', priority: 'High' },
      { subjectSlug: 'computer-networks', topicTitle: 'HTTP, HTTPS & REST', priority: 'High' },
    ],
    sprintPlan: [
      { day: 1, title: 'String Parsing & Anagram/Palindrome Drills', focus: 'Master string manipulation and two-pointer matching' },
      { day: 2, title: 'SQL Joins, Group By & Having Clauses', focus: 'Write aggregation queries with HAVING and multi-table joins' },
      { day: 3, title: 'Java/C++ OOPs & Collections Framework', focus: 'Master List vs Set vs Map, equals/hashCode, and custom comparators' },
      { day: 4, title: 'Stack & Queue Applications (Parentheses & Monotonic)', focus: 'Balanced brackets, next greater element, stack-based evaluation' },
      { day: 5, title: 'DBMS Normalization & Indexing Internals', focus: 'Understand 1NF, 2NF, 3NF, B-Tree indexes, and clustered vs non-clustered' },
      { day: 6, title: 'REST APIs, HTTP Status Codes & Deadlocks', focus: 'HTTP GET vs POST vs PUT, 200/400/500 codes, Coffman deadlock conditions' },
      { day: 7, title: 'Cognizant GenC Elevate Mock Coding & Interview', focus: 'Live 2-problem coding round + AI Study Buddy roleplay' },
    ],
    drills: [
      {
        question: 'Find the first non-repeating character in a given string in O(N) time.',
        category: 'Data Structures & Algorithms',
        difficulty: 'Easy-Medium',
        solution: `function firstUniqChar(s) {
  const freq = {};
  for (let ch of s) freq[ch] = (freq[ch] || 0) + 1;
  for (let i = 0; i < s.length; i++) {
    if (freq[s[i]] === 1) return i; // or s[i]
  }
  return -1;
}`,
        explanation: 'Uses a hashmap for frequency counting in Pass 1, and finds the first unique index in Pass 2 with O(N) time and O(1) space (alphabet size <= 256).',
      },
      {
        question: 'What is the difference between HAVING and WHERE clause in SQL?',
        category: 'Database Management',
        difficulty: 'High Frequency',
        solution: `1. WHERE filters rows BEFORE aggregation (cannot use aggregate functions like SUM/AVG in WHERE).
2. HAVING filters grouped rows AFTER GROUP BY (designed specifically for aggregate conditions).
Example:
SELECT department_id, AVG(salary) 
FROM Employee 
WHERE status = 'Active' 
GROUP BY department_id 
HAVING AVG(salary) > 50000;`,
        explanation: 'Cognizant interviewers frequently ask to write a query demonstrating both WHERE and HAVING in the same query.',
      },
      {
        question: 'What is the difference between abstract class and interface in Java 8+?',
        category: 'OOP Concepts',
        difficulty: 'Core',
        solution: `1. Multiple Inheritance: A class can implement multiple interfaces, but extend only one abstract class.
2. State/Variables: Abstract classes can have instance variables and state; interfaces only have public static final constants.
3. Constructors: Abstract classes can have constructors; interfaces cannot.
4. Default/Static Methods: Java 8+ allows default and static methods in interfaces, but cannot hold object state.`,
        explanation: 'Checked in almost every Cognizant GenC Elevate technical round.',
      },
    ],
  },

  {
    id: 'accenture',
    name: 'Accenture',
    fullName: 'Accenture Solutions',
    logoEmoji: '🚀',
    brandColor: '#7c3aed',
    accentColor: '#a855f7',
    bgSoft: '#faf5ff',
    badge: 'ASE & Advanced ASE Drive',
    tier: 'Tier 1 & Tier 2',
    ctcRange: '₹4.5 LPA – ₹10.0 LPA',
    tracks: [
      { name: 'Associate Software Engineer (ASE)', ctc: '₹4.5 LPA', difficulty: 'Moderate', focus: 'Pseudocode + Logic + 2 Coding Problems' },
      { name: 'Advanced ASE (AASE)', ctc: '₹6.5 - ₹10.0 LPA', difficulty: 'Hard', focus: 'Complex Coding + Cloud Architecture + Web Fundamentals' },
    ],
    tagline: 'Global technology consultancy driving cloud, AI, and enterprise software',
    description: 'Accenture places heavy emphasis on rapid Pseudocode tracing (Bitwise XOR/AND, recursion trees, loops), Common Applications & MS Office, and 2 hands-on coding problems.',
    rounds: [
      {
        roundNumber: 1,
        title: 'Cognitive & Technical Assessment',
        duration: '90 Mins',
        detail: 'English Ability, Critical Thinking, Pseudocode Tracing (18 questions), Common Apps & Cloud Basics (12 questions).',
      },
      {
        roundNumber: 2,
        title: 'Coding Assessment',
        duration: '45 Mins',
        detail: '2 Hands-on coding questions (e.g. array manipulation, string transformations, bitwise operations, math puzzles).',
      },
      {
        roundNumber: 3,
        title: 'Communication Round',
        duration: '20 Mins',
        detail: 'Interactive voice module (sentence mastery, fluency, pronunciation, and active listening).',
      },
      {
        roundNumber: 4,
        title: 'Technical & HR Interview',
        duration: '25-30 Mins',
        detail: 'Pseudocode logic review, final year project, database schema design, and agile methodology.',
      },
    ],
    focusWeights: {
      dsa: 35,
      dbms: 20,
      oops: 20,
      os: 15,
      cn: 10,
    },
    targetTopics: [
      { subjectSlug: 'data-structures', topicTitle: 'Bit Manipulation', priority: 'Critical' },
      { subjectSlug: 'data-structures', topicTitle: 'Arrays & Strings', priority: 'Critical' },
      { subjectSlug: 'data-structures', topicTitle: 'Recursion & Backtracking', priority: 'Critical' },
      { subjectSlug: 'data-structures', topicTitle: 'Hash Maps & Hash Tables', priority: 'High' },
      { subjectSlug: 'data-structures', topicTitle: 'Greedy Algorithms', priority: 'High' },
      { subjectSlug: 'database-management-system', topicTitle: 'SQL Basics — DDL & DML', priority: 'Critical' },
      { subjectSlug: 'database-management-system', topicTitle: 'Joins & Set Operations', priority: 'Critical' },
      { subjectSlug: 'database-management-system', topicTitle: 'Functional Dependencies', priority: 'High' },
      { subjectSlug: 'object-oriented-programming', topicTitle: 'The Four Pillars', priority: 'Critical' },
      { subjectSlug: 'object-oriented-programming', topicTitle: 'Inheritance & Method Overriding', priority: 'Critical' },
      { subjectSlug: 'object-oriented-programming', topicTitle: 'SOLID Principles', priority: 'High' },
      { subjectSlug: 'operating-systems', topicTitle: 'Process vs Thread', priority: 'High' },
      { subjectSlug: 'operating-systems', topicTitle: 'CPU Scheduling Algorithms', priority: 'High' },
      { subjectSlug: 'computer-networks', topicTitle: 'HTTP, HTTPS & REST', priority: 'Critical' },
      { subjectSlug: 'computer-networks', topicTitle: 'Network Security & Firewalls', priority: 'High' },
    ],
    sprintPlan: [
      { day: 1, title: 'Accenture Pseudocode Tracing (Bitwise & Loops)', focus: 'Master bitwise XOR, AND, right-shift, and nested loop variable tracing' },
      { day: 2, title: 'Recursion Tree Tracing & Pattern Coding', focus: 'Trace recursive return values and matrix pattern generation' },
      { day: 3, title: 'Array Transformations & In-place Reversal', focus: 'Rotate array, move zeroes, palindrome substrings' },
      { day: 4, title: 'SQL Joins, Constraints & Primary/Foreign Keys', focus: 'Cascading deletes, unique vs primary key, outer joins' },
      { day: 5, title: 'Cloud & Web Basics (REST APIs, HTTP Status)', focus: 'Statelessness, REST verbs, JSON data payloads, DNS resolution' },
      { day: 6, title: 'OOPs Principles & Exception Handling', focus: 'Try-catch-finally execution flow, checked vs unchecked exceptions' },
      { day: 7, title: 'Accenture AASE Timed Coding & Mock Interview', focus: 'Solve 2 problems in 45 mins + AI Study Buddy behavioral prep' },
    ],
    drills: [
      {
        question: 'Accenture Pseudocode: What is the output of the following pseudocode for a=3, b=5?',
        category: 'Pseudocode & Logic',
        difficulty: 'High Frequency',
        solution: `// Pseudocode:
Integer a, b, c
Set a = 3, b = 5
c = (a ^ b) + (a & b)
b = c >> 1
a = a + b + c
Print a

// Trace:
// 1. a = 011 (3), b = 101 (5)
// 2. a ^ b = 011 ^ 101 = 110 (6)
// 3. a & b = 011 & 101 = 001 (1)
// 4. c = 6 + 1 = 7
// 5. b = 7 >> 1 = 3 (7/2 integer division)
// 6. a = 3 + 3 + 7 = 13
// Output: 13`,
        explanation: 'Accenture tests rapid bitwise arithmetic in their Round 1 assessment.',
      },
      {
        question: 'Given an array of positive integers, return the minimum operations to make all elements equal by decrementing.',
        category: 'Data Structures & Algorithms',
        difficulty: 'Standard Coding',
        solution: `function minOperationsToEqual(arr) {
  const minVal = Math.min(...arr);
  let operations = 0;
  for (let num of arr) {
    operations += (num - minVal);
  }
  return operations;
}`,
        explanation: 'All numbers must be brought down to the minimum element in the array.',
      },
      {
        question: 'Explain the difference between Symmetric and Asymmetric Encryption in HTTPS.',
        category: 'Computer Networks & Security',
        difficulty: 'Technical Round',
        solution: `• Asymmetric Encryption: Uses a Key Pair (Public Key to encrypt, Private Key to decrypt). Used during the initial TLS handshake to securely negotiate a shared secret key.
• Symmetric Encryption: Uses the single shared session key for high-speed bulk data transfer.
HTTPS combines both: Asymmetric for handshake authentication, Symmetric for performance during data exchange.`,
        explanation: 'Core concept tested in Accenture cloud and network fundamentals.',
      },
    ],
  },

  {
    id: 'wipro',
    name: 'Wipro',
    fullName: 'Wipro Technologies',
    logoEmoji: '🌐',
    brandColor: '#059669',
    accentColor: '#10b981',
    bgSoft: '#ecfdf5',
    badge: 'Elite NTH & Turbo Drive',
    tier: 'Tier 1 & Tier 2',
    ctcRange: '₹3.5 LPA – ₹8.5 LPA',
    tracks: [
      { name: 'Elite National Talent Hunt (NTH)', ctc: '₹3.5 - ₹4.0 LPA', difficulty: 'Moderate', focus: 'Quants + Essay Writing + Automata Coding' },
      { name: 'Wipro Turbo', ctc: '₹6.5 - ₹8.5 LPA', difficulty: 'Hard', focus: 'Advanced Data Structures + Algorithms + Database Design' },
    ],
    tagline: 'Pioneering global digital transformation and IT solutions',
    description: 'Wipro’s Elite NTH assesses aptitude, written communication, 2 coding problems (Automata Fix / Coding), and core CS knowledge across OOPs, DBMS, and OS.',
    rounds: [
      {
        roundNumber: 1,
        title: 'Aptitude & Written Communication',
        duration: '60 Mins',
        detail: 'Logical Reasoning, Quantitative Aptitude, Verbal Ability, and a 20-minute Business Essay Writing test.',
      },
      {
        roundNumber: 2,
        title: 'Online Coding Test (Automata)',
        duration: '60 Mins',
        detail: '2 Programming challenges (Pattern printing, array search/sort, string validation, or recursion).',
      },
      {
        roundNumber: 3,
        title: 'Technical Interview',
        duration: '30 Mins',
        detail: 'OOPs concepts (Inheritance, Polymorphism), basic SQL queries, memory allocation, and project walkthrough.',
      },
      {
        roundNumber: 4,
        title: 'HR Interview',
        duration: '15 Mins',
        detail: 'Service agreement, location preference, career goals, and cultural fit.',
      },
    ],
    focusWeights: {
      dsa: 35,
      dbms: 25,
      oops: 25,
      os: 10,
      cn: 5,
    },
    targetTopics: [
      { subjectSlug: 'data-structures', topicTitle: 'Arrays & Strings', priority: 'Critical' },
      { subjectSlug: 'data-structures', topicTitle: 'Linked Lists', priority: 'Critical' },
      { subjectSlug: 'data-structures', topicTitle: 'Stacks & Queues', priority: 'High' },
      { subjectSlug: 'data-structures', topicTitle: 'Hash Maps & Hash Tables', priority: 'High' },
      { subjectSlug: 'data-structures', topicTitle: 'Recursion & Backtracking', priority: 'High' },
      { subjectSlug: 'database-management-system', topicTitle: 'SQL Basics — DDL & DML', priority: 'Critical' },
      { subjectSlug: 'database-management-system', topicTitle: 'Joins & Set Operations', priority: 'Critical' },
      { subjectSlug: 'database-management-system', topicTitle: 'Views, Stored Procedures & Triggers', priority: 'High' },
      { subjectSlug: 'database-management-system', topicTitle: 'Transaction Management & ACID', priority: 'High' },
      { subjectSlug: 'object-oriented-programming', topicTitle: 'Classes, Objects & Methods', priority: 'Critical' },
      { subjectSlug: 'object-oriented-programming', topicTitle: 'Constructors & Access Modifiers', priority: 'Critical' },
      { subjectSlug: 'object-oriented-programming', topicTitle: 'Inheritance & Method Overriding', priority: 'Critical' },
      { subjectSlug: 'object-oriented-programming', topicTitle: 'Polymorphism', priority: 'Critical' },
      { subjectSlug: 'object-oriented-programming', topicTitle: 'Abstraction & Abstract Classes', priority: 'High' },
      { subjectSlug: 'operating-systems', topicTitle: 'Process vs Thread', priority: 'High' },
      { subjectSlug: 'operating-systems', topicTitle: 'CPU Scheduling Algorithms', priority: 'High' },
      { subjectSlug: 'operating-systems', topicTitle: 'Virtual Memory & Paging', priority: 'High' },
      { subjectSlug: 'computer-networks', topicTitle: 'TCP vs UDP & Handshakes', priority: 'High' },
    ],
    sprintPlan: [
      { day: 1, title: 'Array Search, Sort & Frequency Counting', focus: 'Binary search, majority element, frequency map' },
      { day: 2, title: 'String Reversal, Substrings & Palindromes', focus: 'In-place string reverse, longest palindrome substring' },
      { day: 3, title: 'SQL DDL vs DML & Complex Joins', focus: 'Primary key constraints, Foreign keys, Left Outer Joins' },
      { day: 4, title: 'Core OOPs 4 Pillars & Method Overloading', focus: 'Constructor chaining, static vs instance methods, abstract classes' },
      { day: 5, title: 'OS Paging, Virtual Memory & Semaphores', focus: 'Page faults, LRU replacement, mutex vs semaphore' },
      { day: 6, title: 'Linked List Reversal & Cycle Detection', focus: 'Floyd cycle detection (tortoise & hare), delete nth from end' },
      { day: 7, title: 'Wipro Elite NTH Coding Drill & AI Interview', focus: 'Solve 2 problems with time constraint + AI mock interview' },
    ],
    drills: [
      {
        question: 'Detect if a Linked List has a cycle without extra space (Floyd’s Cycle Finding Algorithm).',
        category: 'Data Structures & Algorithms',
        difficulty: 'Standard',
        solution: `function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true; // Cycle detected!
  }
  return false;
}`,
        explanation: 'The slow pointer advances 1 step while the fast pointer advances 2 steps. If a cycle exists, they must meet in O(N) time and O(1) space.',
      },
      {
        question: 'What is the difference between DELETE, TRUNCATE, and DROP in SQL?',
        category: 'Database Management',
        difficulty: 'Core Must Know',
        solution: `1. DELETE: DML command. Deletes specific or all rows one by one. Can be rolled back. Fires DELETE triggers.
2. TRUNCATE: DDL command. Deallocates data pages. Faster than DELETE. Cannot filter with WHERE. Resets identity/auto-increment.
3. DROP: DDL command. Completely removes table definition, indexes, triggers, and all data from the database catalog.`,
        explanation: 'One of the most frequently repeated interview questions at Wipro.',
      },
      {
        question: 'What is the difference between Compile-Time and Run-Time Polymorphism?',
        category: 'OOP Concepts',
        difficulty: 'Core',
        solution: `• Compile-Time (Static): Method Overloading or Operator Overloading. Resolved by the compiler at compile time based on parameter signatures. Faster execution.
• Run-Time (Dynamic): Method Overriding via virtual functions / dynamic dispatch. Resolved at runtime using vtables based on the actual object instance.`,
        explanation: 'Fundamental OOP concept verified by Wipro interviewers.',
      },
    ],
  },

  {
    id: 'soliton',
    name: 'Soliton',
    fullName: 'Soliton Technologies',
    logoEmoji: '🔬',
    brandColor: '#ea580c',
    accentColor: '#f97316',
    bgSoft: '#fff7ed',
    badge: 'Product & Systems Elite',
    tier: 'Product & Systems Track',
    ctcRange: '₹6.5 LPA – ₹14.0 LPA',
    tracks: [
      { name: 'Core Systems Engineer', ctc: '₹6.5 - ₹8.5 LPA', difficulty: 'Hard', focus: 'C/C++ Pointers + Memory Allocation + Logic' },
      { name: 'Algorithm & Systems Specialist', ctc: '₹9.0 - ₹14.0 LPA', difficulty: 'Extreme', focus: 'Complex Algorithmic Logic + Concurrency + Low-Level Architecture' },
    ],
    tagline: 'Global pioneer in enterprise software, automated test systems, and semiconductors',
    description: 'Soliton tests rigorous algorithmic problem-solving, pointers, memory allocation, bitwise operations, 2D matrix manipulation, and clean low-level code without built-in library shortcuts.',
    rounds: [
      {
        roundNumber: 1,
        title: 'Level 1: Algorithmic Logic & Coding Round',
        duration: '90 Mins',
        detail: 'Pure algorithmic problem solving in C/C++/Python (Pointers, string manipulations without string.h/built-ins, pattern logic, recursion).',
      },
      {
        roundNumber: 2,
        title: 'Level 2: Advanced Problem Solving & Complex Logic',
        duration: '120 Mins',
        detail: 'Complex 2D grid simulations, game logic, state machines, custom data structures, and edge-case testing.',
      },
      {
        roundNumber: 3,
        title: 'Level 3: Technical Face-to-Face & Code Review',
        duration: '60-75 Mins',
        detail: 'Deep dive into your written code: Time/space complexity analysis, memory safety, pointer arithmetic, and live refactoring.',
      },
      {
        roundNumber: 4,
        title: 'Cultural & HR Interview',
        duration: '30 Mins',
        detail: 'Passion for engineering, learning mindset, perseverance in problem solving, and values.',
      },
    ],
    focusWeights: {
      dsa: 50,
      oops: 20,
      os: 20,
      dbms: 5,
      cn: 5,
    },
    targetTopics: [
      { subjectSlug: 'data-structures', topicTitle: 'Big O Notation & Complexity Analysis', priority: 'Critical' },
      { subjectSlug: 'data-structures', topicTitle: 'Arrays & Strings', priority: 'Critical' },
      { subjectSlug: 'data-structures', topicTitle: 'Linked Lists', priority: 'Critical' },
      { subjectSlug: 'data-structures', topicTitle: 'Bit Manipulation', priority: 'Critical' },
      { subjectSlug: 'data-structures', topicTitle: 'Recursion & Backtracking', priority: 'Critical' },
      { subjectSlug: 'data-structures', topicTitle: 'Binary Trees & BST', priority: 'Critical' },
      { subjectSlug: 'data-structures', topicTitle: 'Two Pointers & Sliding Window', priority: 'Critical' },
      { subjectSlug: 'data-structures', topicTitle: 'Dynamic Programming', priority: 'High' },
      { subjectSlug: 'operating-systems', topicTitle: 'Memory Hierarchy & Caching', priority: 'Critical' },
      { subjectSlug: 'operating-systems', topicTitle: 'Segmentation & Memory Allocation', priority: 'Critical' },
      { subjectSlug: 'operating-systems', topicTitle: 'Process vs Thread', priority: 'High' },
      { subjectSlug: 'operating-systems', topicTitle: 'Inter-Process Communication (IPC)', priority: 'High' },
      { subjectSlug: 'object-oriented-programming', topicTitle: 'Constructors & Access Modifiers', priority: 'High' },
      { subjectSlug: 'object-oriented-programming', topicTitle: 'Composition vs Inheritance', priority: 'Critical' },
      { subjectSlug: 'object-oriented-programming', topicTitle: 'SOLID Principles', priority: 'Critical' },
      { subjectSlug: 'object-oriented-programming', topicTitle: 'Refactoring Techniques', priority: 'High' },
      { subjectSlug: 'database-management-system', topicTitle: 'Indexes & Query Optimization', priority: 'Medium' },
    ],
    sprintPlan: [
      { day: 1, title: 'Raw Pointer Arithmetic & Custom String Parsing', focus: 'Implement strlen, strcpy, reverse, and tokenization without any library headers' },
      { day: 2, title: '2D Matrix Spirals, Rotations & Boundary Traversal', focus: 'Master in-place matrix rotation, spiral print, and island grid traversals' },
      { day: 3, title: 'Bitwise Logic, Masking & Fast Math', focus: 'Count set bits, bitwise power of 2, swap without temp, subset generation' },
      { day: 4, title: 'Linked List In-Place Manipulation & Sorting', focus: 'Merge two sorted lists in-place, reverse in k-groups, reorder list' },
      { day: 5, title: 'Memory Allocation (Heap vs Stack) & Profiling', focus: 'Understand malloc/free internals, memory leaks, dangling pointers, buffer overflows' },
      { day: 6, title: 'Recursion & Backtracking on Grids (N-Queens, Sudoku)', focus: 'State exploration, pruning invalid branches, and complexity bounds' },
      { day: 7, title: 'Soliton Level 2 Simulation & Live Code Review', focus: '120-minute pure logic simulation + AI Study Buddy code inspection drill' },
    ],
    drills: [
      {
        question: 'Rotate an N x N 2D Matrix by 90 degrees clockwise IN-PLACE with O(1) extra space.',
        category: 'Data Structures & Matrix Logic',
        difficulty: 'Soliton Level 1/2',
        solution: `function rotateMatrix(matrix) {
  const n = matrix.length;

  // Step 1: Transpose matrix (swap matrix[i][j] with matrix[j][i])
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // Step 2: Reverse each row
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }

  return matrix;
}`,
        explanation: 'Transposing swaps row and columns. Reversing each row converts counter-clockwise to a clean 90-degree clockwise rotation in-place without auxiliary memory.',
      },
      {
        question: 'What happens under the hood during dynamic memory allocation (malloc vs calloc vs realloc)?',
        category: 'Systems & Memory Architecture',
        difficulty: 'Soliton Technical Interview',
        solution: `1. malloc(size): Allocates a contiguous block of 'size' bytes from the heap. The allocated memory contains GARBAGE values.
2. calloc(num, size): Allocates (num * size) bytes and initializes every single byte to ZERO (0). Slightly slower due to zeroing.
3. realloc(ptr, new_size): Resizes an existing heap block. If enough contiguous memory is available, it expands in-place. Otherwise, it allocates a new block elsewhere, copies the old data, frees the old block, and returns the new pointer.
Critical Note: Always check if the returned pointer is NULL (out of memory) and ensure free() is called to avoid memory leaks.`,
        explanation: 'Soliton interviewers evaluate deep understanding of systems programming, memory safety, and heap fragmentation.',
      },
      {
        question: 'Given an array where every element appears twice except for one element, find the single element in O(N) time and O(1) space.',
        category: 'Bit Manipulation & Optimization',
        difficulty: 'Soliton Logic',
        solution: `function findSingleNumber(nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num; // Bitwise XOR
  }
  return result;
}`,
        explanation: 'Properties of XOR: X ^ X = 0, and X ^ 0 = X. All duplicate elements cancel each other out to 0, leaving only the unique number.',
      },
    ],
  },
]

export default companies
