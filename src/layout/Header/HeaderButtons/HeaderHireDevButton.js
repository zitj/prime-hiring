import React from 'react';
import styles from '../style/Header.module.css';
import { HireDevIcon } from '../../../components/UI/icons/Icons';

const HeaderHireDevButton = (props) => {
    return (
        <button onClick={props.onShowHireDevForm} className={styles.button}>
            Hire dev(s) <HireDevIcon />
        </button>
    );
};

export default HeaderHireDevButton;
