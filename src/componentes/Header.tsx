//import React from 'react';
import styles from "./Header.module.css"
const Header = () => {
    return (
        <header className={styles.header}>
            <input
                placeholder="Search a Pokemon"
                type="text"
            />
        </header>
    );
};

export default Header;