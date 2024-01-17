import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios';

import '../../Dashboard/Home.css';
import { backendUrl } from '../../Utils/utils';
import SideNavbar from '../../Dashboard/SideNavbar/SideNavbar';
const MemberList = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // Fetch the list of members from the API
    axios.get(`${backendUrl}/v1/api/members`)
      .then(response => setMembers(response.data))
      .catch(error => console.error('Error fetching members:', error));
  }, []); // Run once on component mount

  return (
    <div className='dashboard-container'>
          <SideNavbar />
      <div id="content">
      <h2>Member List</h2>
      <div className="book-list-container">
      {members.length > 0 ? (
          <table className="book-table">
          <thead>
            <tr>
              <th>Members ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {
              members.map(member =>(
                <tr key={member.id}>
                  <td>{member._id}</td>
                  <td>{member.firstName}</td>
                  <td>{member.lastName}</td>
                  <td>{member.email}</td>
                </tr>
              ))}
          </tbody>
          </table>
      ) : (
        <p>No books available</p> 
      )}
      </div>
      <Link to="/members/add">Add Member</Link>
      <Link to="/members/delete">Delete Member</Link>
      <Link to="/members/edit">Edit Member</Link>
        </div>
    </div>
  );
};

export default MemberList;
