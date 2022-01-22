import { useState } from 'react';
import EditProfileContainer from './EditProfileContainer';
import ProfileContainer from '../ProfileContainer';
import { useSelector } from 'react-redux';

function EditProfileMainContainer(props) {
    const [editMode, toggleEditMode] = useState(true)
    const { currentUser } = useSelector((state) => state.user)
    return (
        <div className='recs-main-container'>
            {editMode 
            ? <EditProfileContainer />    
            : <ProfileContainer me={true} profile={currentUser}/>
            }
        </div>
    );
}

export default EditProfileMainContainer;