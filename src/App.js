import React, { Component } from 'react';
import { Layout } from './components/Layout';
import "./defaultStyles/layout.css";

export class App extends Component {
    // static displayName = App.name;

    render () {
        // document.body.style.fontFamily = "\"PT Sans\", sans-serif";
        return (
            <Layout>
            </Layout>
        );
    }
}