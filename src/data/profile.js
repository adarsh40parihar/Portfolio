/**
 * Single source of truth for every piece of content on the site.
 * Figures and wording follow Adarsh_Resume.pdf; where the old site and the
 * resume disagreed, the resume wins.
 */

export const profile = {
  name: "Adarsh Singh Parihar",
  first: "Adarsh",
  user: "adarsh",
  host: "portfolio",
  role: "Software Engineer",
  roles: [
    "Software Engineer",
    "Agentic AI Systems",
    "Backend & Cloud",
    "Competitive Programmer",
  ],
  summary:
    "I build agentic AI systems and the backend infrastructure that keeps them honest — LangGraph pipelines, event-driven AWS services, and platforms that hold up under real traffic.",
  status: { label: "Open to SDE roles · 2026", tone: "green" },
  location: "Bengaluru, India",
  email: "adarshparihar40@gmail.com",
  phone: "+91 7275003315",
  links: {
    github: "https://github.com/adarsh40parihar",
    linkedin: "https://linkedin.com/in/adarsh40parihar",
    leetcode: "https://leetcode.com/u/siadar/",
    codeforces: "https://codeforces.com/profile/siadar",
    codechef: "https://www.codechef.com/users/siadar",
    codolio: "https://codolio.com/profile/sidar",
  },
  resumeDriveId: "1AOqhf4N_HrCnumCtMeqd8_ntNEZU-uMP",
};

export const education = {
  school: "Indian Institute of Technology (ISM), Dhanbad",
  degree: "B.Tech — Mechanical Engineering (MME)",
  cgpa: "8.13 / 10.00",
  graduation: "May 2026",
  place: "Dhanbad, Jharkhand",
};

/** Terminal boot sequence for the hero window. */
export const bootLines = [
  { cmd: "whoami", out: ["adarsh singh parihar — software engineer"] },
  {
    cmd: "cat ~/.focus",
    out: [
      "agentic ai systems · multi-agent orchestration",
      "distributed backends · aws event pipelines",
      "1300+ solved · codeforces specialist",
    ],
  },
  {
    cmd: "ls -1 experience/",
    out: ["getspike-ai/    (current)", "goldman-sachs/  (summer analyst)"],
  },
];

export const experience = [
  {
    id: "getspike",
    company: "GetSpike AI",
    mono: "SP",
    role: "Software Engineer Intern",
    period: "Jan 2026 — Present",
    current: true,
    location: "Bengaluru, India",
    blurb:
      "Building automated content infrastructure on AWS — from LLM generation pipelines to the local test harness that keeps them reproducible.",
    bullets: [
      "Engineered a fully automated blog generation pipeline integrating a recommendation system that suggests content types to clients, extracts templates from existing blog pages, and generates new blog pages using an LLM.",
      "Developed a LocalStack-based test runner for reliable local testing and migrated automation workflows to AWS-based server infrastructure, enabling scalable, centralized execution and improving deployment reliability.",
    ],
    stack: [
      "JavaScript",
      "AWS Lambda",
      "EC2",
      "S3",
      "SQS",
      "DynamoDB",
      "Docker",
      "LocalStack",
      "LLM",
    ],
    metrics: [
      { value: "100%", label: "Pipeline automated" },
      { value: "LocalStack", label: "Reproducible test runner" },
      { value: "AWS", label: "Centralised execution" },
    ],
  },
  {
    id: "goldman",
    company: "Goldman Sachs",
    mono: "GS",
    role: "Software Engineer Intern — Summer Analyst",
    period: "May 2025 — Jul 2025",
    current: false,
    location: "Bengaluru, India",
    certificate: "/intern_certificate.pdf",
    blurb:
      "Built an agentic AI platform that turned non-deterministic manual workflows into supervised, parallelised, cost-tracked agent runs.",
    bullets: [
      "Built an Agentic AI system using LangGraph and LangChain to automate non-deterministic workflows, leveraging Single-Agent, Multi-Agent Router and Supervisor architectures for parallel execution and scalability.",
      "Optimized large-scale processing of 10K–15K row datasets using data chunking, and conducted cost and time analysis with a token usage tracker to enable accurate estimation for future large-scale deployments.",
      "Improved reasoning and performance using advanced strategies (Chain-of-Thought, ReAct, Reflexion) with tool-segregated agents, reducing hallucinations, enhancing accuracy, and saving 4–5 hours of daily manual effort.",
    ],
    stack: [
      "Python",
      "LangGraph",
      "LangChain",
      "Multi-Agent Systems",
      "ReAct",
      "Reflexion",
      "Chain-of-Thought",
      "Token Accounting",
    ],
    metrics: [
      { value: "4–5 hrs", label: "Daily manual effort saved" },
      { value: "15K", label: "Rows per chunked run" },
      { value: "90–95%", label: "Workflow accuracy" },
    ],
  },
];

