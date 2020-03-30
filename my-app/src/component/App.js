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
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <NavBar />
          <Switch>
              <Route path='/login' exact component={SignIn} />
              <PrivateRoute path='/' exact component={Dashboard} />
              <PrivateRoute path='/leaderboard' component={LeaderBoard} />
              <PrivateRoute path='/add' component={NewQuestion} />
              <PrivateRoute path='/questions/:id' component={QuestionPage} />
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
