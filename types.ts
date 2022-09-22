import { ReactNode } from "react";

export interface LayoutT {
  children: ReactNode;
}

export interface ButtonT {
  propWidth: string;
  title: string;
  link: string;
}

export interface SecondaryPicT {
  imageNameDesk: string;
  imageNameTab: string;
  imageNameMob: string;
  altName: string;
  mainText: string;
  subText: string;
}
