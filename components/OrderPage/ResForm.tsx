import React, { useState, useReducer } from "react";
import s from "../../styles/OrderPage/ResForm.module.scss";
import Button from "../shared/Button";
import { modalT } from "../../types";
import arrowSVG from "../../public//images/icons/icon-arrow.svg";
import minusIcon from "../../public//images/icons/icon-minus.svg";
import plusIcon from "../../public//images/icons/icon-plus.svg";

import Image from "next/image";
export default function ResForm({ setModalOpen }: modalT) {
  const [numPeople, setNumPeople] = useState(4);
  const [dropDown, setDropDown] = useState(false);
  const [AMPM, setAMPM] = useState("AM");
  const [checked, setChecked] = useState(s.checked1);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [dateError, setDateError] = useState("");
  const [timeError, setTimeError] = useState("");

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    year: "",
    month: "",
    day: "",
    hour: "",
    minute: "",
  });

  const [errorValue, setErrorValue] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  }

  function hourFormat() {
    formValues.hour.length === 0 ||
    formValues.hour === "0" ||
    formValues.hour === "00"
      ? (formValues.hour = "")
      : formValues.hour.length === 1
      ? (formValues.hour = "0" + formValues.hour)
      : formValues.hour;
  }

  function minuteFormat() {
    formValues.minute.length === 0
      ? (formValues.minute = "")
      : formValues.minute.length === 1
      ? (formValues.minute = "0" + formValues.minute)
      : formValues.minute;
  }
  function monthFormat() {
    formValues.month.length === 0
      ? (formValues.month = "")
      : formValues.month.length === 1
      ? (formValues.month = "0" + formValues.month)
      : formValues.month;
  }

  function dayFormat() {
    formValues.day.length === 0
      ? (formValues.day = "")
      : formValues.day.length === 1
      ? (formValues.day = "0" + formValues.day)
      : formValues.day;
  }

  function changeToAM() {
    setAMPM("AM"), setChecked(s.checked1);
  }
  function changeToPM() {
    setAMPM("PM"), setChecked(s.checked2);
  }

  function resetNameError() {
    setErrorValue({ ...errorValue, name: "" });
    setNameError("");
  }

  function resetEmailError() {
    setErrorValue({ ...errorValue, email: "" });
    setEmailError("");
  }
  function resetDateError() {
    setErrorValue({ ...errorValue, date: "" });
    setDateError("");
  }

  function resetTimeError() {
    setErrorValue({ ...errorValue, time: "" });
    setTimeError("");
  }

  function validate(e: React.FormEvent) {
    e.preventDefault();
    let errorSubmit = {
      name: "",
      email: "",
      date: "",
      time: "",
    };

    hourFormat();
    minuteFormat();
    monthFormat();
    dayFormat();

    //Name validation
    if (formValues.name === "") {
      errorSubmit.name = "This field is required";
      setNameError(s.inputError);
    }

    //email validation
    let emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    formValues.email === ""
      ? ((errorSubmit.email = "This field is required"),
        setEmailError(s.inputError))
      : emailRegex.test(formValues.email) === false
      ? ((errorSubmit.email = "Valid email required"),
        setEmailError(s.inputError))
      : (errorSubmit.email = "");

    // date validation

    formValues.month === "" || formValues.day === "" || formValues.year === ""
      ? ((errorSubmit.date = "This field is incomplete"),
        setDateError(s.inputError))
      : /\b(0[1-9]|[12][0-9]|3[01])\b/.test(formValues.day) === true &&
        /\b(0[1-9]|1[0-2])\b/.test(formValues.month) === true
      ? (errorSubmit.date = "")
      : ((errorSubmit.date = "Valid date required"),
        setDateError(s.inputError));

    //Time validation

    formValues.hour === "" || formValues.minute === ""
      ? ((errorSubmit.time = "This field is incomplete"),
        setTimeError(s.inputError))
      : /\b(0[1-9]|1[0-2])\b/.test(formValues.hour) === true &&
        /\b(0[1-9]|[0-5][0-9])\b/.test(formValues.minute) === true
      ? (errorSubmit.time = "")
      : ((errorSubmit.time = "Valid time required"),
        setTimeError(s.inputError));

    errorSubmit.name === "" &&
    errorSubmit.email === "" &&
    errorSubmit.date === "" &&
    errorSubmit.time === ""
      ? (function resetFormValue() {
          const blankFormValue = {
            name: "",
            email: "",
            year: "",
            month: "",
            day: "",
            hour: "",
            minute: "",
          };
          setModalOpen(true);
          setFormValues({ ...blankFormValue });
          setNumPeople(4);
        })()
      : setErrorValue({ ...errorSubmit });
  }
  return (
    <div className={s.mainContainer}>
      <form className={s.formContainer} action="post" onSubmit={validate}>
        <div
          onClick={resetNameError}
          className={`${s.TAndEContainer} ${nameError}`}
        >
          <input
            className={`${s.inputError} ${s.inText}  `}
            type="text"
            placeholder="Name"
            onChange={handleChange}
            name="name"
            value={formValues.name}
          />
          <p className={`${s.error} ${s.errorName}`}>{errorValue.name}</p>
        </div>
        <div
          onClick={resetEmailError}
          className={`${s.TAndEContainer} ${emailError}`}
        >
          <input
            className={`${s.inText} ${s.inTextEmail}`}
            type="text"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={formValues.email}
          />
          <p className={`${s.error} ${s.errorEmail}`}>{errorValue.email}</p>
        </div>
        <div className={s.inDateContainer}>
          <div
            onClick={resetDateError}
            className={`${s.inDateAndText} ${dateError}`}
          >
            <div className={s.TAndEContainer}>
              <h4 className={s.DateTitle}>Pick a date</h4>
              <p className={`${s.error} ${s.errorDateTime}`}>
                {errorValue.date}
              </p>
            </div>
            <div className={`${s.inDates} ${dateError}`}>
              <input
                className={s.inDate}
                type="text"
                name="month"
                placeholder="MM"
                onChange={handleChange}
                value={formValues.month}
              />
              <input
                className={s.inDate}
                type="text"
                name="day"
                placeholder="DD"
                onChange={handleChange}
                value={formValues.day}
              />
              <input
                className={s.inDate}
                type="text"
                name="year"
                placeholder="YYYY"
                onChange={handleChange}
                value={formValues.year}
              />
            </div>
          </div>
        </div>
        <div onClick={resetTimeError} className={s.inDateContainer}>
          <div className={`${s.inDateAndText} ${timeError}`}>
            <div className={s.TAndEContainer}>
              <h4 className={s.DateTitle}>Pick a time</h4>
              <p className={`${s.error} ${s.errorDateTime}`}>
                {errorValue.time}
              </p>
            </div>
            <div className={`${s.inDates} ${timeError}`}>
              <input
                className={s.inDate}
                name="hour"
                type="text"
                placeholder="09"
                value={formValues.hour}
                onChange={handleChange}
              />
              <input
                className={s.inDate}
                name="minute"
                value={formValues.minute}
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
                    <div className={s.arrowWrapper}>
                      <Image src={arrowSVG} alt="arrow" layout="fill" />
                    </div>
                  )}
                  {dropDown && (
                    <div className={`${s.arrowWrapper}  ${s.flipped}`}>
                      <Image src={arrowSVG} alt="arrow" layout="fill" />
                    </div>
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
          <div className={s.pointer}>
            <Image
              onClick={() => setNumPeople((prevNumPeople) => prevNumPeople - 1)}
              src={minusIcon}
              alt="minus"
            />
          </div>
          <h3 className={s.numPeopleText}> {`${numPeople} People`}</h3>
          <div className={s.pointer}>
            <Image
              onClick={() => setNumPeople((prevNumPeople) => prevNumPeople + 1)}
              src={plusIcon}
              alt="plus"
            />
          </div>
        </div>
        <button type="submit" className={s.button}>
          <Button title="make reservation" propWidth="100%" />
        </button>
      </form>
    </div>
  );
}
