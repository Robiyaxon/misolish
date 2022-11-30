import React from 'react'
import style from "./About.module.css"
import img1 from "../../img/boy.png"
import img2 from "../../img/todo2.png"
import img3 from "../../img/ship.png"
import { useTranslation } from 'react-i18next'
const About_1 = () => {
  const { t } = useTranslation()

  return (
    <div className={style.Block}>
      <div class={style.container}>
        <div class={style.content}>
          <img src={img1} alt="" />
          <h2>{t("about3")}</h2>
        </div>

      </div>
      <div class={style.container}>
        <div class={style.content}>
          <img src={img2} alt="" />
          <h2>{t("about4")}</h2>
        </div>

      </div>
      <div class={style.container}>
        <div class={style.content}>
          <img src={img3} alt="" />
          <h2>{t("about5")}</h2>
        </div>

      </div>
      <div class={style.container}>
        <div class={style.content}>
          <img src={img1} alt="" />
          <h2>{t("about3")}</h2>
        </div>

      </div>
      <div class={style.container}>
        <div class={style.content}>
          <img src={img3} alt="" />
          <h2>{t("about3")}</h2>
        </div>

      </div>
      <div class={style.container}>
        <div class={style.content}>
          <img src={img2} alt="" />
          <h2>{t("about3")}</h2>
        </div>

      </div>
    </div>
  )
}

export default About_1