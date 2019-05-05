import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './sidedrawer.module.css';

export class SideDrawer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let drawerClasses = [style.sideDrawer];

        if (this.props.show) {
            drawerClasses = [style.sideDrawer, style.open];
        }
        return(
          <nav className={drawerClasses.join(' ')}>
              <ul className={style.defaultList}>
                  <li className={style.listItem}>
                      <Link to="/login" onClick={this.props.click} className={style.defaultLink}>Войти</Link>
                  </li>
                  <li className={style.listItem}>
                      <Link to="/registration" onClick={this.props.click} className={style.defaultLink}>Зарегистрироваться</Link>
                  </li>
              </ul>
          </nav>
        );
    }
}