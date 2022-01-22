import React from 'react';
import EditProfileMainContainer from './EditProfileMainContainer';
import EditProfileLeftSidebar from './EditProfileLeftSidebar';

function EditInfo(props) {
    return (
        <div className='recs-page'>
            <EditProfileLeftSidebar />
            <EditProfileMainContainer />
        </div>
    );
}

export default EditInfo;