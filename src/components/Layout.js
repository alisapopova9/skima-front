import React, { Component } from 'react';
import { Header } from "./header/Header";
import {Container } from 'reactstrap';

export class Layout extends Component {

    render() {
        return (
            <div>
                <Header />
                <Container>
                    {this.props.children}
                </Container>
            </div>
        )
    }
}