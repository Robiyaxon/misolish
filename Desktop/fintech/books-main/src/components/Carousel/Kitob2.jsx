import React from "react";
import Carousel from "react-elastic-carousel";
import style from "./Carousel.module.css";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";
import { Favorite, FavoriteBorder } from "@material-ui/icons";
import { FormControlLabel } from "@material-ui/core";
import img1 from "../../accets/kitob1.svg";
import img2 from "../../accets/kitob2.svg";
import img3 from "../../accets/kitob3.svg";
import img4 from "../../accets/kitob4.svg";
withStyles({})((props) => <Checkbox color="default" {...props} />);
const map=[
    {id:3, img:img4, name:"Смарагдова кн,ига ", pul:"214 грн.", chegirma:"254 грн. ", after:"Керстин Гир"},
    {id:4, img:img3, name:"Смарагдова книга ", pul:"86 грн.", chegirma:"10,0 грн.", after:"Керстин Гир"},
    {id:1, img:img1, name:"Порядок в Хаосе", pul:"300 грн.", chegirma:"379 грн.", after:"Константин Коптелов"},
    {id:2, img:img2, name:"Смарагдова книга ", pul:"225 грн.", chegirma:"250 грн.", after:"Керстин Гир"},
]
const map2=map.map(a=> <div className={style.Card1} key={a.id}>
            <img src={a.img} alt="" />
            <p>
           {a.pul} <sup className={style.chegirma}>{a.chegirma}</sup>
            </p>
            <h2>{a.name}</h2>
            <h3>{a.after}</h3>
            <div>
              <button>В корзину</button>
              <FormControlLabel className={style.Yurak}
                control={
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    name="checkedH"
                  />
                }
              />
            </div>
          </div>)
export const Kitob2 = () => {
  return (
    <div>
      <Carousel>
        <div className={style.Card}>
         {map2}
        </div>
        <div className={style.Card}>
         {map2}
        </div>
        <div className={style.Card}>
         {map2}
        </div>
        <div className={style.Card}>
         {map2}
        </div>
      </Carousel>
    </div>
  );
};
