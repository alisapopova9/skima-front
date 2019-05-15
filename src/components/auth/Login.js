import React, { Component } from 'react';
import style from './login.module.css';
import { InputFormRow } from "./InputFormRow";
import buttonStyle from '../../defaultStyles/buttons.module.css';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.emailOnChange = this.emailOnChange.bind(this);
        this.passwordOnChange = this.passwordOnChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            email: '',
            password: '',
        };
    }

    emailOnChange(e) {
        this.setState({ email: e.target.value });
    }
    passwordOnChange(e) {
        this.setState({ password: e.target.value });
    }

    onSubmit(event) {
        event.preventDefault();
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:
                JSON.stringify({
                    'email': this.state.email,
                    'password': this.state.password
                })
        };
        fetch(`https://www.skima.cf/v1/auth/tokens/`, options)
            .then(response => {
                if (response.ok) {
                    console.log(response);
                    return response.json();
                }
                else {
                    throw new Error(`Запрос завершился неуспешно ${response.status} ${response.statusText}`);
                }
            })
            .then(response => {
                localStorage.setItem('token', response.token);
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return(
            <div className={style.mainContainer}>
                <div className={style.main}>
                    <form className={style.loginContainer} id="login-form" method="post" onSubmit={this.onSubmit}>
                        <div className={style.formContainer}>
                            <div className={style.inputContainer}>
                                <InputFormRow id="auth-email" onChange={this.emailOnChange} label="E-mail" type="email"/>
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