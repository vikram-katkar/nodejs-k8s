// Import the express
const express = require('express')
const app = express()

// Liesten on port 3000
const port = 3000

// API
app.get('/', (req, res) => res.send('Hello World!'))

// Start the server
app.listen(port, () => console.log(`App listening on port ${port}!`))

