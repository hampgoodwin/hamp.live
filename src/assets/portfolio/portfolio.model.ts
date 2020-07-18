
export interface Portfolio {
    projects: Project[];
}

export interface Project {
    title: string;
    subtitle: string;
    description: string;
    hero: URL;
    source: URL;
    website: URL;
    technologies: Technology[];
    faIcon?: string;
    faIconGroup?: string;
}

export interface Technology {
    name: string;
    faIcon?: string;
    faIconGroup?: string;
}

type URL = string;
