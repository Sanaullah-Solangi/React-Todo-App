import TodoButtons from "./TodoButtons";

function ListItem({ ind, todo }) {
  return (
    <li
      className="text-black text-2xl flex items-center justify-between pl-2  "
      key={ind}
    >
      {todo}
      <TodoButtons />{" "}
    </li>
  );
}

export default ListItem;
