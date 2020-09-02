const express = require('express')
const { echo } = require('./utils');
const app = express()
const port = 3010

app.get('/', (req, res) => res.send(echo('Hello World..Stripped reload check?!')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
