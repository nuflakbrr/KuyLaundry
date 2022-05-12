const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/admin', require('./api/admin/admin.router'))
app.use('/api/member', require('./api/member/member.router'))

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}🚀`)
})
