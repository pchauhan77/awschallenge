import React  from 'react';
 const Todos=({todos,deltodo,updatetodo})=>{
const todolist= todos.length ? (
todos.map(todo=>{
return <div className="collection-item" key={todo.id }>

<p>{todo.content} 
    <span>
        <button className="btn right" onClick={()=>{deltodo(todo.id)}}> delete</button>
        <button className="btn right" onClick={()=>{updatetodo(todo.id)}}> update</button>
    </span>
</p>
</div>

})
):(
    <h1 className="red-text center">There is no todo</h1>
)
   return(
       <div className="collection container">
           {todolist}
       </div>
   )

 }
export default Todos