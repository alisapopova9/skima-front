import React, { Component } from 'react';
import style from './home.module.css';
import buttonStyle from '../../../defaultStyles/buttons.module.css';

export class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={style.main}>
                <div className={style.homeContainer}>
                    <div className={style.homeContent}>
                        <h1 className={style.mainHeader}>Добро пожаловать на сервис онлайн-марафонов SKIMA!</h1>
                        <div className={style.aboutContainer}>
                            <p className={style.about}>
                                 Прокачивай свои скиллы вместе с нами.
                            </p>
                        </div>
                        <div className={style.startContainer}>
                            <button className={[buttonStyle.defaultButton, buttonStyle.startButton].join(' ')}>
                                Записаться на марафон
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}