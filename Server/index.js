const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


//middleware
app.use(cors());
app.use(express.json());




//Routes
//create todo 

app.post("/todos", async(req,res)=> {
    try{
        const {description} = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES ($1) RETURNING *", [description]
        );
        res.json(newTodo.rows[0]);
    }catch(err){
        console.error(err.message);
    }
});

//get all todo 

app.get("/todos", async(req, res)=> {
    try {
        const allTodo = await pool.query("select * from todo");
        res.json(allTodo.rows);
    } catch (err) {
        console.error(err.message);
        
    }
});

//get a todo

app.get("/todos/:id", async (req, res)=> {
    try {
        const {id} = req.params;
        const todo = await pool.query("select * from todo where todo_id = $1" ,[id])

        res.json(todo.rows[0]);
        } catch (err) {
        console.error(err.message);
    }
})

//update a todo

app.put("/todos/:id", async(req, res)=> {
    try {
        const {id} = req.params;
        const {description} = req.body;
        const updateTodo = await pool.query("update todo set description = $1 where todo_id = $2", [description, id]);

        res.json("todo just updated");
    } catch (err) {
        console.error(err.message);
    }
})

//delete a todo

app.delete("/todos/:id", async(req, res)=>
{
    try {
        const {id} = req.params;
        const deletTodo = await pool.query("delete from todo where todo_id = $1", [id]);
        res.json("todo was deleted");
    } catch (err) {
        console.error(err.message);
    }
})




app.listen(3000, () => {
    console.log("Server has started on port 3000")
});