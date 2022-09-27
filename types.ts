import React, { ReactElement, ReactNode } from "react";

export interface LayoutT {
  children: ReactNode;
}

export interface ButtonT {
  propWidth?: string;
  title: string;
  link: string;
  propBackgroundColor?: string;
  hoverColor?: string;
}

export interface SecondaryPicT {
  imageNameDesk: string;
  imageNameTab: string;
  imageNameMob: string;
  altName: string;
  mainText: string;
  subText: string;
}

export interface MenuItemsT {
  deskTabImg: string;
  mobImg: string;
  imgAlt: string;
  itemTitle: string;
  //React Element used to add <br/> tags if necessary.
  itemPara: string | ReactElement;
}
