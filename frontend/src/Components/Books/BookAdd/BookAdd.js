import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios';

const BookAdd = () => {
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    Publishedyear: '',
    genre:'',
    ISBN:'',
    shortDescription: '',
    longDescription: '',
    // Add other book details as needed
  });
  
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleAddBook = () => {
    // Send a POST request to add a new book
    axios.post('http://localhost:4000/v1/api/books', newBook)
      .then(response => {
        setSuccessMessage(response.data.message);
        setErrorMessage('');
        // Reset the form or perform any other necessary actions
        setNewBook({
          title: '',
          author: '',
          Publishedyear: '',
          genre: '',
          ISBN: '',
          shortDescription: '',
          longDescription: '',

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
    <div>
      <h2>Add New Book</h2>
      <form>
        <label>Title: <input type="text" name="title" value={newBook.title} onChange={handleInputChange} /></label>
        <br />
        <label>Author: <input type="text" name="author" value={newBook.author} onChange={handleInputChange} /></label>
        <br />
        <label>Publishedyear: <input type="Date" name="Publishedyear" value={newBook.Publishedyear} onChange={handleInputChange} /></label>
        <br />
        <label>Genre: <input type="text" name="genre" value={newBook.genre} onChange={handleInputChange} /></label>
        <br />
        <label>ISBN: <input type="Number" name="ISBN" value={newBook.ISBN} onChange={handleInputChange} /></label>
        <br />
        <label>shortDescription: <input type="text" name="shortDescription" value={newBook.shortDescription} onChange={handleInputChange} /></label>
        <br />
        <label>longDescription: <input type="textarea" name="longDescription" value={newBook.longDescription} onChange={handleInputChange} /></label>
        {/* Add other input fields for additional book details */}
        <br />
        <button type="button" onClick={handleAddBook}>Add Book</button>
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
      <Link to="/books">Back To Home</Link>
    </div>
  );
};

export default BookAdd;
