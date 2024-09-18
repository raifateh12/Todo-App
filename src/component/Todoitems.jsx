import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../Store/TodoItemsStore";
import { useContext } from "react";
function Todoitems() {
  const { todoItems , DeleteItem } = useContext(TodoItemsContext);
  
  
  return (

    <div>
      {todoItems.map((item) => (
        <TodoItem key={item.TodoName} TodoName={item.TodoName} TodoExpenses={item.TodoExpenses} TodoDate={item.TodoDate} onDeleteClicked = {DeleteItem} />
      ))}
    </div>
  );
}
export default Todoitems;
