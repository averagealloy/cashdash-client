import React from 'react'
import {connect} from 'react-redux'
import {editAccount} from '../actions/editAccount'

class AccountEdit extends React.Component {

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
        let account = {...this.state, id: this.props.account.id}
        this.props.editAccount(account)
        this.setState({
            name:'',
            balance: ''
        })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}><br/><br/>
                    <label>Update your Account Name:</label>
                         <div className='ui input'>
                            <input type='text' placeholder='Name' value={this.state.name} name='name' onChange={this.handleChange}/><br/>
                        </div>
                    <br/>
                    <input className='ui primary button' type='submit'/>
                </form>
            </div>
        )
    }
}

export default connect(null, {editAccount}) (AccountEdit)