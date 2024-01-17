import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios';

import '../../Dashboard/Home.css';
import { backendUrl } from '../../Utils/utils';
import SideNavbar from '../../Dashboard/SideNavbar/SideNavbar';

import './BookList.css';
const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books from the backend
    axios.get(`${backendUrl}/v1/api/books`)
      .then(response => setBooks(response.data.books))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <div className='dashboard-container'>
      <SideNavbar />
      <div id="content">
      <h2>Book List</h2>
      <div className="book-list-container">

      {books.length > 0 ? (
        <table className="book-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {books.map(book => (
              <tr key={book.id}>
                <td>{book._id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No books available</p>
      )}
      </div>
      
      <Link to="/books/add">Add Books</Link>
      <Link to="/books/delete">Delete Books</Link>
      <Link to="/books/edit">Edit Books</Link>
          </div>
    </div>
  );
};

export default BookList;
