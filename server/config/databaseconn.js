const mongoose = require('mongoose')

require('dotenv').config();

exports.connect = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    } ).then(
        () => {console.log("DB CONNECTED SUCCESSFULLY");}
    ).catch(
        (err) =>{
          console.log("DB CONNECTION SUCCESSFULLY");  
          console.log(err);
          process.exit(1);
        }
    )
}