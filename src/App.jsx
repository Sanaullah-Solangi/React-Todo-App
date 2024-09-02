import "./App.css";
import { useState, useRef } from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import ListItem from "./components/ListItem";

function App() {
  const [todosArr, updateTodosArr] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const todoInputElem = useRef("");
  const flagToEditTodo = useRef(null);
  //! FUNCTION TO GET INPUT VALUE
  const getTodo = (event) => {
    setInputValue(event.target.value);
    if (event.code == "Enter" && flagToEditTodo.current == null) {
      addTodo();
      event.target.value = "";
    } else if (event.code == "Enter" && flagToEditTodo.current != null) {
      updateTodo();
      setInputValue("");
    }
  };
  // ! FUNCTION TO ADD TODOS IN LIST
  const addTodo = () => {
    updateTodosArr([...todosArr, inputValue]);
    todoInputElem.current.style.backgroundColor = "#F3F4F6";
    setInputValue("");
  };
  //! FUNCTION TO DELETE TODO
  const removeTodo = (ind) => {
    const deletedTodo = todosArr.splice(ind, ind + 1);
    updateTodosArr([...todosArr]);
  };
  //! FUNCTION TO EDIT TODO
  const focusOnInputToEditTodo = (ind) => {
    todoInputElem.current.style.backgroundColor = "rgba(0,0,0,0.3)";
    todoInputElem.current.focus();
    flagToEditTodo.current = ind;
  };

  //!FUNCTION TO UPDATE TODO'S VALUE
  const updateTodo = () => {
    todosArr.map((todo, index) => {
      if (index == flagToEditTodo.current) {
        todosArr[index] = inputValue;
        updateTodosArr([...todosArr]);
      }
      todoInputElem.current.style.backgroundColor = "#F3F4F6";
      flagToEditTodo.current = null;
    });
  };
  return (
    <div className="todoContainer m-auto pb-4 rounded-2xl overflow-hidden">
      {/* HEADER */}
      <Header />
      {/* TODO INPUT & ADD BTN*/}
      <TodoInput
        inputRef={todoInputElem}
        inputValue={inputValue}
        getTodo={getTodo}
        addTodo={() => {
          addTodo();
        }}
      />
      {/* TODO LIST */}
      <ul>
        {todosArr.map((todo, ind) => {
          return (
            <ListItem
              todo={todo}
              key={ind}
              removeTodo={() => removeTodo(ind)}
              editTodo={() => focusOnInputToEditTodo(ind)}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
