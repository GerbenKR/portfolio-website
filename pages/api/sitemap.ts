// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/xml');

    // Instructing the Vercel edge to cache the file
    res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600');

    const routes = ['', 'lingo', '3fm-radioplayer', 'lingo', 'radioring', 'whois', 'magister', 'cps', 'q-foute-uur', 'erik-jan-weerbericht'];

    let result = '';

    for await (const route of routes) {
        result += `<url>
        <loc>https://www.gerbenkr.xyz/${route}</loc>
        <lastmod>2022-08-01</lastmod>
      </url>`;
    }

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"> 
        ${result}
    </urlset>`;

    res.end(xml);
}
