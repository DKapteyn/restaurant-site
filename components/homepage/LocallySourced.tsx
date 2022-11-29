import React from "react";
import Image from "next/image";
import s from "../../styles/HomePageStyles/LocallySourced.module.scss";
import lineSVG from "../../public//images/patterns/pattern-lines.svg";
import divideSVG from "../../public//images/patterns/pattern-divide.svg";
import designSVG from "../../public//images/patterns/pattern-curve-top-left.svg";

export default function LocallySourced() {
  return (
    <>
      <div className={s.mainContainer}>
        <div className={s.textAndDivideContainer}>
          <div className={`${s.image} ${s.line}`}>
            <Image src={divideSVG} alt="divider" />
          </div>

          <div className={s.textContainer}>
            <h2 className={s.titleText}>The most locally sourced food</h2>
            <h3 className={s.paraText}>
              All our ingredients come directly from our farm or local fishery.
              So you can be sure that you’re eating the freshest, most
              sustainable food.
            </h3>
          </div>
        </div>

        <div className={s.imgContainer}>
          <div className={` ${s.mainImageDesk} ${s.image}`}>
            <Image
              src="/restaurant-site/images/homepage/locally-sourced-desktop@2x.jpg"
              alt="plate of food"
              height={720}
              width={540}
            />
          </div>
          <div className={` ${s.mainImageTab} ${s.image}`}>
            <Image
              src="/restaurant-site/images/homepage/locally-sourced-tablet@2x.jpg"
              alt="plate of food"
              height={360}
              width={573}
            />
          </div>
          <div className={` ${s.mainImageMob} ${s.image}`}>
            <Image
              src="/restaurant-site/images/homepage/locally-sourced-mobile@2x.jpg"
              alt="plate of food"
              height={400}
              width={327}
            />
          </div>
          <div className={s.lines}>
            <Image src={lineSVG} alt="lines" />
          </div>
        </div>
      </div>

      <div className={s.design}>
        <Image src={designSVG} alt="design" />
      </div>
    </>
  );
}
