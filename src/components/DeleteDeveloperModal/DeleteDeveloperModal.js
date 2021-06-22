import React, { useContext } from 'react';
import Modal from '../UI/Modal/Modal';
import DevContext from '../../context/dev-context';
import styles from './style/DeleteDeveloperModal.module.css';

const DeleteDeveloperModal = (props) => {
    const devContext = useContext(DevContext);
    const currentDeveloper = devContext.developers.filter(
        (developer) => developer.id === devContext.currentDeveloperId
    );

    const deleteDeveloper = () => {
        devContext.onDelete(currentDeveloper[0].id);
        props.onShowDeleteDeveloperModal();
    };

    return (
        <Modal onShowDeleteDeveloperModal={props.onShowDeleteDeveloperModal}>
            <div className={styles.wrap}>
                <h1 className={styles.heading}>
                    Are you sure you want to delete {currentDeveloper[0].name}?
                </h1>
                <div className={styles.dev}>
                    <img
                        src={currentDeveloper[0].profilePic}
                        alt="avatar"
                        className={styles.profilePic}
                    />
                    <div>
                        <p>
                            Name: <span>{currentDeveloper[0].name}</span>
                        </p>
                        <p>
                            Email: <span>{currentDeveloper[0].email}</span>
                        </p>
                        <p>
                            Tech : <span>{currentDeveloper[0].technology}</span>
                        </p>
                        <p>
                            City: <span>{currentDeveloper[0].location}</span>
                        </p>
                        <p>
                            Price:{' '}
                            <span>${currentDeveloper[0].pricePerHour}/H</span>
                        </p>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <button onClick={deleteDeveloper}>Delete</button>
                    <button onClick={props.onShowDeleteDeveloperModal}>
                        Cancel
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default DeleteDeveloperModal;
