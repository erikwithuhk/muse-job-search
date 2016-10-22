import React from 'react';
import { Link } from 'react-router';

const TopNav = () => (
  <header>
    <nav className="top-nav">
      <Link to="/" className="brand">
        <span>the</span>jester
      </Link>
    </nav>
  </header>
);

export default TopNav;
