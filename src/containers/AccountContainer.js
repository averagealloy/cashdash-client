import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'

import Account from '../components/Account'
import {fetchAccounts} from '../actions/fetchAccounts'
import Accounts from '../components/Accounts'
import AccountInput from '../components/AccountInput'
import HomePage from '../components/HomePage'
import Loading from '../components/Loading'


class AccountsContainer extends React.Component {


    componentDidMount(){
          this.props.fetchAccounts()
    }

    render () {
        return (
            <div>
                    <Route exact path='/loading' component={Loading}/>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/accounts/new' component={AccountInput}/>
                    <Route exact path='/accounts/:id' render={(routerProps) => <Account {...routerProps} accounts={this.props.accounts}/>}/>
                    <Route exact path='/accounts' render={(routerProps) => <Accounts {...routerProps} accounts={this.props.accounts}/>} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
         accounts: state.accounts
    }
}

export default connect(mapStateToProps, {fetchAccounts})(AccountsContainer)
