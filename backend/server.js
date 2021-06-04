const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

mongoose
    .connect('mongodb://127.0.0.1:27017/notesTracker',{useNewUrlParser:true})
    .catch(e=>{console.error('Connection error:',e.message)})

const connection = mongoose.connection
connection.once('open',()=>{
    console.log("MongoDB database connection successfully");
})

const notesRouter = require('./routes/notes')

app.use('/notes',notesRouter)

app.listen(port,()=>{console.log(`Server is runningon port:${port}`)})