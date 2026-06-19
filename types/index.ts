export interface WaitlistFormData {
  name: string;
  email: string;
  role: string;
  experience: string;
}

export interface WaitlistEntry extends WaitlistFormData {
  id: string;
  created_at: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  icon: string;
  highlights: string[];
  gradient: string;
}

export interface ProblemCard {
  title: string;
  description: string;
  icon: string;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface TrustStat {
  value: number;
  suffix: string;
  label: string;
}

export interface TrustBadge {
  title: string;
  description: string;
  icon: string;
}
