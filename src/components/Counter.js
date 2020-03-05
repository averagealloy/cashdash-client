import React from 'react'


class Counter extends React.Component {
   
   state = {
       count: 0 
   }


   increment = () => {
       this.setState((priorState => ({
           count: priorState.count + 1
       })))
   }

   decrement = () => {
    this.setState((priorState => ({
        count: priorState.count - 1
    })))
}

    render (){ 
        return (
            <div>
                <p className='ui button primary' onClick={this.increment}>
                    up <br/>
                </p>
                
                {this.state.count}

                <p className='ui button primary' onClick={this.decrement}>
                    down <br/>
                </p>
            </div>
            )         
    }
}
export default Counter