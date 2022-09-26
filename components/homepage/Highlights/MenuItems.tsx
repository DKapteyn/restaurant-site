import React from "react";
import s from "../../../styles/HomePageStyles/Highlights.module.scss";
import { MenuItemsT } from "../../../types";
export default function MenuItems({
  deskTabImg,

  mobImg,
  imgAlt,
  itemTitle,
  itemPara,
}: MenuItemsT) {
  return (
    <>
      <img className={s.deskTabImg} src={deskTabImg} alt={imgAlt} />
      <img className={s.mobileImg} src={mobImg} alt={imgAlt} />
      <h4 className={s.subTitle}>{itemTitle}</h4>
      <p className={`${s.para} ${s.subPara}`}>{itemPara}</p>
    </>
  );
}
