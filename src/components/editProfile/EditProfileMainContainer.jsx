import { useState } from 'react';
import EditProfile from './EditProfile';
import Profile from '../Profile';
import { useSelector } from 'react-redux';

function EditProfileMainContainer(props) {
    const [editMode, toggleEditMode] = useState(false)
    const { currentUser } = useSelector((state) => state.user)
    return (
        <div className='recs-main-container'>
            {editMode 
            ? <EditProfile toggleEditMode={toggleEditMode}/>    
            : <Profile me={true} profile={currentUser}/>
            }
            <button onClick={() => toggleEditMode(!editMode)}>Edit</button>
        </div>
    );
}

export default EditProfileMainContainer;