import { useState } from 'react';
import EditProfile from './EditProfile';
import ProfileContainer from '../ProfileContainer';
import { useSelector } from 'react-redux';

function EditProfileMainContainer(props) {
    const [editMode, toggleEditMode] = useState(false)
    const { currentUser } = useSelector((state) => state.user)
    return (
        <div className='recs-main-container'>
            {editMode 
            ? <EditProfile toggleEditMode={toggleEditMode}/>    
            : <ProfileContainer me={true} profile={currentUser}/>
            }
            <button onClick={() => toggleEditMode(true)}>Edit</button>
        </div>
    );
}

export default EditProfileMainContainer;