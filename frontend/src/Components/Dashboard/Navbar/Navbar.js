import React, { useState } from 'react';
import './Navbar.css'

const Nav = () => {
  const [activeTab, setActiveTab] = useState('issueBook');

  return (
    <div className="library-management-system">
      <h1 className="header">LIBRARY MANAGEMENT SYSTEM</h1>
      <div className="buttons">
        <button
          className={`button ${activeTab === 'issueBook' ? 'active' : ''}`}
          onClick={() => setActiveTab('issueBook')}
        >
          Issue Book
        </button>
        <button
          className={`button ${activeTab === 'returnBook' ? 'active' : ''}`}
          onClick={() => setActiveTab('returnBook')}
        >
          Return Book
        </button>
        <button
          className={`button ${activeTab === 'search' ? 'active' : ''}`}
          onClick={() => setActiveTab('search')}
          ></button>
        </div>
    </div>
  )
}

export default Nav;