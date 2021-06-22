import React, { useContext, useState } from 'react';
import Modal from '../../UI/Modal/Modal';
import styles from '../style/Forms.module.css';
import DevContext from '../../../context/dev-context';

const HireDevForm = (props) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    // const [hiredDevsId, setHiredDevsId] = useState([]);
    // const [targetValue, setTargetValue] = useState(false);

    let array = [];

    const startingDate = (event) => {
        setStartDate(event.target.value);
    };
    const endingDate = (event) => {
        setEndDate(event.target.value);
    };

    const hiringDevsId = (event) => {
        
        if(event.target.checked){
            console.log('it is checked');
            array.push(event.target.value)
            console.log(array);
        }
        else{
            console.log('it is unchecked');
            for(let i = 0; i < array.length; i++){
                if(array[i] === event.target.value){
                    array.splice(i, 1);
                    // console.log(array);
                 
                }else{
                    // setHiredDevsId((prevHiredDevsId) => {
                    //     return [...array , ...prevHiredDevsId];
                    // });
                }
            }
            console.log(array);
            // setHiredDevsId((prevDevelopers) => {
            //     return   [...prevDevelopers, ...array];
            // });
        
        }
        // setHiredDevsId((prevHiredDevsId) => {
        //     return [array, ...prevHiredDevsId];
        // });
    };


    const devContext = useContext(DevContext);
    const developers = devContext.developers.filter(developer => !developer.hired)
        .map((developer) => 
                <tr>
                <td>{developer.name}</td>
                <td>{developer.email}</td>
                <td>{developer.phoneNumber}</td>
                <td>{developer.location}</td>
                <td>{developer.technology}</td>
                <td>{developer.yearsOfExp}</td>
                <td>{developer.pricePerHour}</td>
                <td>
                    <input
                        type="checkbox"
                        name={developer.name}
                        id={developer.id}
                        value={developer.id}
                        onChange={hiringDevsId}
                    />
                </td>
            </tr>
            ).reverse();

    const hireDevelopers = (event) => {
        event.preventDefault();
        console.log('submited');
        console.log(startDate);
        console.log(endDate);
        devContext.onHire(array, startDate, endDate);
        // console.log(devContext.hiredDevelopers);
        // console.log(array);
    };
    return (
        <Modal onShowHireDevForm={props.onShowHireDevForm}>
            <h1>Hire developer(s)</h1>
            <form
                action="submit"
                className={styles.hireDevForm}
                onSubmit={hireDevelopers}
            >
                <div className={styles.datePicker}>
                    <div className="inputContainer">
                        <label htmlFor="">Starting date</label>
                        <input
                            type="date"
                            min="2018-05-05"
                            value={startDate}
                            onChange={startingDate}
                        />
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="">Ending date</label>
                        <input
                            type="date"
                            value={endDate}
                            onChange={endingDate}
                        />
                    </div>
                    
                </div>

                <table>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Location</th>
                        <th>Technology</th>
                        <th>Experience</th>
                        <th>Price</th>
                        <th>Select</th>
                    </tr>

                    {developers}
                </table>
                {<button className={styles.submitBtn}>Hire dev(s)</button>}
            </form>
        </Modal>
    );
};

export default HireDevForm;
