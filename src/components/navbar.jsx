import React from "react";
import {Link} from "react-router-dom";
import "bootstrap";
import {DropdownButton,Dropdown} from "react-bootstrap";

function Navbar(){
    return(
    <>
    <ul className="navbar">
        <li><Link to='/'className="brand">Ecommerce</Link></li>
        <li>
            <DropdownButton menuAlign="right" title="Khushali Shah" id="dropdown-menu-align-right" className="dropdown">
            <Dropdown.Item eventKey="1"><Link to='/profile'>My Profile</Link></Dropdown.Item>
            <Dropdown.Item eventKey="2"><Link to='/mycart'>My Cart</Link></Dropdown.Item>
            <Dropdown.Item eventKey="3"><Link to='/myorders'>My Orders</Link></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4"><Link to='/settings'>Settings</Link></Dropdown.Item>
            </DropdownButton>
        </li>
    </ul>
    </>
    );
}

export default Navbar;