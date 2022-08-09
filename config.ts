import { GridItem, ProjectItem } from './types';

// TODO: move to a cms/api

export const seo = {
    title: "Gerben's Portfolio",
    keywords: 'Gerben, Gerbenkr, Gerbiebor, developer, javascript, projects, radioring, qmusic, discord',
    description: "Hello! I'm Gerben. A learning Software Developer. This is my personal website where you can find who i am and projects i created.",
    color: '#ff0050',
};

export const technologies: GridItem[] = [
    {
        title: 'HTML',
        image: 'technologies/html.png',
        url: null,
    },
    {
        title: 'CSS/SCSS',
        image: 'technologies/scss.png',
        url: null,
    },
    {
        title: 'Tailwind',
        image: 'technologies/tailwind.png',
        url: null,
    },
    {
        title: 'PHP',
        image: 'technologies/php.png',
        url: null,
    },
    {
        title: 'JavaScript',
        image: 'technologies/javascript.png',
        url: null,
    },
    {
        title: 'TypeScript',
        image: 'technologies/typescript.png',
        url: null,
    },

    {
        title: 'Vue',
        image: 'technologies/vue.png',
        url: null,
    },
    {
        title: 'Nuxt',
        image: 'technologies/nuxt.png',
        url: null,
    },
    {
        title: 'React',
        image: 'technologies/react.png',
        url: null,
    },
    {
        title: 'NextJS',
        image: 'technologies/next.png',
        url: null,
    },
    {
        title: 'Mysql',
        image: 'technologies/mysql.png',
        url: null,
    },
    {
        title: 'MongoDB',
        image: 'technologies/mongodb.png',
        url: null,
    },
    {
        title: 'NodeJS',
        image: 'technologies/nodejs.png',
        url: null,
    },
    {
        title: 'Java',
        image: 'technologies/java.png',
        url: null,
    },
    {
        title: 'Figma',
        image: 'technologies/figma.png',
        url: null,
    },
    {
        title: 'VS Code',
        image: 'technologies/vscode.png',
        url: null,
    },
    {
        title: 'Vercel',
        image: 'technologies/vercel.png',
        url: null,
    },
    {
        title: 'Netlify',
        image: 'technologies/netlify.png',
        url: null,
    },
];

export const socials: GridItem[] = [
    {
        title: 'GerbenKR',
        image: 'socials/github.png',
        url: 'https://github.com/GerbenKR/',
    },
    {
        title: 'Gerben#0500',
        image: 'socials/discord.png',
        url: 'https://discord.com/users/163707345459740673',
    },
    {
        title: '@gerben.kr',
        image: 'socials/instagram.png',
        url: 'https://www.instagram.com/gerben.kr/',
    },
    {
        title: '@gerbenkr',
        image: 'socials/twitter.png',
        url: 'https://twitter.com/gerbenkr',
    },
];

export const projects: ProjectItem[] = [
    {
        title: 'RadioRing Leaker',
        slug: 'radioring-leaker',
        technologies: 'HTML, SCSS, JavaScript (Nuxt), TypeScript',
        // description: 'RadioRing Leaker is een website waarop je kan zien hoeveel stemmen elke radioring nominatie had.',
        description: 'Avrotros organiseert jaarlijks de grootste radio awardshow. Mensen kunnen stemmen op meerdere categorieeën op de website van de Avrotors. Maar door een technische fout van de avrotros kon ik bij het aantal stemmen. Toen heb ik RadioRing Leaker gemaakt.',
        image: 'https://i.gerbenkr.nl/images/m4l8kxml7pje.png',
        url: 'https://radioring-leaker.nl/',
        source: null,
    },
    {
        title: 'Qmusic Foute Uur',
        slug: 'qmusic-foute-uur',
        technologies: 'HTML, Tailwind, Javascript (React)',
        description: 'Qmusic heeft een dagelijkse show genaamd Het Foute Uur. Het concept is dat mensen via de app kunnen stemmen welk nummer er wordt afgespeeld. Deze website geeft een overzicht hoevaak er is gestemd per nummer en in totaal.',
        image: 'https://i.gerbenkr.nl/images/b6wdzjqy8679.png',
        url: 'https://q-foute-uur.gerbenkr.nl',
        source: 'https://github.com/GerbenKR/qmusic-foute-uur',
    },
    {
        title: 'Discord Whois',
        slug: 'discord-whois',
        technologies: 'HTML, SCSS, JavaScript (VueJS), Serverless functions',
        // description: 'Discord Whois is een simpele website om iemands Discord gegevens te bekijken en te downloaden.',
        description: 'Discord Whois is mijn eerste project waar ik Vue voor heb gebruikt. Discord Whois is een website waarop je Discord gegevens van een gebruiker kan bekijken en downloaden.',
        image: 'https://i.gerbenkr.nl/images/kl1u15dq22rp.png',
        url: 'https://whois.gerbenkr.nl/',
        source: null,
    },
    {
        title: 'Omrekenen',
        slug: 'omrekenen',
        technologies: 'HTML, CSS, JavaScript (VueJS)',
        description: 'Omrekenen heb ik gemaakt zodat ik en klasgenoten makkelijk eenheden kunnen omrekenen voor het vak rekenen.',
        image: 'https://i.gerbenkr.nl/images/2s7lw36k247a.png',
        url: 'https://omrekenen.gerbenkr.nl',
        source: null,
    },
    {
        title: 'Kevins Chatbox Discord Bot (3FM)',
        slug: 'kevins-chatbox',
        technologies: 'NodeJS (TypeScript), Discord Bot',
        // description: 'Een Discord bot voor 3fm.nl/chat. De bot update een now-playing en now-broadcasting kanaal.',
        description: 'Voor 3FM.n/chat bouwde ik een Discord bot die een now-playing en now-broadcasting kanaal update en de de bot speelt 24/7 3fm. ',
        image: 'https://i.gerbenkr.nl/images/mfsv2cm3qj8w.png',
        url: 'https://www.kevinschatbox.nl/chat',
        source: null,
    },
    {
        title: 'Startpage',
        slug: 'startpage',
        technologies: 'HTML, CSS, JavaScript (VueJS)',
        description: 'Startpage is een website waar ik verschillende handige modules heb samengevoegd zodat ik een duidelijk overzicht heb.',
        image: 'https://i.gerbenkr.nl/images/l5u5mpn58fp7.png',
        url: null,
        source: null,
    },
];
