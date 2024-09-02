import TodoButtons from "./TodoButtons";

function ListItem({ ind, todo, removeTodo }) {
  return (
    <li
      key={ind}
      className="text-black text-xl mb-2 flex items-center justify-between pl-2  border border-b-gray-400 rounded-l-xl"
    >
      {todo}
      <TodoButtons removeTodo={removeTodo} />{" "}
    </li>
  );
}

export default ListItem;
