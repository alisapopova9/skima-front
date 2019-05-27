import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DrawerToggleButton } from "./sideDrawer/DrawerToggleButton";
import { SideDrawer } from "./sideDrawer/SideDrawer";
import { Backdrop } from "../backdrop/Backdrop";
import style from "./header.module.css";
import classnames from "classnames";

export class Header extends Component {
    constructor(props) {
        super(props);

        this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
        this.backdropClickHandler = this.backdropClickHandler.bind(this);

        this.state = {
            isSideDrawerOpened: false,
            prevScrollPosition: window.pageYOffset,
            isVisible: true,
            headerContent: '',
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandler);
    }

    scrollHandler = () => {
        const { prevScrollPosition } = this.state;

        const currentScrollPosition = window.pageYOffset;
        const isVisible = prevScrollPosition > currentScrollPosition && !(currentScrollPosition === window.height);

        this.setState({
            prevScrollPosition: currentScrollPosition,
            isVisible
        });
    };

    logoutHandler = () => {
        // localStorage.removeItem('token');
        // window.location.reload();
    };

    drawerToggleClickHandler() {
        this.setState(prevState => ({
            isSideDrawerOpened: !prevState.isSideDrawerOpened,
        }));
    };

    backdropClickHandler() {
        this.setState({
            isSideDrawerOpened: false,
        });
    };



    render() {
        let backdrop;

        let headerContent =
            this.props.isAuthorized === true ?
                <ul className={style.defaultList}>
                    <li className={style.navItem}>
                        <Link to="/" className={style.defaultLink} onClick={this.props.logout}>Выйти</Link>
                    </li>
                </ul>
                : <ul className={style.defaultList}>
                    <li className={style.navItem}><Link to="/login" className={style.defaultLink}>Войти</Link></li>
                    <li className={style.navItem}><Link to="/registration" className={style.defaultLink}>Зарегистрироваться</Link></li>
                </ul>;

        if (this.state.isSideDrawerOpened) {
            backdrop = <Backdrop click={this.backdropClickHandler} />;
        }
        return (
          <header className={ classnames(style.toolbar, !this.state.isVisible && style.hidden) }>
              <nav className={style.toolbarNavigation}>
                  <div className={style.toggleButton}>
                      <DrawerToggleButton click={this.drawerToggleClickHandler}/>
                      <SideDrawer click={this.drawerToggleClickHandler} show={this.state.isSideDrawerOpened} />
                      { backdrop }
                  </div>
                  <div className={style.toolbarLogo}>
                      <Link className={style.logoLink} to="/" onClick={this.backdropClickHandler}>SKIMA</Link>
                  </div>
                  <div className={style.spacer}></div>
                  <div className={style.toolbarNavigationItems}>
                      { headerContent }
                  </div>
              </nav>
          </header>
        );
    }
}