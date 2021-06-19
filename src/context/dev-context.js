import React, { useState } from 'react';

const DevContext = React.createContext({
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
});
export const DeveloperContextProvider = (props) => {
    const DUMMY_DATA = [
        {
            name: 'Zoran',
            email: 'kojzoran@gmail.com',
            phoneNumber: '+38166253253',
            location: 'Beograd',
            profilePic:
                'https://pbs.twimg.com/profile_images/1825094360/random_dude.jpg',
            pricePerHour: 75,
            yearsOfExp: 10,
            technology: 'JavaScript',
            description: 'Hello world my name is Zoran.',
            language: 'serbian',
            linkedIn: '/',
            id: Date.now(),
        },
        {
            name: 'Aleksandar',
            email: 'avelj@gmail.com',
            phoneNumber: '+381607350820',
            location: 'Leskovac',
            profilePic:
                'https://pbs.twimg.com/profile_images/1047570794157674497/yygEMj-l_400x400.jpg',
            pricePerHour: 20,
            yearsOfExp: 2,
            technology: 'JavaScript',
            description: 'Hello world my name is Aleksandar.',
            language: 'serbian',
            linkedIn: '/',
            id: Date.now(),
        },
    ];

    const [developers, setDevelopers] = useState(DUMMY_DATA);

    const getNewDeveloperData = (developer) => {
        setDevelopers((prevDevelopers) => {
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
