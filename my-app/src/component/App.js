import React, { Component } from 'react';
import Dashboard from './dashboard'
import { connect } from 'react-redux'
import { handleInitialDataAction } from '../action/shared'
import LeaderBoard from './leaderBoard';
import NewQuestion from './newQuestion'
class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialDataAction())
  }
  render(){
    return (
      <div className="App">
        <NewQuestion />
      </div>
    );
  }
}

export default connect()(App);
