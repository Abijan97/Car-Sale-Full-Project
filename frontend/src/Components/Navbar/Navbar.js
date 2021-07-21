import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar  navbar-dark bg-primary navbar-expand-lg">

        <div className="collpase navbar-collapse">
        <ul className="container navbar-nav mr-auto">
        <Link to="/" className="ml-5 navbar-brand">DashBoard</Link>
         
          <li className="navbar-item">
          <Link to="/users" className="nav-link">Employees</Link>
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
          <Link to="/receivings" className="nav-link">Receivings</Link>
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