import React from 'react'
import {NavLink} from 'react-router-dom'

const TodoListItem = ({id,title}) => {
    return (
        <>
            <div className="col-md-4">
             
            <li className="list-group-item my-2 text-center"><h2 >{title}</h2><NavLink className="btn btn-primary " to = {`/todos/${id}`}>Details</NavLink> <NavLink className="btn btn-primary" to = {`/edit/${id}`}>Edit</NavLink></li> 
            </div>
        </>
    )
}

export default TodoListItem
