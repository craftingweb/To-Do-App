// TodoItem will recieve todo's title in Home componentnt

import Check from "./Check";
const TodoItem = ({ todo, changeTodo }) => {
  return (
    <button
      className="flex items-center mb-4 rounded-2xl bg-gray-800 p-5 w-full"
      onClick={() => changeTodo(todo._id)}
    >
      {/* here flex make icon and title on same ine, then with items-center to center them; w-full will expend it in full width for button*/}
      <Check isCompleted={todo.isCompleted} />
      <span className={todo.isCompleted ? "line-through" : ""}>
        {todo.title}
      </span>
    </button>
  );
};
export default TodoItem;
