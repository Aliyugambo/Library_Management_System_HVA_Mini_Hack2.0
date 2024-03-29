import React, { useState } from 'react';

import axios from 'axios';

import '../../Dashboard/Home.css';
import { backendUrl } from '../../Utils/utils';
import SideNavbar from '../../Dashboard/SideNavbar/SideNavbar';

import GetBookIssued from './getIssueBooks';
const BookIssue = () => {
  const [memberId, setMemberId] = useState('');
  const [bookId, setBookId] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleIssueBook = () => {
    axios.post(`${backendUrl}/v1/api/issues`, { memberId, bookId })
      .then(response => {
        console.log('Book issued successfully:', response.data);
        // setSuccessMessage(response.data.message);
        // setErrorMessage('');
        // Refresh the list of issued books if needed
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
      <div id='content'>      
      <h2>Issue Book</h2>
      <label>Member ID: <input type="text" value={memberId} onChange={(e) => setMemberId(e.target.value)} /></label>
      <br />
      <label>Book ID: <input type="text" value={bookId} onChange={(e) => setBookId(e.target.value)} /></label>
      <br />
      <button type="button" onClick={handleIssueBook}>Issue Book</button>
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
      <GetBookIssued />
      </div>
    </div>
    
  );
};

export default BookIssue;
