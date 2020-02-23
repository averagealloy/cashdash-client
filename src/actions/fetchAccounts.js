export function fetchAccounts() {

        console.log('inside fetch accounts')
    fetch('http://localhost:3001/api/v1/accounts')
    .then(response => response.json())
    .then(data => console.log(data))

}

