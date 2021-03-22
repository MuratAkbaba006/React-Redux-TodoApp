
import database from '../firebase/firebaseConfig'

export const removeTodo=(id)=>({
  type:"REMOVE_TODO",
  id:id
})

export const removeTodoFromFirebase = (id)=>{
  return (dispatch)=>{
    return database.ref(`todos/${id}`).remove().then(()=>{
      dispatch(removeTodo(id))
    })
  }
}

export const updateTodo=(id,updates)=>({
  type:"UPDATE_TODO",
  id,
  updates
})

export const updateTodoFirebase=(id,updates)=>{
  return (dispatch)=>{
    return database.ref(`todos/${id}`).update(updates).then(()=>{
      dispatch(updateTodo(id,updates))
    })
  }
}

export const addTodo = (todo) => ({
  type: "ADD_TODO",
  todo
})

export const AddToFirebase=(todoData={})=>{
  return (dispatch,getState)=>{
    const uid=getState().auth.uid;
    const {title='', description='',dateAdded=0}=todoData;
    
    const todo ={title,description,dateAdded,uid}

    database.ref("todos").push(todo).then((res)=>{
      dispatch(addTodo({
        id:res.key,
        ...todo
      }))
    })
  }
}

export const setTodos=(todos)=>({
  type:"SET_TODOS",
  todos
})

export const getTodosFromFirebase=()=>{
  return(dispatch,getState)=>{
    const uid=getState().auth.uid;
    return database.ref("todos").once("value").then((snapshot)=>{
      const todos=[];
      snapshot.forEach((todo)=>{
        const result=todo.val();
        if(result.uid===uid)
        
        {todos.push({
          id:todo.key,
          ...result
        })}
      })
      dispatch(setTodos(todos));
    })
  }
}

export const clearTodos=()=>({
  type:"CLEAR_TODOS",
  
})
