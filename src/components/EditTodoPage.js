import React from 'react'
import TodoForm from './TodoForm'
import {connect} from 'react-redux'
import {updateTodoFirebase,removeTodoFromFirebase} from '../actions/todos'
const EditTodoPage = (props) => {
    return (
        <div className="container text-center">
            <h1>Edit Todo</h1>
            <TodoForm 
            todo={props.todo}
            onSubmit={(todo)=>{
                props.dispatch(updateTodoFirebase(props.todo.id,todo));
                props.history.push("/todo");
            }}
            />
            <button  className="btn btn-primary my-2" onClick={()=>{
                props.dispatch(removeTodoFromFirebase(props.todo.id))
                props.history.push("/todo");
            }}>Delete TODO</button>
        </div>
    )
}

const mapStateToProps = (state,props) =>{
    return {
        todo:state.todos.find((td)=>{
            return td.id===props.match.params.id
        })
    }
}


export default connect(mapStateToProps)(EditTodoPage)
