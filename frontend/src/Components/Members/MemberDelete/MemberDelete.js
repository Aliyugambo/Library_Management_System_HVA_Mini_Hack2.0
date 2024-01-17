import React, { useState } from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom';

import '../../Dashboard/Home.css';
import { backendUrl } from '../../Utils/utils';
import SideNavbar from '../../Dashboard/SideNavbar/SideNavbar';
const MemberDelete = () => {
  const [memberId, setMemberId] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = event => {
    setMemberId(event.target.value);
  };

  const handleDeleteMember = () => {
    axios.delete(`${backendUrl}/v1/api/members/${memberId}`)
      .then(response => {
        setSuccessMessage(response.data.message);
        setErrorMessage('');
      })
      .catch(error => {
        if (error.response) {
          setErrorMessage(error.response.data.message);
          setSuccessMessage('');
        } else if (error.request) {
          setErrorMessage('No response from the server');
          setSuccessMessage('');
        } else {
          setErrorMessage('Error setting up the request');
          setSuccessMessage('');
        }
      });
  };

  return (
    <div className='dashboard-container'>
      <SideNavbar />
      <div id='content'>
      <h2>Delete Member</h2>
      <label>Member ID: <input type="text" value={memberId} onChange={handleInputChange} /></label>
      <button type="button" onClick={handleDeleteMember}>Delete Member</button>

      {successMessage && (
        <div style={{ color: 'green', marginTop: '10px' }}>
          {successMessage}
        </div>
      )}

      {errorMessage && (
        <div style={{ color: 'red', marginTop: '10px' }}>
          {errorMessage}
        </div>
      )}
      <Link to="/members">Back To Home</Link>
      </div>
    </div>
  );
};

export default MemberDelete;
