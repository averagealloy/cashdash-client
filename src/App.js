import React from 'react';
import {connect} from 'react-redux'
import {fetchAccounts} from './actions/fetchAccounts'

class App extends React.Component {

  componentDidMount(){
      
  }
  
  render() {
  return (
    <div className="App">
      App
    </div>
  );
  }
}


export default connect()(App);
