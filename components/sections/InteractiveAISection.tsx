"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

type KnowledgeEntry = {
  keywords: string[];
  answer: string;
};

const KNOWLEDGE: KnowledgeEntry[] = [
  // --- Identity & Profile ---
  {
    keywords: [
      "who", "siapa", "about", "tentang", "yourself", "kamu", "diri",
      "introduce", "perkenalan", "name", "nama", "profile", "vico",
    ],
    answer:
      "Vico Tegar Ramdhani is a results-driven Full-Stack Developer with over 5 years of hands-on experience designing, developing, and deploying modern web applications. Proficient in Node.js, React.js, PHP, and Golang, with strong database management skills (SQL/NoSQL). He brings added value through a solid background in cybersecurity and secure coding practices, and has built scalable, high-performance systems for logistics, e-commerce, and digital security platforms.",
  },
  {
    keywords: [
      "full name", "nama lengkap", "tegar", "ramdhani",
    ],
    answer:
      "His full name is Vico Tegar Ramdhani.",
  },
  {
    keywords: [
      "contact", "kontak", "email", "reach", "hubungi", "phone", "telepon",
      "nomor", "number", "whatsapp", "wa", "linkedin", "github", "connect",
    ],
    answer:
      "You can reach Vico at vicoramdhani@gmail.com or by phone at 085591196700. LinkedIn: linkedin.com/in/vikotegarramdhani — GitHub: github.com/syntaxmagician. He's based in Jakarta, Indonesia. You can also use the contact section in the footer of this portfolio.",
  },
  {
    keywords: [
      "address", "alamat", "location", "lokasi", "live", "tinggal",
      "domicile", "domisili", "jakarta", "cibubur", "ciracas",
      "rumah", "dimana", "where", "tempat", "daerah", "kota", "city",
    ],
    answer:
      "Vico is based in Jakarta, Indonesia — specifically at Jl. Blk. Duku, No. 93, Cibubur, Kec. Ciracas, 13720 Jakarta.",
  },

  // --- Skills ---
  {
    keywords: [
      "skill", "keahlian", "expertise", "capable", "bisa", "ability",
      "strength", "kelebihan", "good at", "jago", "competenc",
    ],
    answer:
      "Vico's skills span the full stack: Front-End — React.js, React Native, HTML5, CSS3, Bootstrap, jQuery, Responsive Design. Back-End — Node.js (Express), Golang (Fiber), PHP (Laravel, CodeIgniter), RESTful API, WebSocket, JWT Auth. Database — MySQL, MongoDB, PostgreSQL, Redis. DevOps & Tools — Git, Docker, PM2, Nginx, Postman, Linux CLI. Security — Secure Coding, OWASP Top 10, Burp Suite, Nmap, SQLMap, Kali Linux. Soft Skills — Problem Solving, Critical Thinking, Team Collaboration, Agile/SCRUM.",
  },
  {
    keywords: [
      "frontend", "front-end", "react", "html", "css", "bootstrap",
      "jquery", "responsive", "ui", "ux", "design",
    ],
    answer:
      "Front-End skills: React.js, React Native, HTML5, CSS3, Bootstrap, jQuery, and Responsive Design. Vico builds intuitive, mobile-friendly interfaces with modern component-based frameworks.",
  },
  {
    keywords: [
      "backend", "back-end", "server", "api", "restful", "websocket",
      "jwt", "auth", "authentication",
    ],
    answer:
      "Back-End skills: Node.js (Express), Golang (Fiber), PHP (Laravel, CodeIgniter), RESTful API design, WebSocket for real-time features, and JWT-based authentication. He designs secure, performant APIs with clean architecture.",
  },
  {
    keywords: [
      "stack", "tech", "teknologi", "tools", "language", "bahasa pemrograman",
      "framework", "node", "golang", "go", "mysql", "redis",
      "docker", "pm2", "nginx", "mongo", "express", "laravel",
      "codeigniter", "php", "fiber", "postgresql",
    ],
    answer:
      "Full tech stack: Back-End — Node.js (Express), Golang (Fiber), PHP (Laravel, CodeIgniter). Front-End — React.js, React Native, HTML5, CSS3, Bootstrap. Databases — MySQL, MongoDB, PostgreSQL, Redis. DevOps — Git, Docker, PM2, Nginx, Postman, Linux CLI. Security — Burp Suite, Nmap, SQLMap, Kali Linux, OWASP Top 10 practices.",
  },
  {
    keywords: [
      "database", "sql", "nosql", "mysql", "mongo", "mongodb",
      "postgresql", "postgres", "redis", "data",
    ],
    answer:
      "Database expertise: MySQL, MongoDB, PostgreSQL, and Redis. Vico has optimized database performance by up to 40% through query restructuring and indexing at PT. Eureka, and works comfortably with both SQL and NoSQL systems.",
  },
  {
    keywords: [
      "devops", "docker", "pm2", "nginx", "git", "linux", "postman",
      "deploy", "deployment", "server", "infrastructure", "ci", "cd",
    ],
    answer:
      "DevOps & Tools: Git for version control, Docker for containerized environments, PM2 for Node.js process management, Nginx for reverse proxy and load balancing, Postman for API testing, and Linux CLI for server administration. He's managed Dockerized server environments for virtual labs and maintained high system uptime during hybrid training events.",
  },
  {
    keywords: [
      "security", "keamanan", "cyber", "cybersecurity", "pentest",
      "penetration", "owasp", "burp", "nmap", "sqlmap", "kali",
      "vulnerability", "secure coding", "hacking", "hack",
    ],
    answer:
      "Cybersecurity background: Vico has a solid foundation in secure coding and OWASP Top 10 practices. He's proficient with tools like Burp Suite, Nmap, SQLMap, and Kali Linux. At PT. Spentera (a cybersecurity consulting firm), he developed internal tools and supported QA and security teams. At PT. Eureka, he integrated security practices into the development lifecycle, reducing critical vulnerabilities. He also provided DevOps support for 150+ IT security training sessions (CEH, CPENT) at PT. NQA.",
  },
  {
    keywords: [
      "soft skill", "teamwork", "agile", "scrum", "collaboration",
      "problem solving", "critical thinking", "communication",
    ],
    answer:
      "Soft skills: Problem Solving, Critical Thinking, Team Collaboration, and Agile/SCRUM methodology. Vico thrives in team-oriented environments and has collaborated across departments to debug, patch vulnerabilities, and deliver solutions under pressure.",
  },

  // --- Work Experience ---
  {
    keywords: [
      "experience", "pengalaman", "work", "kerja", "career", "karir",
      "background", "latar belakang", "history", "journey", "job",
      "pekerjaan", "company", "perusahaan",
    ],
    answer:
      "Vico has 5+ years of professional experience: (1) Feb 2025–Present: Mobile App Developer (Freelance) — React Native mobile apps. (2) Aug 2024–Present: Full-Stack Developer & Web Security Engineer at PT. Eureka — building HRIS, logistics systems with React.js, Node.js, MongoDB. (3) Feb 2022–Aug 2024: Technical Support & Assistant Trainer at PT. NQA — DevOps support for 150+ IT security training sessions. (4) Jun 2019–Feb 2022: Junior Programmer at PT. Spentera — web dashboards and internal tools for a cybersecurity consulting firm.",
  },
  {
    keywords: [
      "current", "sekarang", "now", "present", "latest", "terbaru",
      "freelance", "mobile", "react native",
    ],
    answer:
      "Currently (Feb 2025–Present), Vico works as a freelance Mobile App Developer building applications with React Native. He focuses on performance, usability, and scalability — developing real-world internal tools, implementing intuitive navigation with React Navigation and Flexbox, integrating secure RESTful APIs with JWT auth, and testing on both emulators and Android devices.",
  },
  {
    keywords: [
      "eureka", "full-stack", "fullstack", "full stack", "hris",
      "logistics", "web security",
    ],
    answer:
      "At PT. Eureka (Aug 2024–Present), Vico serves as Full-Stack Developer & Web Security Engineer. Eureka is a multi-industry tech company in Indonesia delivering solutions in logistics, e-commerce, book distribution, and travel services. His work includes: building and maintaining internal systems (HRIS & Logistics) using React.js, Node.js, and MongoDB; designing secure RESTful APIs with JWT auth; integrating security practices into the SDLC to reduce critical vulnerabilities; optimizing database performance by 40% through query restructuring and indexing; and collaborating with internal teams to debug and patch vulnerabilities from audit reports.",
  },
  {
    keywords: [
      "nqa", "trainer", "training", "ceh", "cpent", "devops support",
      "technical support", "lab", "virtual",
    ],
    answer:
      "At PT. NQA (Feb 2022–Aug 2024), Vico worked as Technical Support & Assistant Trainer (Freelance DevOps). NQA is a world-leading certification body specializing in certification, training, and IT solutions. He provided DevOps support for over 150 IT training sessions (CEH, CPENT, etc.), managed Dockerized server environments for virtual labs and training platforms, created digital guides to improve participant experience, and ensured high system uptime during hybrid training events.",
  },
  {
    keywords: [
      "spentera", "junior", "programmer", "cybersecurity company",
      "penetration testing", "forensic",
    ],
    answer:
      "At PT. Spentera (Jun 2019–Feb 2022), Vico started as a Junior Programmer at a cybersecurity consulting company focused on penetration testing, vulnerability discovery, and digital forensics. He developed web-based dashboards and internal tools using Node.js and PHP, participated in building monitoring systems with integrated APIs, supported QA and security teams for secure coding and UAT, and created automation scripts in Python & Shell for testing and deployment pipelines.",
  },

  // --- Key Projects ---
  {
    keywords: [
      "project", "proyek", "portfolio", "built", "bangun", "buat",
      "developed", "created", "made",
    ],
    answer:
      "Key projects: (1) Palda Approval App — mobile proposal approval system with React Native. (2) Hacktrace.id — digital threat intelligence platform with React.js, Node.js, MongoDB, Redis. (3) Smart.rajacepat.com — real-time logistics & delivery tracking with React.js, Node.js, MySQL, Firebase. (4) Masterdiskon.com — online travel booking platform with React.js, Node.js, MySQL. (5) Fulfilment.rajacepat.com — fulfillment backend system with Golang (Fiber), MySQL, JWT. Ask about any specific project for more details!",
  },
  {
    keywords: [
      "palda", "approval", "proposal", "mobile app",
    ],
    answer:
      "Palda Approval App: A mobile application for PT Palda Solusi Sinergi to streamline proposal submission and approval workflows. It features real-time tracking, role-based access, and secure communication between departments. Tech Stack: React Native, REST API, JWT Auth, Android Device Testing.",
  },
  {
    keywords: [
      "hacktrace", "threat", "intelligence", "osint", "incident",
      "cybersecurity platform", "monitoring",
    ],
    answer:
      "Hacktrace.id: A comprehensive digital threat intelligence platform to monitor digital threats, perform OSINT investigations, and support incident analysis. Vico designed modular dashboards and integrated multiple threat detection tools for real-time visibility. Tech Stack: React.js, Node.js (Express), MongoDB, Redis, Kali Linux integration.",
  },
  {
    keywords: [
      "rajacepat", "logistics", "delivery", "tracking", "package",
      "smart", "shipping", "kurir",
    ],
    answer:
      "Smart.rajacepat.com: A real-time logistics management system for package tracking, delivery routing, and operational dashboards. Integrated Firebase for push notifications and enabled multi-user access with role-based views. Tech Stack: React.js, Node.js (Express), MySQL, Firebase Notifications.",
  },
  {
    keywords: [
      "masterdiskon", "travel", "booking", "flight", "hotel",
      "e-commerce", "ecommerce", "tiket",
    ],
    answer:
      "Masterdiskon.com: A full-featured e-commerce platform for flight, hotel, and travel package booking. Vico integrated APIs from various providers, enabled dynamic pricing and search, and optimized UX for seamless transactions. Tech Stack: React.js, Node.js (Express), MySQL, API integrations.",
  },
  {
    keywords: [
      "fulfillment", "fulfilment", "warehouse", "gudang", "stock",
      "backend system", "golang", "fiber", "gorm",
    ],
    answer:
      "Fulfilment.rajacepat.com: A backend system for managing warehouse operations, product movement, and stock levels. Vico built secure APIs, implemented JWT-based authentication, and ensured high performance under concurrent loads. Tech Stack: Golang (Fiber), GORM (MySQL), JWT, Nginx.",
  },

  // --- Education ---
  {
    keywords: [
      "education", "pendidikan", "university", "universitas", "kuliah",
      "college", "degree", "gelar", "sarjana", "bachelor", "school",
      "sekolah", "gpa", "ipk", "thamrin",
    ],
    answer:
      "Vico holds a Bachelor's Degree in Information Engineering from Universitas Mohammad Husni Thamrin, Jakarta (Jul 2019–Jul 2023), with a GPA of 3.34/4.00.",
  },

  // --- Certifications ---
  {
    keywords: [
      "certification", "sertifikasi", "certificate", "sertifikat",
      "comptia", "pentest+", "sans", "certified", "training course",
    ],
    answer:
      "Certifications: (1) CompTIA PenTest+ (Training) — July 2025, from ID-Networkers. Completed intensive training in penetration testing, vulnerability assessment, and exploitation techniques. (2) SANS Security Awareness — December 2023, from NQA Indonesia. Completed training on security awareness best practices.",
  },

  // --- Hire / Value ---
  {
    keywords: [
      "hire", "why", "kenapa", "value", "worth", "benefit", "contribution",
      "kontribusi", "recruit", "kandidat", "candidate", "why should",
    ],
    answer:
      "Why hire Vico? He brings 5+ years of full-stack and cybersecurity experience — a rare combination. He's built production systems for logistics (RajaCepat), travel e-commerce (Masterdiskon), and digital security (Hacktrace.id). He optimized database performance by 40% at Eureka, managed 150+ training lab environments at NQA, and has hands-on security skills (OWASP, Burp Suite, Kali Linux). He delivers end-to-end: from secure API design and frontend development to deployment and monitoring.",
  },

  // --- Future / Plans ---
  {
    keywords: [
      "improve", "next", "selanjutnya", "future", "better", "upgrade",
      "plan", "rencana", "goal", "tujuan", "aspiration", "ambition",
    ],
    answer:
      "Vico is continuously expanding his skill set. He recently moved into mobile development with React Native and completed CompTIA PenTest+ training. His focus areas going forward include deepening mobile app expertise, advancing in cloud infrastructure and DevOps automation, and strengthening his cybersecurity certification portfolio.",
  },

  // --- Greetings ---
  {
    keywords: [
      "hello", "hi", "hey", "halo", "hai", "hei", "yo", "sup",
      "good morning", "good evening", "pagi", "siang", "malam",
    ],
    answer:
      "Hello! I'm Vico's portfolio assistant. I can answer questions about his work experience, projects, tech stack, skills, education, certifications, and more. What would you like to know?",
  },

  // --- Leadership / Team ---
  {
    keywords: [
      "leader", "leadership", "lead", "team", "manage", "mentor",
      "ownership", "responsible", "responsibility", "collaboration",
    ],
    answer:
      "Vico demonstrates ownership across every role: at Eureka, he collaborates with internal teams to debug and patch vulnerabilities from audit reports. At NQA, he single-handedly managed Dockerized lab environments for 150+ training sessions. At Spentera, he supported QA and security teams to enforce secure coding practices. He's comfortable working in Agile/SCRUM teams and brings problem-solving and critical thinking to cross-functional collaboration.",
  },

  // --- Age / Personal ---
  {
    keywords: [
      "age", "umur", "usia", "old", "born", "lahir", "birthday",
      "ulang tahun",
    ],
    answer:
      "I don't have specific information about Vico's date of birth. You can contact him directly at vicoramdhani@gmail.com, LinkedIn: linkedin.com/in/vikotegarramdhani, or GitHub: github.com/syntaxmagician.",
  },

  // --- Salary / Rate ---
  {
    keywords: [
      "salary", "gaji", "rate", "tarif", "fee", "price", "cost",
      "how much", "berapa", "compensation", "bayar",
    ],
    answer:
      "Salary and rate information isn't listed here. For compensation discussions, please reach out to Vico directly at vicoramdhani@gmail.com, 085591196700, LinkedIn: linkedin.com/in/vikotegarramdhani, or GitHub: github.com/syntaxmagician.",
  },

  // --- Availability ---
  {
    keywords: [
      "available", "availability", "tersedia", "open to", "looking for",
      "cari kerja", "job", "opportunity", "lowongan",
    ],
    answer:
      "Vico is currently active as a freelance Mobile App Developer and as a Full-Stack Developer at PT. Eureka. For new opportunities or collaborations, reach out at vicoramdhani@gmail.com, 085591196700, LinkedIn: linkedin.com/in/vikotegarramdhani, or GitHub: github.com/syntaxmagician.",
  },

  // --- Language (spoken) ---
  {
    keywords: [
      "bahasa", "language spoken", "english", "indonesian", "inggris",
      "indonesia", "speak", "bicara",
    ],
    answer:
      "Vico is fluent in Indonesian (native) and proficient in English, as demonstrated through his professional work with international certifications (CompTIA, SANS) and technical documentation.",
  },

  // --- React Native / Mobile ---
  {
    keywords: [
      "react native", "mobile", "android", "ios", "app", "aplikasi",
      "navigation", "flexbox",
    ],
    answer:
      "Vico has been developing mobile apps with React Native since February 2025. He builds real-world internal tools and client solutions, implements intuitive navigation with React Navigation and Flexbox, integrates secure RESTful APIs with JWT authentication, and tests on both emulators and physical Android devices. He also reuses React.js components to accelerate development and maintain code consistency across web and mobile platforms.",
  },

  // --- Performance / Optimization ---
  {
    keywords: [
      "performance", "optimization", "optimize", "fast", "speed", "cepat",
      "index", "query", "tuning", "40%",
    ],
    answer:
      "At PT. Eureka, Vico optimized database performance by 40% through query restructuring and indexing on the HRIS and Logistics systems. He also ensures high performance in his Golang backend systems (Fulfilment.rajacepat.com) under concurrent loads using Fiber framework and efficient ORM patterns with GORM.",
  },

  // --- Automation / Scripts ---
  {
    keywords: [
      "automation", "script", "python", "shell", "bash", "otomasi",
      "pipeline", "testing",
    ],
    answer:
      "Vico created automation scripts in Python and Shell at PT. Spentera for testing and deployment pipelines. He also managed Dockerized server environments for virtual labs at NQA, automating environment setup for IT training sessions.",
  },
];

