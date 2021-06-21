import React, { useContext } from 'react';
import styles from './style/Developer.module.css';
import Card from '../UI/Card/Card';
import DevContext from '../../context/dev-context';
import { GitHubIcon, LinkedInIcon, XmarkIcon } from '../UI/icons/Icons';

const Developer = (props) => {
    const devContext = useContext(DevContext);

    const deleteProfile = () => {
        devContext.onDelete(props.id);
    };
    return (
        <Card>
            <div className={styles.developer}>
                <button className={styles.deleteBtn} onClick={deleteProfile}>
                    <XmarkIcon />
                </button>
                <h3>{props.name}</h3>
                <div className={styles.frame}>
                    <img src={props.profilePic} alt="profile-pic" />
                </div>
                <div className={styles.info}>
                    <p>
                        location:<span> {props.location}</span>
                    </p>
                    <p>
                        tech:<span> {props.technology} </span>
                    </p>
                    <p>
                        price:<span> ${props.pricePerHour}/h </span>
                    </p>
                </div>
                <div className={styles.socialMedia}>
                    <LinkedInIcon />
                    <GitHubIcon />
                </div>
                <button className={styles.editBtn}>Edit profile</button>
            </div>
        </Card>
    );
};

export default Developer;
