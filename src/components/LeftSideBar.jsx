import React from 'react';
import SidebarNav from './SidebarNav';
import MatchesContainer from './MatchesContainer';

function LeftSideBar(props) {
    return (
        <div className='left-sidebar'>
            <SidebarNav />
            <div className="sidebar-content-header-container">
                Matches
            </div>
            <MatchesContainer />
        </div>
    );
}

export default LeftSideBar;