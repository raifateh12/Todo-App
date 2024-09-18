import React, { useContext } from 'react'
import './WelComeMessage.css'
import { TodoItemsContext } from '../Store/TodoItemsStore';

const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    <div>
      {todoItems.length === 0 && <h5>Enjoy Your Day</h5>}
    </div>
  )
}

export default WelcomeMessage
