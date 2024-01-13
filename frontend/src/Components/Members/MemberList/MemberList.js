import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios';

const MemberList = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // Fetch the list of members from the API
    axios.get('http://localhost:4000/v1/api/members')
      .then(response => setMembers(response.data))
      .catch(error => console.error('Error fetching members:', error));
  }, []); // Run once on component mount

  return (
    <div>
      <h2>Member List</h2>
      <ul>
        {members.map(member => (
          <li key={member._id}>
            {member.firstName} {member.lastName} - {member.email} - {member._id}
          </li>
        ))}
      </ul>
      <Link to="/add">Add Member</Link>
      <Link to="/delete">Delete Member</Link>
      <Link to="/edit">Edit Member</Link>
    </div>
  );
};

export default MemberList;
