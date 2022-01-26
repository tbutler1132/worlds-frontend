import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form'

// PROPS:
// - Options: Checkbox options
// - Type: Prompt form is asking for
// - Submithandler: What to do with submitted values
// - Default value: Value that should be defaulted

function EditRadio({ options, type, submitHandler, defaultValue }) {

    const { register, handleSubmit, setValue } = useForm();
    const onSubmit = (data) => {
        submitHandler(data)
    };

    useEffect(() => {
        if(defaultValue){
            setValue(type, defaultValue)
        }
    })

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