import React from 'react';
import styles from '../style/Header.module.css';
import { AddDevIcon } from '../../../components/UI/icons/Icons';

const HeaderAddDevButton = (props) => {
    return (
        <button onClick={props.onShowAddDevForm} className={styles.button}>
            Add dev <AddDevIcon />
        </button>
    );
};

export default HeaderAddDevButton;
