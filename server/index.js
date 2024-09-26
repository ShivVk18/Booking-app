const express = require('express')
const app = express()
const cors  = require('cors')
const cookieparser = require('cookie-parser')

require('dotenv').config()
app.use(cors())
app.use(express.json())
app.use(cookieparser())
require('./config/databaseconn').connect()
const user = require('./routes/route')
app.use('/api/v1',user)  //localhost:3000/api/v1/login



const port = process.env.PORT || 4000

app.get('/test',(req,res)=>{
     res.json('test ok')     
})





app.listen(port,()=>{
    console.log(`Server has been started at ${port}`);
           
})
