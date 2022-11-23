import React from "react";
import s from "../../styles/OrderPage/modal.module.scss";
import { modalT } from "../../types";
import Image from "next/image";
import checkmark from "../../public/images/icons/icon-checkmark.svg";
export default function Modal({ setModalOpen }: modalT) {
  return (
    <div onClick={() => setModalOpen(false)} className={s.mainContainer}>
      <div className={s.subContainer}>
        <h2>Reservation Complete</h2>

        <div className={s.checkIconBox}>
          <div className={s.checkIcon}>
            <Image src={checkmark} alt="checkmark" />
          </div>
        </div>
      </div>
    </div>
  );
}
