import React from 'react';
import LeftSideBar from './LeftSideBar';
import RecsMainContainer from './RecsMainContainer';

function RecsPage(props) {
    return (
        <div className='recs-page'>
            <LeftSideBar />
            <RecsMainContainer />
        </div>
    );
}

export default RecsPage;