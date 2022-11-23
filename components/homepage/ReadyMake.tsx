import React from "react";
import s from "../../styles/HomePageStyles/ReadyMake.module.scss";
import Button from "../shared/Button";

export default function ReadyMake() {
  return (
    <div className={s.mainContainer}>
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
