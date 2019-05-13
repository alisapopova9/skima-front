import React, { Component } from 'react';
import inputStyle from '../../defaultStyles/input.module.css';
import style from "./inputFormRow.module.css";
import classnames from "classnames";

export class InputFormRow extends Component {
    constructor(props) {
        super(props);
        this.myRef = null;
    }

    onFocus = (event) => {
        let block = event.target;

        if (block.classList.contains(inputStyle.errorInput)) {
            block.classList.remove(inputStyle.errorInput);
        }

        let errorBlock = document.getElementById('error-' + block.id);
        if (!errorBlock.classList.contains(style.hidden)) {
            errorBlock.classList.add(style.hidden);
        }
    };

    render() {
        const { label, ...rest } = this.props;
        return (
            <div className={inputStyle.inputFormRow} onClick={this.handleClick}>
                <label className={inputStyle.defaultLabel}>{label}</label>
                <div className={style.inputContainer}>
                    <input className={inputStyle.defaultInput} {...rest} ref={r => this.myRef = r} placeholder={this.props.placeholder} onFocus={this.onFocus} />
                    <div className={classnames(style.errorContainer, style.hidden, style.error)} id={'error-' + this.props.id}></div>
                </div>
            </div>
        );
    }

    handleClick = () => {
        this.myRef.focus();
    };
}