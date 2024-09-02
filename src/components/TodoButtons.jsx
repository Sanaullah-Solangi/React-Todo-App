function TodoButtons({ removeTodo }) {
  return (
    <div className="flex items-center justify-center">
      <button className="bg-red-400 px-3 py-2 flex items-center justify-center">
        <i
          className="fa-solid fa-pen-to-square text-white"
          style={{ fontSize: "20px" }}
        ></i>
      </button>
      <button
        onClick={removeTodo}
        className="bg-red-400 px-3 py-2 flex items-center justify-center"
      >
        <i
          className="fa-solid fa-trash text-white"
          style={{ fontSize: "20px" }}
        ></i>
      </button>
    </div>
  );
}
export default TodoButtons;
