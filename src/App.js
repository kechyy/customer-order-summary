import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { Dropdown } from "react-bootstrap";


import '../node_modules/font-awesome/css/font-awesome.min.css';
import Routes from './routes'

import './App.css'



function App() {
  return (
    <>
    <Router>
        <div className="wrapper">
            <header className="main-header">
                <div className="logo">Shopping Cart</div>
                <div className="profile">
                    <Dropdown className="profile-dropdown">
                        <Dropdown.Toggle variant="" id="dropdown-basic">
                            Hi Nkechi <span className="fa fa-user-circle-o"></span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">My Profile</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </header>
            <div className="main-content">
                <div className="side-bar">
                    <ul className="list-unstyled">
                        <li>
                            <Link to='/profile' data-title="My Profile" ><span className="fa fa-user-circle" ></span></Link>
                        </li>
                        <li>
                            <Link to='/order-summary' data-title="Order Summary" ><span className="fa fa-file-o" ></span></Link>
                        </li>
                        <li><a href="" title="Log-out"><span className="fa fa-sign-out"></span></a> </li>
                    </ul>
                </div>
                <div className="content">

                    <Routes />

                </div>
            </div>
        </div>
    </Router>


    </>
  );
}

export default App;
