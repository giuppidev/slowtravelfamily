import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { NextPage, NextComponentType, NextPageContext } from "next";
import { ReactNode } from "react";

type Page<P = {}> = NextPage<P> & {
  getLayout?: (
    page: NextComponentType<NextPageContext, any, {}> & Page<{}>
  ) => ReactNode;
};

type Props = AppProps & {
  Component: Page;
};

function MyApp({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout || MyApp.getLayout;

  return <>{getLayout((<Component {...pageProps} />) as any)}</>;
}
MyApp.getLayout = function getLayout(
  page: NextComponentType<NextPageContext, any, {}> & Page<{}>
) {
  return <Layout>{page}</Layout>;
};

export default MyApp;
