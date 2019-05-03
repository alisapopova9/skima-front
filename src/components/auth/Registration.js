import React, { Component } from 'react';
import style from './login.module.css';
import {InputFormRow} from "./InputFormRow";
import buttonStyle from "../../defaultStyles/buttons.module.css";


export class Registration extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={style.mainContainer}>
                <div className={style.main}>
                    <form className={style.loginContainer}>
                        <div className={style.formContainer}>
                            <div className={style.inputContainer}>
                                <InputFormRow id="reg-firstname" label="Имя" type="text"/>
                                <InputFormRow id="reg-lastname" label="Фамилия" type="text"/>
                                <InputFormRow id="reg-login" label="Логин" type="text"/>
                                <InputFormRow id="reg-password" label="Пароль" type="password"/>
                                <InputFormRow id="reg-email" label="Email" type="email"/>
                                <InputFormRow id="reg-phone" label="Номер телефона" type="tel"/>
                            </div>
                            <div>
                                <button className={buttonStyle.defaultButton} type="submit">Зарегистрироваться</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    };
}