import React from 'react';

import { Link } from 'react-router-dom';

import d2 from '../../../images/d2.png';

import './SideNavbar.css';
import { sideNavbarData } from './sideNavbarData';
function SideNavbar(props) {
    // return (
    //     <div id="sidebar">
    //     <a href="/">Dashboard</a>
    //     <a href="/members">Member Management</a>
    //     <a href="/books">Book Management</a>
    //     <a href="/issues">Book Issuing</a>
    //     <a href="/returnBook">Book Returning</a>
    //     </div>
    // );
   
    return <div className='sideNavbar'>
        <div className='sideNavbar_logo'>
            <img src={d2} alt='logo' id='logo-u'/>
        </div>
        <div className='sideNavbar_menu'>
            {
                sideNavbarData.map((item, index) =>{
                    return (
                        <Link key={index} to={item.path}>
                            <div className='menu-item-selected menu-item' key={index}>
                            <div className="menu-item-icon">
                                <img src={item.icon} alt={item.title} />
                            </div>
                            <div className="menu-item-name">
                                <span>{item.title}</span>
                            </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    </div>
}

export default SideNavbar;