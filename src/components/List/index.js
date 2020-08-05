// == Import npm
import React from 'react';

import './style.scss';

const List = (props) => {
  const { list, checkTodo, deleteTodo, handleFavClick } = props;
  return (
    <ul className="todo-list">
      {list.map((todoObject) => {
        const goodClass = todoObject.done ? "task task-done" : "task";
        return (
          <div className="task-block" key={todoObject.id}>
          <span
              onClick={() => {
                handleFavClick(todoObject.id);
              }}
              className="task-fav-button"
            >
              {todoObject.favoris ? '★' : '☆'}
            </span>
          <li className={goodClass}>
            <input
              type="checkbox"
              checked={todoObject.done}
              onChange={() => {
                console.log("change");
                checkTodo(todoObject.id);
              }}
            />
            <span>{todoObject.label}</span>
            
          </li> 
          <div
              onClick={() => {
                deleteTodo(todoObject.id);
              }}
              className="task-delete-button"
            >
              x
            </div>
            </div>
        );
      })}
    </ul>
  );
};

export default List;
