import React, { useState } from 'react';

import axios from 'axios';

import BookIssueReturned from './IssuedBooks/getIssueBooks';
import BookIssue from './IssuedBooks/issueBook';
const BookIssueReturn = () => {
  return (
    <div className='issueBooks-maincontainer'>
      <BookIssue />
      <BookIssueReturned />
    </div>
    
  );
};

export default BookIssueReturn;
