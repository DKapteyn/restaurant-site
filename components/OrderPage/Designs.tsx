import React from "react";
import s from "../../styles/OrderPage/designs.module.scss";
import curveBottomSVG from "../../public/images/patterns/pattern-curve-bottom-right.svg";
import linesSVG from "../../public/images/patterns/pattern-lines.svg";
import Image from "next/image";
export default function Designs() {
  return (
    <div className={s.mainContainer}>
      <Image src={curveBottomSVG} alt="design" />
      <div className={s.lines}>
        <Image src={linesSVG} alt="lines" />
      </div>
    </div>
  );
}
