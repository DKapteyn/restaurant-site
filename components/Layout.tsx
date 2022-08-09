import { LayoutT } from "../types";

export default function layout({ children }: LayoutT) {
  return (
    <>
      <nav>
        <h3>This is the header</h3>
      </nav>
      {children}
      <footer>
        <h3>This is the footer</h3>
      </footer>
    </>
  );
}
