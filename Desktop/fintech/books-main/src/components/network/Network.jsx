import React from "react";
import img1 from "../../accets/f.svg";
import img2 from "../../accets/t.svg";
import img3 from "../../accets/w.svg";
import img4 from "../../accets/i.svg";
import style from "./Network.module.css"
import img5 from "../../accets/y.svg";
export const Network = () => {
  return (
    <div className={style.Network} id="blog">
      <h2>Следите за нами в социальных сетях</h2>
      <div>
        <a href="/">
          <img src={img1} alt="" />
        </a>
        <a href="/">
          <img src={img2} alt="" />
        </a>
        <a href="/">
          <img src={img3} alt="" />
        </a>
        <a href="/">
          <img src={img4} alt="" />
        </a>
        <a href="/">
          <img src={img5} alt="" />
        </a>
      </div>
    </div>
  );
};
