import React from 'react';
import ProfileContent from './ProfileContent';

function ProfileContainer(props) {
    return (
        <div className='profile-container'>
            <div className="profile-container-picture-container">
                <img className='profile-displayed-picture'  src="https://media.vanityfair.com/photos/54e174c0abcd32906da3e016/master/pass/kaney-wolves.png" />
            </div>
            <ProfileContent />
        </div>
    );
}

export default ProfileContainer;