import React, { Component, Fragment } from 'react';
import Dashboard from './dashboard'
import { connect } from 'react-redux'
import { handleInitialDataAction } from '../action/shared'
import LeaderBoard from './leaderBoard';
import NewQuestion from './newQuestion'
import SignIn from './signIn'
import NavBar from './nav'
import QuestionPage from './question'
import NotFound from './notFound'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
 import PrivateRoute from './privateRoute'
class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialDataAction())
  }

  render(){
    const { isAuthenticated } = this.props

    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <Switch>
            {isAuthenticated ? 
            <Fragment>
              <NavBar />
              <Route path='/' exact component={Dashboard} />
              <PrivateRoute path='/leaderboard' component={LeaderBoard} />
              <PrivateRoute path='/new' component={NewQuestion} />
              <PrivateRoute path='/questions/:id' component={QuestionPage} />
            </Fragment>
              : <Route path='/' exact component={SignIn} />
            }
            <PrivateRoute component={NotFound} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}
function mapStateToProps({authedUser}){
  return{
   isAuthenticated: authedUser !== null
  }
}
export default connect(mapStateToProps)(App);
