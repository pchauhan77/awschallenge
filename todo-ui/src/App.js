import React, { Component } from 'react';
import Todos from './Todos'
import Addtodo from './Addtodo'
class App extends Component {
state={
  todos:[
    {id:1,content:"AWS-Challenge"},
    {id:2,content:"Todo app"},
    {id:3,content:"Javascript "},

]
}
deltodo=(id)=>{
  //console.log(id)
  const todos=this.state.todos.filter(todo=>{
    return todo.id !== id
  })
  this.setState({
    todos:todos
  })

}
addtodo=(todo)=>{
  if(todo.content !==""){
    todo.id=Math.random();
    const todos=[...this.state.todos,todo]
    this.setState({
      todos:todos
    })
  }else{
     alert("add todo")
  }

}
updatetodo=(id)=>{
  console.log(id)
  let todos=this.state.todos.find(e=>{
return e.id===id

  })
   console.log(todos.content +"ye match")
let a =prompt("enter your value")
if(a!==""){
  let update={
    content:a,
    id:id,
    }
    
    let z = this.state.todos.map((v)=>{
      if(v.id!==id){
        return v}
    else{
     return update
    }
    })
    
    this.setState({
      todos:z
    })
}

}

  render() {
    return (
      <div className="App container">
        <h1 className="center red-text">
          Todo App
        </h1>
        <Addtodo addtodo={this.addtodo}/>
        <Todos todos={this.state.todos} updatetodo={this.updatetodo} deltodo={this.deltodo}/>
      </div>
    );
  }
}

export default App;
