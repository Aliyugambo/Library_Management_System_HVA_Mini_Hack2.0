import React, { useState } from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom';

import '../../Dashboard/Home.css';
import SideNavbar from '../../Dashboard/SideNavbar/SideNavbar';
const MemberAdd = () => {
  const [newMember, setNewMember] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.target;
    setNewMember({ ...newMember, [name]: value });
  };

  const handleAddMember = () => {
    // Send a POST request to add a new member
    axios.post('http://localhost:4000/v1/api/members', newMember)
      .then(response => {
        setSuccessMessage(response.data.message);
        setErrorMessage('');
        // Reset the form or perform any other necessary actions
        setNewMember({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          address: '',
        });
      })
      .catch(error => {
        if (error.response) {
          // The request was made, but the server responded with a non-2xx status
          setErrorMessage(error.response.data.message);
          setSuccessMessage('');
        } else if (error.request) {
          // The request was made but no response was received
          setErrorMessage('No response from the server');
          setSuccessMessage('');
        } else {
          // Something happened in setting up the request that triggered an Error
          setErrorMessage('Error setting up the request');
          setSuccessMessage('');
        }
      });
  };
  return (
    <div className='dashboard-container'>
      <SideNavbar />
      <div id="content">
      <h2>Add New Member</h2>
      <form>
        <label>First Name: <input type="text" name="firstName" value={newMember.firstName} onChange={handleInputChange} /></label>
        <label>Last Name: <input type="text" name="lastName" value={newMember.lastName} onChange={handleInputChange} /></label>
        <label>Email: <input type="email" name="email" value={newMember.email} onChange={handleInputChange} /></label>
        <label>Phone Number: <input type="text" name="phoneNumber" value={newMember.phoneNumber} onChange={handleInputChange} /></label>
        <label>Address: <input type="text" name="address" value={newMember.address} onChange={handleInputChange} /></label>
        <button type="button" onClick={handleAddMember}>Add Member</button>
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
      )};
      <Link to="/members">Back To Home</Link>
      </div>
    </div>
  );
};

export default MemberAdd;
