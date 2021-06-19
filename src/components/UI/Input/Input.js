import React from 'react';

const Input = (props) => {
    return (
        <div className="inputContainer">
            <label htmlFor={props.name}>{props.name}</label>
            <input
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                className={props.className}
            />
        </div>
    );
};
export default Input;
