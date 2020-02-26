import React from 'react'
import AccountEdit from './AccountEdit'


import TransactionsContainer from '../containers/TransactionsContainer'

const Account = (props) => {

    
    
    let account = props.accounts[props.match.params.id - 1]
    console.log(account)

return (
    <div>

         <h2>
            {account ? account.name : null} - {account ? account.balance : null}
        </h2>
        <TransactionsContainer account={account}/>
        <AccountEdit account={account}/>
    </div>
)


}

export default Account