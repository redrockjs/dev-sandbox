import React, {useContext} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {AppContext} from "../context/AppContext";

export let Navigation = () => {

    const {isAuth, authUserData} = useContext(AppContext)

    return <Container>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">Firebase auth & React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
                {isAuth
                    ?
                    <NavLink to="/login">
                            <span>{authUserData.displayName} &nbsp;
                                <img src={authUserData.photoURL} style={{"width": "30px", "borderRadius": "50px"}}
                                     alt="" title={authUserData.displayName}/>
                            </span>
                    </NavLink>
                    :
                    <NavLink to="/login">
                        Sign In
                    </NavLink>
                }
            </Navbar.Collapse>
        </Navbar>
    </Container>
}