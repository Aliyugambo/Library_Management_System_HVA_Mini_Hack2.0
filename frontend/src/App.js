// App.js
import React from 'react';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import TestComponent from './Components/Test';
import BookIssueReturn from './Components/BookIssueReturn/BookIssueReturn';
import BookAdd from './Components/Books/BookAdd/BookAdd';
import BookDelete from './Components/Books/BookDelete/BookDelete';
import BookEdit from './Components/Books/BookEdit/BookEdit';
import BookList from './Components/Books/BookList/BookList';
import MemberAdd from './Components/Members/MemberAdd/MemberAdd';
import MemberDelete from './Components/Members/MemberDelete/MemberDelete';
import MemberEdit from './Components/Members/MemberEdit/MemberEdit';
import MemberList from './Components/Members/MemberList/MemberList';


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
          <Route exact path="/" element={<MemberList />} />
          <Route exact path="/add" element={<MemberAdd />} />
          <Route exact path="/delete" element={<MemberDelete />} />
          <Route exact path="/edit" element={<MemberEdit />} />
          {/* BOOKS MANAGEMENT ROUTES */}
          <Route exact path="/books" element={<BookList />} />
          <Route exact path="/books/add" element={<BookAdd />} />
          <Route exact path="/books/delete" element={<BookDelete />} />
          <Route exact path="/books/edit" element={<BookEdit />} />
          {/* BOOKISUESED AND RETURN ROUTES */}
          <Route exact path="/issues" element={<BookIssueReturn />} />
          {/* <Route exact path="/books/returnBook" element={<BookIssueReturn />} /> */}

        </Routes>

    </Router>
    </div>
  );
};

export default App;
