
export interface Project {
  id: string;
  title: string;
  status: 'Completed' | 'In Progress';
  description: string;
  components: string[];
  impact?: string;
  innovation?: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  category: 'AI/ML' | 'Engineering';
}

export interface Certification {
  title: string;
  issuer: string;
  description: string;
  skills: string[];
  impact: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}
