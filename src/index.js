import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { App } from './App.js';
import 'bootstrap/dist/css/bootstrap.css';
import { Home } from "./components/content/home/Home";
import { Login } from "./components/auth/Login";
import { Registration } from "./components/auth/Registration"
import { Marathon } from "./components/content/marathon/Marathon";
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Titillium Web:300,400,700', 'sans-serif']
    }
});

ReactDom.render(
    <BrowserRouter>
        <App />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/registration' component={Registration} />
            <Route path='/activities/1' component={Marathon} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);