
$(document).ready(()=>{
    $.getJSON("/api/todos")
    .then((data)=>{
        console.log(data)
        addTodos(data)
    })
    .catch((err)=>{
        console.log(err)
    })
    
    $("#todoInput").on('keypress',function(e) {
    if(e.which == 13) {
        createTodo();
    }
    });
    
    $(".list").on("click",'li',function(e) {
        //e.stopPropagation();
        updateTodo($(this));
        
    })
    
    $(".list").on("click",'span',function(e) {
        e.stopPropagation();
        removeTodo($(this).parent())
        
    })
})

function removeTodo(todo){
    clickedId=todo.data('id');
        var deleteurl='/api/todos/'+clickedId;
        $.ajax({
            url:deleteurl,
            method: "DELETE",
           
        })
        .then(function(data){
            console.log(data)
            todo.remove();
            
        })
        .catch(function(err){
            console.log(err)
        })
}

function createTodo(){
    var inp=$("#todoInput").val();
    $.post('/api/todos',{"name":inp})
    .then((todo)=>{
        $("#todoInput").val('');
        addATodo(todo)
    })
    .catch((err)=>{
        console.log(err)
    })
}


function addTodos(todos){
    todos.forEach((todo)=>{
        addATodo(todo);
    })
}

function updateTodo(todo){
   var isdone=!todo.data('completed')
   clickedId=todo.data('id');
    var updateurl='/api/todos/'+clickedId;
    var updatedata={completed: isdone};
    $.ajax({
        url:updateurl,
        method: "PUT",
        data:updatedata
        
    })
    .then(function(data){
       todo.toggleClass("done");
       todo.data('completed',isdone);
            
    })
    .catch(function(err){
        console.log(err)
    })
}

function addATodo(todo){
    var newtodo=$('<li class="task">' + todo.name + '<span>X</span></li>')
    newtodo.data('id',todo._id);
    newtodo.data('completed',todo.completed);
        if(todo.completed){
            newtodo.addClass("done");
        }
        $('.list').append(newtodo)
}