import type { ComponentType } from "react";
import {
  SiC,
  SiCss,
  SiGit,
  SiHtml5,
  SiHuggingface,
  SiJavascript,
  SiOpenjdk,
  SiPython,
  SiSap,
  SiStreamlit,
} from "react-icons/si";
import { Binary, Bot, Brain, Code2, Network, Sparkles, Target } from "lucide-react";

export type SkillCategory =
  | "Programming"
  | "AI & ML"
  | "Frontend"
  | "Backend & Cloud"
  | "Core CS & Tools";

export interface Skill {
  id: string;
  name: string;
  level: string;
  category: SkillCategory;
  Icon: ComponentType<{ className?: string }>;
  iconColor: string;
  featured?: boolean;
}

export const SKILLS: Skill[] = [
  // Programming
  { id: "python", name: "Python", level: "Verified", category: "Programming", Icon: SiPython, iconColor: "#3776AB", featured: true },
  { id: "java", name: "Java", level: "Verified", category: "Programming", Icon: SiOpenjdk, iconColor: "#ED8B00", featured: true },
  { id: "c", name: "C", level: "Verified", category: "Programming", Icon: SiC, iconColor: "#A8B9CC", featured: true },
  { id: "javascript", name: "JavaScript", level: "Verified", category: "Programming", Icon: SiJavascript, iconColor: "#F7DF1E", featured: true },

  // AI & ML
  { id: "ai", name: "Artificial Intelligence", level: "Verified", category: "AI & ML", Icon: Brain, iconColor: "#c084fc", featured: true },
  { id: "ml", name: "Machine Learning", level: "Verified", category: "AI & ML", Icon: Bot, iconColor: "#a78bfa", featured: true },
  { id: "deeplearning", name: "Deep Learning (NPTEL)", level: "Certified", category: "AI & ML", Icon: Sparkles, iconColor: "#e879f9", featured: true },
  { id: "llms", name: "Large Language Models (LLMs)", level: "Verified", category: "AI & ML", Icon: Bot, iconColor: "#818cf8", featured: true },
  { id: "huggingface", name: "Hugging Face Transformers", level: "Verified", category: "AI & ML", Icon: SiHuggingface, iconColor: "#FFD21E", featured: true },
  { id: "ollama", name: "Ollama (Local LLMs)", level: "Verified", category: "AI & ML", Icon: Brain, iconColor: "#38bdf8" },

  // Frontend
  { id: "streamlit", name: "Streamlit", level: "Verified", category: "Frontend", Icon: SiStreamlit, iconColor: "#FF4B4B", featured: true },
  { id: "html5", name: "HTML5", level: "Verified", category: "Frontend", Icon: SiHtml5, iconColor: "#E34F26" },
  { id: "css3", name: "CSS3", level: "Verified", category: "Frontend", Icon: SiCss, iconColor: "#1572B6" },
  { id: "responsiveweb", name: "Responsive UI Components", level: "Verified", category: "Frontend", Icon: Code2, iconColor: "#67e8f9" },

  // Backend & Cloud
  { id: "python-fullstack", name: "Python Full Stack", level: "Certified", category: "Backend & Cloud", Icon: SiPython, iconColor: "#38bdf8", featured: true },
  { id: "sap-abap", name: "SAP ABAP Cloud", level: "Certified", category: "Backend & Cloud", Icon: SiSap, iconColor: "#008FD3", featured: true },

  // Core CS & Tools
  { id: "dsa", name: "Data Structures & Algorithms", level: "Core", category: "Core CS & Tools", Icon: Binary, iconColor: "#a78bfa", featured: true },
  { id: "oop", name: "Object-Oriented Programming", level: "Core", category: "Core CS & Tools", Icon: Network, iconColor: "#818cf8" },
  { id: "problemsolving", name: "Problem Solving", level: "Core", category: "Core CS & Tools", Icon: Target, iconColor: "#34d399", featured: true },
  { id: "git", name: "Git & Version Control", level: "Verified", category: "Core CS & Tools", Icon: SiGit, iconColor: "#F05032" },
];

export const SKILL_FILTERS: { label: string; value: SkillCategory | "All" }[] = [
  { label: "All", value: "All" },
  { label: "Programming", value: "Programming" },
  { label: "AI & ML", value: "AI & ML" },
  { label: "Frontend", value: "Frontend" },
  { label: "Backend & Cloud", value: "Backend & Cloud" },
  { label: "Core CS & Tools", value: "Core CS & Tools" },
];
