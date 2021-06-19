import React from 'react';
import Modal from '../../UI/Modal/Modal';

const HireDevForm = (props) => {
    return (
        <Modal onShowHireDevForm={props.onShowHireDevForm}>
            <form action="">
                <ul>
                    <li>Dev1</li>
                    <li>Dev2</li>
                    <li>Dev3</li>
                </ul>
                <button></button>
            </form>
        </Modal>
    );
};

export default HireDevForm;
