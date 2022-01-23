import { useState, Fragment } from "react";
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

function EditTags({ tags, options, type, submitHandler }) {
    const [currentTags, setTags] = useState(tags)

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        submitHandler(data)
    };

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
            {/* <h5>Tags</h5>
            {renderPillButtons()} */}
        </div>
    );
}

export default EditTags;