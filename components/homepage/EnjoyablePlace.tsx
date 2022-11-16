import Image from "next/image";
import React from "react";

import s from "../../styles/HomePageStyles/EnjoyablePlace.module.scss";

export default function EnjoyablePlace() {
  return (
    <div className={s.mainContainer}>
      <div>
        <div className={` ${s.mainImageDesk} ${s.image}`}>
          <Image
            src="/images/homepage/enjoyable-place-desktop@2x.jpg"
            alt="sheep"
            layout="fill"
          />
        </div>
        <div className={`${s.image} ${s.mainImageTab} `}>
          <Image
            src="/images/homepage/enjoyable-place-tablet@2x.jpg"
            alt="sheep"
            layout="fill"
          />
        </div>
        <div className={` ${s.mainImageMob} ${s.image}`}>
          <Image
            src="/images/homepage/enjoyable-place-mobile@2x.jpg"
            alt="sheep"
            layout="fill"
          />
        </div>
      </div>

      <div className={s.subContainer}>
        <img
          className={`${s.image} ${s.line}`}
          src="./images/patterns/pattern-divide.svg"
          alt="divider"
        />

        <div className={s.textContainer}>
          <h2 className={s.titleText}>Enjoyable place for all the family</h2>
          <h3 className={s.paraText}>
            Our relaxed surroundings make dining with us a great experience for
            everyone. We can even arrange a tour of the farm before your meal.
          </h3>
        </div>

        <img
          className={s.design}
          src="./images/patterns/pattern-curve-top-right.svg"
          alt="design"
        />
      </div>
    </div>
  );
}
