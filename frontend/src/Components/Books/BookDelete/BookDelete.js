import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios';

import '../../Dashboard/Home.css';
import { backendUrl } from '../../Utils/utils';
import SideNavbar from '../../Dashboard/SideNavbar/SideNavbar';
const BookDelete = () => {
  const [bookId, setBookId] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleInputChange = event => {
    setBookId(event.target.value);
  };

  const handleDeleteBook = () => {
    // Send a DELETE request to remove a book
    axios.delete(`${backendUrl}/v1/api/books/${bookId}`)
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
      <h2>Delete Book</h2>
      <label>Book ID: <input type="text" value={bookId} onChange={handleInputChange} /></label>
      <button type="button" onClick={handleDeleteBook}>Delete Book</button>
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
      <Link to="/books">Back To Home</Link>
      </div>
    </div>
  );
};

export default BookDelete;
