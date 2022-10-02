import React, { useState } from "react";
import Button from "../shared/Button";
import s from "../../styles/HomePageStyles/Occasions.module.scss";

export default function Occasions() {
  const dataArray = [
    {
      id: "familyGatherings",
      deskImage: "./images/homepage/family-gathering-desktop@2x.jpg",
      tabImage: "./images/homepage/family-gathering-tablet@2x.jpg",
      mobImage: "./images/homepage/family-gathering-mobile@2x.jpg",
      title: "Family Gathering",
      para: " We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
    },
    {
      id: "specialEvents",
      deskImage: "./images/homepage/special-events-desktop@2x.jpg",
      tabImage: "./images/homepage/special-events-tablet@2x.jpg",
      mobImage: "./images/homepage/special-events-mobile@2x.jpg",
      title: "Special Events",
      para: " Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
    },
    {
      id: "socialEvents",
      deskImage: "./images/homepage/social-events-desktop@2x.jpg",
      tabImage: "./images/homepage/social-events-tablet@2x.jpg",
      mobImage: "./images/homepage/social-events-mobile@2x.jpg",
      title: "Social Events",
      para: "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
    },
  ];

  const [OccasionData, setOccasionData] = useState(0);

  function changeToFamilyGathering() {
    setOccasionData(0);
  }
  function changeToSpecialEvents() {
    setOccasionData(1);
  }
  function changeToSocialEvents() {
    setOccasionData(2);
  }

  return (
    <div>
      <section className={s.mainContainer}>
        <img
          className={s.deskImage}
          src={dataArray[`${OccasionData}`].deskImage}
          alt="People Eating"
        />
        <img
          className={s.tabImage}
          src={dataArray[`${OccasionData}`].tabImage}
          alt="People Eating"
        />
        <img
          className={s.mobImage}
          src={dataArray[`${OccasionData}`].mobImage}
          alt="People Eating"
        />

        <div className={s.textContainer}>
          <div className={s.eventChangerContainer}>
            <h3 onClick={() => changeToFamilyGathering()}>Family Gathering</h3>
            <h3 onClick={() => changeToSpecialEvents()}> Special Events</h3>
            <h3 onClick={() => changeToSocialEvents()}> Social Events </h3>
          </div>

          <div className={s.text}>
            <h2 className={s.title}>{dataArray[`${OccasionData}`].title}</h2>
            <p className={s.para}>{dataArray[`${OccasionData}`].para}</p>
          </div>

          <div className={s.button}>
            <Button link="/orderPage" title="Book a table" />
          </div>
        </div>
      </section>
    </div>
  );
}
