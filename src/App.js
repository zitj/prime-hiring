import React, { Fragment, useState } from 'react';
import Header from './layout/Header/Header';
import AddDevForm from './components/Forms/AddDevForm/AddDevForm';
import HireDevForm from './components/Forms/HireDevForm/HireDevForm';
import List from './components/List/List';
import DeleteDeveloperModal from './components/DeleteDeveloperModal/DeleteDeveloperModal';

function App() {
    const [addDevFormIsShown, setAddDevFormIsShown] = useState(false);
    const [hireDevFormIsShown, setHireDevFormIsShow] = useState(false);
    const [deleteDeveloperModal, setDeleteDeveloperModal] = useState(false);

    const toggleShowAddDevForm = () => {
        return addDevFormIsShown
            ? setAddDevFormIsShown(false)
            : setAddDevFormIsShown(true);
    };
    const toggleShowHireDevForm = () => {
        return hireDevFormIsShown
            ? setHireDevFormIsShow(false)
            : setHireDevFormIsShow(true);
    };
    const toggleDeleteDeveloperModal = () => {
        return deleteDeveloperModal
            ? setDeleteDeveloperModal(false)
            : setDeleteDeveloperModal(true);
    };

    return (
        <Fragment>
            {addDevFormIsShown && (
                <AddDevForm onShowAddDevForm={toggleShowAddDevForm} />
            )}

            {hireDevFormIsShown && (
                <HireDevForm onShowHireDevForm={toggleShowHireDevForm} />
            )}

            {deleteDeveloperModal && (
                <DeleteDeveloperModal
                    onShowDeleteDeveloperModal={toggleDeleteDeveloperModal}
                />
            )}

            <Header
                onShowAddDevForm={toggleShowAddDevForm}
                onShowHireDevForm={toggleShowHireDevForm}
            ></Header>
            <List
                onShowDeleteDeveloperModal={toggleDeleteDeveloperModal}
            ></List>
        </Fragment>
    );
}

export default App;
