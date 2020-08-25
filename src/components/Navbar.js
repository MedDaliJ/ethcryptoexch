import React, { Component } from 'react'
import Identicon from 'identicon.js';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="localhost:3000"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Crypto Exchange
        </a>

        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <a className="text-secondary">Account Address : </a>
            <small className="text-secondary">
              <small id="account">{this.props.account}</small>
            </small>

          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
