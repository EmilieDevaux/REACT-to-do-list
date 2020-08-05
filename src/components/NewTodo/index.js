import React from 'react';
import '../List/style.scss';

const NewToDo = (props) => {
  const { task, id } = props;
  return (
  <div className="newtodo">
    <ul>
      <li
        key={id}
        className="task"
      >
        <input type="checkbox" />{task}
      </li>

    </ul>
  </div>
  );
};

export default NewToDo;
