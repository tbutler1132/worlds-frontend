import React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown'
import { useSelector, useDispatch } from 'react-redux';
import { likeUser } from '../redux/user';

function ProfileControlButtons({ profileId }) {

    const {_id} = useSelector((state) => state.user.currentUser)
    const dispatch = useDispatch()

    const clickHandler = (action) => {
        switch(action){
            case 'like':
                dispatch(likeUser({likerId: _id, likedId: profileId}))
            default:
                return
        }
    }
    return (
        <div className='rec-controls'>
            <ThumbDownIcon onClick={() => clickHandler('dislike')}/>
            <ThumbUpIcon onClick={() => clickHandler('like')}/>
        </div>
    );
}

export default ProfileControlButtons;