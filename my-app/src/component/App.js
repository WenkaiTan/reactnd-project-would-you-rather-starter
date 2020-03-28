import React, { Component, Fragment } from 'react';
import Dashboard from './dashboard'
import { connect } from 'react-redux'
import { handleInitialDataAction } from '../action/shared'
import LeaderBoard from './leaderBoard';
import NewQuestion from './newQuestion'
import SignIn from './signIn'
import LogOut from './logOut';
import NavBar from './nav'
import QuestionPage from './question'
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialDataAction())
  }
  render(){
    const { notLoggedIn } = this.props

    return (
      <Router>
        <Fragment>
          <div>
            {notLoggedIn ? <Route path='/' exact component={SignIn}/>
              : <Fragment>
                <NavBar />
                <Route path='/' exact  component={Dashboard} />
                <Route path='/leaderboard'   component={LeaderBoard}/>
                <Route path='/new'  component={NewQuestion} />
                <Route path='/questions/:id' component={QuestionPage} />
                <Route path='logout' component={LogOut} />
              </Fragment>}
          </div>
        </Fragment>
      </Router>
    );
  }
}
function mapStateToProps({authedUser}){
  return{
   notLoggedIn: authedUser === null
  }
}
export default connect(mapStateToProps)(App);
