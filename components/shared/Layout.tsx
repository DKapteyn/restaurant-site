import { LayoutT } from "../../types";
import Footer from "./Footer";

export default function layout({ children }: LayoutT) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
