import React from 'react'
import style from "./About2.module.css"
import img from "../../img/building.png"
const About2 = () => {
    return (
        <div className={style.About}>
            <div className={style.Block}>
                <img src={img} alt="" />
                <h2> Министерства</h2>
            </div>
            <div className={style.Block}>
                <img src={img} alt="" />
                <h2> Министерства</h2>
            </div>
            <div className={style.Block}>
                <img src={img} alt="" />
                <h2>  Компании</h2>
            </div>
            <div className={style.Block}>
                <img src={img} alt="" />
                <h2> Министерства</h2>
            </div>
            <div className={style.Block}>
                <img src={img} alt="" />
                <h2>  Компании</h2>
            </div>
            <div className={style.Block}>
                <img src={img} alt="" />
                <h2> Министерства</h2>
            </div>
        </div>
    )
}

export default About2