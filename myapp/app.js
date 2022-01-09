
var express = require('express');
var mongoose = require("mongoose");
var app = express();
var cors = require('cors')

require("dotenv").config();
const uri = process.env.ATLAS_URI;
mongoose.connect(process.env.ATLAS_URI);
const personRoutes=require('./routes/person')
app.use(express.json())
app.use(cors())

mongoose.connect(uri);
const Person=require('./models/Person')
const connection = mongoose.connection;
connection.once("open",()=>{
console.log ("Connected Database Successfully") ;
});

app.use('/',personRoutes)
app.listen(3000,function(req,res){
console. log ("Server is started on port 3000");
})
