import React from 'react';
import styles from '../style/Header.module.css';

const HeaderAddDevButton = (props) => {
    return (
        <button onClick={props.onShowAddDevForm} className={styles.button}>
            Add dev 🐱‍🚀
        </button>
    );
};

export default HeaderAddDevButton;
