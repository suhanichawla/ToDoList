var express=require("express")
var router=express.Router();

var db=require("../models")
var helpers=require("../helpers/todos")


router.get('/',helpers.getTodos)
router.post('/',helpers.create)

router.put('/:todoId',helpers.update)
router.get('/:todoId',helpers.showTodo)
router.delete('/:todoId',helpers.delete)

// router.get('/',function (req,res){
//     //res.send("hello from mais")
//     db.Todo.find()
//     .then((todos)=>{
//         res.json(todos)
//     })
//     .catch((err)=>{
//         res.send(err)
//     })
// })

// router.post('/',function (req,res){
//     var body=JSON.parse(req.body)
//     console.log(typeof(body))
//     db.Todo.create(body)
//     .then((newtodo)=>{
//         res.json(newtodo)
//     })
//     .catch((err)=>{
//         res.send(err)
//     })
// })

// router.put('/:todoId', function(req,res){
//     var body=JSON.parse(req.body)
//     db.Todo.findOneAndUpdate({_id: req.params.todoId},body,{new:true})
//     .then((todos)=>{
//         res.json(todos)
//     })
//     .catch((err)=>{
//         res.send(err)
//     })
// })

// router.get('/:todoId',function (req,res){
//     //var body=JSON.parse(req.body)
//     db.Todo.findById(req.params.todoId)
//     .then((todos)=>{
//         res.json(todos)
//     })
//     .catch((err)=>{
//         res.send(err)
//     })
// })

// router.delete('/:todoId',function(req,res){
//     //var body=JSON.parse(req.body)
//      console.log(req)
//     console.log(typeof(req))
//     db.Todo.remove({_id: req.params.todoId})
//     .then(()=>{
//         res.json({message:"deleted"})
//     })
//     .catch((err)=>{
//         res.send(err)
//     })
// })
module.exports = router;
