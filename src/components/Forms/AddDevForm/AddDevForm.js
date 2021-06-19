import React from 'react';
import Modal from '../../UI/Modal/Modal';

const AddDevForm = (props) => {
    return (
        <Modal onShowAddDevForm={props.onShowAddDevForm}>
            <form action="">
                <div>
                    <label htmlFor="">Bazicna forma</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Bazicna forma2</label>
                    <input type="text" />
                </div>
                <button>Submit</button>
            </form>
        </Modal>
    );
};

export default AddDevForm;
