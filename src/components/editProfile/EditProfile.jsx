import React from 'react';
import AddMedia from './AddMedia';
import { useState } from 'react';
import EditTags from './EditTags';
import EditRadio from './EditRadio';
import EditLocation from './EditLocation';
import EditPhotos from './EditPhotos';
import { useSelector } from 'react-redux';
import { updateUser } from '../../redux/user';
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

    const renderSwitch = (param) => {
        switch(param){
            case 'main':
                return (
                    <>
                    {/* <AddMedia /> */}
                    <h3>About Tim</h3>
                    <EditPhotos />
                    <div id='about-text-editor-container'>
                        <textarea value={bio} onChange={(e) => bioChangeHandler(e)}/>
                    </div>
                    <h3 style={{cursor: "pointer"}} onClick={() => toggleView('role')}>Role</h3>
                    <h3>Tags</h3>
                    <h3 style={{cursor: "pointer"}} onClick={() => toggleView('location')}>Living In</h3>
                    <h3>Spotify Anthem</h3>
                    <button onClick={() => editSubmitHandler({bio: bio})}>Save</button>
                    </>
                )
            case 'role':
                return <EditRadio submitHandler={editSubmitHandler} options={roleOptions} type="role" toggleView={toggleView} defaultValue={currentUser.role}/>
            case 'tags':
                return <EditTags submitHandler={editSubmitHandler} options={tagOptions} tags={currentUser.tags} type='tags' defaultValue={currentUser.tags}/>
            case 'location':
                return <EditLocation submitHandler={editSubmitHandler}/>
            default: 
                return null
        }
    }

    return (
        <div style={{overflow: "scroll"}} className='profile-container'>
            <button onClick={() => toggleView('main')}>Temp Toggle main</button>
            {renderSwitch(view)}
        </div>
    );
}

export default EditProfile;