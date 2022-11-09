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
import img5 from "../../accets/kitob5.svg";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

withStyles({})((props) => <Checkbox color="default" {...props} />);
const map=[
    {id:1, img:img1, name:"Порядок в Хаосе", pul:"300 грн.", chegirma:"379 грн.", after:"Константин Коптелов"},
    {id:2, img:img2, name:"Смарагдова книга ", pul:"225 грн.", chegirma:"250 грн.", after:"Керстин Гир"},
    {id:4, img:img3, name:"Смарагдова книга ", pul:"86 грн.", chegirma:"10,0 грн.", after:"Керстин Гир"},
    {id:3, img:img4, name:"Смарагдова кн,ига ", pul:"214 грн.", chegirma:"254 грн. ", after:"Керстин Гир"},
    {id:5, img:img5, name:"Смарагдова книга ", pul:"778 грн.", chegirma:"810 грн.", after:"Керстин Гир"}
]

export const Kitob1 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(function (response) {
      setData(response.data)
    })
  },[setData]); 
  const maxLength = 11   
  const maxLength2 = 16   
  const map2=data.map(a=> <div className={style.Card1} key={a.id}>
    <img src={a.image} alt="" />
    <p>
    {Math.trunc(a.price )}  <sup className={style.chegirma}>{Math.trunc(a.price + 6 )}</sup>
    </p>
    <h2>{a.title.substr(0, maxLength)}</h2>
    <h3>{a.description.substr(0, maxLength2)}</h3>
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
  return (
    <div>
      <Carousel>
        <div className={style.Card}>
         {map2}
        </div>
      </Carousel>
    </div>
  );
};
