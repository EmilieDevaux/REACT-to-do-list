// == Import npm
import React from 'react';
import './style.scss';

const Input = (props) => {
  const { text, changeText, onTodoSubmit } = props;
  return (
    <form
      className="todo-form"
      onSubmit={(evt) => {
        evt.preventDefault();
        onTodoSubmit();
      }}
    >
      <h1 className="todo-title">Ma To-Do List</h1>
      <input
        type="text"
        placeholder="Ajoutez une tâche"
        className="todo-input"
        value={text}
        onChange={(evt) => {
          changeText(evt.target.value);
        }}
      />
    </form>
  );
};
export default Input;
