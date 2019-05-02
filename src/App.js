import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/content/home/Home'
import { Login } from "./components/auth/Login";

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