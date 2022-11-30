import React from 'react'
import style from "./Card.module.css"
import img1 from "../../img/army.png"
import img2 from "../../img/family.png"
import img3 from "../../img/mukofot.png"
import img4 from "../../img/rifle.png"
import img5 from "../../img/akademy.png"
import img6 from "../../img/compitition.png"
import img7 from "../../img/todo.png"
import img8 from "../../img/team.png"
const Card = () => {
    return (
        <div className={style.Block}>

            <div class={style.container}>
                <div class={style.content}>
                    <img src={img1} alt="" />
                    <h2>1</h2>
                </div>
            </div>
            <div class={style.container}>
                <div class={style.content}>
                    <img src={img2} alt="" />
                    <h2>2</h2>
                </div>
            </div>
            <div class={style.container}>
                <div class={style.content}>
                    <img src={img3} alt="" />
                    <h2>3</h2>
                </div>
            </div>
            <div class={style.container}>
                <div class={style.content}>
                    <img src={img4} alt="" />
                    <h2>4</h2>
                </div>
            </div>
            <div class={style.container}>
                <div class={style.content}>
                    <img src={img5} alt="" />
                    <h2>5</h2>
                </div>
            </div>
            <div class={style.container}>
                <div class={style.content}>
                    <img src={img6} alt="" />
                    <h2>6</h2>
                </div>
            </div>
            <div class={style.container}>
                <div class={style.content}>
                    <img src={img7} alt="" />
                    <h2>7</h2>
                </div>
            </div>
            <div class={style.container}>
                <div class={style.content}>
                    <img src={img8} alt="" />
                    <h2>8</h2>
                </div>
            </div>
            <div class={style.container}>
                <div class={style.content}>
                    <img src={img6} alt="" />
                    <h2>6</h2>
                </div>
            </div>
            <div class={style.container}>
                <div class={style.content}>
                    <img src={img7} alt="" />
                    <h2>7</h2>
                </div>
            </div>
            <div class={style.container}>
                <div class={style.content}>
                    <img src={img8} alt="" />
                    <h2>8</h2>
                </div>
            </div>
            <div class={style.container}>
                <div class={style.content}>
                    <img src={img8} alt="" />
                    <h2>8</h2>
                </div>
            </div>
        </div>

    )
}

export default Card