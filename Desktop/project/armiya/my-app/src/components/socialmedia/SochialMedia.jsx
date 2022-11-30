import React from 'react'
import { useTranslation } from 'react-i18next'
import style from "./SochialMedia.module.css"
import { Facebook, Instagram, Telegram, YouTube } from '@mui/icons-material'
const SochialMedia = () => {
    const { t } = useTranslation()

    return (
        <div className={style.SchoilMedia}>
            <h2>{t("media")}</h2>
            <p>На наших официальных страницах в социальных сетях вы можете ознакомиться с новостями и быть в курсе событий в области электронного правительства, а также можете направлять интересующие вас вопросы в сфере получения государственных услуг</p>
            <div className={style.Block2}>
                <div className={style.socialBunia}>
                    <a href=""><Telegram /> Telegram</a>
                </div>
                <div className={style.socialBunia}>
                    <a href=""><YouTube/> Youtube</a>
                </div>
                <div className={style.socialBunia}>
                    <a href=""><Facebook/> Facebook</a>
                </div>
                <div className={style.socialBunia}>
                    <a href=""><Instagram/> Instagram</a>
                </div>
            </div>

        </div>
    )
}

export default SochialMedia