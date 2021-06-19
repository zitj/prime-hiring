import React from 'react';
import styles from '../style/Header.module.css';

const HeaderHireDevButton = (props) => {
    return (
        <button onClick={props.onShowHireDevForm} className={styles.button}>
            Hire dev(s) 🐱‍💻
        </button>
    );
};

export default HeaderHireDevButton;
