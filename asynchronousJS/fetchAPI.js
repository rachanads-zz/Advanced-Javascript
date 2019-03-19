const fetch = require('node-fetch');

fetch('https://api.github.com/users/KrunalLathiya')
.then(response => response.json())
.then(data => {
  console.log(data) // Prints result from `response.json()` in getRequest
})
.catch(error => console.error(error))

fetch('https://api.github.com/users/KrunalLathiya')
.then(res => res.json())
.then(json => console.log(json));