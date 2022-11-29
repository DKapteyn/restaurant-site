import Image from "next/image";
import React from "react";
import divideSVG from "../../public//images/patterns/pattern-divide.svg";
import designSVG from "../../public//images/patterns/pattern-curve-top-right.svg";
import s from "../../styles/HomePageStyles/EnjoyablePlace.module.scss";

export default function EnjoyablePlace() {
  return (
    <div className={s.mainContainer}>
      <div>
        <div className={` ${s.mainImageDesk} ${s.image}`}>
          <Image
            src="/restaurant-site/images/homepage/enjoyable-place-desktop@2x.jpg"
            alt="sheep"
            layout="fill"
          />
        </div>
        <div className={`${s.image} ${s.mainImageTab} `}>
          <Image
            src="/restaurant-site/images/homepage/enjoyable-place-tablet@2x.jpg"
            alt="sheep"
            layout="fill"
          />
        </div>
        <div className={` ${s.mainImageMob} ${s.image}`}>
          <Image
            src="/restaurant-site/images/homepage/enjoyable-place-mobile@2x.jpg"
            alt="sheep"
            layout="fill"
          />
        </div>
      </div>

      <div className={s.subContainer}>
        <div className={`${s.image} ${s.line}`}>
          <Image src={divideSVG} alt="divider" />
        </div>

        <div className={s.textContainer}>
          <h2 className={s.titleText}>Enjoyable place for all the family</h2>
          <h3 className={s.paraText}>
            Our relaxed surroundings make dining with us a great experience for
            everyone. We can even arrange a tour of the farm before your meal.
          </h3>
        </div>
        <div className={s.design}>
          <Image src={designSVG} alt="design" />
        </div>
      </div>
    </div>
  );
}
