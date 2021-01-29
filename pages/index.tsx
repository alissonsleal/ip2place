import Head from "next/head";
import Header from "../components/Header";
import InfoContainer from "../components/InfoContainer";
import Layout from "../Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>IP2Place</title>
      </Head>
      <Layout>
        <Header />
        <InfoContainer />
      </Layout>
    </div>
  );
}
