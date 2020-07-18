export interface Presentations {
    presentations: Presentation[];
}

export interface Presentation {
    title: string;
    subtitle: string;
    description: string;
    source: URL;
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
