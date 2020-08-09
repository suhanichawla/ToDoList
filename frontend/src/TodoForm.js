import React,{ Component } from "react";
import './index.css';
class TodoForm extends Component{
    constructor(props){
        super(props)
        this.state={
            inpText:""
        }
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    render(){
        var {handleSubmit}=this.props
        return(
            <div>
                <form style={{display:"flex"}} className="form" method="POST" onSubmit={(e)=>{
                    e.preventDefault();
                    handleSubmit(this.state.inpText)
                    this.setState({inpText:""})}}>
                    <input 
                        id="todoInput" 
                        placeholder="Insert your task here..."
                        type="text" 
                        name="inpText" 
                        onChange={this.handleChange}
                        value={this.state.inpText}></input>
                    <div style={{display:"inline-block",width:"40px"}} />
                   <button className="submitButton" type="submit">Add todo</button>
                </form>
            </div>
        )
    }
}

export default TodoForm