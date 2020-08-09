var add=document.getElementById("1")
var deletes=document.getElementById("2")
var show=document.getElementById("3")
var update=document.getElementById("4")

add.addEventListener("click",()=>{
    var res=fetch('/api/todos',{
      method:"POST",
      body:JSON.stringify({"name":"an element is added"})
    });
    let pr= res.then((res)=>{
        if(res.status!=200){
            return;
        }
        return res.text();
    })
    pr.then(function (abc){
      console.log(JSON.parse(abc))
      console.log("back")
    });
})
update.addEventListener("click",()=>{
    var res=fetch('/api/todos/5da75972b7ecb518bc984531',{
      method:"PUT",
      body:JSON.stringify({"completed":"true"})
    });
    let pr= res.then((res)=>{
        if(res.status!=200){
            return;
        }
        return res.text();
    })
    pr.then(function (abc){
      console.log(JSON.parse(abc))
      console.log("updated record is returned")
    });
})

deletes.addEventListener("click",()=>{
    var res=fetch('/api/todos/5da761a8f1552a1cd93aaae6',{
      method:"DELETE",
    //   body:JSON.stringify({"name":"that element is updated"})
    });
    let pr= res.then((res)=>{
        if(res.status!=200){
            return;
        }
        return res.text();
    })
    pr.then(function (){
    //   console.log(JSON.parse(abc))
      console.log("delted")
    });
})