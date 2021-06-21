import React, { useContext } from 'react';
import Modal from '../UI/Modal/Modal';
import DevContext from '../../context/dev-context';
const DeleteDeveloperModal = (props) => {
    const devContext = useContext(DevContext);
    const currentDeveloper = devContext.developers.filter(
        (developer) => developer.id === devContext.currentDeveloperId
    );
    return (
        <Modal>
            <h1>Are you sure you want to delete {currentDeveloper[0].name}</h1>
            <button>Delete</button>
            <button>Cancel</button>
        </Modal>
    );
};

export default DeleteDeveloperModal;
