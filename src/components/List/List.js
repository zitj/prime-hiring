import React, { Fragment, useContext } from 'react';
import DevContext from '../../context/dev-context';
import styles from './style/List.module.css';
import Developer from '../Developer/Developer';
const List = (props) => {
    const devContext = useContext(DevContext);

    const developers = devContext.developers
        .map((developer) => (
            <Developer
                key={developer.id}
                name={developer.name}
                profilePic={developer.profilePic}
                pricePerHour={developer.pricePerHour}
                technology={developer.technology}
                location={developer.location}
                id={developer.id}
                onShowDeleteDeveloperModal={props.onShowDeleteDeveloperModal}
                onShowAddDevForm={props.onShowAddDevForm}
                isHired = {developer.hired}
                hiredFrom = {developer.hiredFrom}
                hiredTill = {developer.hiredTill}
            ></Developer>
        ))
        .reverse();

    return (
        <Fragment>
            <ul className={styles.list}>{developers}</ul>
        </Fragment>
    );
};

export default List;
