import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Container } from 'reactstrap';
import buttonStyle from "../../defaultStyles/buttons.module.css";
import style from './modal.module.css';
import {Link} from "react-router-dom";

export class CongratsModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }))
    };

    renderModalBody() {
        return (
          <Container>
              <div className={style.info}>Благодарим за регистрацию на сервисе SKIMA!
              <br/>
              Хочешь вернуться на главную страницу или записаться на марафон?</div>
              <div className={style.buttonContainer}>
                  <Link className={buttonStyle.defaultButton} to="/">
                      Вернуться на главную
                  </Link>
                  <Link className={buttonStyle.defaultButton} to="/activities/1">
                      Перейти к марафону
                  </Link>
              </div>
          </Container>
        );
    }

    render() {
        if (this.props.isOpen) {
            return (
                <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={style.modalContainer}>
                    <ModalHeader toggle={this.props.toggle}>Поздравляем с успешной регистрацией!</ModalHeader>
                    <ModalBody>
                        { this.renderModalBody() }
                    </ModalBody>
                </Modal>
            )
        }
        else {
            return null;
        }
    }
}