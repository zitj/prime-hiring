import React, { Fragment, useContext } from 'react';
import DevContext from '../../context/dev-context';
import styles from './style/List.module.css';

const List = (props) => {
    const devContext = useContext(DevContext);

    const developers = devContext.developers
        .map((developer) => <li key={developer.id}>{developer.name}</li>)
        .reverse();

    return (
        <Fragment>
            <ul className={styles.list}>{developers}</ul>
        </Fragment>
    );
};

export default List;
