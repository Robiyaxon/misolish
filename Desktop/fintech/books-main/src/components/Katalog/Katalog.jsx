import React, { useEffect } from 'react'
import style from "./Katalog.module.css"
import AOS from "aos";
import "aos/dist/aos.css";
export const Katalog = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div className={style.Katalog} id="katalog">
<h1>Каталог</h1>
<div className={style.Card_Block}>
    <div className={style.Card} data-aos="fade-up" data-aos-duration="1000">
<h2>Электронные книги</h2>

    </div>
    <div className={style.Card} data-aos="fade-up" data-aos-duration="1000">
<h2>Аудиокниги</h2>

    </div>
    <div className={style.Card} data-aos="fade-up" data-aos-duration="1000">
<h2>Акции</h2>

    </div>
    <div className={style.Card} data-aos="fade-up" data-aos-duration="1000">
<h2>Акции</h2>

    </div>
    <div className={style.Card} data-aos="fade-up" data-aos-duration="1000">
<h2>Игрушки, творчество</h2>

    </div>
    <div className={style.Card} data-aos="fade-up" data-aos-duration="1000">
<h2>Подарки</h2>

    </div>
    <div className={style.Card} data-aos="fade-up" data-aos-duration="1000">
<h2>Настольные игрые</h2>

    </div>
    <div className={style.Card} data-aos="fade-up" data-aos-duration="1000">
<h2>Блокноты</h2>

    </div>
    <div className={style.Card} data-aos="fade-up" data-aos-duration="1000">
<h2>Книги</h2>

    </div>
</div>
    </div>
  )
}
