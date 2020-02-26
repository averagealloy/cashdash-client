export const addTransaction = (transaction, accountId) => {

return (dispatch) => {
        fetch(`http://localhost:3001/api/v1/accounts/${accountId}/transactions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(transaction)
        })
        .then(response => response.json())
        .then(transaction => dispatch({type:'ADD_TRANSACTION', payload: transaction}))
    }
}