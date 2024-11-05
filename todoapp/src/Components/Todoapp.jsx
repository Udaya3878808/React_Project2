import React, { useState } from "react";
import Form from "./Form"
import Todolist from "./todolist";

const Todoapp = () => {
  const [todos, settodos] = useState([]);
  return (
    <div>
      <Form  todos={todos} settodos={settodos}/>
      <Todolist todos={todos} settodos={settodos}/>
    </div>
  );
};

export default Todoapp;
