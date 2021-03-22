import React from 'react'
import {connect} from 'react-redux'
import TodoListItem from './TodoListItem'

const TodoList = (props) => {
    return (
        <ul className="list-group">
            {props.todos.map(todo => {
                return <TodoListItem key={todo.id} {...todo}/>
        })}
        </ul>
    )
}

const mapStateToProps= (state)=>{
 return {
     todos: state.todos
 }
}
//state içerisindeki bilgileri props içerisine aktarmak için bir metod

export default connect(mapStateToProps)(TodoList)