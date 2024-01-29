import React, { useState } from 'react';

import axios from 'axios';

import '../../Dashboard/Home.css';
import {backendUrl} from '../../Utils/utils';
import SideNavbar from '../../Dashboard/SideNavbar/SideNavbar';

import GetBookReturned from './getAllReturnBooks';
const BookReturn = () => {
  const [memberId, setMemberId] = useState('');
  const [bookId, setBookId] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleReturnBook = () => {
    axios.post(`${backendUrl}/v1/api/returnBook`, { memberId, bookId })
      .then(response => {
        // console.log('Book returned successfully:', response.data);
        setSuccessMessage(response.data.message);
        setErrorMessage('');
        // Refresh the list of returned books if needed
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
      <h2>Return Book</h2>
      <label>Member ID: <input type="text" value={memberId} onChange={(e) => setMemberId(e.target.value)} /></label>
      <br />
      <label>Book ID: <input type="text" value={bookId} onChange={(e) => setBookId(e.target.value)} /></label>
      <br />
      <button type="button" onClick={handleReturnBook}>Return Book</button>
      
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
      <GetBookReturned />
      </div>
    </div>
    
  );
};

export default BookReturn;
