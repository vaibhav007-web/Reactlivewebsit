import React,{ useState,useEffect } from "react";
import './App.css';
//Importing Components
import Form from "./components/Form";

import TodoList from "./components/TodoList";

function App() {
 //State stuff
  const[inputText, setInputText] =useState("");
  const[todos, setTodos] = useState([]);
  const[status, setStatus] = useState("all");
  const[filteredTodos, setFilteredTodos] = useState([]);

  //use Effect
  useEffect(() =>{
    filterHandler();
  },[todos, status]);
  //functions
    const filterHandler = () => {
      switch(status){
        case'completed':
        setFilteredTodos(todos.filter((todo) => todos.completed === true))
          break;
          case'uncompleted':
          setFilteredTodos(todos.filter((todo) => todos.completed === false))
          break;
          default:
           setFilteredTodos(todos);
            break;
      }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos",JSON.stringify(todos));
    };
 

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') ===null){
      localStorage.setItem("todos",JSON.stringify([]));
  }else{
          localStorage.setItem("todos",JSON.stringify(todos));
  }
 };
    

  return (
    <div className="App">
    <header>
    <h1>Todo List</h1>
    </header>
    <Form 
    inputText={inputText} 
    todos={todos}
     setTodos={setTodos}
     setInputText={setInputText}
      setStatus={setStatus}
     
     />
  
    <TodoList
     filteredTodos={filteredTodos}
     setTodos={setTodos}
      todos={todos} />
    </div>
  );
}

export default App;
