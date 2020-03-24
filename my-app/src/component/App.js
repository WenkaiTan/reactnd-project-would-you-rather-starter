import React, { Component } from 'react';
import Dashboard from './dashboard'
import { connect } from 'react-redux'
import { handleInitialDataAction } from '../action/shared'
class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialDataAction())
  }
  render(){
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

export default connect()(App);
