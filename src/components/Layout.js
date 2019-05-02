import React, { Component } from 'react';
import { NavMenu } from './navbar/NavMenu';
import { Header } from "./header/Header";
import {Container } from 'reactstrap';
import icon from "./icon.png"

export class Layout extends Component {
    // static pageName = Layout.name;

    render() {
        return (
            <div>
                <Header />
                {/*<NavMenu />*/}
                <Container>
                    {this.props.children}
                </Container>
            </div>
        )
    }
}