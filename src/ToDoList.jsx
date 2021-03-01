import React from 'react';

const ToDoList = (props) => {
  return (
    <>
      <div className="todo_style">
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
        <i
          className="fas fa-edit"
          aria-hidden="true" 
          onClick = { () => {
            props.editTask(props.id, props.text)
          }}
          />
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default ToDoList;
