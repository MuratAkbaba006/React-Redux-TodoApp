import React from 'react'
import {connect} from 'react-redux'
import TodoDetailsItem from './TodoDetailsItem'


const TodoDetailsPage = (props) => {
    return (
        
             <TodoDetailsItem  {...props.todo}/>
            
        
    )
}


const mapStateToProps=(state,props)=>{
    return{
        todo:state.todos.find((todo)=>{
            return todo.id===props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(TodoDetailsPage)
 