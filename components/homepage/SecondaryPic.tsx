import React from "react";
import { SecondaryPicT } from "../../types";
import s from "../../styles/HomePageStyles/SecondaryPic.module.scss";

export default function SecondaryPic({
  imageNameDesk,
  imageNameTab,
  imageNameMob,
  altName,
  mainText,
  subText,
}: SecondaryPicT) {
  return (
    <section className={s.mainContainer}>
      <div>
        <img
          className={` ${s.mainImageDesk} ${s.image}`}
          src={imageNameDesk}
          alt={altName}
        />
        <img
          className={` ${s.mainImageTab} ${s.image}`}
          src={imageNameTab}
          alt={altName}
        />
        <img
          className={` ${s.mainImageMob} ${s.image}`}
          src={imageNameMob}
          alt={altName}
        />
      </div>

      <div className={s.subContainer}>
        <img
          className={`${s.image} ${s.line}`}
          src="./images/patterns/pattern-divide.svg"
          alt="divider"
        />

        <div className={s.textContainer}>
          <h2 className={s.mainText}>{mainText}</h2>
          <h3 className={s.subText}>{subText}</h3>
        </div>
      </div>
    </section>
  );
}
