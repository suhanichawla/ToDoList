var express=require("express")
var app=express()
var todoRoutes=require("./routes/todos")
var bodyParser=require("body-parser")
var port=process.env.PORT || 5000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.text());
app.use(express.static("public"));
//app.use(bodyParser.())
app.use(express.static(__dirname + '/views'));

app.listen(port,function(){
    console.log("server running on "+port)
})

app.get('/',function(req,res){
    res.sendFile("index.html");
})

app.use('/api/todos',todoRoutes)