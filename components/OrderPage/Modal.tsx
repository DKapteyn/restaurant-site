import React from "react";
import s from "../../styles/OrderPage/modal.module.scss";
import { modalT } from "../../types";
export default function Modal({ setModalOpen }: modalT) {
  return (
    <div onClick={() => setModalOpen(false)} className={s.mainContainer}>
      <div className={s.subContainer}>This is a modal</div>
    </div>
  );
}
