import React, { Component } from 'react';
import style from './home.module.css';

export class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={style.main}>
                Some content
            </div>
        );
    }
}