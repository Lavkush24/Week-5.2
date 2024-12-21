const express = require("express");
const app = express();
const cors = require("cors");
const { createTodo, updateTodo } = require("./types");
const { Todo } = require("./db.js");

app.use(express.json());
app.use(cors());

app.post("/todo", async (req,res) => {
    const todosbody = req.body;
    const parsetodobody = createTodo.safeParse(todosbody);
    if(!parsetodobody.success) {
        res.status(411).json({
            msg: "Wrong data is send",
        });
        return;
    }
    // else put data in mongoose
    await Todo.create({
        title: todosbody.title,
        description: todosbody.description,
        completed: false
    });
    
    res.json({
        msg: "todo is created"
    });
});

app.get("/todos", async (req,res) => {
    const todos = await Todo.find({});
    res.json( todos);
});

app.put("/completed", async (req,res) => {
    const updatetodo = req.body;
    const parseupdatebody = updateTodo.safeParse(updatetodo);
    if(!parseupdatebody.success) {
        res.json({
            msg: "You send wrong inputs",
        });
        return ;
    };
    //else update data in mongosh
    await Todo.updateOne({
        _id: req.body.id
    },{
        completed: true
    });

    res.json({
        msg: "todo marked is completed"
    });
});

app.listen(8080, () => {
    console.log("server is connected...");
});