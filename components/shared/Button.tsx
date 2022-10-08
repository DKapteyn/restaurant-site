import React, { useState } from "react";
import { ButtonT } from "../../types";
import s from "../../styles/Shared/button.module.scss";
import Link from "next/link";
import font from "../../styles/_utils/font.module.scss";

export default function Button({
  title,
  link,
  propWidth,
  hoverColor,
  propBackgroundColor,
}: ButtonT) {
  const [isHover, setIsHover] = useState(false);

  let propBasedStyles = {
    width: propWidth ? propWidth : "245px",
    backgroundColor: isHover
      ? hoverColor
        ? hoverColor
        : "white"
      : propBackgroundColor
      ? propBackgroundColor
      : "black",
  };

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={s.mainContainer}
      style={propBasedStyles}
    >
      {link ? (
        <Link href={link}>
          <h4 className={`${font.headingS} ${s.capitalize}`}>{title}</h4>
        </Link>
      ) : (
        <h4 className={`${font.headingS} ${s.capitalize}`}>{title}</h4>
      )}
    </div>
  );
}
