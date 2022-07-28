import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

import { seo } from '../config';

import '../styles/global.scss';

import Header from '../components/Header';
import DowntimeNotification from '../components/DowntimeNotification';
import Footer from '../components/home/Footer';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
                <meta content="width=device-width, initial-scale=1, viewport-fit=cover" name="viewport" />
                <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />

                <title>{seo.title}</title>
                <meta content={seo.title} name="name" />
                <meta content={seo.title} name="title" />
                <meta content={seo.title} property="og:site_name" />
                <meta content={seo.title} property="og:title" />
                <meta content={seo.title} name="twitter:title" />
                <meta content={seo.title} name="application-name" />
                <meta content={seo.title} name="apple-mobile-web-app-title" />

                <meta content={seo.description} name="description" />
                <meta content={seo.description} name="og:description" />
                <meta content={seo.description} name="twitter:description" />
                <meta name="keywords" content={seo.keywords} />

                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta httpEquiv="cache-control" content="no-cache" />
                <meta name="robots" content="index" />
                <meta content="GerbenKr" name="author" />
                <meta content="https://gerbenkr.nl" property="og:url" />
                <meta content="https://assets.gerbenkr.nl/web/favicon.png" name="twitter:image" />
                <meta content="https://assets.gerbenkr.nl/web/favicon.png" property="og:image" />
                <meta content={seo.color} name="msapplication-TileColor" />
                <meta content={seo.color} name="theme-color" />
                <link rel="apple-touch-icon" sizes="76x76" href="https://assets.gerbenkr.nl/web/apple_touch_icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="https://assets.gerbenkr.nl/web/favicon_32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="https://assets.gerbenkr.nl/web/favicon_16x16.png" />
                <link rel="shortcut icon" href="https://assets.gerbenkr.nl/web/favicon.png" />
            </Head>
            <Script async defer data-website-id={process.env.UMAMI_SITE_ID} src="https://analytics.gerbenkr.nl/umami.js"></Script>

            <DowntimeNotification />
            <Header />
            <main>
                <Component {...pageProps} />
            </main>
            <Footer />
        </>
    );
}

export default MyApp;
