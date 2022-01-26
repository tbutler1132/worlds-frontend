import { Fragment, useEffect } from "react";
import { useForm } from "react-hook-form";


const pill = {
    backgroundColor: '#ddd',
    border: 'none',
    color: 'rgb(173, 13, 13)',
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '16px',
}

function EditTags({ options, type, submitHandler, defaultValue }) {

    const { register, handleSubmit, setValue } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        submitHandler(data)
    };

    useEffect(() => {
        if(defaultValue){
            setValue(type, defaultValue)
        }
    })

    const renderOptions= () => {
        return options.map(option => 
            <Fragment key={option}>
                <label style={pill}>
                    {option}
                    <input name={type} value={option} type="checkbox" {...register(`${type}`)}/>         
                </label>
            </Fragment> 
        )
    }

    return (
        <div style={{border: 'dashed'}} className='edit-tags-container'>
            <h3>Edit tags</h3>
            <p>Select tags you'd like to share with the people you connect with</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                {renderOptions()}
                <input type="submit" />
            </form>
        </div>
    );
}

export default EditTags;