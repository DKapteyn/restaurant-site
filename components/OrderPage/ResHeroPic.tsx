import React from "react";
import s from "../../styles/OrderPage/ResHeroPic.module.scss";
import Button from "../shared/Button";

export default function ResHeroPic() {
  return (
    <div className={s.mainContainer}>
      {/* <img
        className={`${s.mobHeroPic} ${s.pic}`}
        src="./images/booking/hero-bg-mobile@2x.jpg"
        alt="plate of food"
      />
      <img
        className={`${s.tabHeroPic} ${s.pic}`}
        src="./images/booking/hero-bg-tablet@2x.jpg"
        alt="plate of food"
      />
      <img
        className={`${s.deskHeroPic} ${s.pic}`}
        src="./images/booking/hero-bg-desktop@2x.jpg"
        alt="plate of food"
  />*/}

      <div className={s.textAndButton}>
        <img className={s.logo} src="./images/logo.svg" alt="logo" />
        <div className={s.text}>
          <h3 className={s.title}>Reservations</h3>
          <p className={s.para}>
            We can’t wait to host you. If you have any special requirements
            please feel free to call on the phone number below. We’ll be happy
            to accommodate you.
          </p>
        </div>
        <div
          onClick={() => {
            window.scrollTo({ top: 425, left: 0, behavior: "smooth" });
          }}
          className={s.button}
        >
          <Button
            link="#"
            propBackgroundColor="transparent"
            title="reserve place"
          />
        </div>
      </div>
    </div>
  );
}
