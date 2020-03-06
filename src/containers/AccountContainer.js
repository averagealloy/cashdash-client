import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

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
                <Switch>

                    <Route exact path='/loading' component={Loading}/>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/accounts/new' component={AccountInput}/>
                    <Route exact path='/accounts/:id' render={(routerProps) => {
                        const accountId = parseInt(routerProps.match.params.id) 
                        const account = this.props.accounts.find( acc => accountId === acc.id)
                        return <Account {...routerProps} account={account}/>
                            
                    }
                        
                    }/>
                    <Route exact path='/accounts' render={(routerProps) => <Accounts {...routerProps} accounts={this.props.accounts}/>} />
                </Switch>
                
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
