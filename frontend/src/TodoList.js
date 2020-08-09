import React,{Component} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
import './index.css'

class TodoList extends Component{
    constructor(props){
        super(props)
        this.state={
            todos:[]
        }
        this.getTodos=this.getTodos.bind(this)
        this.addTodo=this.addTodo.bind(this)
    }
    componentDidMount(){
       this.getTodos()
    }
    addTodo(val){
        if(val==""){
            alert("SOrry this cant be empty");
        }else{
            fetch("/api/todos",{
                method:"POST",
                headers: {
                 'Content-Type': 'application/json'
                },
                body:JSON.stringify({name:val})
            })
            .then(res=>{
                if(!res.ok){
                    if(res.status>=400 && res.status<500){
                        return res.json().then(data=>{
                            let err={errorMessage:data.message}
                            throw err;
                        })
                    }else{
                        let err={errorMessage:"PLease try again later "}
                        throw err
                    }
                }
                return res.json()
            }).then(todo=>this.setState({...this.state,todos:[...this.state.todos,todo]}))
        }

    }
    deleteTodos(id){
        fetch("/api/todos/"+id,{
            method:"DELETE",
            headers: {
             'Content-Type': 'application/json'
            },
        })
        .then(res=>{
            if(!res.ok){
                if(res.status>=400 && res.status<500){
                    return res.json().then(data=>{
                        let err={errorMessage:data.message}
                        throw err;
                    })
                }else{
                    let err={errorMessage:"PLease try again later "}
                    throw err
                }
            }
            return res.json()
        }).then(todo=>{
            var ns=this.state.todos.filter(val=>val._id!==id)
            this.setState({...this.state,todos:ns})
        })
    }
    toggleTodos(id,currState){
        fetch("/api/todos/"+id,{
            method:"PUT",
            headers: {
             'Content-Type': 'application/json'
            },
            body:JSON.stringify({completed:!currState})
        })
        .then(res=>{
            if(!res.ok){
                if(res.status>=400 && res.status<500){
                    return res.json().then(data=>{
                        let err={errorMessage:data.message}
                        throw err;
                    })
                }else{
                    let err={errorMessage:"PLease try again later "}
                    throw err
                }
            }
            return res.json()
        }).then(todo=>{
            var ns=this.state.todos.map(val=>(
                val._id!==id ?
                {...val} :
                {...val,completed: !currState}
            ))
            this.setState({...this.state,todos:ns})
        })
    }
    getTodos(){
        fetch("/api/todos")
        .then(res=>{
            if(!res.ok){
                if(res.status>=400 && res.status<500){
                    return res.json().then(data=>{
                        let err={errorMessage:data.message}
                        throw err;
                    })
                }else{
                    let err={errorMessage:"PLease try again later "}
                    throw err
                }
            }
            return res.json()
        }).then(todos=>this.setState({todos}))
    }
    render(){
        let todos=this.state.todos.map((val) =>(
            <Todo onToggle={this.toggleTodos.bind(this,val._id,val.completed)} onDelete={this.deleteTodos.bind(this,val._id)} key={val._id} task={val}/>
        ))
        return(
            <div>
             <TodoForm handleSubmit={this.addTodo.bind(this)}/>
                <ul className="list">
                  {todos}
                </ul>
            </div>
        )
    }
}

export default TodoList