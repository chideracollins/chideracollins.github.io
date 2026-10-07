export type ThemeMode = 'light' | 'dark';

export interface ProjectItem {
  id: string;
  index: string;
  type: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  highlights?: string[];
}

export interface MetricItem {
  label: string;
  discipline: string;
  value: string;
}

export interface SpecialtyItem {
  title: string;
  detail: string;
}

export interface TechCategory {
  title: string;
  items: string[];
}
