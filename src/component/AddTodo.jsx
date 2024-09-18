import {  useContext, useRef } from "react";
import { BiMessageAltAdd } from "react-icons/bi";
import { TodoItemsContext } from "../Store/TodoItemsStore";
function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  const todoNameElements = useRef('');
  const dueDateElements = useRef('');
  const todoExpensesElements= useRef('')
  const handleAddButtonclicked = (event)=>{
    event.preventDefault();
    const TodoName = todoNameElements.current.value;
    const TodoExpenses =  todoExpensesElements.current.value; 
    const DueDate = dueDateElements.current.value;
    todoNameElements.current.value='';
    todoExpensesElements.current.value='';
    dueDateElements.current.value='';
    
    addNewItem(TodoName, TodoExpenses , DueDate)
   
  }
  return (
    <div className="container">
      <form className="row" onSubmit={handleAddButtonclicked}>
        <div className="col-4">
          <input ref={todoNameElements} type="text" placeholder="Enter Todo Here"   />
        </div>
        <div className="col-3">
          <input ref={todoExpensesElements} type="text" placeholder="Enter  Expenses"   />
        </div>
        <div className="col-3">
          <input ref={dueDateElements} type="date"  />
        </div>
        <div className="col-2">
          <button  className="btn btn-success" >
          <BiMessageAltAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
