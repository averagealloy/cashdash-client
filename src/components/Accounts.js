import React from 'react'
import {Link} from 'react-router-dom'



const Accounts = (props) => {


    return(
        <div>
            {props.accounts.map(account => 
                <ul key ={account.id}>
                    <Link to={`/accounts/${account.id}`}>{account.name}</Link> 
                </ul>
            )}
        </div>
    )
}

export default Accounts