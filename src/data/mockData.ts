import type { Job, Lead, Profile } from '../types';

export const profile: Profile = {
  name: 'Adebayo Okafor',
  yearsExperience: 4,
  bio: 'Flutter engineer with a passion for building scalable mobile products, polished UI, and performance-driven experiences.',
  stack: ['Flutter', 'Dart', 'BLoC', 'Riverpod', 'Firebase', 'REST APIs', 'CI/CD'],
};

export const jobs: Job[] = [
  {
    id: 'job-1',
    title: 'Senior Flutter Engineer',
    company: 'NovaStack Labs',
    location: 'Remote - US',
    type: 'Remote',
    salary: '$120k - $150k',
    match: 96,
    source: 'Google Search',
    description:
      'Lead product development for a fintech mobile app with complex state management, Firebase integrations, and A/B testing workflows.',
    requirements: ['Flutter', 'Dart', 'BLoC', 'Firebase', 'App architecture'],
    tags: ['Fintech', 'Mobile architecture', 'Remote'],
  },
  {
    id: 'job-2',
    title: 'Mobile Engineer - Flutter',
    company: 'Northstar Health',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$110k - $135k',
    match: 92,
    source: 'Google Search',
    description:
      'Build patient-centric experiences with offline caching, secure auth flows, and a deep focus on accessibility and performance.',
    requirements: ['Flutter', 'Riverpod', 'CI/CD', 'Firebase', 'UX polish'],
    tags: ['Healthcare', 'Accessibility', 'Flutter'],
  },
  {
    id: 'job-3',
    title: 'Flutter Developer',
    company: 'BluePeak Studio',
    location: 'Remote - EU',
    type: 'Contract',
    salary: '$90k - $120k',
    match: 89,
    source: 'Google Search',
    description:
      'Work with a digital product team to ship cross-platform apps for a SaaS platform, landing pages, and growth experiments.',
    requirements: ['Flutter', 'Dart', 'State management', 'API integration'],
    tags: ['SaaS', 'Growth', 'Cross-platform'],
  },
];

export const leads: Lead[] = [
  {
    id: 'lead-1',
    name: 'Maya Brooks',
    role: 'Engineering Manager',
    company: 'NovaStack Labs',
    email: 'maya@novastacklabs.com',
    strategy: 'Decision Makers',
    source: 'LinkedIn',
    snippet:
      'Actively hiring a Flutter engineer to lead mobile architecture and customer experience.',
  },
  {
    id: 'lead-2',
    name: 'Daniel Kim',
    role: 'Technical Recruiter',
    company: 'Northstar Health',
    email: 'daniel.kim@northstarhealth.io',
    strategy: 'Recruiters',
    source: 'Portfolio',
    snippet:
      'Looking for an experienced Flutter developer for healthcare product teams and internal tooling.',
  },
  {
    id: 'lead-3',
    name: 'Sofia Santos',
    role: 'Head of Product',
    company: 'BluePeak Studio',
    email: 'sofia@bluepeak.studio',
    strategy: 'Active Hiring',
    source: 'Twitter',
    snippet:
      'Hiring contract mobile talent for a cross-platform product refresh with strong UX requirements.',
  },
];
