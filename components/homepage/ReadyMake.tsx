import React from "react";
import s from "../../styles/HomePageStyles/ReadyMake.module.scss";
import Button from "../shared/Button";

export default function ReadyMake() {
  return (
    <div className={s.mainContainer}>
      <img
        className={s.imageMob}
        src="./images/homepage/ready-bg-mobile@2x.jpg"
        alt="toast"
      />
      <img
        className={s.imageTab}
        src="./images/homepage/ready-bg-tablet@2x.jpg"
        alt="toast"
      />
      <img
        className={s.imageDesk}
        src="./images/homepage/ready-bg-desktop@2x.jpg"
        alt="toast"
      />

      <div className={s.subContainer}>
        <h2 className={s.text}>Ready to make a reservation? </h2>
        <Button
          title="book a table"
          link="/orderPage"
          propBackgroundColor="transparent"
        />
      </div>
    </div>
  );
}
