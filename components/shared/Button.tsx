import React from "react";
import { ButtonT } from "../../types";
import s from "../../styles/Shared/button.module.scss";
import Link from "next/link";
import font from "../../styles/_utils/font.module.scss";

export default function Button({ title, link, propWidth }: ButtonT) {
  let capTitle = title.toUpperCase();

  let propBasedStyles = {
    width: propWidth,
  };

  return (
    <div className={s.mainContainer} style={propBasedStyles}>
      <Link href={link}>
        <h4 className={font.headingS}>{capTitle}</h4>
      </Link>
    </div>
  );
}
