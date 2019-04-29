import React, { Component } from 'react';
import { NavMenu } from './navbar/NavMenu';
import icon from "./icon.png"

export class Layout extends Component {
    // static pageName = Layout.name;

    render() {
        return (
            <div>
                <NavMenu />
                <div>
                    <img src={icon} alt=""/>
                </div>
            </div>
        )
    }
}