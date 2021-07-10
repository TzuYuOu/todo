import { useState } from "react";


const Form = ({ todos, setTodos, setStatus}) => {

  const [inputText, setInputText] = useState("");

  const submitTodoHandler = (e) => {
    e.preventDefault();

    // check input is not empty
    if(inputText){
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Math.random()*1000 }
      ]);
    }
    
    setInputText("");
  }

  const statusHandler = (e) => {
    // console.log(e.target.value);
    setStatus(e.target.value);
  }

  return (
    <form action="">
      <input 
        type="text"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}

      />
      <button 
        type="submit"
        onClick={submitTodoHandler}
      >
        +
      </button>
      <div className="select">
        <select onChange={statusHandler} className="filter-todo" name="todos" id="">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}


export default Form;