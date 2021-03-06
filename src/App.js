import './App.css';

import React, { useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {


  // const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  

  useEffect(() => {
    const filterHandler = () =>{
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter(todo => todo.completed === true))
          break;
        
        case "uncompleted":
          setFilteredTodos(todos.filter(todo => todo.completed === false))
          break;
  
        default:
          setFilteredTodos(todos)
          break;
      }
    }

    filterHandler();
  }, [status, todos])

  return (
    <div className="App">
      <header>
        <h1>Ou's Todo List</h1>
      </header>
      
      
      <Form 
        todos={todos} 
        setTodos={setTodos} 
        // inputText={inputText} 
        // setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList 
        setTodos={setTodos} 
        todos={todos}
        filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
