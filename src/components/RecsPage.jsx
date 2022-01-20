import React from 'react';
import LeftSideBar from './LeftSideBar';
import RecsMainContainer from './RecsMainContainer';
import useAuth from '../hooks/useAuth';

function RecsPage({code}) {
    const accessToken = useAuth(code)

    if(!accessToken) return <div>Loading...</div>
    return (
        <div className='recs-page'>
            <LeftSideBar />
            <RecsMainContainer />
        </div>
    );
}

export default RecsPage;