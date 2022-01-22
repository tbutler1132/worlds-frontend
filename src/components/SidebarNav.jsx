import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function SidebarNav(props) {
    const user = useSelector((state) => state.user) 
    return (
        <div className="sidebar-nav">
            <Link to="/profile">
                <span style={{float: "left"}}>{user.currentUser.display_name}</span>
            </Link>
            <Link to="/recs">
                <span style={{float: "left"}}>Recs</span>
            </Link>
        </div>
    );
}

export default SidebarNav;