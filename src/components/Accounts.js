import React from 'react'
import {Link} from 'react-router-dom'

const Accounts = (props) => {
    return(
        <div>
            <h1>Accounts Page</h1>
            <h2>Click an account to learn more about it! </h2>
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