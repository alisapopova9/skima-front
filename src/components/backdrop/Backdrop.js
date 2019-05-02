import React, { Component } from 'react';
import style from './backdrop.module.css';

export class Backdrop extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className={style.backdrop} onClick={this.props.click}></div>
        );
    }
}