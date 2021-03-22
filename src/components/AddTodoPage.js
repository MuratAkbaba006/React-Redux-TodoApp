import React from 'react'
import TodoForm from './TodoForm'
import {connect} from 'react-redux'
import {AddToFirebase} from '../actions/todos'
const AddTodoPage = (props) => {
    return (
        <div className="container">
            <h1 className="text-center">Add Todo</h1>
            <TodoForm onSubmit={(todo) => {
                props.dispatch(AddToFirebase(todo));
                props.history.push('/todo');
            }}/>
        </div>
    )
}



export default connect()(AddTodoPage);

//state içerisindeki bilgileri propsa aktarmamıza gerek yok çünkü state'e birşey ekliyoruz
