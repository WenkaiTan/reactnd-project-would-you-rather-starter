import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {unsetAuthedUser} from '../action/authedUser'
class LogOut extends Component{
    componentWillMount(){
        this.props.dispatch(unsetAuthedUser())
    }
    render(){
        return(
            <div>
                <Redirect to='/' />
            </div>
        )
    }
}

export default connect()(LogOut)