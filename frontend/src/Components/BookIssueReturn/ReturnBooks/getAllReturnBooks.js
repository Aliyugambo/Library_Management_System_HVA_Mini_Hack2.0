import React, { useEffect, useState } from 'react';

import axios from 'axios';

const BookIssueReturned = () => {
  const [issuedBooks, setIssuedBooks] = useState([]);
  const [returnedBooks, setReturnedBooks] = useState([]);

  useEffect(() => {
   
    // Fetch returned books
    axios.get('http://localhost:4000/v1/api/returnBook')
      .then(response => console.log(setReturnedBooks(response.data.returnedBooks)))
      .catch(error => console.error('Error fetching returned books:', error));
  }, []);

  return (
    <div className='issue-container'>
      
      <h2>Returned Books</h2>
      <ul>
        {returnedBooks.map(issue => (
          <li key={issue._id}>{issue.book.title} - {issue.member.firstName}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookIssueReturned;
