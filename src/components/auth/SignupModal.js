import React, { Component } from 'react';
import { InputFormRow } from '../InputFormRow.js'
import { Button, Modal, ModalHeader, ModalBody, Container } from 'reactstrap';
import styles from "./auth.module.css";

export class SignupModal extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.onRegistrationSubmit = this.onRegistrationSubmit.bind(this);
        this.firstnameOnChange = this.firstnameOnChange.bind(this);
        this.lastnameOnChange = this.lastnameOnChange.bind(this);
        this.loginOnChange = this.loginOnChange.bind(this);
        this.passwordOnChange = this.passwordOnChange.bind(this);
        this.emailOnChange = this.emailOnChange.bind(this);
        this.phoneOnChange = this.phoneOnChange.bind(this);
        this.state = {
            isOpen: false,
            validationState: false,
            firstname: '',
            lastname: '',
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

    firstnameOnChange(e) {
        this.setState({ firstname: e.target.value });
    };
    lastnameOnChange(e) {
        this.setState({ lastname: e.target.value });
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
    };

    onRegistrationSubmit(event) {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:
                JSON.stringify({
                    'firstname': this.state.firstname,
                    'lastname': this.state.lastname,
                    'login': this.state.login,
                    'password': this.state.password,
                    'email': this.state.email,
                    'phone': this.state.phone
                })
        };

        fetch('/v1/users/', options)
            .then(function (response) {
                if (response.ok) {
                    // console.log(response);
                    return response.json();
                }
                else {
                    throw new Error(`Запрос завершился неуспешно ${response.status} ${response.statusText}`);
                }
            })
            .then(userData => {
                // console.log(userData);
                this.setState({validationState: true, isOpen: false});
                this.props.toggle();
                return userData.id;
            })
            .catch(error => {
                this.setState({validationState: false});
                alert(error);
            });
        event.preventDefault();
    }

    renderRegistrationForm() {
        // console.log(styles["SignupModal-gapr-15"]);
        return (
            <form id="registration-form" method="post" onSubmit={this.onRegistrationSubmit}>
                <div id="registration-form" className="input-form">
                    <InputFormRow id="reg-firstname" onChange={this.firstnameOnChange} label="Имя" type="text"/>
                    <InputFormRow id="reg-lastname" onChange={this.lastnameOnChange} label="Фамилия" type="text"/>
                    <InputFormRow id="reg-login" onChange={this.loginOnChange} label="Логин" type="text"/>
                    <InputFormRow id="reg-password" onChange={this.passwordOnChange} label="Пароль" type="password"/>
                    <InputFormRow id="reg-email" onChange={this.emailOnChange} label="Email" type="email"/>
                    <InputFormRow id="reg-phone" onChange={this.phoneOnChange} label="Номер телефона" type="tel"/>
                </div>
                <Container className="button-box">
                    <button className={styles.gapr} color="primary" type="submit">Зарегистрироваться</button>
                    <button className={styles.gapr} type="button" onClick={this.props.toggle}>Отмена</button>
                </Container>
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