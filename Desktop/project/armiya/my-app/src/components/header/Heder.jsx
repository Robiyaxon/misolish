import React, { useState } from 'react'
import style from "./Header.module.css"
import logo from "../../img/logo2.jpg"
import i18n from '../../i18next';
import { useTranslation } from 'react-i18next';
const Heder = () => {
    const { t } = useTranslation()
    const defaultLang = localStorage.getItem("lang") || "uz";
    const [lang, setLang] = useState(defaultLang);
    const handleChange = (event) => {
        setLang(event.target.value);
        localStorage.setItem("lang", event.target.value);
        i18n.changeLanguage(event.target.value);
    };
    return (
        <div className={style.Header}>
            <div className={style.blockTitle}>
                <img src={logo} alt="" />
                <h2>Shimoliy g'arbiy harbiy okrugu
                    <br />
                    Yagona malumotlar bazasi
                </h2>
            </div>

            <div className={style.Block}>
                <div className={style.Block_1}>
                    <h2>{t("navbar1")}</h2>

                    <div className={style.Card}>
                        <h3>1242</h3>
                        <p>   my.gov.uz общие вопросы (24/7)</p>
                    </div>
                    <div className={style.Card}>
                        <h3>1148</h3>
                        <p>   предложения и жалобы</p>
                    </div>
                </div>
                <div className={style.select}>
                    <select name="lang" value={lang} onChange={handleChange}>
                        <option value="uz">UZ</option>
                        <option value="ru">RU</option>
                    </select>
                </div>
            </div>
            <section>
                <div>
                    <section className={style.news_message}>
                       <p>O'zbekistonda 2023-yil "Insonga e’tibor va sifatli ta’lim"</p>
                    </section>
                    <section className={style.news_message}>
                       <p>O'zbekistonda 2023-yil "Insonga e’tibor va sifatli ta’lim"</p>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Heder