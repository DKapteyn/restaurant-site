import React from "react";
import s from "../../styles/OrderPage/ResHeroPic.module.scss";
import Button from "../shared/Button";
import logo from "../../public//images/logo.svg";
import Image from "next/image";

export default function ResHeroPic() {
  return (
    <div className={s.mainContainer}>
      <div className={s.textAndButton}>
        <Image src={logo} />
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
