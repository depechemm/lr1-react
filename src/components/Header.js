import React from 'react';
import './Header.css';
import logo from './img/logo.svg';

const Header = () => {
    return (
        <header>
            <img src={logo} alt='Logo'></img>
            <input type="text" placeholder="ПОИСК" className="search-input" />
            <nav>
                <ul>
                    <li>ИЗБРАННОЕ</li>
                    <li>КОРЗИНА</li>
                    <li>ПРОФИЛЬ</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

