import React, { useState, useContext } from 'react';
import Modal from '../../UI/Modal/Modal';
import DevContext from '../../../context/dev-context';
import style from '../style/Forms.module.css';
import Input from '../../UI/Input/Input';

const AddDevForm = (props) => {
    const devContext = useContext(DevContext);
    const currentDeveloper = devContext.developers.filter(
        (developer) => developer.id === devContext.currentDeveloperId
    );

    const [nameState, setNameState] = useState(
        currentDeveloper[0] ? currentDeveloper[0].name : ''
    );
    const [emailState, setEmailState] = useState(
        currentDeveloper[0] ? currentDeveloper[0].email : ''
    );
    const [phoneNumberState, setPhoneNumberState] = useState(
        currentDeveloper[0] ? currentDeveloper[0].phoneNumber : ''
    );
    const [locationState, setLocationState] = useState(
        currentDeveloper[0] ? currentDeveloper[0].location : ''
    );
    const [profilePictureState, setProfilePictureState] = useState(
        currentDeveloper[0] ? currentDeveloper[0].profilePic : ''
    );
    const [pricePerHourState, setPricePerHourState] = useState(
        currentDeveloper[0] ? currentDeveloper[0].pricePerHour : ''
    );
    const [yearsOfExpState, setYearsOfExpState] = useState(
        currentDeveloper[0] ? currentDeveloper[0].yearsOfExp : ''
    );
    const [technologyState, setTechnologyState] = useState(
        currentDeveloper[0] ? currentDeveloper[0].technology : ''
    );
    const [descriptionState, setDescriptionState] = useState(
        currentDeveloper[0] ? currentDeveloper[0].description : ''
    );
    const [languageState, setLanguageState] = useState(
        currentDeveloper[0] ? currentDeveloper[0].language : ''
    );
    const [linkedInState, setLinkedInState] = useState(
        currentDeveloper[0] ? currentDeveloper[0].linkedIn : ''
    );

    const conditionalHeading = currentDeveloper[0]
        ? `Edit developer`
        : `Add new developer`;

    const addNewDev = (event) => {
        event.preventDefault();
        const dev = {
            name: nameState,
            email: emailState,
            phoneNumber: phoneNumberState,
            location: locationState,
            profilePic: profilePictureState,
            pricePerHour: pricePerHourState,
            yearsOfExp: yearsOfExpState,
            technology: technologyState,
            description: descriptionState,
            language: languageState,
            linkedIn: linkedInState,
            id: Date.now(),
        };
        setNameState('');
        setEmailState('');
        setPhoneNumberState('');
        setLocationState('');
        setProfilePictureState('');
        setPricePerHourState('');
        setYearsOfExpState('');
        setTechnologyState('');
        setDescriptionState('');
        setLanguageState('');
        setLinkedInState('');
        console.log(dev);
        devContext.onCreate(dev);
        props.onShowAddDevForm();
    };

    const conditionalFunction = currentDeveloper[0]
        ? console.log('editovanje')
        : addNewDev;

    const enterDevName = (event) => {
        setNameState(event.target.value);
    };
    const enterDevEmail = (event) => {
        setEmailState(event.target.value);
    };
    const enterDevPhoneNumber = (event) => {
        setPhoneNumberState(event.target.value);
    };
    const enterDevLocation = (event) => {
        setLocationState(event.target.value);
    };
    const enterDevProfilePic = (event) => {
        setProfilePictureState(event.target.value);
    };
    const enterDevPricePerHour = (event) => {
        setPricePerHourState(event.target.value);
    };
    const enterDevYearsOfExp = (event) => {
        setYearsOfExpState(event.target.value);
    };
    const enterDevTechnology = (event) => {
        setTechnologyState(event.target.value);
    };
    const enterDevLanguage = (event) => {
        setLanguageState(event.target.value);
    };
    const enterDevLinkedIn = (event) => {
        setLinkedInState(event.target.value);
    };
    const enterDevDescription = (event) => {
        setDescriptionState(event.target.value);
    };

    return (
        <Modal onShowAddDevForm={props.onShowAddDevForm}>
            <h1>{conditionalHeading}</h1>
            <form
                action="submit"
                onSubmit={conditionalFunction}
                className={style.form}
            >
                <Input
                    name="Name"
                    type="text"
                    value={nameState}
                    onChange={enterDevName}
                    className={style.input}
                />
                <Input
                    name="Email"
                    type="email"
                    value={emailState}
                    onChange={enterDevEmail}
                    className={style.input}
                />
                <Input
                    name="Phone number"
                    type="tel"
                    value={phoneNumberState}
                    onChange={enterDevPhoneNumber}
                    className={style.input}
                />
                <Input
                    name="Location"
                    type="text"
                    value={locationState}
                    onChange={enterDevLocation}
                    className={style.input}
                />
                <Input
                    name="Profile picture"
                    type="text"
                    value={profilePictureState}
                    onChange={enterDevProfilePic}
                    className={style.input}
                />
                <Input
                    name="Linked In"
                    value={linkedInState}
                    type="text"
                    onChange={enterDevLinkedIn}
                    className={style.input}
                />
                <Input
                    name="Price per hour"
                    type="number"
                    value={pricePerHourState}
                    onChange={enterDevPricePerHour}
                    className={style.input}
                />
                <Input
                    name="Years of experience"
                    type="number"
                    value={yearsOfExpState}
                    onChange={enterDevYearsOfExp}
                    className={style.input}
                />
                <div className="inputContainer">
                    <label htmlFor="technology">Technology</label>
                    <select
                        name="technology"
                        value={technologyState}
                        onChange={enterDevTechnology}
                    >
                        <option>Select technology</option>
                        <option value="javascript">JavaScript</option>
                        <option value="java">Java</option>
                        <option value=".net">.NET</option>
                        <option value="flutter">Flutter</option>
                        <option value="python">Python</option>
                        <option value="PHP">PHP</option>
                    </select>
                </div>
                <div className="inputContainer">
                    <label htmlFor="language">Native language</label>
                    <select
                        name="language"
                        value={languageState}
                        onChange={enterDevLanguage}
                    >
                        <option>Select your native language</option>
                        <option value="bulgarian">Bulgarian</option>
                        <option value="english">English</option>
                        <option value="serbian">Serbian</option>
                    </select>
                </div>

                <div className="inputContainer">
                    <label htmlFor="description">Description</label>
                    <textarea
                        name="description"
                        className={style.description}
                        rows="4"
                        cols="50"
                        value={descriptionState}
                        onChange={enterDevDescription}
                    ></textarea>
                </div>
                <button type="submit" className={style.submitBtn}>
                    {conditionalHeading}
                </button>
            </form>
        </Modal>
    );
};

export default AddDevForm;
