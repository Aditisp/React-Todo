import React from 'react'
import 'A:/React/app/demoapp/src/MyComponents/Header.css';
import { Link, NavLink} from 'react-router-dom';
export default function Header() {
    return ( 
        <nav className="navbar">
        <div className="container">
      
          <div className="navbar-header">
            <button className="navbar-toggler" data-toggle="open-navbar1">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <NavLink to="/Home">
              <h4> TODO</h4>
            </NavLink>
          </div>
      
          <div className="navbar-menu" id="open-navbar1">
            <ul className="navbar-nav">
              <li className="active"><NavLink exact to="/Home">Home</NavLink></li>
              <li className="navbar-dropdown">
                <NavLink exact to="/AddItem" className="dropdown-toggler" data-dropdown="my-dropdown-id">
                ADD ITEM <i className="fa fa-angle-down"></i>
                </NavLink>
              </li>
              <li className="navbar-dropdown">
                <NavLink exact to="/DeleteItem" className="dropdown-toggler" data-dropdown="blog">
                DELETE ITEM <i className="fa fa-angle-down"></i>
                </NavLink>
              </li>
             
            </ul>
          </div>
        </div>
      </nav> 
    )
}
