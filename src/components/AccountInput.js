import React from 'react'
import {connect} from 'react-redux'
import {addAccount} from '../actions/addAccount'


class AccountInput extends React.Component {

    state = {
        name:'',
        balance: ''
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addAccount(this.state)
        this.props.history.push('/accounts')
        this.setState({
            name:'',
            balance: ''
        })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>    
                    <label>Checking Account Name:</label>
                    <div className='ui input'>
                        <input type='text' placeholder='Name' value={this.state.name} name='name' onChange={this.handleChange}/>
                    </div>

                    <br/>

                    <label>Checking Account Balance:</label>
                    <div className='ui input'>
                        <input type='text' placeholder='Balance' value={this.state.balance} name='balance' onChange={this.handleChange}/>
                    </div>

                    <br/>
                    
                        <input  className='ui primary button' type='submit'/>
                    
                </form>
            </div>
        )
    }
}

export default connect(null, {addAccount}) (AccountInput)