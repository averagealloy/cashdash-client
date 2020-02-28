import React from 'react'
import {connect} from 'react-redux'
import {addTransaction} from '../actions/addTransaction'

class TransactionInput extends React.Component {

    state = {
        kind: 'deposit',
        amount: ''
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTransaction(this.state, this.props.account.id)
        this.setState({
            kind: 'deposit',
            amount: ''
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Transaction Type:</label>
                    <select className='ui dropdown' name='kind' value={this.state.kind} onChange={this.handleChange}>
                        <option value='1'>deposit</option>
                        <option value='2'>withdraw</option>
                    </select>
                        <label>Transaction Amount:</label>
                        <div className='ui input'>
                            <input type='text' name='amount' value={this.state.amount} onChange={this.handleChange}/>
                        </div>
                    <input  className='ui primary button' type='submit'/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addTransaction}) (TransactionInput)
