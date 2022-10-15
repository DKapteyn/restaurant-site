import React from "react";
import s from "../../styles/OrderPage/designs.module.scss";
export default function Designs() {
  return (
    <div className={s.mainContainer}>
      <img
        src="./images/patterns/pattern-curve-bottom-right.svg"
        alt="design"
      />
      <img
        className={s.lines}
        src="./images/patterns/pattern-lines.svg"
        alt="lines"
      />
    </div>
  );
}
