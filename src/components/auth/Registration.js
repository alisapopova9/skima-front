import React, { Component } from 'react';
import style from './login.module.css';
import {InputFormRow} from "./InputFormRow";
import buttonStyle from "../../defaultStyles/buttons.module.css";

export class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            password: '',
            email: '',
        };

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    validateEmail(value) {

    }

    validatePassword(value) {

    }

    onSubmit() {
        this.validateEmail();

    }

    render() {
        return(
            <div className={style.mainContainer}>
                <div className={style.main}>
                    <form id="registration-form" method="post" onSubmit={this.onSubmit} className={style.loginContainer}>
                        <div className={style.formContainer}>
                            <div className={style.inputContainer}>
                                <InputFormRow id="reg-email" label="Email" type="email"/>
                                <InputFormRow id="reg-password" label="Пароль" type="password"/>
                            </div>
                            <div className={style.buttonBox}>
                                <button className={buttonStyle.defaultButton} type="submit">Зарегистрироваться</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    };
}