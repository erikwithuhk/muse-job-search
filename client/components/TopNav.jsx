import React from 'react';
import { Link } from 'react-router';
import { Icon } from 'react-fa';

const TopNav = () => (
  <header>
    <nav className="top-nav">
      <Link to="/" className="brand">
        <span>the</span>jester <Icon spin name="spinner" />
      </Link>
    </nav>
  </header>
);

export default TopNav;
