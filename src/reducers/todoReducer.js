const todoState = []

const TodoReducer = (state = todoState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                action.todo
            ]
        case "REMOVE_TODO":
          return state.filter(({id}) =>{
            return id !==action.id
          })
        case "UPDATE_TODO":
          return state.map((todo)=>{
            if(todo.id===action.id){
                 return {
                   ...todo,
                   ...action.updates
                 } 
            }
            else{
              return todo;
            }
          })
        case "SET_TODOS":
          return action.todos
        case "CLEAR_TODOS":
          return [];         
        default:
            return state;
    }
}

export default TodoReducer