export const personalInfo = {
  name: "Pradhumn Vyas",
  title: "Applied AI Engineer",
  location: "Gurugram, Haryana",
  phone: "+91-7023738130",
  email: "pradhumnvyas07@gmail.com",
  linkedin: "https://linkedin.com/in/pradhumn-vyas07/",
  github: "https://github.com/Pradhumn2004",
  bio: "Applied AI Engineer with hands-on experience building production-grade AI systems — from multilingual voice agents and real-time proctoring to serverless ML pipelines. Passionate about architecting intelligent systems that push the boundaries of what's possible with AI.",
  avatar: "/avatar.jpg",
  resumeUrl: "https://drive.google.com/file/d/1acBfCcoqpekSsEJHHNJd8_TB7WqPH293/view?usp=sharing",
};

export const experience = [
  {
    id: 1,
    company: "ATG/Banao Technologies",
    role: "Applied AI Engineer Intern",
    period: "Oct 2025 - Feb 2026",
    description: [
      "Built multilingual AI interview platform using Sarvam API for automated call screening, transcription, and LLM evaluation, reducing token consumption by 40%; engineered Computer Vision pipelines for deepfake detection with <2% false positives.",
      "Engineered stateful, sub-800ms voice-to-voice latency conversational tutor integrating Gemini Live API and LangGraph; optimized WebSocket streams with Pinecone vector DB for cross-session memory.",
      "Re-architected screen-scraping into a split-runtime serverless pipeline using Faster-Whisper, Pyannote, and SpeechBrain ECAPA-TDNN voice biometrics with >90% confidence gating on RunPod GPUs.",
      "Curated 5,000+ coding challenge dataset with Pinecone retrieval infrastructure; deployed microservices on AWS (ECS Fargate, ECR, Lambda) with GitHub Actions CI/CD enabling 3× peak traffic auto-scaling.",
    ],
    tags: ["Python", "LangChain", "Computer Vision", "AWS", "Pinecone", "Gemini API", "FastAPI", "Docker"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Enterprise Customer Support AI Agent",
    description:
      "Production-grade AI customer support agent using RAG architecture with LangChain and ChromaDB, processing PDFs, DOCX, and CSV into 1000-token vector chunks achieving 85%+ retrieval precision and sub-2-second response time.",
    tech: ["LangGraph", "RAG", "FastAPI", "ChromaDB", "Redis", "Neo4j", "Docker", "JWT"],
    highlights: [
      "6-node multi-agent workflow with intent classification, sentiment analysis, and Neo4j Graph RAG",
      "JWT-secured REST API with 5 endpoints for chat, document upload, and ticket escalation",
      "Containerized 5 services using Docker Compose",
    ],
    github: "https://github.com/Pradhumn2004/Customer-Support-AI",
    live: "",
    period: "Apr 2026 - May 2026",
    featured: true,
  },
  {
    id: 2,
    title: "Personalized Health and Wellness Assistant",
    description:
      "Full-stack personalized wellness platform with FastAPI backend and React/Next.js frontend, integrating 3+ REST APIs and nutrition databases delivering tailored diet and exercise recommendations.",
    tech: ["FastAPI", "Next.js", "TensorFlow", "PyTorch", "Docker", "Scikit-learn", "SSE"],
    highlights: [
      "Deep learning models for activity recognition achieving 88%+ classification accuracy",
      "Automated CI/CD with Docker and GitHub Actions reducing deployment time by 70%",
      "Containerized 4 services ensuring 99% uptime",
    ],
    github: "https://github.com/Pradhumn2004/MuscleTab",
    live: "",
    period: "Mar 2026 - Apr 2026",
    featured: true,
  },
  {
    id: 3,
    title: "Social Media Post Automation Tool",
    description:
      "Agentic AI-powered social media automation tool using LangChain agents and Gemini 1.5 Pro API to autonomously generate, optimize, and schedule posts across 3+ platforms, reducing manual content creation time by 80%.",
    tech: ["LangChain", "Next.js", "Celery", "Redis", "APScheduler", "Docker", "GitHub Actions"],
    highlights: [
      "Automated content pipeline fetching 50+ trending topics daily via Google RSS feeds",
      "Platform-specific post generation with Gemini 1.5 Pro and scheduling via Celery + Redis",
      "Containerized backend with 4 microservices, improving deployment efficiency by 35%",
    ],
    github: "https://github.com/Pradhumn2004/drone-daily",
    live: "",
    period: "Jan 2026 - Feb 2026",
    featured: true,
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Python", "C++", "SQL", "TypeScript"],
    color: "#3b82f6",
  },
  {
    category: "AI & Machine Learning",
    items: [
      "PyTorch",
      "TensorFlow",
      "Hugging Face",
      "LangChain",
      "Scikit-Learn",
      "NLP",
      "Computer Vision",
      "Transformer Architectures",
      "Fine-tuning",
      "Vector Databases",
      "Embeddings",
      "Inference Optimization",
    ],
    color: "#8b5cf6",
  },
  {
    category: "Backend & Distributed Systems",
    items: ["FastAPI", "Celery", "Redis", "PostgreSQL", "WebSockets", "REST APIs", "GraphQL"],
    color: "#06b6d4",
  },
  {
    category: "Cloud, DevOps & Observability",
    items: ["AWS (EKS, ECS, Lambda)", "Kubernetes", "Docker", "Prometheus", "Grafana", "GitHub Actions"],
    color: "#10b981",
  },
];

export const certifications = [
  {
    id: 1,
    title: "Full Stack Software Development",
    issuer: "Meta",
    date: "Aug 2025 - Jan 2026",
    description: "Comprehensive full-stack development certification covering React, Node.js, Django, APIs, databases, and version control.",
    credentialUrl: "",
    color: "#3b82f6",
  },
  {
    id: 2,
    title: "Machine Learning Specialization",
    issuer: "Coursera (Stanford/DeepLearning.AI)",
    date: "Jan 2025 - Mar 2025",
    description: "Advanced machine learning certification covering supervised learning, neural networks, decision trees, clustering, and recommender systems.",
    credentialUrl: "",
    color: "#8b5cf6",
  },
  {
    id: 3,
    title: "IBM DevOps and Software Engineering",
    issuer: "Coursera",
    date: "Sep 2024 - Nov 2024",
    description: "Professional certification covering CI/CD pipelines, containerization with Docker and Kubernetes, microservices, and cloud-native development.",
    credentialUrl: "",
    color: "#06b6d4",
  },
  {
    id: 4,
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "Sep 2024 - Nov 2024",
    description: "Comprehensive cloud computing course covering IaaS, PaaS, SaaS, virtualization, cloud storage, and distributed computing paradigms.",
    credentialUrl: "",
    color: "#10b981",
  },
  {
    id: 5,
    title: "Generative AI",
    issuer: "Coursera",
    date: "Jan 2024 - May 2024",
    description: "In-depth exploration of generative AI models including LLMs, transformers, GANs, prompt engineering, and responsible AI practices.",
    credentialUrl: "",
    color: "#f59e0b",
  },
];

export const achievements = [
  {
    id: 1,
    title: "Hackathon Finalist (Top 10)",
    date: "April 26, 2025",
    description: "Participated in a university-organized hackathon and secured a top 10 position out of several competitive teams.",
    color: "#8b5cf6",
  },
  {
    id: 2,
    title: "Competitive Coding / DSA",
    date: "Ongoing",
    description: "Solved 500+ problems across LeetCode, Codeforces, and GeeksforGeeks covering algorithms, data structures, dynamic programming, and system design.",
    color: "#3b82f6",
  },
];

export const openSource = [
  {
    id: 1,
    title: "Aden Hive — Core Contributor",
    issuer: "Open Source",
    date: "2026",
    description: "Engineered MCP tool integrations for the agent runtime harness, enabling secure API interactions with built-in state persistence.",
    color: "#3b82f6",
  },
  {
    id: 2,
    title: "Bindu — Core Contributor",
    issuer: "Open Source",
    date: "2026",
    description: "Architected the DSPy adapter and expanded gRPC test coverage to facilitate secure Agent-to-Agent (A2A) communication via DIDs.",
    color: "#8b5cf6",
  },
];

export const education = [
  {
    id: 1,
    institution: "Lovely Professional University",
    degree: "B.Tech in Computer Science and Engineering",
    period: "2022 - 2026",
    cgpa: "8.2",
    location: "Phagwara, Punjab",
  },
  {
    id: 2,
    institution: "Mount Litera Zee School",
    degree: "12th with Science",
    period: "2020 - 2022",
    location: "",
    cgpa: "",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Pradhumn2004",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/pradhumn-vyas07/",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:pradhumnvyas07@gmail.com",
    icon: "mail",
  },
];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
