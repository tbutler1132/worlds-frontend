import React from 'react';
import ProfileContent from './ProfileContent';
import ProfileControlButtons from './ProfileControlButtons';

function Profile({profile, controls}) {
    return (
        <div className='profile-container'>
            <div className="profile-container-picture-container">
                <img className='profile-displayed-picture'  src="https://media.vanityfair.com/photos/54e174c0abcd32906da3e016/master/pass/kaney-wolves.png" />
            </div>
            <ProfileContent profile={profile}/>
            {controls 
            ? <ProfileControlButtons profileId={profile._id}/>
            : null
            }
        </div>
    );
}

export default Profile;