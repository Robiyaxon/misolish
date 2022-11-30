import React from 'react'
import { useTranslation } from 'react-i18next'
import style from "./Home.module.css"
const Home = () => {
    const { t } = useTranslation()

    return (
        <div className={style.Home}>
            <div className={style.Block1}>
                <h2>{t("navbar2")}</h2>
                <button className={style.Button1}>{t("kirish")}</button>
                <button className={style.Button2}>{t("navbar4")}</button>
            </div>
            <div className={style.Block2}>
                <input type="text" placeholder={t("navbar3")} />
            </div>
        </div>
    )
}

export default Home