import React, { Component } from 'react';
import style from "./slide.module.css";

export class Slide extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.slideContainer}>
                <h1>{this.props.title}</h1>
                <div className={style.slideContent}>
                    {this.props.content}
                </div>
            </div>
        )
    }
}