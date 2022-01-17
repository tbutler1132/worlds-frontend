import React from 'react';

function ProfileContent(props) {

    const tags = ["hi", "bye", "sev", "tunnels"]

    const renderTags = () => {
        return tags.map(tag => 
            <p>{tag}</p>
        )
    }

    return (
        <div className='profile-content'>
            <div className="profile-content-block">
                <div className="profile-content-header">
                    <h2>Name</h2>
                    <h2>Rapper</h2>
                </div>
                <div className="profile-content-subheader">
                    <span>Location</span>
                </div>
            </div>
            <div className="profile-content-block">
                <h3>Tags</h3>
                {renderTags()}
            </div>
        </div>
    );
}

export default ProfileContent;