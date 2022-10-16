import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Layout from "../components/shared/Layout";
import HeroHome from "../components/homepage/HeroHome";

import MenuHighlights from "../components/homepage/Highlights/MenuHighlights";
import Occasions from "../components/homepage/Occasions";
import ReadyMake from "../components/homepage/ReadyMake";
import EnjoyablePlace from "../components/homepage/EnjoyablePlace";
import LocallySourced from "../components/homepage/LocallySourced";

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
        <EnjoyablePlace />
        <LocallySourced />
        <MenuHighlights />
        <Occasions />
        <ReadyMake />
      </Layout>
    </div>
  );
};

export default Home;
