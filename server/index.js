const express = require('express')
const cors = require('cors')

const app = express()

require('dotenv').config({   path: './config/config.env'   })
const port = process.env.PORT

const db = require('./config/dbConnection')

app.use(cors())

app.use(express.json())

app.get('/', (request, response) => {
    console.log(request.baseUrl)
    response.sendFile(__dirname + '/index.html')
})

app.listen(port, () => {
    db.connectToDB(function (err) {
        if (err) console.error(err);
      });
    console.log(`The server is running on port ${port}`)
})