import React from "react";
import font from "../../styles/_utils/font.module.scss";
import style from "../../styles/HomePageStyles/HeroHome.module.scss";
import Button from "../shared/Button";

export default function HeroHome() {
  return (
    <div className={style.mainContainer}>
      <img
        className={`${style.desktopPic} ${style.pic}`}
        src="./images/homepage/hero-bg-desktop@2x.jpg"
        alt="plate of food"
      />
      <img
        className={`${style.mobileAndTabletPic} ${style.pic}`}
        src="./images/homepage/hero-bg-tablet@2x.jpg"
        alt="plate of food"
      />
      <img
        className={`${style.mobileAndTabletPic} ${style.pic}`}
        src="./images/homepage/hero-bg-mobile@2x.jpg"
        alt="plate of food"
      />
      <div className={style.block}>this is the block</div>

      <div className={style.textContainer}>
        <img className={style.logo} src="./images/logo.svg" alt="logo" />
        <h2 className={`${style.marginTitle1} ${font.headingXL}`}>
          Exquisite dining since 1989
        </h2>
        <h3 className={`${font.bodyFont1} ${style.marginTitle2}`}>
          Experience our seasonal menu in beautiful country surroundings. Eat
          the freshest produce from the comfort of our farmhouse.
        </h3>

        <Button link="/orderPage" title="Book a table" />
      </div>
    </div>
  );
}
