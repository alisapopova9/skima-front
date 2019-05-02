import React, { Component } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import { NavLink } from 'reactstrap';
import { Home } from '../content/Home';
import { DrawerToggleButton } from "./sideDrawer/DrawerToggleButton";
import { SideDrawer } from "./sideDrawer/SideDrawer";
import { Backdrop } from "../backdrop/Backdrop";
import style from "./header.module.css";

export class Header extends Component {
    constructor(props) {
        super(props);

        this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
        this.backdropClickHandler = this.backdropClickHandler.bind(this);

        this.state = {
            isSideDrawerOpened: false,
        }
    }

    drawerToggleClickHandler() {
        this.setState(prevState => ({
            isSideDrawerOpened: !prevState.isSideDrawerOpened
        }));
    };

    backdropClickHandler() {
        this.setState({
            isSideDrawerOpened: false
        });
    };

    render() {
        let backdrop;

        if (this.state.isSideDrawerOpened) {
            backdrop = <Backdrop click={this.backdropClickHandler}/>;
        }
        return (
          <header className={style.toolbar}>
              <nav className={style.toolbarNavigation}>
                  <div className={style.toggleButton}>
                      <DrawerToggleButton click={this.drawerToggleClickHandler}/>
                      <SideDrawer show={this.state.isSideDrawerOpened}/>
                      {backdrop}
                  </div>
                  <div className={style.toolbarLogo}>
                      <a className={style.logoLink} href="/">SKIMA</a>
                  </div>
                  <div className={style.spacer}></div>
                  <div className={style.toolbarNavigationItems}>
                      <ul className={style.defaultList}>
                          <li className={style.navItem}><a href="/" className={style.defaultLink}>Войти</a></li>
                          <li className={style.navItem}><a href="/" className={style.defaultLink}>Зарегистрироваться</a></li>
                      </ul>
                  </div>
              </nav>
          </header>
        );
    }
}