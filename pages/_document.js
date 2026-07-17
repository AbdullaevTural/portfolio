import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Турал Абдуллаев — Frontend-разработчик. React, Vue, Next.js, JavaScript. Портфолио и проекты."
        />
        <meta
          name="keywords"
          content="frontend, разработчик, react, vue, next.js, javascript, портфолио, Турал Абдуллаев"
        />
        <meta name="author" content="Турал Абдуллаев" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Турал Абдуллаев — Frontend-разработчик" />
        <meta
          property="og:description"
          content="Портфолио Frontend-разработчика. React, Vue, Next.js, JavaScript. Коммерческий опыт в RealWeb."
        />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:site_name" content="Tural Abdullaev Portfolio" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Турал Абдуллаев — Frontend-разработчик" />
        <meta
          name="twitter:description"
          content="Портфолио Frontend-разработчика. React, Vue, Next.js, JavaScript."
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Theme color */}
        <meta name="theme-color" content="#314833" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
