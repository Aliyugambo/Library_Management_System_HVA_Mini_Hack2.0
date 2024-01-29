// App.js
import React from 'react';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import TestComponent from './Components/Test';
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
          <Route exact path="/members" element={<Home page={'members'}/>} />
          <Route exact path="/members/add" element={<Home page={'memberAdd'} />} />
          <Route exact path="/members/delete" element={<Home page={'memberdel'} />} />
          <Route exact path="/members/edit" element={<Home page={'memberedit'} />} />
          {/* BOOKS MANAGEMENT ROUTES */}
          <Route exact path="/books" element={<Home page={'books'}/>} />
          <Route exact path="/books/add" element={<Home page={'bookAdd'} />} />
          <Route exact path="/books/delete" element={<Home page={'bookdel'}/>} />
          <Route exact path="/books/edit" element={<Home page={'bookedit'}/>} />
          {/* BOOKISUESED AND RETURN ROUTES */}
          <Route exact path="/issues" element={<Home page={'issues'}/>} />
          <Route exact path="/returnBook" element={<Home page={'returnBook'}/>} />

        </Routes>

    </Router>
    </div>
  );
};

export default App;
