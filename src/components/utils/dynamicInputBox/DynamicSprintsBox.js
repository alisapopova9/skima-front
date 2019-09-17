import React, { Component } from 'react';
import style from "./dynamicSprintsBox.module.css";

export class DynamicSprintsBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
        }
    }

    onAddClick = (event) => {
        event.preventDefault();
        this.setState({
            items: [...this.state.items, ''],
        })
    };

    render() {
        return(
            <div className={style.container}>
                <h2>{this.props.title}</h2>
                {
                    this.state.items.map(function (item, index) {
                        return(
                            <div>
                                <div>
                                    <label>Название спринта</label>
                                    <input type="text"/>
                                </div>
                                <div>
                                    <span>Описание спринта</span>
                                    <textarea name="" id="" cols="28" rows="10"></textarea>
                                </div>
                            </div>
                        )
                    })
                }
                <button onClick={(event) => this.onAddClick(event)}>Добавить еще</button>
            </div>
        )
    }
}