import React from "react";
import s from "../../../styles/HomePageStyles/Highlights.module.scss";
import divideSVG from "../../../public/images/patterns/pattern-divide.svg";
import MenuItems from "./MenuItems";
import Image from "next/image";

export default function MenuHighlights() {
  return (
    <div className={s.mainContainer}>
      <section className={s.subContainer}>
        <div className={s.textContainer}>
          <div className={s.textDivider}>
            <Image src={divideSVG} alt="divider" />
          </div>
          <h3 className={s.mainTitle}> A few highlights from our menu</h3>
          <p className={`${s.para} ${s.mainPara}`}>
            We cater for all dietary requirements, but here’s a glimpse at some
            of our diner’s favourites. Our menu is revamped every season.
          </p>
        </div>
        <div className={s.mainMenuItemsContainer}>
          <MenuItems
            deskTabImg="/restaurant-site/images/homepage/salmon-desktop-tablet@2x.jpg"
            mobImg="/restaurant-site/images/homepage/salmon-mobile@2x.jpg"
            imgAlt="Seared Salmon Fillet"
            itemTitle="Seared Salmon Fillet"
            itemPara={
              <>
                Our locally sourced salmon served <br /> with a refreshing
                buckwheat summer salad.
              </>
            }
          />
          <div className={s.line}></div>
          <MenuItems
            deskTabImg="/restaurant-site/images/homepage/beef-desktop-tablet@2x.jpg"
            mobImg="/restaurant-site/images/homepage/beef-mobile@2x.jpg"
            imgAlt="Rosemary Filet Mignon"
            itemTitle="Rosemary Filet Mignon"
            itemPara={
              <>
                Our prime beef served to your taste <br /> with a delicious
                choice of seasonal <br /> sides.
              </>
            }
          />
          <div className={s.line}></div>
          <MenuItems
            deskTabImg="/restaurant-site/images/homepage/chocolate-desktop-tablet@2x.jpg"
            mobImg="/restaurant-site/images/homepage/chocolate-mobile@2x.jpg"
            imgAlt="Summer Fruit Chocolate Mousse"
            itemTitle="Summer Fruit Chocolate Mousse"
            itemPara={
              <>
                Creamy mousse combined with <br /> summer fruits and dark
                chocolate shavings.
              </>
            }
          />
        </div>
      </section>
    </div>
  );
}
