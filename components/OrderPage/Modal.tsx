import React from "react";
import s from "../../styles/OrderPage/modal.module.scss";
import { modalT } from "../../types";
export default function Modal({ setModalOpen }: modalT) {
  return (
    <div onClick={() => setModalOpen(false)} className={s.mainContainer}>
      <div className={s.subContainer}>
        <h2>Reservation Complete</h2>

        <div className={s.checkIconBox}>
          <svg
            className={s.checkIcon}
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="11"
          >
            <path
              fill="none"
              stroke="#FFF"
              stroke-width="1.5"
              d="M1 5.897l2.767 2.767L11.432 1"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
