import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form'

function EditRadio({ toggleView, options, type, submitHandler }) {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        submitHandler(data)
    };

    const renderOptions = () => {
        return options.map(option => 
            <React.Fragment key={option}>
                <label>{option}</label>
                <input name={type} value={option} type="radio" {...register(`${type}`)}/>  
            </React.Fragment> 
        )
    }

    return (
        <div style={{border: "dotted"}} className='edit-role-container'>
            <h3>{type}</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                {renderOptions()}
                <input type="submit" />
            </form>
        </div>
    );
}

export default EditRadio;