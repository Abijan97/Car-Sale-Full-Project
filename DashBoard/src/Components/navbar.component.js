import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar mb-5 navbar-dark bg-primary navbar-expand-lg">
        <Link to="/" className="ml-5 navbar-brand">DashBoard</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
         
          <li className="navbar-item">
          <Link to="/usertypes" className="nav-link">Usertypes</Link>
          </li>
          <li className="navbar-item">
          <Link to="/agents" className="nav-link">Agents</Link>
          </li>
          <li className="navbar-item">
          <Link to="/shippers" className="nav-link">Shippers</Link>
          </li>
          <li className="navbar-item">
          <Link to="/customers" className="nav-link">Customers</Link>
          </li>
          <li className="navbar-item">
          <Link to="/orders" className="nav-link">Orders</Link>
          </li>
          <li className="navbar-item">
          <Link to="/customclearances" className="nav-link">Receivings</Link>
          </li>
          <li className="navbar-item">
          <Link to="/vehicles" className="nav-link">Vehicle</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}