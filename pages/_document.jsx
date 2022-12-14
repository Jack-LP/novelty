import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html style={{ scrollBehavior: 'smooth' }}>
      <Head>
        <link
          href='https://fonts.googleapis.com/css?family=Lora:regular,500,600,700,italic,500italic,600italic,700italic&display'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css?family=Playfair+Display:regular,500,600,700,800,900,italic,500italic,600italic,700italic,800italic,900italic&display'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900&display'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
