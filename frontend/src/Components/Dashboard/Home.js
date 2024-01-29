import React from 'react';

import GetBookIssued from '../BookIssueReturn/IssuedBooks/getIssueBooks';
import BookIssue from '../BookIssueReturn/IssuedBooks/issueBook';
import BookReturn from '../BookIssueReturn/ReturnBooks/bookreturned';
import GetBookReturned from '../BookIssueReturn/ReturnBooks/getAllReturnBooks';
import BookAdd from '../Books/BookAdd/BookAdd';
import BookDelete from '../Books/BookDelete/BookDelete';
import BookEdit from '../Books/BookEdit/BookEdit';
import BookList from '../Books/BookList/BookList';
import MemberAdd from '../Members/MemberAdd/MemberAdd';
import MemberDelete from '../Members/MemberDelete/MemberDelete';
import MemberEdit from '../Members/MemberEdit/MemberEdit';
import MemberList from '../Members/MemberList/MemberList';

import SideNavbar from './SideNavbar/SideNavbar';
import './Home.css'
const Home = ({page}) => {
    // return ( 
    //     <div className='dashboard-container home'>
    //     <SideNavbar />
    //         {/* <Nav /> */}
    //     <div id="content">
    //     <h2>Dashboard</h2>
    //     <div className='home-content'>
    //         <GetBookIssued />
    //         <GetBookReturned />
    //     </div>

    //     </div>
    // </div>
    
    // );

    return <div className="dashboard">
        <section className='sideNavbar-section'>
        <SideNavbar />
      </section>
      <section className='mainContent-section'>
            {
                 page==='members' ? < MemberList/> : 
                 page==='memberAdd' ? <MemberAdd /> :
                 page==='memberdel' ? <MemberDelete /> :
                 page==='memberedit' ? <MemberEdit /> :
                 page==='books' ? <BookList /> :
                 page==='bookAdd' ? <BookAdd /> :
                 page==='bookdel' ? <BookDelete /> :
                 page==='bookedit' ? <BookEdit /> :
                 page==='issues' ? <BookIssue /> :
                 page==='returnBook' ? <BookReturn /> :
                 <h1>404</h1>
               }
      </section>
    </div>
}

export default Home;