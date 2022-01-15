import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    return (
      <div className='navbar'>
        <Link className="linkBrand" to="/home">
          APPMOM
        </Link>
        <nav>
          <ul>
            <li>
              {" "}
              <Link className="link" to="/home">
                HOME
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link className="link" to="/home">
                ABOUT
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link className="link" to="/home">
                FEATURES
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link className="link" to="/home">
                SCREENSHORTS
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link className="link" to="/home">
                REVIEWS
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link className="link" to="/home">
                PRICING
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link className="link" to="/home">
                SUPPORT
              </Link>{" "}
            </li>
          </ul>
        </nav>
      </div>
    );
};

export default Navbar;