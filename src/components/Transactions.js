import React from 'react'
import {connect} from 'react-redux'
import {deleteTransaction} from '../actions/deleteTransaction'
import {Link} from 'react-router-dom'


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

             <Link to={'/accounts'}>
                <button className="ui primary button">Back to All Accounts</button> 
             </Link>

        </div>
    )
}

export default connect(null, {deleteTransaction})(Transactions)