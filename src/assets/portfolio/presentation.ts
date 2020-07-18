import * as prType from './presentation.model';
/* tslint:disable: max-line-length */
export const Presentations: prType.Presentations = {
    presentations: [
        {
            title: 'Introduction To Glue',
            subtitle: `Intro to Glue with a Setup/Config and ETL Spark Demo.`,
            description: 'Went through my first impressions on AWS Glue and it\'s need to mature. Went through a thorough demo on firing up a glue instance and performance some basic transformations.',
            source: 'https://docs.google.com/presentation/d/1V3gI2ETAdaBn-sPp9SNayQeSJ2BHluaxOMJOYjRcJAk/edit?usp=sharing',
            faIcon: 'aws',
            faIconGroup: 'fab',
            technologies: [
                { name: 'AWS', faIcon: 'aws', faIconGroup: 'fab' },
                { name: 'Glue' },
                { name: 'Apache Spark' },
                { name: 'Unstructured Data' },
            ],
        },
        {
            title: 'Vue + TypeScript',
            subtitle: 'Introduction to TS conception through Vue',
            description: 'Presented some basic Vue with TS patterns and the strength of TS with IDE and Vue. Discussion based on pros/cons of strongly typed language.',
            source: 'https://gist.github.com/abelgoodwin1988/b1f7cadaf0c90f24e02873201953ead2',
            faIcon: 'microsoft',
            faIconGroup: 'fab',
            technologies: [
                { name: 'Vue', faIcon: 'vuejs', faIconGroup: 'fab' },
                { name: 'TypeScript' },
            ],
        },
    ],
};
