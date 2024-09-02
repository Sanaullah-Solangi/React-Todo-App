import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import ListItem from "./components/ListItem";

function App() {
  const [todosArr, updateTodosArr] = useState([]);
  const [inputValue, setInputValue] = useState("");
  console.log(todosArr);
  const getTodo = (event) => {
    //! FUNCTION TO GET INPUT VALUE
    setInputValue(event.target.value);
    if (event.code == "Enter") {
      addTodo();
      event.target.value = "";
    }
  };
  // ! FUNCTION TO ADD TODOS IN LIST
  const addTodo = () => {
    updateTodosArr([...todosArr, inputValue]);
  };

  return (
    <div className="todoContainer m-auto pb-4 rounded-2xl overflow-hidden">
      {/* HEADER */}
      <Header />
      {/* TODO INPUT & ADD BTN*/}
      <TodoInput getTodo={getTodo} />
      {/* TODO LIST */}
      <ul>
        {todosArr.map((todo, ind) => {
          return <ListItem todo={todo} ind={ind} />;
        })}
      </ul>
    </div>
  );
}

export default App;
