/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async redirects() {
        return [
            {
                source: '/projects/:path',
                destination: '/',
                permanent: true,
            },
            {
                source: '/lingo',
                destination: 'https://lingo.gerbenkr.nl/',
                permanent: true,
            },
            {
                source: '/omrekenen',
                destination: 'https://lingo.gerbenkr.nl/',
                permanent: true,
            },
            {
                source: '/3fm-radioplayer',
                destination: 'https://kevinschatbox.nl/chat',
                permanent: true,
            },
            {
                source: '/radioring',
                destination: 'https://radioring-leaker.nl',
                permanent: true,
            },
            {
                source: '/whois',
                destination: 'https://whois.gerbenkr.nl',
                permanent: true,
            },
            {
                source: '/magister',
                destination: 'https://addons.mozilla.org/af/firefox/addon/magister-auto-week/',
                permanent: true,
            },
            {
                source: '/cps',
                destination: 'https://projects.gerbenkr.nl/cps-counter',
                permanent: true,
            },
            {
                source: '/q-foute-uur',
                destination: 'https://q-foute-uur.gerbenkr.nl',
                permanent: true,
            },
            {
                source: '/erik-jan-weerbericht',
                destination: 'https://projects.gerbenkr.nl/erik-jan-weerbericht/',
                permanent: true,
            },
        ];
    },
    async rewrites() {
        return [
            {
                source: '/sitemap.xml',
                destination: '/api/sitemap',
            },
        ];
    },
    images: {
        domains: ['i.gerbenkr.nl', 'assets.gerbenkr.nl'],
    },
};

module.exports = nextConfig;
