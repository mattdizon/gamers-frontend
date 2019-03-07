import React from 'react';
import {NavLink} from 'react-router-dom'
import {Navbar,Nav,Button} from 'react-bootstrap'
import '../css/nav.css'


class Navigation extends React.Component{


    render(){

        return (
            <Navbar expand="lg">
                <Navbar.Brand href="#home" style = {{marginLeft: '5vh', color:"#fff"}}>Gamers</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto" style = {{marginRight: '5vh'}}>
                        <Nav.Link href="#home">Sign In</Nav.Link>
                        <Nav.Link href="#link">Sign Up</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        )
}
}


export default Navigation
