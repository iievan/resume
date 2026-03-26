export interface Contact {
  type: "email" | "telegram" | "github" | "linkedin";
  label: string;
  value: string;
  href: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location?: string;
  period: string;
  description: string;
}

export interface Project {
  id: string;
  name: string;
  technologies: string;
  year: string;
  description: string;
}

export interface SectionsLabels {
  contacts: string;
  skills: string;
  experience: string;
  education: string;
  projects: string;
}

export interface FooterContent {
  copyright: string;
}

export interface Education {
  institution: string;
  education: string;
}

export interface ResumeData {
  personal: {
    name: string;
    titles: string[];
  };
  contacts: Contact[];
  skills: string[];
  experience: Experience[];
  education: Education;
  projects: Project[];
  sections: SectionsLabels;
  footer: FooterContent;
}
