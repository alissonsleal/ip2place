import Head from "next/head";
import { useEffect } from "react";
import ReactGA from "react-ga";

import Header from "../components/Header";
import InfoContainer from "../components/InfoContainer";
import Map from "../components/MainMap";
import Layout from "../Layout";

export default function Home() {
  useEffect(() => {
    ReactGA.initialize(`${process.env.NEXT_PUBLIC_ANALITYCS}`);
    ReactGA.pageview("/");
  }, []);

  return (
    <div>
      <Head>
        <title>IP2Place - IP Address Tracker</title>
      </Head>
      <Layout>
        <Header />
        <InfoContainer />
        <Map />
      </Layout>
    </div>
  );
}
