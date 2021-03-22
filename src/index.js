import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import reportWebVitals from './reportWebVitals';
import AppRouter,{history} from './routers/AppRouter'
import './App.css'
import configureStore from './store/configureStore'
import {clearTodos, getTodosFromFirebase} from './actions/todos'
import './firebase/firebaseConfig'
import { firebase } from './firebase/firebaseConfig';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {loginAction,logoutAction} from './actions/auth'
const store=configureStore();





const result=(<Provider store={store}>
                <AppRouter/>
              </Provider>)
ReactDOM.render(<p>Loading...</p> ,document.getElementById('root'));

let isRendered=false;
const renderApp=()=>{
  if(!isRendered){
    ReactDOM.render(result ,document.getElementById('root'));
    isRendered=true;
  }
}

firebase.auth().onAuthStateChanged(function(user){
  if(user){
    store.dispatch(loginAction(user.uid));
    store.dispatch(getTodosFromFirebase()).then(()=>{
      renderApp();
      if(history.location.pathname==='/'){
        history.push("/todo");
      }
    })
    
  }
  else{
    store.dispatch(logoutAction());
    store.dispatch(clearTodos())
    renderApp();
    console.log("logout işlemi başarılı");
    history.push('/');
    
  }
})

//onAuthStateChanged() metoduyla kullanıcının giriş yapıp yapmadığına dair 
//gerekli kontrolleri sağlayabilirz.
//burada kullanıcı giriş yapmışsa gerekli bilgiler gelsin ,çıkış yapmış isede tekrar
//loginpage'ye yönlendirmek istiyoruz.ancak index.js bir component olmadığı bir props parametresi dolayısıylda
//props içerisinde bir history özelliği yok bu sorunu çözmek için yarn add history diyerek gerekli paketi projeye dahil ediyoruz.



reportWebVitals();
