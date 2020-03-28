import React, { Component, useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavbarBrand,
    NavItem,
    NavbarText,
    NavLink,
    Container
} from 'reactstrap';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const { user } = props
        return (
            <div>
                <Container>

                    <Navbar bg='primary' variant='dark' light expand="md">
                        <NavbarBrand className='b h1'>Would you rather?</NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="mr-auto" navbar >
                                <NavItem>
                                    <NavLink tag={Link} to="/" >Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/new">New Question</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/leaderboard">Leader Board</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/logout">LogOut</NavLink>
                                </NavItem>
                            </Nav>
                            
                                <NavbarText className='text-right'>
                                    <img src={user.avatarURL} className='avatar' alt={`Avatar of ${user.name}`} />
                                    <span className='b'>Hello {user.name}</span>
                                </NavbarText>
                            
                        </Collapse>
                    </Navbar>
                </Container>

            </div>
        );
    
}

function mapStateToProps({users,authedUser}){
    return{
        user: users[authedUser]
    }
}

export default connect(mapStateToProps)(NavBar);