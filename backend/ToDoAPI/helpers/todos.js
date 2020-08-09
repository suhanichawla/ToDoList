var db=require("../models")

exports.getTodos = function (req,res){
    //res.send("hello from mais")
    db.Todo.find()
    .then((todos)=>{
        res.json(todos)
    })
    .catch((err)=>{
        res.send(err)
    })
}

exports.create=function (req,res){
    var body=req.body
    console.log(typeof(body))
    db.Todo.create(body)
    .then((newtodo)=>{
        res.json(newtodo)
    })
    .catch((err)=>{
        res.send(err)
    })
}

exports.showTodo=function (req,res){
    //var body=JSON.parse(req.body)
    db.Todo.findById(req.params.todoId)
    .then((todos)=>{
        res.json(todos)
    })
    .catch((err)=>{
        res.send(err)
    })
}

exports.update=function(req,res){
    var body=req.body
    db.Todo.findOneAndUpdate({_id: req.params.todoId},body,{new:true})
    .then((todos)=>{
        res.json(todos)
    })
    .catch((err)=>{
        res.send(err)
    })
}

exports.delete=function(req,res){
    db.Todo.remove({_id: req.params.todoId})
    .then(()=>{
        res.json({message:"deleted"})
    })
    .catch((err)=>{
        res.send(err)
    })
}


module.exports=exports;