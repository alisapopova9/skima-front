import React, { Component } from 'react';
import { InputFormRow } from '../InputFormRow.js'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';

export class LoginModal extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.loginValidation = this.loginValidation.bind(this);
        this.loginOnChange = this.loginOnChange.bind(this);
        this.passwordOnChange = this.passwordOnChange.bind(this);
        this.state = {
          isOpen: false,
          login: '',
          password: '',
        };
    };

    toggle() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }))
    };

    loginOnChange(e) {
        this.setState({ login: e.target.value });
    }
    passwordOnChange(e) {
        this.setState({ password: e.target.value });
    }

    loginValidation(event) {
        alert(`${this.state.login} ${this.state.password}`);
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:
                JSON.stringify({
                    'login': this.state.login,
                    'password': this.state.password
                })
        };
        fetch('/v1/auth/tokens/', options)
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                }
                else {
                    throw new Error(`Запрос завершился неуспешно ${response.status} ${response.statusText}`);
                }
            })
            .then(function (userData) {
                console.log(userData.token);
                return userData.token;
            })
            .catch(function (error) {
                alert(error);
            });
        event.preventDefault();
    }

    renderLoginForm() {
        return (
            <form id="loginForm" method="post" onSubmit={this.loginValidation}>
                <div className="input-form">
                    <InputFormRow onChange={this.loginOnChange} label="Логин" type="text"/>
                    <InputFormRow onChange={this.passwordOnChange} label="Пароль" type="password"/>
                </div>
                <div className="button-box">
                    <button type="submit">Войти</button>
                    <button type="button" onClick={this.props.toggle}>Отмена</button>
                </div>
            </form>
        )
    };

    render() {
        if (this.props.isOpen) {
            return (
                <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
                    <ModalHeader toggle={this.props.toggle}>Вход в систему</ModalHeader>
                    <ModalBody>
                        { this.renderLoginForm() }
                    </ModalBody>
                </Modal>
            )
        }
        else {
            return null;
        }
        }
}