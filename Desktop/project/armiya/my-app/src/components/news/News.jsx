/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useTranslation } from 'react-i18next'
import style from "./News.module.css"
const News = () => {
    const { t } = useTranslation()
    return (
        <div className={style.News}>
            <h1> {t("news")}</h1>
            <div className={style.normal}>
                <div className={style.module}>
                    <div className={style.thumbnail}>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg"/>
                            <div className={style.date}>
                                <div>27</div>
                                <div>Mar</div>
                            </div>
                    </div>
                    <div className={style.content}>
                        <div className={style.category}>Army</div>
                        <h1 className={style.title}>City Lights in New York</h1>
                        <h2 className={style.sub_title}>The city that never sleeps.</h2>
                        <div className={style.description}>New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.</div>
                        <div className={style.meta}>
                            <span className={style.timestamp}>
                                <i></i> 6 mins ago
                            </span>
                            <span className={style.comments}>
                                <i ></i>
                                <a href="/"> 39 comments</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.normal}>
                <div className={style.module}>
                    <div className={style.thumbnail}>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg"/>
                            <div className={style.date}>
                                <div>29</div>
                                <div>Mar</div>
                            </div>
                    </div>
                    <div className={style.content}>
                        <div className={style.category}>Army</div>
                        <h1 className={style.title}>Ukraina kuchlari</h1>
                        <h2 className={style.sub_title}>The city that never sleeps.</h2>
                        <div className={style.description}>Ukraina qurolli kuchlari bir sutkada 800dan ortiq odam yoʻqotdi - Rossiya MV</div>
                        <div className={style.meta}>
                            <span className={style.timestamp}>
                                <i></i> 6 mins ago
                            </span>
                            <span className={style.comments}>
                                <i ></i>
                                <a href="/"> 39 comments</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.normal}>
                <div className={style.module}>
                    <div className={style.thumbnail}>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg"/>
                            <div className={style.date}>
                                <div>27</div>
                                <div>Mar</div>
                            </div>
                    </div>
                    <div className={style.content}>
                        <div className={style.category}>Akademy</div>
                        <h1 className={style.title}>Ukraina</h1>
                        <h2 className={style.sub_title}>The city that never sleeps.</h2>
                        <div className={style.description}>Ukraina harbiylari chekinish oldidan tankdan maktabga zarba berdi harbiylari chekinish oldidan tankdan maktabga zarba berdi harbiylari chekinish oldidan tankdan maktabga zarba berdi</div>
                        <div className={style.meta}>
                            <span className={style.timestamp}>
                                <i></i> 6 mins ago
                            </span>
                            <span className={style.comments}>
                                <i ></i>
                                <a href="/"> 39 comments</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News