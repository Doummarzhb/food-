const express = require('express')

const mongoose = require('mongoose')
const app = express()
const port = 3000
const tasksRoutes = require('./routers/taskRoutes')
//middleware

app.use(express.json())

//db - connection  with mongo db 
mongoose.connect('mongodb://admin:admin@localhost:27017/todo?authSource=admin', {

useNewUrlParser:true,
useUnifiedTopology:true
})

const db = mongoose.connection ;
db.once('error', () =>{
    console.log(" Connection Error! ")
})
 
db.once('open', () =>{
    console.log('connectedto db')
})
app.use(tasksRoutes)

app.listen(port,()=>{
    console.log("Server started on port 3000")
})