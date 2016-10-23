import React from 'react';
import { Link } from 'react-router';

const TopNav = () => (
  <header>
    <nav className="top-nav">
      <Link to="/" className="brand">
        <strong>the</strong><span className="blue-text">jester</span><br />
        <span className="small-text">jobs</span>
      </Link>
    </nav>
  </header>
);

export default TopNav;
