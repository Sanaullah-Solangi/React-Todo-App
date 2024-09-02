import TodoButtons from "./TodoButtons";

function ListItem({ todo, removeTodo, editTodo }) {
  return (
    <li className="text-black text-xl mb-2 flex items-center justify-between pl-2  border border-b-gray-400 rounded-l-xl">
      {todo}
      <TodoButtons
        removeTodo={removeTodo}
        focusOnInputToEditTodo={editTodo}
      />{" "}
    </li>
  );
}

export default ListItem;
