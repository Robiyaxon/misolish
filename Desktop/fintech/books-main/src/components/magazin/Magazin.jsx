import React from 'react'
import style from "./Magazin.module.css"
export const Magazin = () => {
  return (
    <div className={style.Magazin} id="magazin">
<h2 className={style.Title}>О магазине</h2>
<div className={style.Wrapper}>
  <div className={style.Raqam}>
   <h2>35</h2> 
   <p>Филиалов по всей стране</p> 
</div>   
  <div className={style.Raqam}>
   <h2>65</h2> 
   <p>Товаров в каталоге</p> 
</div>   
  <div className={style.Raqam}>
   <h2>75</h2> 
   <p>Покупателей</p> 
</div>   
  <div className={style.Raqam}>
   <h2>95</h2> 
   <p>Часоа доставка по городам</p> 
</div>   
</div>


    </div>
  )
}
