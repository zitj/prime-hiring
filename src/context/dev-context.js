import React, { useState } from 'react';

const DevContext = React.createContext({
    developers: [],
    forms: [],
    onCreate: (name, id) => {},
});
export const DeveloperContextProvider = (props) => {
    const DUMMY_DATA = [
        {
            name: 'Zoran',
            id: Date.now(),
        },
    ];

    const [developers, setDevelopers] = useState(DUMMY_DATA);

    const getNewDeveloperData = (developer) => {
        setDevelopers((prevDevelopers) => {
            // return [{ name: name, id: Date.now() }, ...prevDevelopers];
            return [developer, ...prevDevelopers];
        });
    };

    return (
        <DevContext.Provider
            value={{
                developers: developers,
                onCreate: getNewDeveloperData,
            }}
        >
            {props.children}
        </DevContext.Provider>
    );
};

export default DevContext;
