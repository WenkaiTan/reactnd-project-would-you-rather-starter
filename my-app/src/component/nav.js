import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

class NavBar extends Component {
    state = {
        isOpen: false,
        setIsOpen: false
    }
    toggle = () => {
        this.setState({
            inOpen: !this.state.isOpen
        })
    }
    render(){
        const {isOpen} = this.state
        const { users, authedUser } = this.props
        console.log(authedUser)
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/home" exact>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/new">New Question</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link}to="/leaderboard">Leader Board</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavbarText>Hello  </NavbarText>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/logout">LogOut</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

function mapStateToProps({users,authedUser}){
    return{
        authedUser
    }
}

export default connect(mapStateToProps)(NavBar);