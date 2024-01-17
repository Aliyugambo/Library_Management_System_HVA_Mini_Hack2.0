import React, { useEffect, useState } from 'react';

import axios from 'axios';
import {backendUrl} from '../../Utils/utils'
const GetBookReturned = () => {
  const [returnedBooks, setReturnedBooks] = useState([]);

  useEffect(() => {
   
    // Fetch returned books
    axios.get(`${backendUrl}/v1/api/returnBook`)
      .then(response => console.log(setReturnedBooks(response.data.returnedBooks)))
      .catch(error => console.error('Error fetching returned books:', error));
  }, []);

  return (
    <div className='issue-container'>
      
      <h2>Returned Books</h2>

{
        returnedBooks.length > 0 ? (
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
            returnedBooks.map(issue =>(
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
          <p>No books Has Been Return</p>
        )
      }
    </div>
  );
};

export default GetBookReturned;
