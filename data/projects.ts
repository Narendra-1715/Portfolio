export type ProjectCategory = "AI / ML" | "GenAI & LLMs" | "Web Apps";

export interface Project {
  id: string;
  name: string;
  oneliner: string;
  liveUrl: string;
  githubUrl: string;
  category: ProjectCategory;
  tags: [string, string, string];
  image: string;
  featured?: boolean;
  problemSolved?: string;
  objective?: string;
  highlights?: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "neutri-scan",
    name: "Neutri-Scan (MacroSnap)",
    oneliner:
      "Intelligent visual food recognition and macronutrient analysis platform powered by Google Gemini Vision and Streamlit.",
    liveUrl: "https://github.com/Narendra-1715/Neutri-Scan",
    githubUrl: "https://github.com/Narendra-1715/Neutri-Scan",
    category: "AI / ML",
    tags: ["Gemini Vision", "Streamlit", "Python"],
    image: "/project-neutri-scan.jpg",
    featured: true,
    problemSolved:
      "Eliminates manual food database searching and portion estimation by analyzing meal photos directly with AI vision models.",
    objective:
      "Provide instant calorie calculations, protein & macro breakdowns, allergen flags, and high-availability model failover with optional WhatsApp sync.",
    highlights: [
      "Visual food recognition & ingredient extraction via Google Gemini Vision",
      "Precision macronutrient breakdown (calories, protein, carbs, fats, micronutrients)",
      "High-availability architecture with automatic failover between Gemini 3.5 Flash and Flash-Lite",
      "Proactive allergen warnings, dietary badge tagging, and Twilio WhatsApp meal sync",
    ],
  },
  {
    id: "qa-chatbot",
    name: "Intelligent QA Chatbot",
    oneliner:
      "Context-aware Question Answering conversational AI system powered by Hugging Face Transformers and Ollama local LLMs.",
    liveUrl: "https://github.com/Narendra-1715",
    githubUrl: "https://github.com/Narendra-1715",
    category: "GenAI & LLMs",
    tags: ["Hugging Face", "Ollama LLMs", "Python"],
    image: "/project-qa-chatbot.svg",
    featured: true,
    problemSolved:
      "Bridges the gap between heavy cloud-dependent APIs and privacy-conscious local question answering.",
    objective:
      "Deliver sub-second, highly contextual responses to complex queries with local Ollama models and Hugging Face pipelines.",
    highlights: [
      "Natural language processing powered by Hugging Face Transformer pipelines",
      "Local LLM inference via Ollama for zero-cost, high-privacy responses",
      "Interactive conversational user interface with real-time response streaming",
      "Domain knowledge retrieval and prompt template optimization",
    ],
  },
  {
    id: "apex-web-suite",
    name: "Apex Responsive Web Suite",
    oneliner:
      "High-performance responsive web applications and reusable UI component architecture developed at Apex Planet Solutions.",
    liveUrl: "https://github.com/Narendra-1715",
    githubUrl: "https://github.com/Narendra-1715",
    category: "Web Apps",
    tags: ["Responsive UI", "JavaScript", "HTML/CSS"],
    image: "/project-apex-web.svg",
    problemSolved:
      "Replaces brittle legacy page layouts with modular, highly responsive, cross-device web interfaces.",
    objective:
      "Build scalable UI components with optimized rendering times, mobile-first design, and seamless cross-browser consistency.",
    highlights: [
      "Modular, reusable frontend UI components built with HTML5, CSS3, and JavaScript",
      "Mobile-first responsive design ensuring flawless display on all screen sizes",
      "Performance optimization with smooth transitions and minimized asset payloads",
      "Production-tested during Web Developer Internship at Apex Planet Solutions",
    ],
  },
  {
    id: "genai-workshop",
    name: "Prompt Engineering & GenAI Workshop",
    oneliner:
      "Hands-on prompt engineering laboratory, LLM orchestration patterns, and few-shot reasoning workflows.",
    liveUrl: "https://github.com/Narendra-1715/workshop",
    githubUrl: "https://github.com/Narendra-1715/workshop",
    category: "GenAI & LLMs",
    tags: ["Prompt Eng", "LLM Tuning", "Python"],
    image: "/project-workshop.svg",
    problemSolved:
      "Solves LLM hallucination and inconsistent output structures through structured prompt architecture.",
    objective:
      "Explore and implement chain-of-thought, few-shot prompting, and deterministic schema enforcement for generative AI.",
    highlights: [
      "Systematic prompt engineering patterns for zero-shot and few-shot reasoning",
      "Structured output validation ensuring deterministic schema returns",
      "Hyperparameter exploration for temperature, top_p, and repetition penalties",
      "Practical generative AI workflows and model evaluations",
    ],
  },
];

export const FILTERS: { label: string; value: ProjectCategory | "All" }[] = [
  { label: "All Projects", value: "All" },
  { label: "AI / ML", value: "AI / ML" },
  { label: "GenAI & LLMs", value: "GenAI & LLMs" },
  { label: "Web Apps", value: "Web Apps" },
];
