import React from 'react';
// import {connect} from 'react-redux'
import AccountsContainer from './containers/AccountContainer'


class App extends React.Component {

  componentDidMount(){
      
  }
  
  render() {
  return (
    <div className='App'>
      <AccountsContainer/>
    </div>
  );
  }
}


export default (App);
