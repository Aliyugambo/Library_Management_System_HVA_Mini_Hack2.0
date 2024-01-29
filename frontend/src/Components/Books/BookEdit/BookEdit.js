import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios';

import '../../Dashboard/Home.css';
import { backendUrl } from '../../Utils/utils';
import SideNavbar from '../../Dashboard/SideNavbar/SideNavbar';
const BookEdit = () => {
  const [bookId, setBookId] = useState('');
  const [editedBook, setEditedBook] = useState({
    title: '',
    author: '',
    // Add other book details as needed
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleIdChange = event => {
    setBookId(event.target.value);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setEditedBook({ ...editedBook, [name]: value });
  };

  const handleEditBook = () => {
    // Send a PUT request to edit details of a book
    axios.put(`${backendUrl}/v1/api/books/${bookId}`, editedBook)
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
      <div id='content'>
      <h2>Edit Book Details</h2>
      <label>Book ID: <input type="text" value={bookId} onChange={handleIdChange} /></label>
      <form>
      <label>Title: <input type="text" name="title" value={editedBook.title} onChange={handleInputChange} /></label>
        <br />
        <label>Author: <input type="text" name="author" value={editedBook.author} onChange={handleInputChange} /></label>
        <br />
        <label>Publishedyear: <input type="Date" name="Publishedyear" value={editedBook.Publishedyear} onChange={handleInputChange} /></label>
        <br />
        <label>Genre: <input type="text" name="genre" value={editedBook.genre} onChange={handleInputChange} /></label>
        <br />
        <label>shortDescription: <input type="text" name="shortDescription" value={editedBook.shortDescription} onChange={handleInputChange} /></label>
        <br />
        <label>longDescription: <input type="textarea" name="longDescription" value={editedBook.longDescription} onChange={handleInputChange} /></label>
        {/* Add other input fields for additional book details */}
        <br />
        <button type="button" onClick={handleEditBook}>Edit Book</button>
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
      <Link to="/books">Back To Home</Link>
      </div>
    </div>
  );
};

export default BookEdit;
