import React, { useState } from "react";
import s from "../../styles/OrderPage/ResForm.module.scss";
import Button from "../shared/Button";
export default function ResForm() {
  const [numPeople, setNumPeople] = useState(4);

  return (
    <div className={s.mainContainer}>
      <form className={s.formContainer} action="post">
        <input className={s.inText} type="text" placeholder="Name" />
        <input
          className={`${s.inText} ${s.inTextEmail}`}
          type="text"
          placeholder="Email"
        />
        <div className={s.inDateContainer}>
          <div className={s.inDateAndText}>
            <h4 className={s.inDateText}>Pick a date</h4>
            <div className={s.inDates}>
              <input className={s.inDate} type="text" placeholder="MM" />
              <input className={s.inDate} type="text" placeholder="DD" />
              <input className={s.inDate} type="text" placeholder="YYYY" />
            </div>
          </div>
        </div>
        <div className={s.inDateContainer}>
          <div className={s.inDateAndText}>
            <h4 className={s.inDateText}>Pick a time</h4>
            <div className={s.inDates}>
              <input className={s.inDate} type="text" placeholder="09" />
              <input className={s.inDate} type="text" placeholder="00" />

              <div className={`${s.inDate}  `}>
                <div className={s.dropDownTitle}>
                  <span>AM</span>
                  <img src="./images/icons/icon-arrow.svg" alt="arrow" />
                  <div className={s.dropDownList}>
                    <div>
                      <p>AM</p>
                    </div>
                    <div>
                      <p>PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={s.numPeople}>
          <img
            onClick={() => setNumPeople((prevNumPeople) => prevNumPeople - 1)}
            src="./images/icons/icon-minus.svg"
            alt="minus"
          />
          <h3 className={s.numPeopleText}> {`${numPeople} People`}</h3>
          <img
            onClick={() => setNumPeople((prevNumPeople) => prevNumPeople + 1)}
            src="./images/icons/icon-plus.svg"
            alt="plus"
          />
        </div>
      </form>
      <div className={s.button}>
        <Button title="make reservation" link="#" propWidth="100%" />
      </div>
    </div>
  );
}
