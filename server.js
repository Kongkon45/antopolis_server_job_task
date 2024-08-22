const express = require('express');
const cors = require('cors');
const animalRoute = require('./routes/animalRoute.js');

const config = require('./config/config.js');
require('./config/db.js')


const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
app.use('/api', animalRoute);

// home route 
app.get("/", (req, res)=>{
    res.status(200).json({message : "Server is Ready"})
})

// not found route 
app.use((req, res, next)=>{
    res.status(404).json({message : "This url is not found"})
})

// server error 
app.use((err, req, res, next)=>{
    res.status(500).json({message : "Server something broke"})
})

const port = config.app.port; 

app.listen(port, ()=>{
    console.log(`Server is running Successfully at http://localhost:${port}`)
})