import React, { useState } from 'react';
import About from '../About/about';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Navigation from '../Navigation/Navigation';
import Resume from '../Resume/Resume';
import "./Header.css"

export default function Header() {
    const [currentPage, setCurrentPage] = useState('About')
    const handlePageChange = (page) => setCurrentPage(page)

    const renderPage = () => {
        
        if (currentPage === 'Contact') {
          return <Contact />;
        }
        if (currentPage === 'Portfolio') {
          return <Portfolio />;
        }
        if (currentPage === 'Resume') {
          return <Resume/>;
        }
        return <About />;
      };


  return (
    <div className="main-header">
      <h1 className="name">Darrell Carter</h1>
      <Navigation  currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
