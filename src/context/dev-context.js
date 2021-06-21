import React, { useState } from 'react';
import DUMMY_DATA from '../data/data';

const DevContext = React.createContext({
    currentDeveloper: {},
    developers: [],
    forms: [],
    onCreate: (
        name,
        id,
        email,
        phoneNumber,
        location,
        profilePic,
        pricePerHour,
        yearsOfExp,
        technology,
        description,
        language,
        linkedIn
    ) => {},
    onGetDevId: (id) => {},
    onDelete: (id) => {},
});
export const DeveloperContextProvider = (props) => {
    const [developers, setDevelopers] = useState(DUMMY_DATA);
    const [currentDeveloperId, setCurrentDeveloperId] = useState('');

    const getCurrentDeveloper = (id) => {
        setCurrentDeveloperId(id);
    };

    const getNewDeveloperData = (developer) => {
        setDevelopers((prevDevelopers) => {
            return [developer, ...prevDevelopers];
        });
    };

    const deleteDeveloper = (id) => {
        setDevelopers((prevDevelopers) => {
            const updatedDevelopers = prevDevelopers.filter(
                (profile) => profile.id !== id
            );
            return updatedDevelopers;
        });
    };

    return (
        <DevContext.Provider
            value={{
                currentDeveloperId: currentDeveloperId,
                developers: developers,
                onCreate: getNewDeveloperData,
                onDelete: deleteDeveloper,
                onGetDev: getCurrentDeveloper,
            }}
        >
            {props.children}
        </DevContext.Provider>
    );
};

export default DevContext;
