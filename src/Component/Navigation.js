import React from 'react';
import {Button, Nav, Navbar, NavItem} from "react-bootstrap";
import {Link, withRouter } from "react-router-dom";
import firebase from "../config/firebase";

function Navigation(props) {

    async function logout() {
        await firebase.logout()
        props.history.push('/')
    }

    return (
        <div>
            <Navbar bg="secondary" variant="dark">
                <Navbar.Brand as={Link} to="/" >FB Sdk</Navbar.Brand>
                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        <NavItem eventkey={1} href="/">
                            <Nav.Link as={Link} to="/" >All Characters</Nav.Link>
                        </NavItem>
                        {firebase.getCurrentUsername() ?
                            <NavItem eventkey={2} href="/charactersadmin">
                                <Nav.Link as={Link} to="/charactersadmin" >Manage your Characters</Nav.Link>
                            </NavItem>:''
                        }
                    </Nav>
                    <Nav className="ml-auto">
                    {!firebase.getCurrentUsername()?
                        <NavItem eventkey={3} href="/login">
                            <Nav.Link as={Link} to="/login" >Login</Nav.Link>
                        </NavItem> :
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            onClick={logout}>
                            Logout
                        </Button>
                    }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
export default withRouter(Navigation)
