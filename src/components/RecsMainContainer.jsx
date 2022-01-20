import React from 'react';
import ProfileContainer from './ProfileContainer';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPotentialMatches } from '../redux/matches';

function RecsMainContainer() {

    const [displayedMatch, changeMatch] = useState(0)

    const matches = useSelector((state) => state.matches) 

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPotentialMatches())
    }, [dispatch])

    console.log("Match", matches)

    if(!matches.potential.length) return <div>Loading...</div>
    return (
        <div className='recs-main-container'>
            <ProfileContainer profile={matches.potential[displayedMatch]}/>
            <button onClick={() => changeMatch(displayedMatch + 1)}>Next</button>
        </div>
    );
}

export default RecsMainContainer;