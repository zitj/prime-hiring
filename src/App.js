import React, { Fragment, useState } from 'react';
import Header from './layout/Header/Header';
import AddDevForm from './components/Forms/AddDevForm/AddDevForm';
import HireDevForm from './components/Forms/HireDevForm/HireDevForm';

function App() {
    const [addDevFormIsShown, setAddDevFormIsShown] = useState(false);
    const [hireDevFormIsShown, setHireDevFormIsShow] = useState(false);

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

    return (
        <Fragment>
            {addDevFormIsShown && (
                <AddDevForm onShowAddDevForm={toggleShowAddDevForm} />
            )}
            {hireDevFormIsShown && (
                <HireDevForm onShowHireDevForm={toggleShowHireDevForm} />
            )}
            <Header
                onShowAddDevForm={toggleShowAddDevForm}
                onShowHireDevForm={toggleShowHireDevForm}
            ></Header>
        </Fragment>
    );
}

export default App;
