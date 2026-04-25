import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='apple-touch-icon' href='/logo192.png' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
