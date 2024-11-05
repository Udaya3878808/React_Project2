import React from 'react'
import { useState } from 'react';
const Form = ({todos,settodos}) => {
    const [todo, settodo] = useState({
      name:"",done:false
    });
   
   function handleChange(e) {
       settodo({name:e.target.value,done:false});
     }
     function handleSubmit(e) {
       e.preventDefault();
       settodos([...todos, todo]);
       settodo({ name: "", done: false });
     }

  return (
    <div>
      <form className="todosform" onSubmit={handleSubmit}>
        <div className="inputContainer">
          <input
            className="input"
            onChange={(e) => handleChange(e)}
            type="text"
            value={todo.name}
            placeholder="Enter todo item.... "
          />
          <button className="Delete" type="submit"> ADD</button>
        </div>
      </form>
    </div>
  );
}

export default Form
