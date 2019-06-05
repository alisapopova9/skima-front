import React, { Component } from 'react';
import { Layout } from './components/Layout';
import "./defaultStyles/layout.css";
import jwt_decode from 'jwt-decode';
import {Route, Switch} from "react-router";
import {Home} from "./components/content/home/Home";
import {Login} from "./components/auth/Login";
import {Registration} from "./components/auth/Registration";
import {Marathon} from "./components/content/marathon/Marathon";
import {Activities} from "./components/content/activities/Activities";

export class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthorized: false,
        }
    }

    login = (token) => {
        localStorage.setItem('token', token);
        this.setState({
            isAuthorized: true,
        });
    };

    logout =() => {
        localStorage.removeItem('token');
        this.setState({
            isAuthorized: false,
        });
    };

    componentDidMount() {
        let token = localStorage.getItem('token');
        if (token !== null) {
            let decoded = jwt_decode(token);
            if (decoded.exp < Date.now() / 1000) {
                localStorage.clear();
                this.setState({
                    isAuthorized: false,
                });
            }
            else {
                this.setState({
                    isAuthorized: true,
                });
                const options = {
                    method: 'GET',
                    headers: {
                        "Authorization": "Bearer " + token,
                    }
                };
                fetch(`https://www.skima.cf/v1/users/${decoded.userId}`, options)
                    .then(response => {
                        if (response.ok) {
                            this.setState({
                                isAuthorized: true,
                            });
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        }
        else {
            this.setState({
                isAuthorized: false,
            });
        }
    }

    render () {
        return (
            <Layout isLogin={this.state.isAuthorized} logout={this.logout}>
                <Switch>
                    <Route exact path='/'
                           component={() => <Home />} />
                    <Route path='/login'
                           component={() => <Login login={this.login} />} />
                    <Route path='/registration'
                           component={() => <Registration />} />
                    <Route exact path='/activities'
                           component={() => <Activities />} />
                    <Route path='/activities/1'
                           render={() => <Marathon isLogin={this.state.isAuthorized} />} />
                </Switch>
            </Layout>
        );
    }
}