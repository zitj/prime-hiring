import React, { useContext } from 'react';
import styles from '../style/Header.module.css';
import { AddDevIcon } from '../../../components/UI/icons/Icons';
import DevContext from '../../../context/dev-context';

const HeaderAddDevButton = (props) => {
    const devContext = useContext(DevContext);
    const onShowAddDevForm = () => {
        devContext.onGetDev(null);
        props.onShowAddDevForm();
    };

    return (
        <button onClick={onShowAddDevForm} className={styles.button}>
            Add dev <AddDevIcon />
        </button>
    );
};

export default HeaderAddDevButton;
