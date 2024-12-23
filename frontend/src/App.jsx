import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/Createtodo'
import { Todos } from './components/Todos'
import { useEffect } from 'react';

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8080/todos")
        .then(async (res) =>{
          const todos = await res.json();
          setTodos(todos);
        });
    },5000)
  });
  
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
