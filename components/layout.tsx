import Head from "next/head";
import Footer from "./footer";
import NavBar from "./navbar";

function Layout({ children }: { children: any }) {
  return (
    <div>
      <Head>
        <title>Famiglia Slow Travel</title>
        <meta name="description" content="Famiglia Slow Travel" />
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Lora:ital,wght@0,400;0,500;1,400;1,500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main className="relative">
        <NavBar />
        {children}
        <Footer />
      </main>
    </div>
  );
}

export default Layout;
