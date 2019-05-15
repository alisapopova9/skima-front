import React, { Component } from 'react';
import { Layout } from './components/Layout';
import "./defaultStyles/layout.css";
import jwt_decode from 'jwt-decode';

export class App extends Component {

    /**
     * Work on token checking is in progress
     * @returns {*}
     */
    componentDidMount() {
        let token = localStorage.getItem('token');
        if (token !== null) {
            let decoded = jwt_decode(token);
            console.log(decoded);
            const options = {
                method: 'GET',
                headers: {
                    "Authorization": "Bearer " + token,
                }
            };
        }
    }

    render () {
        return (
            <Layout>
            </Layout>
        );
    }
}