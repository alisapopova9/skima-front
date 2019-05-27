import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './home.module.css';
import buttonStyle from '../../../defaultStyles/buttons.module.css';

export class Home extends Component {
    constructor(props) {
        super(props);
    }

    getMarathon() {
        const options = {
            method: "GET",
        };

        fetch("https://www.skima.cf/activities", options)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Запрос завершился неудачно');
            })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            })
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
                                {/*{this.getMarathon()}*/}
                            </p>
                        </div>
                        <div className={style.startContainer}>
                        <Link className={buttonStyle.startButton} to="/activities/">
                            Посмотреть список марафонов
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}