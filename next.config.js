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
        ];
    },
    images: {
        domains: ['i.gerbenkr.nl', 'assets.gerbenkr.nl'],
    },
};

module.exports = nextConfig;
