import React from 'react';
import AddMedia from './AddMedia';
import { useState } from 'react';
import { editBio } from '../../redux/user';
import { useDispatch } from 'react-redux';

function EditProfileContainer(props) {
    const [bio, setbio] = useState("Hi")
    const dispatch = useDispatch()
    const bioChangeHandler = (e) => {
        setbio(e.target.value)
        dispatch(editBio(e.target.value))
    }
    return (
        <div className='profile-container'>
            <AddMedia />
            <h3>About Tim</h3>
            <textarea value={bio} onChange={(e) => bioChangeHandler(e)}/>
            <h3>Passions</h3>
            <h3>Living In</h3>
            <h3>Gender</h3>
            <h3>Spotify</h3>
            <button>Save</button>
        </div>
    );
}

export default EditProfileContainer;