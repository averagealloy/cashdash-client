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
             <Link to={"/"}>
                <button className="ui primary button">Back</button> 
             </Link>
        </div>
    )
}

export default Accounts