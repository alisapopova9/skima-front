import React, { Component } from 'react';
import style from './login.module.css';
import { InputFormRow } from "./InputFormRow";
import buttonStyle from '../../defaultStyles/buttons.module.css';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.loginOnChange = this.loginOnChange.bind(this);
        this.passwordOnChange = this.passwordOnChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            login: '',
            password: '',
        };
    }

    loginOnChange(e) {
        this.setState({ login: e.target.value });
    }
    passwordOnChange(e) {
        this.setState({ password: e.target.value });
    }

    onSubmit(event) {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:
                JSON.stringify({
                    "login": this.state.login,
                    "password": this.state.password})
        };
        fetch(`https://www.skima.cf/v1/auth/tokens/`, options)
            .then(response => {
                if (response.ok) {
                    return response;
                }
                else {
                    throw new Error(`Запрос завершился неуспешно ${response.status} ${response.statusText}`);
                }
            })
            .then(userData => {
                console.log(userData);
            })
            .catch(error => {
                console.log(error);
            });
        event.preventDefault();
    }

    render() {
        return(
            <div className={style.mainContainer}>
                <div className={style.main}>
                    <form className={style.loginContainer} id="login-form" method="post" onSubmit={this.onSubmit}>
                        <div className={style.formContainer}>
                            <div className={style.inputContainer}>
                                <InputFormRow id="auth-login" onChange={this.loginOnChange} label="Логин" type="text"/>
                                <InputFormRow id="auth-password" onChange={this.passwordOnChange} label="Пароль" type="password"/>
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