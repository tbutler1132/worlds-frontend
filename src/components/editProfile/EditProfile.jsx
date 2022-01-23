import React from 'react';
import AddMedia from './AddMedia';
import { useState } from 'react';
import EditTags from './EditTags';
import EditRadio from './EditRadio';
import EditLocation from './EditLocation';
import { useSelector } from 'react-redux';
import { editBio, editLocation, updateUser } from '../../redux/user';
import { useDispatch } from 'react-redux';


function EditProfile({ toggleEditMode }) {
    const tagOptions = ["Trap", "Experimental", "Boom Bap"]
    const roleOptions = ['Artist', 'Producer']

    const { currentUser } = useSelector((state) => state.user)
    const [view, toggleView] = useState("main")
    const [bio, setbio] = useState(currentUser.bio)
    const dispatch = useDispatch()

    const bioChangeHandler = (e) => {
        setbio(e.target.value)
    }

    const editSubmitHandler = (userObj) => {
        dispatch(updateUser({id: currentUser._id, edit: userObj}))
    }

    return (
        <div style={{overflow: "scroll"}} className='profile-container'>
            <AddMedia />
            <h3>About Tim</h3>
            <div id='about-text-editor-container'>
                <textarea value={bio} onChange={(e) => bioChangeHandler(e)}/>
            </div>
            <h3 onClick={() => toggleView('role')}>Role</h3>
            <h3>Tags</h3>
            <h3>Living In</h3>
            <h3>Spotify Anthem</h3>
            <EditRadio submitHandler={editSubmitHandler} options={roleOptions} type="role" role={currentUser.role} toggleView={toggleView}/>
            <EditTags submitHandler={editSubmitHandler} options={tagOptions} tags={currentUser.tags} type='tags' options={tagOptions}/>
            <EditLocation submitHandler={editSubmitHandler}/>
            <button onClick={() => editSubmitHandler({bio: bio})}>Save</button>
        </div>
    );
}

export default EditProfile;