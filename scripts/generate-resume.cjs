const { PDFDocument, StandardFonts, rgb } = require("pdf-lib");
const fs = require("fs");
const path = require("path");

async function generateResume() {
  const doc = await PDFDocument.create();
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const italic = await doc.embedFont(StandardFonts.HelveticaOblique);

  let page = doc.addPage([612, 792]);
  const { width, height } = page.getSize();
  let y = height - 50;
  const left = 50;
  const right = width - 50;
  const gray = rgb(0.4, 0.4, 0.4);
  const dark = rgb(0.1, 0.1, 0.1);
  const blue = rgb(0.2, 0.4, 0.8);
  const lightGray = rgb(0.6, 0.6, 0.6);

  function wrap(text, font, size, maxWidth) {
    const words = text.split(" ");
    const lines = [];
    let line = "";
    for (const w of words) {
      const test = line ? line + " " + w : w;
      if (font.widthOfTextAtSize(test, size) > maxWidth) {
        lines.push(line);
        line = w;
      } else {
        line = test;
      }
    }
    if (line) lines.push(line);
    return lines;
  }

  function addLine(y, thickness = 1) {
    page.drawLine({ start: { x: left, y }, end: { x: right, y }, thickness, color: rgb(0.85, 0.85, 0.85) });
  }

  function addSection(title) {
    y -= 8;
    page.drawText(title, { x: left, y, size: 13, font: bold, color: blue });
    y -= 6;
    addLine(y);
    y -= 12;
  }

  function addText(text, { size = 10, font: f = font, color = dark, indent = 0, maxWidth } = {}) {
    const mw = maxWidth || (right - left - indent);
    const lines = wrap(text, f, size, mw);
    for (const line of lines) {
      if (y < 40) {
        page = doc.addPage([612, 792]);
        y = height - 50;
      }
      page.drawText(line, { x: left + indent, y, size, font: f, color });
      y -= size + 3;
    }
  }

  // Name
  page.drawText("PRADHUMN VYAS", { x: left, y, size: 24, font: bold, color: dark });
  y -= 18;
  page.drawText("Applied AI Engineer", { x: left, y, size: 12, font: italic, color: blue });
  y -= 16;

  // Contact
  const contact = "Gurugram, Haryana  |  +91-7023738130  |  pradhumnvyas07@gmail.com";
  page.drawText(contact, { x: left, y, size: 8, font, color: gray });
  y -= 11;
  const links = "github.com/Pradhumn2004  |  linkedin.com/in/pradhumn-vyas07";
  page.drawText(links, { x: left, y, size: 8, font, color: gray });
  y -= 6;
  addLine(y);
  y -= 14;

  // Summary
  addSection("PROFESSIONAL SUMMARY");
  addText("Applied AI Engineer with hands-on experience building production-grade AI systems — from multilingual voice agents and real-time proctoring to serverless ML pipelines. Passionate about architecting intelligent systems that push the boundaries of what's possible with AI.", { size: 9 });
  y -= 4;

  // Experience
  addSection("WORK EXPERIENCE");
  page.drawText("Applied AI Engineer Intern", { x: left, y, size: 10, font: bold, color: dark });
  page.drawText("Oct 2025 - Feb 2026", { x: right - 110, y, size: 8, font, color: gray });
  y -= 11;
  page.drawText("ATG/Banao Technologies", { x: left, y, size: 9, font: italic, color: blue });
  y -= 13;

  const bullets = [
    "Built multilingual AI interview platform using Sarvam API for automated call screening, transcription, and LLM evaluation, reducing token consumption by 40%; engineered CV pipelines for deepfake detection with <2% false positives.",
    "Engineered stateful, sub-800ms voice-to-voice latency conversational tutor integrating Gemini Live API and LangGraph with Pinecone vector DB for cross-session memory.",
    "Re-architected screen-scraping into split-runtime serverless pipeline using Faster-Whisper, Pyannote, and SpeechBrain ECAPA-TDNN voice biometrics with >90% confidence gating on RunPod GPUs.",
    "Curated 5,000+ coding challenge dataset with Pinecone retrieval; deployed microservices on AWS (ECS Fargate, ECR, Lambda) with GitHub Actions CI/CD enabling 3x peak traffic auto-scaling.",
  ];
  for (const b of bullets) {
    if (y < 50) {
      page = doc.addPage([612, 792]);
      y = height - 50;
    }
    page.drawText("•", { x: left, y, size: 9, font, color: dark });
    addText(b, { size: 8.5, indent: 12, maxWidth: right - left - 12 });
    y += 2;
  }
  y -= 2;

  // Projects
  addSection("PROJECTS");
  const projs = [
    { title: "Enterprise Customer Support AI Agent", tech: "LangGraph, RAG, FastAPI, ChromaDB, Redis, Neo4j, Docker", desc: "Production-grade AI customer support agent with 6-node multi-agent workflow, 85%+ retrieval precision, sub-2s response time, JWT-secured REST API, and Docker Compose containerization." },
    { title: "Personalized Health and Wellness Assistant", tech: "FastAPI, Next.js, TensorFlow, PyTorch, Docker, Scikit-learn", desc: "Full-stack wellness platform with deep learning models achieving 88%+ activity recognition accuracy, CI/CD pipeline with 70% deployment time reduction, and 99% uptime across 4 containerized services." },
    { title: "Social Media Post Automation Tool - Agentic AI", tech: "LangChain, Next.js, Celery, Redis, APScheduler, Docker", desc: "Agentic AI automation using LangChain + Gemini 1.5 Pro for autonomous post generation across 3+ platforms, processing 50+ trending topics daily with Celery/Redis task queue." },
  ];
  for (const p of projs) {
    if (y < 60) {
      page = doc.addPage([612, 792]);
      y = height - 50;
    }
    page.drawText(p.title, { x: left, y, size: 9.5, font: bold, color: dark });
    y -= 11;
    page.drawText(p.tech, { x: left, y, size: 7.5, font: italic, color: gray });
    y -= 10;
    addText(p.desc, { size: 8, indent: 0 });
    y -= 2;
  }

  // Skills
  addSection("TECHNICAL SKILLS");
  const skillCats = [
    { cat: "Languages", items: "Python, C++, SQL, TypeScript" },
    { cat: "AI & ML", items: "PyTorch, TensorFlow, Hugging Face, LangChain, Scikit-Learn, NLP, Computer Vision, Transformer Architectures, Fine-tuning, Vector Databases, Embeddings" },
    { cat: "Backend & Distributed Systems", items: "FastAPI, Celery, Redis, PostgreSQL, WebSockets, REST APIs" },
    { cat: "Cloud, DevOps & Observability", items: "AWS (EKS, ECS, Lambda), Kubernetes, Docker, Prometheus, Grafana, GitHub Actions" },
  ];
  for (const s of skillCats) {
    if (y < 50) {
      page = doc.addPage([612, 792]);
      y = height - 50;
    }
    page.drawText(`${s.cat}:`, { x: left, y, size: 8.5, font: bold, color: dark });
    page.drawText(s.items, { x: left + 85, y, size: 8.5, font, color: dark });
    y -= 13;
  }
  y -= 2;

  // Certifications
  addSection("CERTIFICATIONS");
  const certs = [
    "Full Stack Software Development - Meta (Aug 2025 - Jan 2026)",
    "Machine Learning Specialization - Coursera (Jan 2025 - Mar 2025)",
    "IBM DevOps and Software Engineering - Coursera (Sep 2024 - Nov 2024)",
    "Cloud Computing - NPTEL (Sep 2024 - Nov 2024)",
    "Generative AI - Coursera (Jan 2024 - May 2024)",
  ];
  for (const c of certs) {
    if (y < 50) { page = doc.addPage([612, 792]); y = height - 50; }
    page.drawText("•", { x: left, y, size: 8, font, color: dark });
    page.drawText(c, { x: left + 12, y, size: 8, font, color: dark });
    y -= 12;
  }
  y -= 2;

  // Achievements
  addSection("ACHIEVEMENTS");
  const achiev = [
    "Hackathon Finalist (Top 10) - University-organized hackathon, April 2025",
    "Competitive Coding - Solved 500+ problems on LeetCode, Codeforces, and GFG",
  ];
  for (const a of achiev) {
    if (y < 50) { page = doc.addPage([612, 792]); y = height - 50; }
    page.drawText("•", { x: left, y, size: 8, font, color: dark });
    page.drawText(a, { x: left + 12, y, size: 8, font, color: dark });
    y -= 12;
  }

  // Open Source
  addSection("OPEN SOURCE CONTRIBUTIONS");
  const osItems = [
    "Aden Hive (Core Contributor) - Engineered MCP tool integrations for agent runtime harness",
    "Bindu (Core Contributor) - Architected DSPy adapter and gRPC test coverage for A2A communication",
  ];
  for (const o of osItems) {
    if (y < 50) { page = doc.addPage([612, 792]); y = height - 50; }
    page.drawText("•", { x: left, y, size: 8, font, color: dark });
    page.drawText(o, { x: left + 12, y, size: 8, font, color: dark });
    y -= 12;
  }

  // Education
  addSection("EDUCATION");
  if (y < 60) { page = doc.addPage([612, 792]); y = height - 50; }
  page.drawText("B.Tech in Computer Science and Engineering", { x: left, y, size: 9.5, font: bold, color: dark });
  page.drawText("2022 - 2026", { x: right - 65, y, size: 8, font, color: gray });
  y -= 11;
  page.drawText("Lovely Professional University, Phagwara, Punjab  |  CGPA: 8.2", { x: left, y, size: 8.5, font, color: gray });
  y -= 14;
  page.drawText("12th with Science", { x: left, y, size: 9.5, font: bold, color: dark });
  y -= 11;
  page.drawText("Mount Litera Zee School", { x: left, y, size: 8.5, font, color: gray });

  const pdfBytes = await doc.save();
  const outPath = path.join(__dirname, "..", "public", "resume.pdf");
  fs.writeFileSync(outPath, pdfBytes);
  console.log(`Resume PDF generated: ${outPath}`);
}

generateResume().catch(console.error);
