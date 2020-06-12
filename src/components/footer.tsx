import * as React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer>
      <hr />
      <h5>Footer</h5>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Pickup</Link>
        </li>
        <li>
          <Link to="/zeit-sample">feed</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </footer>
  );
}
