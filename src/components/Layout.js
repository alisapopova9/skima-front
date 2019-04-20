import React, { Component } from 'react';
import { NavMenu } from './navbar/NavMenu';

export class Layout extends Component {
    // static pageName = Layout.name;

    render() {
        return (
            <div>
                <NavMenu />
            </div>
        )
    }
}