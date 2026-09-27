export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Remote';
  salary: string;
  match: number;
  source: string;
  description: string;
  requirements: string[];
  tags: string[];
};

export type Lead = {
  id: string;
  name: string;
  role: string;
  company: string;
  email: string;
  strategy: 'Active Hiring' | 'Recruiters' | 'Decision Makers';
  source: string;
  snippet: string;
};

export type Profile = {
  name: string;
  yearsExperience: number;
  bio: string;
  stack: string[];
};
