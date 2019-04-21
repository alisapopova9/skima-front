import React, { Component } from 'react';
import { InputFormRow } from '../InputFormRow.js'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';

export class SignupModal extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.dataValidation = this.dataValidation.bind(this);
        this.loginOnChange = this.loginOnChange.bind(this);
        this.passwordOnChange = this.passwordOnChange.bind(this);
        this.emailOnChange = this.emailOnChange.bind(this);
        this.phoneOnChange = this.phoneOnChange.bind(this);
        this.state = {
            isOpen: false,
            login: '',
            password: '',
            email: '',
            phone: ''
        };
    };

    toggle() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }))
    };

    loginOnChange(e) {
        this.setState({ login: e.target.value });
    };
    passwordOnChange(e) {
        this.setState({ password: e.target.value });
    };
    emailOnChange(e) {
        this.setState({ email: e.target.value });
    };
    phoneOnChange(e) {
        this.setState({ phone: e.target.value });
    }

    dataValidation(event) {

    }

    renderRegistrationForm() {
        return (
            <form id="registrationForm" method="post" onSubmit={this.dataValidation}>
                <div className="input-form">
                    <InputFormRow onChange={this.loginOnChange} label="Логин" type="text"/>
                    <InputFormRow onChange={this.passwordOnChange} label="Пароль" type="password"/>
                    <InputFormRow onChange={this.emailOnChange} label="Email" type="email"/>
                    <InputFormRow onChange={this.phoneOnChange} label="Номер телефона" type="tel"/>
                </div>
                <div className="button-box">
                    <button type="submit">Зарегистрироваться</button>
                    <button type="button" onClick={this.props.toggle}>Отмена</button>
                </div>
            </form>
        )
    };

    render() {
        if (this.props.isOpen) {
            return (
                <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
                    <ModalHeader toggle={this.props.toggle}>Регистрация в системе</ModalHeader>
                    <ModalBody>
                        { this.renderRegistrationForm() }
                    </ModalBody>
                </Modal>
            )
        }
        else {
            return null;
        }
    }
}