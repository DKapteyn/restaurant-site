import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Layout from "../components/shared/Layout";
import HeroHome from "../components/homepage/HeroHome";
import SecondaryPic from "../components/homepage/SecondaryPic";

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
        <SecondaryPic
          imageNameDesk=".\images\homepage\enjoyable-place-desktop@2x.jpg"
          imageNameTab=".\images\homepage\enjoyable-place-tablet@2x.jpg"
          imageNameMob=".\images\homepage\enjoyable-place-mobile@2x.jpg"
          altName="sheep"
          mainText="Enjoyable place for all the family"
          subText="Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange 
          a tour of the farm before your meal."
        />
      </Layout>
    </div>
  );
};

export default Home;
