import Head from 'next/head';

function Header() {
  return (
    <Head>
      <title>Dezembro Solidário</title>
      <link
            rel="preload"
            href="/fonts/Ontel-font/Ontel.ttf"
            as="font"
            crossOrigin=""
          />
      <link 
            rel="preload"
            href="/fonts/Source-Code/SourceCodePro-Bold.ttf"
            as="font"
          />
      <link 
            rel="preload"
            href="/fonts/Source-Code/SourceCodePro-ExtraLight.ttf"
            as="font"
          />
      <link 
            rel="preload"
            href="/fonts/Source-Code/SourceCodePro-Regular.ttf"
            as="font"
          />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default Header;
