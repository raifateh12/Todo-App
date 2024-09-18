import { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { TodoItemsContext } from "../Store/TodoItemsStore";
function TodoItem({ TodoName, TodoExpenses , TodoDate,onDeleteClicked }) {
const {DeleteItem} = useContext(TodoItemsContext)
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">{TodoName}</div>
        <div className="col-3">{TodoExpenses}PKR</div>
        <div className="col-3">{TodoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger" onClick={()=>DeleteItem(TodoName)}><MdDeleteOutline /></button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
