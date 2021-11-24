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
            href="/fonts/Poppins/Poppins-Light.ttf"
            as="font"
          />
      <link 
            rel="preload"
            href="/fonts/Poppins/Poppins-Regular.ttf"
            as="font"
          />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default Header;
