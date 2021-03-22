import React from 'react'
import {NavLink} from 'react-router-dom'
import {logout} from '../actions/auth'
const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">


<div className="collapse navbar-collapse" id="navbarText">
  <ul className="navbar-nav mr-auto">
    <li className="nav-item active">
    <NavLink exact to="/" className="navbar-brand">Home</NavLink>
    </li>
    <li className="nav-item">
    <NavLink to="/todo" className="nav-link">Todo</NavLink>
    </li>
    
    <li className="nav-item">
    <NavLink to="/createtodo" className="nav-link">Create Todo</NavLink>

    </li>
    
  </ul>
  <button className="btn btn-primary" onClick={logout}>Log Out</button>

</div>
</nav>
      </>
    )
}

export default Navbar



