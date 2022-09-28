import React from "react";
import SecondaryPic from "./SecondaryPic";
import s from "../../styles/HomePageStyles/LocallySourced.module.scss";
export default function LocallySourced() {
  return (
    <div className={s.mainContainer}>
      <SecondaryPic
        imageNameDesk="./images/homepage/locally-sourced-desktop@2x.jpg"
        imageNameTab="./images/homepage/locally-sourced-tablet@2x.jpg"
        imageNameMob="./images/homepage/locally-sourced-mobile@2x.jpg"
        altName="sheep"
        mainText="The most locally sourced food"
        subText="All our ingredients come directly from our farm or local fishery. So you can be sure that you’re 
          eating the freshest, most sustainable food."
      />

      <img
        className={s.lines}
        src="./images/patterns/pattern-lines.svg"
        alt="lines"
      />

      <img
        className={s.design}
        src="./images/patterns/pattern-curve-top-left.svg"
        alt="design"
      />
    </div>
  );
}
