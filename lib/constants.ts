export const siteConfig = {
  name: "HirePilot AI",
  tagline: "Know exactly what to improve before your next interview.",
  description:
    "HirePilot AI is an AI-powered career platform for software engineers. Improve resumes, pass ATS filters, practice mock interviews, and build personalized learning roadmaps.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://hirepilot.ai",
  keywords: [
    "AI Interview Coach",
    "Resume Analyzer",
    "ATS Resume Checker",
    "Mock Interview Platform",
    "Software Engineering Interview Preparation",
    "HirePilot AI",
    "interview preparation",
    "software engineer career",
    "ATS optimization",
    "mock technical interview",
  ],
  links: {
    linkedin: "https://linkedin.com/company/hirepilot-ai",
    email: "hello@hirepilot.ai",
  },
};

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export const problemCards = [
  {
    title: "ATS Rejections",
    description:
      "Your resume gets filtered out before a human ever sees it. Most engineers never know why.",
    icon: "FileX",
  },
  {
    title: "No Feedback",
    description:
      "You apply to hundreds of roles and hear nothing back. No insight into what went wrong.",
    icon: "MessageSquareOff",
  },
  {
    title: "Endless Applications",
    description:
      "Spray-and-pray job hunting burns weeks with no measurable progress toward your goal.",
    icon: "Repeat",
  },
  {
    title: "Interview Anxiety",
    description:
      "You freeze under pressure because you've never practiced with realistic interview scenarios.",
    icon: "HeartPulse",
  },
  {
    title: "Unstructured Learning",
    description:
      "Random tutorials and courses without a clear path aligned to your target role.",
    icon: "Shuffle",
  },
  {
    title: "Hidden Skill Gaps",
    description:
      "Job descriptions list skills you don't realize you're missing until it's too late.",
    icon: "EyeOff",
  },
];

export const featureCards = [
  {
    title: "Resume Analyzer",
    description: "Get actionable feedback to beat ATS systems and land more interviews.",
    icon: "FileSearch",
    highlights: ["ATS score", "Resume feedback", "Missing keywords"],
    gradient: "from-violet-500/20 to-purple-600/10",
  },
  {
    title: "AI Mock Interviews",
    description: "Practice realistic technical and behavioral interviews with instant AI feedback.",
    icon: "Mic",
    highlights: ["Technical interviews", "Behavioral interviews", "AI feedback"],
    gradient: "from-blue-500/20 to-cyan-600/10",
  },
  {
    title: "JD Match Analysis",
    description: "Compare your profile against any job description and see exactly where you stand.",
    icon: "Target",
    highlights: ["Match score", "Missing skills", "Recommendations"],
    gradient: "from-emerald-500/20 to-teal-600/10",
  },
  {
    title: "Career Roadmaps",
    description: "Follow a personalized learning path built around your goals and timeline.",
    icon: "Map",
    highlights: ["Personalized learning path", "Salary goals", "Skill progression"],
    gradient: "from-amber-500/20 to-orange-600/10",
  },
  {
    title: "Interview Reports",
    description: "Deep performance analysis after every session so you know what to fix next.",
    icon: "BarChart3",
    highlights: ["Communication analysis", "Technical assessment", "Improvement recommendations"],
    gradient: "from-rose-500/20 to-pink-600/10",
  },
];

export const howItWorksSteps = [
  {
    step: 1,
    title: "Upload Resume",
    description: "Drop your resume and let our AI parse your experience, skills, and achievements.",
    icon: "Upload",
  },
  {
    step: 2,
    title: "Select Target Role",
    description: "Choose your dream role or paste a job description to calibrate your preparation.",
    icon: "Briefcase",
  },
  {
    step: 3,
    title: "Practice Interviews",
    description: "Run through realistic mock interviews tailored to your target company and role.",
    icon: "Video",
  },
  {
    step: 4,
    title: "Receive AI Feedback",
    description: "Get detailed reports on communication, technical depth, and areas to improve.",
    icon: "Sparkles",
  },
  {
    step: 5,
    title: "Apply With Confidence",
    description: "Submit applications knowing your resume is optimized and you're interview-ready.",
    icon: "Rocket",
  },
];

export const trustStats = [
  { value: 500, suffix: "+", label: "Engineers on waitlist" },
  { value: 95, suffix: "%", label: "ATS match improvement" },
  { value: 3, suffix: "x", label: "Faster interview prep" },
  { value: 24, suffix: "/7", label: "AI coaching available" },
];

export const trustBadges = [
  {
    title: "Built by software engineers",
    description: "Created by devs who've been through the grind and know what actually works.",
    icon: "Code2",
  },
  {
    title: "AI-powered interview preparation",
    description: "State-of-the-art models trained on real interview patterns and hiring data.",
    icon: "Brain",
  },
  {
    title: "Designed for developers",
    description: "Every feature is built specifically for software engineering career growth.",
    icon: "Terminal",
  },
];

export const faqItems = [
  {
    question: "What is HirePilot AI?",
    answer:
      "HirePilot AI is an AI-powered career platform built exclusively for software engineers. It analyzes your resume, simulates real interviews, identifies skill gaps, and creates personalized learning roadmaps — so you know exactly what to improve before your next interview.",
  },
  {
    question: "How does it work?",
    answer:
      "Upload your resume, select a target role or paste a job description, then practice AI-powered mock interviews. After each session, you receive detailed feedback on your technical answers, communication style, and areas for improvement. Our platform also scores your resume against ATS systems and highlights missing keywords.",
  },
  {
    question: "Is my resume private?",
    answer:
      "Absolutely. Your resume and interview data are encrypted and never shared with third parties. We use your data solely to provide personalized feedback and improve your interview preparation. You can delete your data at any time.",
  },
  {
    question: "When is beta launching?",
    answer:
      "We're launching the founding beta in Q3 2026. Waitlist members get priority access and will be the first to try every feature. Join now to secure your spot and help shape the product.",
  },
  {
    question: "Who should join?",
    answer:
      "HirePilot AI is designed for backend, frontend, and full-stack developers at all experience levels — from final-year students and freshers to senior engineers preparing for their next move. If you're tired of guessing why you're not getting interviews, this is for you.",
  },
  {
    question: "What will pricing be after beta?",
    answer:
      "Founding beta users get free early access. After the beta, we'll offer affordable plans starting around Rs.299/month — significantly less than hiring a career coach or attending bootcamp-style interview prep. Beta users will receive exclusive lifetime discounts.",
  },
];

export const roleOptions = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Software Engineer",
  "DevOps Engineer",
  "Mobile Developer",
  "Data Engineer",
  "Student / Fresher",
  "Career Switcher",
  "Other",
];

export const experienceOptions = [
  "0-1 years",
  "1-3 years",
  "3-5 years",
  "5-8 years",
  "8+ years",
];
