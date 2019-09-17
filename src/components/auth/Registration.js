import React, { Component } from 'react';
import style from './login.module.css';
import {InputFormRow} from "./InputFormRow";
import {CongratsModal} from "../modal/CongratsModal";
import buttonStyle from "../../defaultStyles/buttons.module.css";
import inputStyle from "../../defaultStyles/input.module.css";
import ifrStyle from "./inputFormRow.module.css";

export class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpened: false,
            validationState: false,
            password: '',
            email: '',
            firstname: '',
            lastname: '',
            phone: '',
        };

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onFirstnameChange = this.onFirstnameChange.bind(this);
        this.onLastnameChange = this.onLastnameChange.bind(this);
        this.onPhoneChange = this.onPhoneChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    onEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    onPasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    onFirstnameChange(e) {
        this.setState({ firstname: e.target.value });
    }

    onLastnameChange(e) {
        this.setState({ lastname: e.target.value });
    }

    onPhoneChange(e) {
        this.setState({ phone: e.target.value });
    }

    renderError(name, value) {
        let errorBlock = document.getElementById(name);
        let inputBlock = document.getElementById(name.substring(6));
        errorBlock.classList.remove(ifrStyle.hidden);
        inputBlock.classList.add(inputStyle.errorInput);

        errorBlock.innerText = value;
    }

    validateEmail(value) {
        console.log(value);
        let emailPattern =
            /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/g;
        if (emailPattern.test(value) === false) {
            this.renderError('error-reg-email', "Неверный формат e-mail");
            return false;
        }
        return true;
    }

    hasNumber(value) {
        let cnt = 0;
        let i = value.length;
        while (i--) {
            if (isNaN(value.charAt(i))) {
                cnt++;
            }
        }
        return cnt !== value.length;
    }

    hasUpperCase(value) {
        return (/[A-Z]/.test(value));
    }
    hasLowerCase(value) {
        return (/[a-z]/.test(value));
    }

    validatePassword(value) {
        let passwordTemplate = /^[a-zA-Z0-9$@!%*?&#^-_. +]+$/g;
        if (value.length < 6) {
            this.renderError('error-reg-password', "Пароль должен содержать как минимум 6 символов");
            return false;
        }
        if (this.hasNumber(value) === false) {
            this.renderError('error-reg-password', "Пароль должен содержать как минимум одну цифру");
            return false;
        }
        if ((this.hasLowerCase(value) && this.hasUpperCase(value)) === false) {
            this.renderError('error-reg-password', "Пароль должен содержать символы обоих регистров");
            return false;
        }
        if (!passwordTemplate.test(value)) {
            this.renderError('error-reg-password', "Пароль может состоять только из символов: a-z, A-Z, 0-9, $@!%*?&#^_.");
            return false;
        }
        return true;
    }

    toggleModal() {
        this.setState(prevState => ({
            isModalOpened: !prevState.isModalOpened
        }));
    }

    renderCongratsModal() {
        return(
          <CongratsModal isOpen={this.state.isModalOpened} toggle={this.toggleModal} />
        );
    }

    onSubmit(event) {
        event.preventDefault();

        let isDataOk = false;

        let isEmailOk =  this.validateEmail(this.state.email);
        let isPasswordOk =  this.validatePassword(this.state.password);

        isDataOk = isEmailOk && isPasswordOk;

        if (isDataOk) {
            this.setState({ validationState: true });
        }
        else {
            this.setState({ validationState: false });
        }

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:
                JSON.stringify({
                    'email': this.state.email,
                    'password': this.state.password,
                    'firstname': this.state.firstname,
                    'lastname': this.state.lastname,
                    'privilege': 'default',
                })
        };

        if (isDataOk) {
            fetch('/api/users/signup', options)
                .then(function (response) {
                    if (response.ok) {
                        return response.json();
                    }
                    else {
                        throw new Error(`Запрос завершился неуспешно ${response.status} ${response.statusText}`);
                    }
                })
                .then(userData => {
                    this.toggleModal();
                })
                .catch(error => {
                    this.setState({validationState: false});
                    console.log(error);
                });
        }
    }

    render() {
        return(
            <div className={style.mainContainer}>
                <div className={style.main}>
                    <form id="registration-form" method="post" onSubmit={this.onSubmit} className={style.loginContainer}>
                        <div className={style.formContainer}>
                            <div className={style.inputContainer}>
                                <InputFormRow id="reg-email" label="E-mail *" onChange={this.onEmailChange} type="text" placeholder="example@example.com"/>
                                <InputFormRow id="reg-password" label="Пароль *" onChange={this.onPasswordChange} type="password"/>
                                <InputFormRow id="reg-firstname" label="Имя" onChange={this.onFirstnameChange} type="text"/>
                                <InputFormRow id="reg-lastname" label="Фамилия" onChange={this.onLastnameChange} type="text"/>
                                <InputFormRow id="reg-phone" label="Телефон" onChange={this.onPhoneChange} type="tel"/>
                            </div>
                            <div className={style.buttonBox}>
                                <button className={buttonStyle.defaultButton} type="submit">Зарегистрироваться</button>
                                { this.state.isModalOpened && this.renderCongratsModal() }
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    };
}