export const projects = [
  {
    id: "cinehub",
    title: "CineHub",
    kind: "OTT streaming platform",
    year: "2025",
    description:
      "A scalable OTT platform supporting real-time video streaming, secure JWT authentication, and Razorpay-based payments — with subscriptions, wishlist tracking, and OTP-based recovery.",
    highlights: [
      "Real-time streaming delivery",
      "JWT auth + OTP recovery",
      "Razorpay subscriptions",
    ],
    stack: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux",
      "Razorpay",
      "Nodemailer",
      "Tailwind",
    ],
    github: profile.links.github,
    demo: null,
    images: [
      "/projects/cinehub-1.png",
      "/projects/cinehub-2.png",
      "/projects/cinehub-3.png",
      "/projects/cinehub-4.png",
      "/projects/cinehub-5.png",
      "/projects/cinehub-6.png",
    ],
  },
  {
    id: "tempshell",
    title: "TempShell",
    kind: "Isolated shell-as-a-service",
    year: "2025",
    // Resume figure (<200ms) supersedes the ~30s the old site showed.
    description:
      "A secure, scalable platform for isolated temporary shell access — achieving sub-200ms container startup with JWT-based authentication and MySQL-backed user management.",
    highlights: [
      "<200ms container cold start",
      "Per-session container isolation",
      "JWT auth, MySQL user store",
    ],
    stack: ["Docker", "Python", "FastAPI", "MySQL", "React.js"],
    github: profile.links.github,
    demo: null,
    images: [
      "/projects/Tempshell-1.png",
      "/projects/Tempshell-2.png",
      "/projects/Tempshell-3.png",
      "/projects/Tempshell-4.png",
    ],
  },
  {
    id: "seo-agents",
    title: "Multi-Agent SEO & GA System",
    kind: "Agent orchestration",
    year: "2025",
    description:
      "A multi-agent architecture integrating specialised SEO and GA agents behind a single endpoint, delivering Python-validated analysis powered by LLMs over dynamically changing live Google Sheets.",
    highlights: [
      "One endpoint, many agents",
      "Python-validated LLM output",
      "Live Google Sheets as source",
    ],
    stack: ["Python", "Pandas", "FastAPI", "Google Sheets API", "OpenAI / LLM"],
    github: profile.links.github,
    demo: null,
    images: [],
  },
  {
    id: "internhelper",
    title: "InternHelper",
    kind: "Browser automation",
    year: "2024",
    description:
      "An automation tool using Puppeteer to auto-fill user profiles and intelligently apply to 50+ internships per run on Internshala, cutting manual effort by over 90%.",
    highlights: ["50+ applications per run", "90% less manual effort"],
    stack: ["Node.js", "Express.js", "Puppeteer", "JavaScript"],
    github: profile.links.github,
    demo: null,
    images: [],
  },
  {
    id: "fake-profile",
    title: "Fake Profile Detector",
    kind: "Applied ML",
    year: "2023",
    description:
      "An ML system built for Smart India Hackathon 2023 that detects fake Instagram accounts with 90%+ accuracy using a Random Forest classifier over scraped profile features.",
    highlights: ["90%+ detection accuracy", "Random Forest classifier"],
    stack: ["Python", "Instaloader", "Streamlit", "scikit-learn", "Jupyter"],
    github: profile.links.github,
    demo: null,
    images: [],
  },
  {
    id: "pearlctf",
    title: "PearlCTF Infrastructure",
    kind: "CTF platform ops",
    year: "2024–2025",
    description:
      "Challenge infrastructure for a world-level CTF — Dockerised challenges behind Nginx, spanning Web, Forensics, Crypto, Reversing and OSINT for 2500+ global participants.",
    highlights: ["2500+ participants", "Dockerised challenge fleet"],
    stack: ["Docker", "Nginx", "Linux", "Web Security"],
    github: "https://github.com/Cyberlabs-Infosec",
    demo: null,
    images: [],
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["C++", "JavaScript", "Python", "SQL"],
  },
  {
    group: "AI & Agents",
    items: [
      "LangGraph",
      "LangChain",
      "ReAct Agents",
      "Tool Binding",
      "Multi-Agent Systems",
      "Pandas",
      "LLMs",
    ],
  },
  {
    group: "Backend & DB",
    items: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "JWT",
      "Nodemailer",
      "MongoDB",
      "MySQL",
      "DynamoDB",
    ],
  },
  {
    group: "Cloud & DevOps",
    items: [
      "AWS EC2",
      "Lambda",
      "CloudWatch",
      "SQS",
      "S3",
      "DynamoDB",
      "IAM",
      "Docker",
      "LocalStack",
      "Linux",
      "CI/CD",
      "GitHub Actions",
      "Bash",
    ],
  },
  {
    group: "Frontend",
    items: ["React.js", "Next.js", "Redux", "Tailwind"],
  },
  {
    group: "Concepts",
    items: [
      "DSA",
      "Operating Systems",
      "OOP",
      "DBMS",
      "Computer Networks",
      "System Design",
      "Burp Suite",
    ],
  },
];

