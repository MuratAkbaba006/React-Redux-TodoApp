import React from 'react'
import {Router,Switch,Route} from 'react-router-dom'
import TodoListPage from '../components/TodoListPage'
import TodoDetailsPage from '../components/TodoDetailsPage'
import NotFoundPage from '../components/NotFoundPage'
import AddTodoPage from '../components/AddTodoPage'
import EditTodoPage from '../components/EditTodoPage'
import LoginPage from '../components/LoginPage'
import createHistory from 'history/createBrowserHistory'
import PrivateRoute from './PrivateRouter'
import PublicRoute from './PublicRoute'

export const history=createHistory();
const AppRouter = () => {
    return (
        <Router history={history}>
            <div>
                
                <Switch>
                    <PublicRoute exact path="/" component={LoginPage}/>
                    <PrivateRoute exact path="/todo" component={TodoListPage}/>
                    <PrivateRoute  path="/createtodo" component={AddTodoPage}/>
                    <PrivateRoute path="/todos/:id" component={TodoDetailsPage}/>
                    <PrivateRoute path="/edit/:id" component={EditTodoPage}/>
                    <Route  component={NotFoundPage}/>

                </Switch>
            </div>
        </Router>
    )
}

//<BrowserRouter> içerisinde history bilgisi varken Router içerisinde yoktur

export default AppRouter
