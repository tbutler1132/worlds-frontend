import React from 'react';
import EditProfileMainContainer from '././editProfile/EditProfileMainContainer';
import EditProfileLeftSidebar from '././editProfile/EditProfileLeftSidebar';

function EditInfo(props) {
    return (
        <div className='recs-page'>
            <EditProfileLeftSidebar />
            <EditProfileMainContainer />
        </div>
    );
}

export default EditInfo;