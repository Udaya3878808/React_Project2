import React from 'react'

const Todoitem = ({item,todos ,settodos}) => {
    function handleDeleted(item){
        settodos(todos.filter((todo) => todo !==item)) 
    }
    function handleClick(){
    const newArr = todos.map((todo) => todo.name === name ? {... todo, done : !todo.done} : todo)
    }
  
  return (
    <div>
      <span 
       onClick={() => handleClick(item.name)}>
        {item.name}
      </span>
      <hr></hr>
      <button onClick={() => handleDeleted(item)}>x</button>
    </div>
  );
}

export default Todoitem
