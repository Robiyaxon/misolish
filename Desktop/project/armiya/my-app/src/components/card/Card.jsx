import React from 'react'
import style from "./Card.module.css"
import img1 from "../../img/army.png"
import img2 from "../../img/family.png"
import img3 from "../../img/mukofot.png"
import img4 from "../../img/intizom.png"
const Card = () => {
    return (
        <div className={style.Block}>

            <div class={style.container}>
                <div class={style.content}>
                    <img src={img1} alt="" />
                    <h2>Yagona ma`lumotlar ba`zasi</h2>
                </div>
            </div>
            <div class={style.container}>
                <div class={style.content}>
                    <img src={img2} alt="" />
                    <h2>Ish Algaritmi</h2>
                </div>
            </div>
            <div class={style.container}>
                <div class={style.content}>
                    <img src={img3} alt="" />
                    <h2>Kunlik hisobot</h2>
                </div>
            </div>
            <div class={style.container}>
                <div class={style.content}>
                    <img src={img4} alt="" />
                    <h2>Ijrochilik intizom</h2>
                </div>
            </div>
        
        </div>

    )
}

export default Card