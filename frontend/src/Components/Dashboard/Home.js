import React from 'react';

import GetBookIssued from '../BookIssueReturn/IssuedBooks/getIssueBooks';
import GetBookReturned from '../BookIssueReturn/ReturnBooks/getAllReturnBooks';

import SideNavbar from './SideNavbar/SideNavbar';
import './Home.css'
const Home = () => {
    return (
        <div className='dashboard-container home'>
        <SideNavbar />
            {/* <Nav /> */}
        <div id="content">
        <h2>Dashboard</h2>
        <div className='home-content'>
            <GetBookIssued />
            <GetBookReturned />
        </div>

        </div>
    </div>
    
    );
}

export default Home;