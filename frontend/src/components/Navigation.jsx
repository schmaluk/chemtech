import React from 'react';
import {Component} from "react";
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Navigation extends Component {
    render() {
        return (<Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">Home</Link>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1} href="#">
                    <Link to="/search-store">Search a Store</Link>
                </NavItem>
                <NavItem eventKey={2} href="#">
                    <Link to="/add-store">Add a Store</Link>
                </NavItem>
            </Nav>
        </Navbar>);
    }
}