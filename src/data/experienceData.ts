export interface ExperienceEntry {
  id: string;
  roleTitle: string;
  company: string;
  type: string;
  timeline: string;
  description: string[];
  image?: string;
}

export const experienceData: ExperienceEntry[] = [
  {
    id: "exp-1",
    roleTitle: "Website & Order Management Executive",
    company: "ThriftShift",
    type: "Self-Driven",
    timeline: "2024 - Present",
    description: [
      "Engineered web platforms (ThriftShift) utilizing modern web stacks.",
      "Actively developing and adding new features to the website.",
    ],
  },
  {
    id: "training-1",
    roleTitle: "AI Engineer Launchpad: Mastering LLMs and Agentic AI",
    company: "Lovely Professional University, Punjab",
    type: "Training",
    timeline: "June 2026 - July 2026",
    image: "AI_Engineer_Training.jpg",
    description: [
      "Developed a privacy-focused RAG platform for context-aware document Q&A using cloud and local LLMs.",
      "Integrated LLMs, embedding models, system prompts and guardrails using LangChain; optimized GPU usage and document processing for faster responses.",
      "Implemented hallucination control, source citations, model failover, response-time tracking, and offline inference.",
    ],
  },
];
