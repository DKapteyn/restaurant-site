import React, { useState, useReducer } from "react";
import s from "../../styles/OrderPage/ResForm.module.scss";
import Button from "../shared/Button";
export default function ResForm() {
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

  function changeToAM() {
    setAMPM("AM"), setChecked(s.checked1);
  }
  function changeToPM() {
    setAMPM("PM"), setChecked(s.checked2);
  }

  function validate(e: React.FormEvent) {
    e.preventDefault();
    let errorSubmit = {
      name: "",
      email: "",
      date: "",
      time: "",
    };
    //Name validation
    if (formValues.name === "") {
      errorSubmit.name = "This field is Required";
      setNameError(s.inputError);
    }

    //email validation
    let emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    formValues.email === ""
      ? ((errorSubmit.email = "This field is required"),
        setEmailError(s.inputError))
      : emailRegex.test(formValues.email) === false
      ? ((errorSubmit.email = "valid email Required"),
        setEmailError(s.inputError))
      : (errorSubmit.email = "");

    formValues.month === "" || formValues.day === "" || formValues.year === ""
      ? ((errorSubmit.date = "This field is incomplete"),
        setDateError(s.inputError))
      : /[1-31]/.test(formValues.day) ||
        /[1-12]/.test(formValues.month) ||
        formValues.year.length > 4
      ? ((errorSubmit.date = "Valid Date Required"), setDateError(s.inputError))
      : (errorSubmit.date = "");

    if (formValues.hour === "" || formValues.minute === "") {
      (errorSubmit.time = "This field is incomplete"),
        setTimeError(s.inputError);
    }
    setErrorValue({ ...errorSubmit });
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