const SUGGESTIONS = [
  "Tell me about Vico's experience",
  "What projects has he built?",
  "What's his tech stack?",
  "Does he have cybersecurity skills?",
];

const FALLBACK =
  "I can answer questions about Vico's work experience, projects, tech stack, skills, education, certifications, cybersecurity background, and contact info. Try asking about one of those topics!";

const STOP_WORDS = new Set([
  "nya", "di", "ke", "dan", "yang", "itu", "ini", "ada", "apa",
  "the", "is", "a", "an", "of", "in", "to", "it", "on", "for",
  "ya", "dong", "sih", "kok", "lah", "kan", "gak", "ga", "tidak",
]);

function findBestAnswer(input: string): string {
  const normalized = input.toLowerCase().replace(/[?!.,]/g, "");
  const words = normalized.split(/\s+/);
  const meaningful = words.filter((w) => !STOP_WORDS.has(w) && w.length > 1);

  let bestScore = 0;
  let bestAnswer = FALLBACK;

  for (const entry of KNOWLEDGE) {
    let score = 0;
    for (const kw of entry.keywords) {
      if (kw.includes(" ")) {
        if (normalized.includes(kw)) score += 3;
      } else {
        for (const word of meaningful) {
          if (word === kw) score += 2;
          else if (
            (word.length >= 3 && word.includes(kw) && kw.length >= 3) ||
            (kw.length >= 3 && kw.includes(word) && word.length >= 3)
          ) score += 1;
        }
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestAnswer = entry.answer;
    }
  }

  return bestAnswer;
}

type Message = {
  id: number;
  role: "user" | "ai";
  text: string;
};

export function InteractiveAISection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: "ai",
      text: "Hi! I’m the portfolio assistant for Vico. You can ask me about his background, projects, skills, or how to contact him.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [typingText, setTypingText] = useState("");
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const nextId = useRef(1);

  useEffect(() => {
    const container = chatContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages, typingText]);

  const submitQuestion = useCallback(
    (question: string) => {
      if (isTyping || !question.trim()) return;

      const userMsg: Message = {
        id: nextId.current++,
        role: "user",
        text: question.trim(),
      };
      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setIsTyping(true);
      setTypingText("");

      const answer = findBestAnswer(question);
      let i = 0;

      function typeChar() {
        if (i < answer.length) {
          setTypingText(answer.slice(0, i + 1));
          i++;
          setTimeout(typeChar, 8 + Math.random() * 14);
        } else {
          setIsTyping(false);
          setTypingText("");
          setMessages((prev) => [
            ...prev,
            { id: nextId.current++, role: "ai", text: answer },
          ]);
        }
      }

      setTimeout(typeChar, 500);
    },
    [isTyping]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitQuestion(input);
  };

  return (
    <section id="ai-assistant" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[1px] w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-accent-purple">
            Interactive
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ask My AI
          </h2>
          <p className="mt-4 text-sm text-muted">
            Ask about experience, projects, tech stack, skills, education,
            certifications, and more
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl"
        >
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a101e] shadow-2xl shadow-black/40">
            {/* Title bar */}
            <div className="flex items-center gap-2 border-b border-white/5 px-5 py-3.5">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-3 font-mono text-xs text-dim">
                assistant.ai — personal assistant
              </span>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                <span className="font-mono text-[10px] text-emerald-400">
                  online
                </span>
              </div>
            </div>

            {/* Chat messages */}
            <div ref={chatContainerRef} className="h-[400px] space-y-4 overflow-y-auto p-5 sm:p-6">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "rounded-br-md bg-gradient-to-r from-blue-600/80 to-purple-600/80 text-white"
                        : "rounded-bl-md border border-white/5 bg-white/[0.04] text-muted"
                    }`}
                  >
                    {msg.role === "ai" && (
                      <div className="mb-1.5 flex items-center gap-1.5">
                        <div className="flex h-4 w-4 items-center justify-center rounded bg-gradient-to-r from-blue-500 to-purple-500 font-mono text-[7px] font-bold text-white">
                          &gt;_
                        </div>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-accent">
                          Assistant AI
                        </span>
                      </div>
                    )}
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-2xl rounded-bl-md border border-white/5 bg-white/[0.04] px-4 py-3 text-sm leading-relaxed text-muted">
                    <div className="mb-1.5 flex items-center gap-1.5">
                      <div className="flex h-4 w-4 items-center justify-center rounded bg-gradient-to-r from-blue-500 to-purple-500 font-mono text-[7px] font-bold text-white">
                        &gt;_
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-accent">
                        Profile AI
                      </span>
                    </div>
                    {typingText || (
                      <span className="inline-flex gap-1">
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted [animation-delay:0ms]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted [animation-delay:150ms]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted [animation-delay:300ms]" />
                      </span>
                    )}
                    {typingText && (
                      <span className="ml-0.5 inline-block h-4 w-[2px] animate-pulse bg-accent align-middle" />
                    )}
                  </div>
                </div>
              )}

            </div>

            {/* Suggestions */}
            <AnimatePresence>
              {messages.length <= 1 && !isTyping && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border-t border-white/5 px-5 py-3"
                >
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => submitQuestion(s)}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[11px] text-muted transition-all hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input bar */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-3 border-t border-white/5 px-5 py-4"
            >
              <div className="relative flex-1">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything about Vico..."
                  disabled={isTyping}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 pr-10 font-mono text-sm text-foreground outline-none transition-colors placeholder:text-dim focus:border-accent/50 focus:bg-white/[0.07] disabled:cursor-wait disabled:opacity-50"
                />
              </div>
              <button
                type="submit"
                disabled={isTyping || !input.trim()}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white transition-all hover:shadow-lg hover:shadow-blue-500/25 disabled:cursor-not-allowed disabled:opacity-30"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
