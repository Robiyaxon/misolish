import React, { useState } from 'react'
import style from "./Header.module.css"
import logo from "../../img/logo1.jpg"
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
            <img src={logo} alt="" />
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
                <div className="select">
                    <select name="lang" value={lang} onChange={handleChange}>
                        <option value="uz">UZ</option>
                        <option value="ru">RU</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Heder