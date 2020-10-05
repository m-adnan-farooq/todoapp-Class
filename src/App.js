import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      todos:["Noman", "Salman", "Adnan"],
      value: ''
    }
  }
  add_todo = ()=>{
    this.state.todos.push(this.state.value)
    this.setState({
      todos: this.state.todos,
      value: ''
    })
  }

  delete_todo = (index) =>{
    this.state.todos.splice(index,1);
    this.setState(this.state.todos)
  }
  edit_todo = (index) =>{
    // this.state.todos[index] = prompt("Please provide eidited value")
    this.setState(this.state.todos)
    console.log(this.state.todos[index])
    var editBtn = document.getElementsByClassName("edit-btn");
    console.log(editBtn[index])
    editBtn[index].innerHTML = "Update"
    return(
      <div>
      <input type="text"></input>
      {editBtn[index].remove}
      <button onClick={()=>this.update_todo(index)}>Update</button>
      </div>
    )    
  }
  render(){
    let {todos, value} = this.state
    return(
      <div>
        <input value={value} type='text' placeholder = "Enter task to do" onChange ={(e)=> this.setState({value:(e.target.value)})}></input>
        <button onClick = {this.add_todo}>Add Item</button>
        <ul>
          {todos.map((value,index)=>{
            return <li key={index}>
              {value}
              <button id="del-btn" onClick={()=>this.delete_todo(index)}>Delete</button>
              <button className="edit-btn" onClick={()=>this.edit_todo(index)}>Edit</button>
              </li>            
          })}
        </ul>
      </div>
    )
  }
}
export default App;
