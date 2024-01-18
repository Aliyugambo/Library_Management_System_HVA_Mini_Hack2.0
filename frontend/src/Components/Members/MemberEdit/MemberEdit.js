import React, { useState } from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom';

import '../../Dashboard/Home.css';
import SideNavbar from '../../Dashboard/SideNavbar/SideNavbar';
const MemberEdit = () => {
  const [memberId, setMemberId] = useState('');
  const [editedMember, setEditedMember] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleIdChange = event => {
    setMemberId(event.target.value);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setEditedMember({ ...editedMember, [name]: value });
  };

  const handleEditMember = () => {
    axios.put(`http://localhost:4000/v1/api/members/${memberId}`, editedMember)
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
      <h2>Edit Member Details</h2>
      <label>Member ID: <input type="text" value={memberId} onChange={handleIdChange} /></label>
      <br />
      <form>
        <label>First Name: <input type="text" name="firstName" value={editedMember.firstName} onChange={handleInputChange} /></label>
        <label>Last Name: <input type="text" name="lastName" value={editedMember.lastName} onChange={handleInputChange} /></label>
        <label>Email: <input type="email" name="email" value={editedMember.email} onChange={handleInputChange} /></label>
        <label>Phone Number: <input type="text" name="phoneNumber" value={editedMember.phoneNumber} onChange={handleInputChange} /></label>
        <label>Address: <input type="text" name="address" value={editedMember.address} onChange={handleInputChange} /></label>
        <button type="button" onClick={handleEditMember}>Edit Member</button>
      </form>
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

export default MemberEdit;
