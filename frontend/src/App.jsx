import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/Createtodo'
import { Todos } from './components/Todos'

function App() {

  const [todos, setTodos] = useState([]);

  setTimeout(() => {
    fetch("http://localhost:8080/todos")
      .then(async (res) =>{
        const todos = await res.json();
        setTodos(todos);
      });
  },1000)

  

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
