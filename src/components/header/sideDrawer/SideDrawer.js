import React, { Component } from 'react';
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
                      <a href="/" className={style.defaultLink}>Войти</a>
                  </li>
                  <li className={style.listItem}>
                      <a href="/" className={style.defaultLink}>Зарегистрироваться</a>
                  </li>
              </ul>
          </nav>
        );
    }
}