import * as pType from './portfolio.model';
/* tslint:disable: max-line-length */
export const Portfolio: pType.Portfolio = {
    projects: [
        {
            title: 'Go Chat Server',
            subtitle: 'A Simple MultiClient Chat Server',
            description: 'I was unfamiliar with lower-level network listen operations and channels. I chose to work on this since it would be a good opportunity to manage multiple active clients via channels and work with accepting/closing network connections.',
            hero: '',
            faIcon: 'google',
            faIconGroup: 'fab',
            source: 'https://github.com/abelgoodwin1988/chat_room',
            website: '',
            technologies: [
                { name: 'Go' },
            ],
        },
    ],
};
