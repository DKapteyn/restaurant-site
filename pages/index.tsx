import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Welcome</title>
        <meta name="restaurant site" content="home page for restaurant" />
      </Head>
      <Layout>
        <h1>This is the main</h1>
      </Layout>
    </div>
  );
};

export default Home;
