import React from "react";
import SecondaryPic from "./SecondaryPic";
import s from "../../styles/HomePageStyles/LocallySourced.module.scss";
export default function LocallySourced() {
  return (
    <div className={s.mainContainer}>
      <div className={s.imgContainer}>
        <img
          className={` ${s.mainImageDesk} ${s.image}`}
          src="./images/homepage/locally-sourced-desktop@2x.jpg"
          alt="plate of food"
        />
        <img
          className={` ${s.mainImageTab} ${s.image}`}
          src="./images/homepage/locally-sourced-tablet@2x.jpg"
          alt="plate of food"
        />
        <img
          className={` ${s.mainImageMob} ${s.image}`}
          src="./images/homepage/locally-sourced-mobile@2x.jpg"
          alt="plate of food"
        />
        <img
          className={s.lines}
          src="./images/patterns/pattern-lines.svg"
          alt="lines"
        />
      </div>

      <div className={s.subContainer}>
        <img
          className={`${s.image} ${s.line}`}
          src="./images/patterns/pattern-divide.svg"
          alt="divider"
        />

        <div className={s.textContainer}>
          <h2 className={s.titleText}>The most locally sourced food</h2>
          <h3 className={s.paraText}>
            All our ingredients come directly from our farm or local fishery. So
            you can be sure that you’re eating the freshest, most sustainable
            food.
          </h3>
        </div>
      </div>

      <img
        className={s.design}
        src="./images/patterns/pattern-curve-top-left.svg"
        alt="design"
      />
    </div>
  );
}
