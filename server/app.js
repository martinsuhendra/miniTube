require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.DB_URL}`, { useNewUrlParser: true })
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})