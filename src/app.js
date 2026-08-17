const express = require('express')
const cors = require('cors')
const data = require('./data/database')

const app = express()

app.use(cors())

app.get('/user', (req, res) => {
    res.status(200).json({
        message: "data dikirim",
        data: data
    })
})

module.exports = app