import React, { useState } from "react";
import Button from "../shared/Button";
import s from "../../styles/HomePageStyles/Occasions.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Occasions() {
  const dataArray = [
    {
      id: "familyGatherings",
      deskImage:
        "/restaurant-site/images/homepage/family-gathering-desktop@2x.jpg",
      tabImage:
        "/restaurant-site/images/homepage/family-gathering-tablet@2x.jpg",
      mobImage:
        "/restaurant-site/images/homepage/family-gathering-mobile@2x.jpg",
      title: "Family Gathering",
      para: " We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
    },
    {
      id: "specialEvents",
      deskImage:
        "/restaurant-site/images/homepage/special-events-desktop@2x.jpg",
      tabImage: "/restaurant-site/images/homepage/special-events-tablet@2x.jpg",
      mobImage: "/restaurant-site/images/homepage/special-events-mobile@2x.jpg",
      title: "Special Events",
      para: " Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
    },
    {
      id: "socialEvents",
      deskImage:
        "/restaurant-site/images/homepage/social-events-desktop@2x.jpg",
      tabImage: "/restaurant-site/images/homepage/social-events-tablet@2x.jpg",
      mobImage: "/restaurant-site/images/homepage/social-events-mobile@2x.jpg",
      title: "Social Events",
      para: "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
    },
  ];

  const [OccasionData, setOccasionData] = useState(0);
  const [currentEvent, setCurrentEvent] = useState(s.currentEvent1);

  function changeToFamilyGathering() {
    setOccasionData(0);
    setCurrentEvent(s.currentEvent1);
  }
  function changeToSpecialEvents() {
    setOccasionData(1);
    setCurrentEvent(s.currentEvent2);
  }
  function changeToSocialEvents() {
    setOccasionData(2);
    setCurrentEvent(s.currentEvent3);
  }

  return (
    <div>
      <section className={s.mainContainer}>
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          key={dataArray[`${OccasionData}`].deskImage}
          className={s.deskImage}
        >
          <Image
            src={dataArray[`${OccasionData}`].deskImage}
            alt="People Eating"
            layout="fill"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          key={dataArray[`${OccasionData}`].tabImage}
          className={s.tabImage}
        >
          <Image
            src={dataArray[`${OccasionData}`].tabImage}
            alt="People Eating"
            layout="fill"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          key={dataArray[`${OccasionData}`].mobImage}
          className={s.mobImage}
        >
          <Image
            src={dataArray[`${OccasionData}`].mobImage}
            alt="People Eating"
            layout="fill"
          />
        </motion.div>

        <div className={s.textContainer}>
          <div className={`${s.eventChangerContainer}  ${currentEvent}`}>
            <h3 onClick={() => changeToFamilyGathering()}>Family Gathering</h3>
            <h3 onClick={() => changeToSpecialEvents()}>Special Events</h3>
            <h3 onClick={() => changeToSocialEvents()}>Social Events</h3>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            key={dataArray[`${OccasionData}`].title}
            className={s.text}
          >
            <h2 className={s.title}>{dataArray[`${OccasionData}`].title}</h2>
            <p className={s.para}>{dataArray[`${OccasionData}`].para}</p>
          </motion.div>
          <div className={s.button}>
            <Button link="/orderPage" title="Book a table" />
          </div>
        </div>
      </section>
    </div>
  );
}