export const arena = {
  totalSolved: "1300+",
  platforms: [
    {
      name: "Codeforces",
      handle: "siadar",
      rating: 1504,
      title: "Specialist",
      band: [1400, 1599],
      next: "Expert @ 1600",
      solved: "300+",
      url: profile.links.codeforces,
    },
    {
      name: "LeetCode",
      handle: "siadar",
      rating: 1855,
      title: "Knight",
      band: [1850, 2199],
      next: "Guardian @ 2200",
      solved: "650+",
      url: profile.links.leetcode,
    },
    {
      name: "CodeChef",
      handle: "siadar",
      rating: 1839,
      title: "4 Star",
      band: [1800, 1999],
      next: "5 Star @ 2000",
      solved: "200+",
      url: profile.links.codechef,
    },
  ],
  others: [
    { label: "CSES", value: "100+" },
    { label: "GeeksforGeeks", value: "150+" },
    { label: "Total solved", value: "1300+" },
    { label: "Active days", value: "300+" },
  ],
};

export const achievements = [
  {
    title: "2nd Rank — Spike AI Hackathon 2025",
    detail:
      "Built and shipped an LLM-powered multi-agent system inside the hackathon window.",
    year: "2025",
    tone: "yellow",
  },
  {
    title: "Codeforces Specialist · LeetCode Knight · CodeChef 4★",
    detail:
      "Ratings of 1504, 1855 and 1839 respectively, across 1300+ solved problems.",
    year: "Ongoing",
    tone: "green",
  },
  {
    title: "Winner — Winter of Code 5.0",
    detail: "Hackathon hosted by Cyberlabs, won among 700+ participants.",
    year: "2023",
    tone: "yellow",
  },
  {
    title: "2nd Rank — Pragyan CTF, NIT Trichy",
    detail: "Capture the Flag event contested by 500+ teams.",
    year: "2023",
    tone: "red",
  },
  {
    title: "2nd Runner-up — SIH 2023 internal round",
    detail:
      "College hackathon for Smart India Hackathon 2023, against 150+ competing teams.",
    year: "2023",
    tone: "yellow",
  },
  {
    title: "1300+ problems solved",
    detail:
      "Across Codeforces, LeetCode, CodeChef, CSES and GeeksforGeeks.",
    year: "Ongoing",
    tone: "green",
  },
];

export const positions = [
  {
    role: "Organizing Team Member — PearlCTF 2024 & 2025",
    org: "Cyberlabs, IIT (ISM) Dhanbad",
    detail:
      "Organized a world-level cybersecurity competition featuring Web, Forensics, Crypto, Rev and OSINT challenges, engaging 2500+ global participants.",
  },
  {
    role: "Organizer — Trailblaze, Concetto 2023",
    org: "Infosec Division",
    detail:
      "Ran an intra-college CTF event with 600+ participants across multiple security domains.",
  },
  {
    role: "Member — Cyberlabs (Infosec Division)",
    org: "Data & Software Technology Club, IIT (ISM) Dhanbad",
    detail:
      "Core member of the institute's data and software technology club.",
  },
];

/** Sections registered here power the menu bar, spotlight and dock. */
export const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "arena", label: "Arena" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];
