import React, { useState } from "react";
import s from "../../styles/OrderPage/ResForm.module.scss";
import Button from "../shared/Button";
export default function ResForm() {
  const [numPeople, setNumPeople] = useState(4);
  const [dropDown, setDropDown] = useState(false);
  const [AMPM, setAMPM] = useState("AM");
  const [checked, setChecked] = useState(s.checked1);

  const initialValue = {
    name: "",
    email: "",
    year: "",
    month: "",
    day: "",
    hour: "",
    minute: "",
  };
  const [formValues, setFormValues] = useState(initialValue);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  }

  function changeToAM() {
    setAMPM("AM"), setChecked(s.checked1);
  }
  function changeToPM() {
    setAMPM("PM"), setChecked(s.checked2);
  }

  function validate(e: React.FormEvent) {
    e.preventDefault();
    console.log({ ...formValues });
  }

  return (
    <div className={s.mainContainer}>
      <form className={s.formContainer} action="post" onSubmit={validate}>
        <input
          className={s.inText}
          type="text"
          placeholder="Name"
          onChange={handleChange}
          name="name"
        />
        <input
          className={`${s.inText} ${s.inTextEmail}`}
          type="text"
          placeholder="Email"
          onChange={handleChange}
          name="email"
        />
        <div className={s.inDateContainer}>
          <div className={s.inDateAndText}>
            <h4 className={s.DateTitle}>Pick a date</h4>

            <div className={s.inDates}>
              <input
                className={s.inDate}
                type="text"
                name="month"
                placeholder="MM"
                onChange={handleChange}
              />
              <input
                className={s.inDate}
                type="text"
                name="day"
                placeholder="DD"
                onChange={handleChange}
              />
              <input
                className={s.inDate}
                type="text"
                name="year"
                placeholder="YYYY"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className={s.inDateContainer}>
          <div className={s.inDateAndText}>
            <h4 className={s.DateTitle}>Pick a time</h4>
            <div className={s.inDates}>
              <input
                className={s.inDate}
                name="hour"
                type="text"
                placeholder="09"
                onChange={handleChange}
              />
              <input
                className={s.inDate}
                name="minute"
                type="text"
                placeholder="00"
                onChange={handleChange}
              />

              <div
                onClick={() => setDropDown(!dropDown)}
                className={`${s.inDate}  `}
              >
                <div className={s.dropDownTitle}>
                  <span>{AMPM}</span>

                  {!dropDown && (
                    <img src="./images/icons/icon-arrow.svg" alt="arrow" />
                  )}
                  {dropDown && (
                    <img
                      className={s.flipped}
                      src="./images/icons/icon-arrow.svg"
                      alt="arrow"
                    />
                  )}

                  {dropDown && (
                    <div className={`${s.dropDownList} ${checked}`}>
                      <p onClick={changeToAM}>AM</p>

                      <p onClick={changeToPM}>PM</p>
                    </div>
                  )}
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
        <button type="submit" className={s.button}>
          <Button title="make reservation" propWidth="100%" />
        </button>
      </form>
    </div>
  );
}
