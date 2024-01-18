// App.js
import React from 'react';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import TestComponent from './Components/Test';
import BookAdd from './Components/Books/BookAdd/BookAdd';
import BookDelete from './Components/Books/BookDelete/BookDelete';
import BookEdit from './Components/Books/BookEdit/BookEdit';
import BookList from './Components/Books/BookList/BookList';
import MemberAdd from './Components/Members/MemberAdd/MemberAdd';
import MemberDelete from './Components/Members/MemberDelete/MemberDelete';
import MemberEdit from './Components/Members/MemberEdit/MemberEdit';
import MemberList from './Components/Members/MemberList/MemberList';
import BookIssue from './Components/BookIssueReturn/IssuedBooks/issueBook'
import BookReturn from './Components/BookIssueReturn/ReturnBooks/bookreturned'
import Home from './Components/Dashboard/Home'
const App = () => {
  return (
    <div className="App">
      <Router>
          {/* TEST COMPONENT ROUTE */}
        <Routes>
        <Route exact path="/test" element={<TestComponent />} />
        </Routes>
        {/* MEMBERS MANAGEMENT ROUTES */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/members" element={<MemberList />} />
          <Route exact path="/members/add" element={<MemberAdd />} />
          <Route exact path="/members/delete" element={<MemberDelete />} />
          <Route exact path="/members/edit" element={<MemberEdit />} />
          {/* BOOKS MANAGEMENT ROUTES */}
          <Route exact path="/books" element={<BookList />} />
          <Route exact path="/books/add" element={<BookAdd />} />
          <Route exact path="/books/delete" element={<BookDelete />} />
          <Route exact path="/books/edit" element={<BookEdit />} />
          {/* BOOKISUESED AND RETURN ROUTES */}
          <Route exact path="/issues" element={<BookIssue />} />
          <Route exact path="/returnBook" element={<BookReturn />} />

        </Routes>

    </Router>
    </div>
  );
};

export default App;
