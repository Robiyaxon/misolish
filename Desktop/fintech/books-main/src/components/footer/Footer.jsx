import React from "react";
import style from "./Footer.module.css";
import logo from "../../accets/logo2.svg";
export const Footer = () => {
  return (
    <>
      <div className={style.Footer}>
      <div className={style.Img}>
          <img src={logo} alt="" />
      </div>
        
       
        <div className={style.Block}>
          <a href="/">Популярное</a>
          <br />
          <a href="/">Программирование</a>
          <br />
          <a href="/">Книги для детей</a>
          <br />
          <a href="/">Психология</a>
          <br />
          <a href="/">Бизнес</a>
        </div>
        <div className={style.Block}>
          <a href="/">Информация</a>
          <br />
          <a href="/">Доставка</a>
          <br />
          <a href="/">Оплата</a>
          <br />
          <a href="/">O магазине</a>
        </div>
        <div className={style.Block}>
          {" "}
          <a href="/">Помощь</a>
          <br />
          <a href="/">Контакты</a>
          <br />
          <a href="/">Возврат товара</a>
          <br />
          <a href="/">Помощь покупателю</a>
        </div>
        <div className={style.responsive}>
          {" "}
          <a href="/">Акции</a>
          <br />
          <a href="/">Каталлог</a>
          <br />
          <a href="/">Доставка</a>
          <br />
          <a href="/">О магазине</a>
        </div>
        <div className={style.Block}>
          <a href="tel: +38 (071) 339-16-26">+38 (071) 339-16-26</a>
          <br />
          <button>Заказать звонок</button>
        </div>{" "}
        <p className={style.p}>
          Все права защищены © 2003-2021 БИБЛИОТЕЧНАЯ Условия использования |
          Политика конфиденциальности
        </p>
      </div>
    </>
  );
};
