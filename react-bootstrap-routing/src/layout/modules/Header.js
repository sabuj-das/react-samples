import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {
    Nav, NavItem, Navbar, NavbarBrand, NavDropdown,
    MenuItem
} from 'react-bootstrap';

import './Header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar fluid>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/" className={'header-brand'}>sample</a>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} componentClass={Link} to={"/monitor"} href={"/monitor"}>
                                Monitor
                            </NavItem>
                            <NavItem eventKey={1} componentClass={Link} to={"/applications"} href={"/applications"}>
                                Applications
                            </NavItem>
                            <NavDropdown eventKey={3} title="Teams" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1} componentClass={Link} href={'/teams/search'}
                                          to={'/teams/search'}>Search</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={3.2} componentClass={Link} href={'/teams/create'}
                                          to={'/teams/create'}>Create</MenuItem>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    };
};

export default Header;
