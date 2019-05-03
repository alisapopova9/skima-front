import React, { Component } from 'react';
import style from './login.module.css';
import { InputFormRow } from "./InputFormRow";
import buttonStyle from '../../defaultStyles/buttons.module.css';

export class Login extends Component {
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
                                <InputFormRow id="auth-login" label="Логин" type="text"/>
                                <InputFormRow id="auth-password" label="Пароль" type="password"/>
                            </div>
                            <div>
                                <button className={buttonStyle.defaultButton} type="submit">Войти</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    };
}