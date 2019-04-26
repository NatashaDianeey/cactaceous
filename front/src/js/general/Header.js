import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import '../../css/general/header.scss';

import logo from '../../svg/logo_cactaceous.svg';
import menuSvg from '../../svg/menu.svg';
import searchSvg from '../../svg/search.svg';

class Header extends Component {
    render() {
        return (
            <header className="app__header header">
                <div className="header__container">
                    <div className="header__brand">
                        <Link to='/'>
                            <img src={logo} alt="Cactaceous"/>
                        </Link>
                    </div>
                    <div className="header__menu">
                        <div className="header__menu-list">
                            <ul>
                                <li><NavLink to='/shop' activeClassName="active">shop</NavLink></li>
                                <li><NavLink to='/about' activeClassName="active">about</NavLink></li>
                                <li><NavLink to='/contact' activeClassName="active">contact</NavLink></li>
                            </ul>
                        </div>
                        <div className="header__menu-icons">
                            <div className="searchSvg">
                                <img src={searchSvg} alt="Seach"/>
                            </div>
                            <div className="menuSvg">
                                <img src={menuSvg} alt="Menu"/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;


