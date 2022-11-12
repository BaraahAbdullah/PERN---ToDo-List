const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


//middleware
app.use(cors());
app.use(express.json());




//Routes
//create todo 

//get all todo 

//get a todo

//update a todo

//delete a todo




app.listen(3000, () => {
    console.log("Server has started on port 3000")
});