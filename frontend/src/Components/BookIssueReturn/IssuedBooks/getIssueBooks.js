import React, { useEffect, useState } from 'react';

import axios from 'axios';
import {backendUrl} from '../../Utils/utils'
const GetBookIssued = () => {
  const [issuedBooks, setIssuedBooks] = useState([]);
//   const [returnedBooks, setReturnedBooks] = useState([]);

  useEffect(() => {
    // Fetch issued books
    axios.get(`${backendUrl}/v1/api/booksisues`)
      .then(response => console.log(setIssuedBooks(response.data.issuedBooks)))
      .catch(error => console.error('Error fetching issued books:', error));
  }, []);

  return (
    <div className='issue-container'>
      <h2>Issued Books</h2>
      {/* <ul>
        {issuedBooks.map(issue => (
          <li key={issue._id}>{issue.book.title} - {issue.member.firstName}</li>
        ))}
      </ul> */}

      {
        issuedBooks.length > 0 ? (
          <table className="book-table">
          <thead>
            <tr>
              <th>Members ID</th>
              {/* <th>Member Name</th> */}
              <th>Book Isued</th>
              <th>Email</th>
            </tr>
          </thead>
          {
            issuedBooks.map(issue =>(
              <tr key={issue.id}>
                  <td>{issue._id}</td>
                  {/* <td>{issue.member.lastName}</td> */}
                  <td>{issue.book.title}</td>
                  <td>{issue.member.email}</td>
                </tr>
            ))
          }
          </table> 
        ) : (
          <p>No books Has been Issued</p>
        )
      }
    </div>
  );
};

export default GetBookIssued;
