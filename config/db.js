const mongoose = require('mongoose');
const config = require('./config.js');
const dbUrl = config.db.url;


mongoose.connect(dbUrl)
.then(()=>{
    console.log("Database is connected");
})
.catch((error)=>{
    console.log("Database is not Connected");
    console.log(error);
    process.exit(1)
})