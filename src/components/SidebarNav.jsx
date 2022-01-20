import React from 'react';
import { useSelector } from 'react-redux';

function SidebarNav(props) {
    const user = useSelector((state) => state.user) 

    return (
        <div className="sidebar-nav">
            <span style={{float: "left"}}>{user.currentUser.display_name}</span>
        </div>
    );
}

export default SidebarNav;