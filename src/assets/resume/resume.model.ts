import * as moment from 'moment';

export interface Resume {
    summary: string;
    experience: Experience[];
    education: Education[];
    skills: Skill[];
    courses: Course[];
    certificates: Certificate[];
}

export interface Experience {
    company: string;
    position: string;
    startDate: moment.Moment;
    endDate: moment.Moment | string;
    location: Location;
    accomplishments: Accomplishment[];
    technologies?: Array<{name: string, faIcon?: string, faIconGroup?: string}>;
}

interface Location {
    city: string;
    state: string;
    country: string;
}

type Accomplishment = string;

export interface Education {
    university: string;
    degree: string;
    startDate: moment.Moment;
    endDate: moment.Moment;
    location: Location;
    description: string;
}

export interface Skill {
    name: string;
    category: SkillCategory;
    faIcon?: string;
}

type SkillCategory = string;

export interface Course {
    medium: string;
    category: string;
    name: string;
    url: string;
}

export interface Certificate {
    name: string;
    url: string;
    faIcon?: string;
}
