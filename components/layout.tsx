import Head from "next/head";
import Footer from "./footer";
import NavBar from "./navbar";

function Layout({ children }: { children: any }) {
  return (
    <div>
      <Head>
        <title>Slow travel family</title>
        <meta name="description" content="Slow travel family" />
        <link rel="icon" href="/favicon.ico" />
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
