import { NextComponentType, NextPageContext } from "next";
import Head from "next/head";
import NavBar from "./navbar";

function Layout({ children }: { children: any }) {
  return (
    <div>
      <Head>
        <title>Giuppi site</title>
        <meta name="description" content="Giuppi site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <NavBar />
      </header>
      <main className="">
        {children}
        <div>FOOTER</div>
      </main>
    </div>
  );
}

export default Layout;
