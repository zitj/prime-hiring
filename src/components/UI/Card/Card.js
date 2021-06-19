import React, { Fragment } from 'react';
import styles from './style/Card.module.css';

const Card = (props) => {
    return <div className={styles.card}>{props.children}</div>;
};

export default Card;