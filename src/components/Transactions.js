import React from 'react'
import {connect} from 'react-redux'
import {deleteTransaction} from '../actions/deleteTransaction'

const Transactions = (props) => {

const handleDelete = (transaction) => {
    
    props.deleteTransaction(transaction.id, transaction.account_id)
}

    return(
        <div>
            {props.transactions && props.transactions.map( transaction => 
                <ul key={transaction.id}>
                    {transaction.kind} - {transaction.amount} <br/>
                    <button className='ui primary button' onClick={() => handleDelete(transaction)}>
                        Delete
                    </button> 
                </ul>
            )}
        </div>
    )
}

export default connect(null, {deleteTransaction})(Transactions)