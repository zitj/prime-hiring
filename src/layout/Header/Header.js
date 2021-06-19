import React, { Fragment } from 'react';
import HeaderAddDevButton from './HeaderButtons/HeaderAddDevButton';
import HeaderHireDevButton from './HeaderButtons/HeaderHireDevButton';
import styles from './style/Header.module.css';

const Header = (props) => {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>PrimeHiring</h1>
                <nav className={styles.nav}>
                    <HeaderAddDevButton
                        onShowAddDevForm={props.onShowAddDevForm}
                    />
                    <HeaderHireDevButton
                        onShowHireDevForm={props.onShowHireDevForm}
                    />
                </nav>
            </header>
        </Fragment>
    );
};

export default Header;
