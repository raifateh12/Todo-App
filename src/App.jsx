import AddTodo from "./component/AddTodo";
import AppName from "./component/AppName";
import Todoitems from "./component/Todoitems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./component/WelcomeMessage";
import { TodoItemsContext } from "./Store/TodoItemsStore";
function App() {
  const [todoItems, settodoItem] = useState([]);
  const addNewItem = (TodoName, TodoExpenses , TodoDate) => {
   
    settodoItem((currentValue)=> [
        ...currentValue,
        { TodoName: TodoName, TodoExpenses :TodoExpenses , TodoDate: TodoDate },]);
   
 };
  const DeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(
      (item) => item.TodoName !== todoItemName
    );
    settodoItem(newTodoItems);
  };
  return (
    <TodoItemsContext.Provider value={{
      todoItems ,
       addNewItem,
      DeleteItem,}}>
    <center className="todo-container">
      <AppName />
      <AddTodo  />
       <WelcomeMessage />
      <div className="items-container">
        <Todoitems  />
      </div>
    </center>
    </TodoItemsContext.Provider>
  );
}
export default App;
