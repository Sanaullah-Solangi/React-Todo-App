function TodoInput({ inputValue, getTodo, addTodo, inputRef }) {
  return (
    <div className=" flex justify-between w-full ">
      <input
        ref={inputRef}
        onChange={getTodo}
        onKeyUp={getTodo}
        type="text"
        placeholder="Add your todo"
        value={inputValue}
        className="todoInput bg-gray-100 txt text-3xl w-full text-black px-3 border-none"
      />
      <button
        onClick={addTodo}
        className="addBtn  text-white text-2xl font-medium p-2 px-3"
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
export default TodoInput;
