
import React from 'react';
import {Link} from 'react-router-dom'



const HomePage = () => {
    return (
        <div>
            <h1>
                Welcome to CashDash !
            </h1>
            <h2>
                Do you want to?
            </h2>
            <div>
                
                <Link to={'/accounts/new'}>
                <button className='ui primary button'>Create An Account</button> 
                </Link>
                OR 
                <Link to={'/accounts'}>
                    <button className='ui primary button'>Look at Accounts</button>
                </Link>
            </div>
        </div>
    )
}



export default HomePage;