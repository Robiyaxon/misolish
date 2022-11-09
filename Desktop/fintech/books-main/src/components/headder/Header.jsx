import React, {  useState } from "react";
import style from "./header.module.css";
import logo from "../../accets/logo.svg";
import yurak from "../../accets/yurak.svg";
import drow from "../../accets/drow.svg";
import karzinka from "../../accets/karzinka.svg";
import { Home } from "../home/Home";
import { Carousel } from "./../Carousel/Carousel";
import { Drawer } from "antd";


export const Header = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <div className={style.Header}>
        <Drawer placement="right" onClose={onClose} visible={visible}>
          <div className={style.Drow_Menu}>
          <input type="text" placeholder="Поиск" />
            <a onClick={onClose} href="#aksiya">Акции</a>
            <a onClick={onClose} href="#katalog">Каталлог</a>
            <a onClick={onClose} href="#dostavka">Доставка</a>
            <a onClick={onClose}  href="#magazin">О магазине</a>
            <a onClick={onClose}  href="#blog">Блог</a>
          </div>
        </Drawer>
        <img src={logo} alt="" />
        <img
          onClick={showDrawer}
          src={drow}
          alt=""
          className={style.drowimgr}
        />
        <div className={style.href}>
          <a href="#aksiya">Акции</a>
          <a href="#katalog">Каталлог</a>
          <a href="#dostavka">Доставка</a>
          <a href="#magazin">О магазине</a>
          <a href="#blog">Блог</a>
        </div>
        <input type="text" placeholder="Поиск" />
        <div className={style.section}>
          <img src={yurak} alt="" />
          <img src={karzinka} alt="" />
          <select name="lang">
            <option value="2 228 грн." className={style.option}>
              2 228 грн.
            </option>
            <option value="4 228 грн." className={style.option}>
              4 228 грн.
            </option>
            <option value="3 228 грн." className={style.option}>
              3 228 грн.
            </option>
          </select>
        </div>
      </div>
      <Home />
      <Carousel />
    </>
  );
};
