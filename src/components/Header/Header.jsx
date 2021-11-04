import React from 'react';
import styles from './Header.module.scss';
import { NavLink, Link } from "react-router-dom";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <Link to="/"><img className={styles.logo} src="img/logo2.png" alt="pets store logo" /></Link>
                    <ul className={styles.navList}>
                        <li className={styles.item}><NavLink exact to="/" activeClassName={styles.active}>Home</NavLink></li>
                        <li className={styles.item}><NavLink exact to="/cart" activeClassName={styles.active}>Cart</NavLink></li>
                        <li className={styles.item}><NavLink exact to="/favourites" activeClassName={styles.active}>Favourites</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};


export default Header;