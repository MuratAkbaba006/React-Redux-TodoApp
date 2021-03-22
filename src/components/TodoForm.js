import React, { Component } from 'react'

export class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state={
            title:props.todo?props.todo.title:'',
            description:props.todo?props.todo.description:'',
            error:'',
            
           
        }
    }
    
    onTitleChange=(e)=>{
        const title=e.target.value;
        this.setState(()=>({title}))
    }

    onDescChange=(e)=>{
        const description=e.target.value;
        this.setState(()=>({description}))
    }
   

    onSubmit=(e)=>{
    
        e.preventDefault();
        if(!this.state.title || !this.state.description){
            this.setState({error:"lütfen gerekli alanları doldurun"});
        }else{
            this.setState({error:''});
            this.props.onSubmit({
                title:this.state.title,
                description:this.state.description,
                dateAdded:Date(),
                
                
            })
        }
    }

    render() {
        return (
            <div >
                {this.state.error && <p>{this.state.error}</p>}
                <form clasName="form-group" onSubmit={this.onSubmit}>
                    <div>
                        <input placeholder="enter title" className="form-control mt-2" value={this.state.title}  onChange={this.onTitleChange}/>
                    </div>
                    <div>
                        <textarea placeholder="enter description" className="form-control mt-2" value={this.state.description} onChange={this.onDescChange}>                       
                        </textarea>
                    </div>
                    
                    <div>
                        <button id="addbtn" className="btn btn-primary mt-2"  type="submit">Save Changes</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default TodoForm
