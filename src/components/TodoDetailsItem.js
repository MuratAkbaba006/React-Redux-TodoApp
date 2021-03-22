import React from 'react'

const TodoDetailsItem = ({dateAdded,title,description}) => {
    console.log(dateAdded);
    return (

        



<div className="col-md-7 my-3 card text-center">
  <div className="card-header">
    Todo
    
  </div>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    
  </div>
  <div className="card-footer text-muted">
    Eklenme Tarihi:{dateAdded}
  </div>
  
</div>
    )
}

export default TodoDetailsItem
