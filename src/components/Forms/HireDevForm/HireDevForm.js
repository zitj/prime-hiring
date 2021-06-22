import React, { useContext, useState } from 'react';
import Modal from '../../UI/Modal/Modal';
import styles from '../style/Forms.module.css';
import DevContext from '../../../context/dev-context';

const HireDevForm = (props) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    let arrayOfIds = [];
    let today = new Date().toJSON().slice(0,10).replace(/-/g,'-');

    const hiringDevsId = (event) => {

        if(!startDate || !endDate){
            return;
        }

        if(event.target.checked){
            arrayOfIds.push(event.target.value)
        }
        else{
            for(let i = 0; i < arrayOfIds.length; i++){
                if(arrayOfIds[i] === event.target.value){
                    arrayOfIds.splice(i, 1);
                }
              
            }
        }
        
    };

    const startingDate = (event) => {
        setStartDate(event.target.value);
        console.log(arrayOfIds);
    };
    const endingDate = (event) => {
        setEndDate(event.target.value);
        console.log(arrayOfIds);
    };
  
 


    const devContext = useContext(DevContext);
    const developers = devContext.developers.filter(developer => !developer.hired);


    const renderDevelopers = developers.map((developer) => 
                <tr key={developer.id}>
                <td>{developer.name}</td>
                <td>{developer.email}</td>
                <td>{developer.phoneNumber}</td>
                <td>{developer.location}</td>
                <td>{developer.technology}</td>
                <td>{developer.yearsOfExp} years</td>
                <td>${developer.pricePerHour}/h</td>
               <td>
                    <input
                        className={styles.checkbox}
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
 
            devContext.onHire(arrayOfIds, startDate, endDate);
            props.onShowHireDevForm();
        
    };
    return (
        <Modal onShowHireDevForm={props.onShowHireDevForm}>
            <h1>{(!startDate || !endDate) ? `Pick a date` : `Pick developer(s)`}</h1>
            <form
                action="submit"
                className={styles.hireDevForm}
                onSubmit={hireDevelopers}
            >
     

                 {(startDate && endDate) && <table>
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

                    {renderDevelopers}
                </table>}

               {(!startDate || !endDate) && <div className={styles.datePicker}>
                    <div className="inputContainer">
                        <label htmlFor="">Starting date</label>
                        <input
                            type="date"
                            min={today}
                            value={startDate}
                            onChange={startingDate}
                        />
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="">End date</label>
                        <input
                            type="date"
                            min={startDate}
                            value={endDate}
                            onChange={endingDate}
                        />
                    </div>
                    
                </div>}
               {(startDate && endDate) && <button className={styles.submitBtn} >Hire dev(s)</button>}
            </form>
        </Modal>
    );
};

export default HireDevForm;
