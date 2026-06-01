import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ur" dir="rtl">
      <Head>
        {/* ── PWA Manifest ── */}
        <link rel="manifest" href="/manifest.json" />

        {/* ── Theme color (browser UI bar color on Android) ── */}
        <meta name="theme-color" content="#c9a84c" />
        <meta name="background-color" content="#0f1117" />

        {/* ── iOS PWA support ── */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="QAG" />

        {/* ── Apple Touch Icons (shown on iOS home screen) ── */}
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-192x192.png" />

        {/* ── Apple Splash Screens (optional but recommended) ── */}
        {/* iPhone 14 Pro Max */}
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3)"
          href="/splash/splash-1290x2796.png"
        />
        {/* iPhone 14 / 13 / 12 */}
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3)"
          href="/splash/splash-1170x2532.png"
        />
        {/* iPhone SE */}
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
          href="/splash/splash-750x1334.png"
        />

        {/* ── Standard favicon ── */}
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-72x72.png" />

        {/* ── SEO Meta ── */}
        <meta name="description" content="Learn Quranic Arabic Grammar — from foundations to advanced, in Urdu and English." />
        <meta name="keywords" content="Quranic Arabic, Arabic Grammar, اعراب, رفع, نصب, جر, جزم, Urdu, Islamic education" />
        <meta name="author" content="Quranic Arabic Grammar" />

        {/* ── Open Graph (for sharing links) ── */}
        <meta property="og:title" content="Quranic Arabic Grammar" />
        <meta property="og:description" content="Learn Quranic Arabic Grammar from foundations to advanced." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/icons/icon-512x512.png" />

        {/* ── Mobile viewport optimization ── */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
