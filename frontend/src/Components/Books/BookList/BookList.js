import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books from the backend
    axios.get('http://localhost:4000/v1/api/books')
      .then(response => setBooks(response.data.books))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title} - {book._id}</li>
        ))}
      </ul>
      <Link to="/books/add">Add Member</Link>
      <Link to="/books/delete">Delete Member</Link>
      <Link to="/books/edit">Edit Member</Link>
    </div>
  );
};

export default BookList;
