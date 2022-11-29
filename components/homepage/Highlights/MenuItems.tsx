import Image from "next/image";
import React from "react";
import s from "../../../styles/HomePageStyles/Highlights.module.scss";
import { MenuItemsT } from "../../../types";
import divideSVG from "../../../public//images/patterns/pattern-divide.svg";
export default function MenuItems({
  deskTabImg,
  mobImg,
  imgAlt,
  itemTitle,
  itemPara,
}: MenuItemsT) {
  return (
    <div className={s.menuItemContainer}>
      <div className={s.imgContainer}>
        <div className={s.deskTabImg}>
          <Image src={deskTabImg} alt={imgAlt} layout="fill" />
        </div>
        <div className={s.mobileImg}>
          <Image src={mobImg} alt={imgAlt} layout="fill" />
        </div>
        <div className={s.imageDivide}>
          <Image src={divideSVG} alt="decoration" />
        </div>
      </div>

      <div className={s.menuItemtext}>
        <h4 className={s.subTitle}>{itemTitle}</h4>
        <p className={`${s.para} ${s.subPara}`}>{itemPara}</p>
      </div>
    </div>
  );
}
