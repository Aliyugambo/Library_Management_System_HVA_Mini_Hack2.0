import React from 'react';
import './SideNavbar.css'
function SideNavbar(props) {
    return (
        <div id="sidebar">
        <a href="/">Dashboard</a>
        <a href="/members">Member Management</a>
        <a href="/books">Book Management</a>
        <a href="/issues">Book Issuing</a>
        <a href="/returnBook">Book Returning</a>
        </div>
    );
}

export default SideNavbar;