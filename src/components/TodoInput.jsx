function TodoInput({ onClick, getTodo }) {
  return (
    <div className=" flex flex-1 justify-between w-full ">
      <input
        onKeyUp={getTodo}
        type="text"
        placeholder="Add your todo"
        className="todoInput bg-gray-100 txt text-3xl flex-1 text-black px-3 border-none"
      />
      <button
        onClick={onClick}
        className="addBtn  text-white text-2xl font-medium p-2 px-3"
      >
        add todo
      </button>
    </div>
  );
}
export default TodoInput;
