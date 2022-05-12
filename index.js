const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.get("/api", (req, res) => {
    res.json({
        message: "Welcome to KuyLaundry API 🚀",
        endpoints: [{
            admin: [{
                getAllData: "/api/admin/",
                getDataById: "/api/admin/:id",
                addData: "/api/admin/",
                updateData: "/api/admin/:id",
                deleteData: "/api/admin/:id",
                login: "/api/admin/login",
                status: 200
            }],
            member: [{
                getAllData: "/api/member/",
                getDataById: "/api/member/:id",
                addData: "/api/member/",
                updateData: "/api/member/:id",
                deleteData: "/api/member/:id",
                status: 200
            }],
            outlet: [{
                getAllData: "/api/outlet/",
                getDataById: "/api/outlet/:id",
                addData: "/api/outlet/",
                updateData: "/api/outlet/",
                deleteData: "/api/outlet/:id",
                status: 200
            }],
            package: [{
                getAllData: "/api/package/",
                getDataById: "/api/package/:id",
                addData: "/api/package/",
                updateData: "/api/package/",
                deleteData: "/api/package/:id",
                status: "🚧 on development"
            }],
            transactions: [{
                getAllData: "/api/transaction/",
                getDataById: "/api/transaction/:id",
                addData: "/api/transaction/",
                updateData: "/api/transaction/",
                deleteData: "/api/transaction/:id",
                status: "🚧 on development"
            }]
        }]
    })
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/admin', require('./api/admin/admin.router'))
app.use('/api/member', require('./api/member/member.router'))
app.use('/api/outlet', require('./api/outlet/outlet.router'))

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}🚀`)
})
