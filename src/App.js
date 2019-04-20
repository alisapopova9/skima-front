import React, { Component } from 'react';
import { Layout } from './components/Layout';

export class App extends Component {
    // static displayName = App.name;

    render () {
        return (
            <Layout>
                {/*<Route exact path='/' component={Home} />*/}
                {/*<Route path='/counter' component={NewRequestForm} />*/}
                {/*<Route path='/fetch-data' component={RequestList} />*/}
            </Layout>
        );
    }
}