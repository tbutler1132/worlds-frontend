import React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown'

function ProfileControlButtons({ profileId }) {

    const clickHandler = (action) => {
        console.log(profileId)
        switch(action){
            case 'like':
                return
            default:
                return
        }
    }

    return (
        <div className='rec-controls'>
            <ThumbDownIcon onClick={() => clickHandler()}/>
            <ThumbUpIcon />
        </div>
    );
}

export default ProfileControlButtons;