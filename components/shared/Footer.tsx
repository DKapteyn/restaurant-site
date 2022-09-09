import s from "../../styles/footer.module.scss";

export default function Footer() {
  return (
    <div className={s.container}>
      <div className={s.main}>
        <div>
          <img className={s.image} src="./images/logo.svg" alt="who know" />
        </div>
        <div className={s.textContainer}>
          <div className={s.text1}>
            <p>Marthwaite, Sedbergh</p>
            <p> Cumbria</p>
            <p> +00 44 123 4567</p>
          </div>
          <div className={s.text2}>
            <p> Open Times</p>
            <p>Mon - Fri: 09:00 AM - 10:00 PM</p>
            <p>Sat - Sun: 09:00 AM - 11:30 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
