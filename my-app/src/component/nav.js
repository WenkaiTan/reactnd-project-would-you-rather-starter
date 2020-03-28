import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavbarBrand,
    NavItem,
    NavbarText,
    NavLink,
    Button,
    Container
} from 'reactstrap';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { unsetAuthedUser } from '../action/authedUser';
const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const { user } = props
    const handleClick = (e) => {
        props.dispatch(unsetAuthedUser())
    }
        return (
            
            <div>
                <Container>

                    <Navbar bg='success' variant='dark' light expand="md">
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="mr-auto" navbar >
                                <NavbarBrand className='n h1'>Would you rather</NavbarBrand>
                                <NavItem>
                                    <NavLink tag={Link} to="/" >Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/new">New Question</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/leaderboard">Leader Board</NavLink>
                                </NavItem>
                            </Nav>
                            
                                <NavbarText className='text-right'>
                                    <img src={user.avatarURL} className='avatar' alt={`Avatar of ${user.name}`} />
                                    <span className='b'>Hello {user.name}</span>
                                </NavbarText>
                          
                                <Button outline color='seconddary' onClick={handleClick} >Log out</Button>
                            
                            
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