import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import inputStyle from '../../defaultStyles/input.module.css';

export class InputFormRow extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = null;
    }

    render() {
        const { label, ...rest } = this.props;
        return (
            <div className={inputStyle.inputFormRow} onClick={this.handleClick}>
                <label className={inputStyle.defaultLabel}>{label}</label>
                <input className={inputStyle.defaultInput} {...rest} ref={r => this.myRef = r} />
            </div>
        );
    }

    handleClick = () => {
        this.myRef.focus();
    };
}