import React, { Component } from 'react';
import style from './togglebutton.module.css';

export class DrawerToggleButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className={style.toggleButton} onClick={this.props.click}>
                <div className={style.line} />
                <div className={style.line} />
                <div className={style.line} />
            </button>
        );
    }
}