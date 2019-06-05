import React, { Component } from 'react';
import { Header } from "./header/Header";
import PropTypes from 'prop-types';
import {Container } from 'reactstrap';

export class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header isAuthorized={this.props.isLogin} logout={this.props.logout}/>
                <div>
                    { this.props.children }
                </div>
            </div>
        )
    }
}

// Layout.propTypes = {
//   isAuthorized: PropTypes.bool,
// };
