export type ProjectDomain =
  | "Web & Full-Stack"
  | "AI & AI Agents"
  | "Data Science & Analytics"
  | "Systems & Security";

export interface ProjectEntry {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  isAiAssisted: boolean;
  isTeamProject: boolean;
  githubUrl: string;
  isPrivateRepo: boolean;
  liveUrl: string;
  domain: ProjectDomain;
}

export const projectsData: ProjectEntry[] = [
  {
    id: "proj-1",
    title: "ThriftShift",
    description:
      "ThriftShift is a modern, full-stack e-commerce web application designed for thrifting. It features a React/Vite frontend powered by a Node.js/Express backend with MongoDB.",
    techStack: ["Node.js", "MongoDB", "Web Development"],
    isAiAssisted: true,
    isTeamProject: false,
    githubUrl: "https://github.com/rohitranjankumar-01/ThriftShift",
    isPrivateRepo: true,
    liveUrl: "https://thriftshift.online",
    domain: "Web & Full-Stack",
  },
  {
    id: "proj-2",
    title: "InvoiceFlow",
    description:
      "Full-stack invoice generator — glassmorphism UI, PDF generation, email delivery, client management & dashboard. Built with React + Node.js. Free to host on Render.",
    techStack: ["HTML", "CSS", "Next.js", "Framer Motion"],
    isAiAssisted: true,
    isTeamProject: false,
    githubUrl: "https://github.com/rohitranjankumar-01/InvoiceFlow",
    isPrivateRepo: true,
    liveUrl: "https://invoiceflow-vnuk.onrender.com/",
    domain: "Web & Full-Stack",
  },
  {
    id: "proj-3",
    title: "Portfolio",
    description:
      "Modern, high-performance personal portfolio website built with Next.js, Framer Motion, and scroll-driven storytelling components showcasing Data Science, Data Engineering, and Full-Stack projects.",
    techStack: ["HTML", "CSS", "Next.js", "Framer Motion"],
    isAiAssisted: true,
    isTeamProject: false,
    githubUrl: "https://github.com/rohitranjankumar-01/Portfolio",
    isPrivateRepo: false,
    liveUrl: "https://rohitranjankumar.vercel.app/",
    domain: "Web & Full-Stack",
  },
  {
    id: "proj-4",
    title: "DocSensei",
    description:
      "DocSensei is a production-grade, modular Retrieval-Augmented Generation (RAG) platform optimized for processing educational curriculum materials and enterprise documents without data leakages or citation hallucinations.",
    techStack: ["Python", "LLM", "RAG", "AI Agents"],
    isAiAssisted: true,
    isTeamProject: true,
    githubUrl: "https://github.com/rohitranjankumar-01/DocSensei",
    isPrivateRepo: false,
    liveUrl: "https://docsensei.streamlit.app/",
    domain: "AI & AI Agents",
  },
  {
    id: "proj-5",
    title: "Gemini_API_Chatbot",
    description:
      "A lightweight Python application that sends text prompts from a file to Google's Gemini API (google-genai SDK) and prints AI responses.",
    techStack: ["Python", "Gemini API"],
    isAiAssisted: false,
    isTeamProject: false,
    githubUrl: "https://github.com/rohitranjankumar-01/GeminiAPI_Chat_Bot",
    isPrivateRepo: false,
    liveUrl: "",
    domain: "AI & AI Agents",
  },
  {
    id: "proj-6",
    title: "Global Health Expenditure vs. Mortality Outcome",
    description:
      "Descriptive analytics study exploring how government vs. out-of-pocket health spending impacts mortality rates across 200+ countries (2005–2024) — featuring efficiency frontiers, urban-rural gap analysis, and an interactive Power BI dashboard. Built with Python, Pandas, Seaborn & SciPy. A Descriptive analytics project.",
    techStack: [
      "Python",
      "Jupyter Notebook",
      "Tableau",
      "Pandas",
      "Data Analytics",
    ],
    isAiAssisted: false,
    isTeamProject: true,
    githubUrl:
      "https://github.com/rohitranjankumar-01/Global-Health-Expenditure-vs-Mortality-Outcome",
    isPrivateRepo: false,
    liveUrl:
      "https://colab.research.google.com/github/rohitranjankumar-01/Global-Health-Expenditure-vs-Mortality-Outcome/blob/main/Highlanders_Python.ipynb",
    domain: "Data Science & Analytics",
  },
  {
    id: "proj-7",
    title: "BitcoinHistoryAnalysis",
    description:
      "Capstone project analyzing historical Bitcoin market data to uncover price patterns, volatility, and momentum using Python, Pandas, NumPy, and SMA technical indicators.",
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    isAiAssisted: false,
    isTeamProject: true,
    githubUrl: "https://github.com/rohitranjankumar-01/Bitcoin-History-Analysis",
    isPrivateRepo: false,
    liveUrl:
      "https://colab.research.google.com/github/rohitranjankumar-01/Bitcoin-History-Analysis-ACap-Stone-Project/blob/main/BitcoinDataAnalysis.ipynb",
    domain: "Data Science & Analytics",
  },
  {
    id: "proj-8",
    title: "Secure-File-Management System",
    description:
      "SecureFS: A secure file management system implementing AES-128 encryption, TOTP 2FA, access control, and audit logging. Developed as an OS security project.",
    techStack: ["Encryption", "Access Control", "Security Protocols"],
    isAiAssisted: true,
    isTeamProject: true,
    githubUrl:
      "https://github.com/rohitranjankumar-01/Secure-File-Management-System",
    isPrivateRepo: false,
    liveUrl: "https://secure-filemanagement-system.onrender.com",
    domain: "Systems & Security",
  },
];
