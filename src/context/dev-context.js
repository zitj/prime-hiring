import React, { useState } from 'react';
import { DUMMY_DATA } from '../data/data';

const DevContext = React.createContext({
    currentDeveloper: {},
    // hiredDevelopers: [],
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
        linkedIn,
        hired,
        hiredFrom,
        hiredTill,
    ) => {},
    onEdit: (
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
        linkedIn,
        hired,
        hiredFrom,
        hiredTill,

    ) => {},
    onGetDev: (id) => {},
    onDelete: (id) => {},
    onHire: (arrayOfId) => {},
});
export const DeveloperContextProvider = (props) => {
    const [developers, setDevelopers] = useState(DUMMY_DATA);
    // const [hiredDevelopers, setHiredDevelopers] = useState([]);
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
                (developer) => developer.id !== id
            );
            return updatedDevelopers;
        });
    };

    const editDeveloper = (editedDev) => {
        setDevelopers((prevDevelopers) => {
            const updatedDevelopers = prevDevelopers.filter((developer) => {
                if (developer.id === editedDev.id) {
                    for (var k in editedDev) developer[k] = editedDev[k];
                }
                return developer;
            });
            return updatedDevelopers;
        });
    };

    const hireDevelopers = (arrayOfIds, startDate, endDate) => {
        

        setDevelopers((prevDevelopers) => {

        const updatedDevelopers = prevDevelopers.map(developer => {
            arrayOfIds.forEach(id => {
                if(developer.id === +id){
                    developer.hired = true;
                    developer.hiredFrom = startDate;
                    developer.hiredTill = endDate;
                    console.log(developer);
                }
            })
            return developer;
        });
        console.log(updatedDevelopers);
        return updatedDevelopers;
    });
      
    };

    return (
        <DevContext.Provider
            value={{
                currentDeveloperId: currentDeveloperId,
                developers: developers,
                // hiredDevelopers: hiredDevelopers,
                onCreate: getNewDeveloperData,
                onDelete: deleteDeveloper,
                onGetDev: getCurrentDeveloper,
                onEdit: editDeveloper,
                onHire: hireDevelopers
            }}
        >
            {props.children}
        </DevContext.Provider>
    );
};

export default DevContext;
