import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import TodoReducer from '../reducers/todoReducer'
import authReducer from '../reducers/authReducer'
import thunk from 'redux-thunk'

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const CreateStore = () => {

    const store = createStore(
        combineReducers({
            todos: TodoReducer,
            auth: authReducer
        }),
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        composeEnhancers(applyMiddleware(thunk))
    );
    return store
}

export default CreateStore