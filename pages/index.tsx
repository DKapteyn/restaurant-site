import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Layout from "../components/shared/Layout";
import HeroHome from "../components/homepage/HeroHome";

export const SCREEN_SIZE = { sm: "640px", md: "768px", lg: "1024px" };

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Welcome</title>
        <meta name="restaurant site" content="home page for restaurant" />
      </Head>
      <Layout>
        <HeroHome />
      </Layout>
    </div>
  );
};

export default Home;
