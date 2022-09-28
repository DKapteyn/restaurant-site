import React from "react";
import SecondaryPic from "./SecondaryPic";
import s from "../../styles/HomePageStyles/EnjoyablePlace.module.scss";

export default function EnjoyablePlace() {
  return (
    <div className={s.mainContainer}>
      <SecondaryPic
        imageNameDesk="./images/homepage/enjoyable-place-desktop@2x.jpg"
        imageNameTab="./images/homepage/enjoyable-place-tablet@2x.jpg"
        imageNameMob="./images/homepage/enjoyable-place-mobile@2x.jpg"
        altName="sheep"
        mainText="Enjoyable place for all the family"
        subText="Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange 
          a tour of the farm before your meal."
      />
      <img
        className={s.design}
        src="./images/patterns/pattern-curve-top-right.svg"
        alt="design"
      />
    </div>
  );
}
