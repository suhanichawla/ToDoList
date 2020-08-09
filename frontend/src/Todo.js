import React from 'react'
import './index.css'

var Todo=({task,onDelete,onToggle})=>(
    <li className="task"
        style={{
            textDecoration: task.completed ? 'line-through' : 'none',
            color: task.completed ? "#bdc3c7":'#34495e'
        }}
    >
    <span onClick={onToggle}>
        {task.name}
    </span>
    <span className="close" onClick={onDelete}>X</span>
    </li>

)
export default Todo;