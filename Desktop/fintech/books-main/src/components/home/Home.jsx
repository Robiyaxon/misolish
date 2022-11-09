import React, { useEffect } from "react";
import style from "./Home.module.css";
import img from "../../accets/header.webp";
import AOS from "aos";
import "aos/dist/aos.css";
export const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={style.Home} id="aksiya">
      <div className={style.Home_title}>
        <h1 data-aos="fade-up" data-aos-duration="1000">Киниги от А до Я</h1>
        <p data-aos="fade-up" data-aos-duration="1000">
          В нашем магазине можно найти книгу на любой вкус. Большой ассортимент.
          Приятные цены. Интересные сюжеты.
        </p>
        <button data-aos="fade-up" data-aos-duration="1000">Перейти в каталог</button>
      </div>
      <img src={img} alt="" data-aos="fade-up" data-aos-duration="1000" />
    </div>
  );
};
