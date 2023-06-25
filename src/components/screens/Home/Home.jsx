import { useState } from "react";
import TodoItem from "../../item/TodoItem";
// creating an object
const data = [
  {
    _id: "1",
    title: "Finish the essay collaboration",
    // is infront of verb in order indicate that it is a boolean isCompleted, in our case task is not completed so we put false
    isCompleted: false,
  },
  {
    _id: "2",
    title: "Read next chapter of the book",
    isCompleted: false,
  },
  {
    _id: "3",
    title: "Sent the finished assignment",
    isCompleted: false,
  },
];
const Home = () => {
  const [todos, setTodos] = useState(data);
  // completed task that will recieve id of todo
  const changeTodo = (id) => {
    // destracturing array because we do not want to muttate original
    const copy = [...todos];
    // looking for id
    const current = copy.find((t) => t._id === id);
    current.isCompleted = !current.isCompleted;
    //rewriting array
    setTodos(copy);
    // passing to map of TodoItem
  };
  // h-screen - height of screen 100vh
  return (
    <div className="text-white w-4/5 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-8">Todo for junior</h1>
      {data.map((todo) => (
        // in order to show them in a new line we put them inside <div> and in order to get value we have use again {}
        //<div>{todo.title}</div>
        //for key also need to use item. (todo.)
        <TodoItem key={todo._id} todo={todo} changeTodo={changeTodo} />
      ))}
    </div>
  );
};
export default Home;
