import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextPage, NextComponentType, NextPageContext } from "next";
import { ReactNode } from "react";
import Layout from "components/layout";

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
