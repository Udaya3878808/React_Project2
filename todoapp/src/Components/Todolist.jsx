import React from 'react'
import Todoitem from "./Todoitem";
const todolist = ({todos ,settodos}) => {
  return (
    <div>
      {todos.map((item) => (
        <Todoitem key={item.name} item={item} todos={todos} settodos={settodos}/>
        
      ))}
    </div>
  );
}

export default todolist
