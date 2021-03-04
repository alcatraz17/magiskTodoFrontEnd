import React, { useState, useEffect } from 'react'
import axios from "axios";
import ToDoList from "./ToDoList"

const App = () => {

  useEffect(() => {
    getItems();
  }, []);

  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editableId, setEditableId] = useState(null);

  const itemEvent = (event) => {
    setInputList(event.target.value);
    return event.target.value
  };

  const getItems = async () => {
    try {
      const { data } = await axios.get('https://magisk-todo-backend.herokuapp.com/details');
      const tasks = data.map((ele) => {
        const task = ele;
        return task;
      })
      // console.log(tasks);
      setItems([...tasks]);
    } catch (e) {
      console.error(e);
    }
  }

  const postItem = async () => {
    try {
      const body = {
        task: inputList
      }
      if (!inputList || /^\s*$/.test(inputList)) {
        setInputList("")
        return alert("Task can not be empty!");
      } else {
        const addTask = await axios.post('https://magisk-todo-backend.herokuapp.com/add', body);
        setInputList("");
      }
    } catch (e) {
      console.error(e)
    };
    getItems();
  }


  const deleteItem = async (_id) => {
    // const body = {
    //   "_id": _id
    // }
    // console.log(_id);
    try {
      const delTask = await axios.delete('https://magisk-todo-backend.herokuapp.com/del', { data: { _id } });
    } catch (e) {
      console.error(e)
    }
    getItems();
  };

  const editTask = (id, text) => {
    setEdit(true);
    setInputList(text);
    setEditableId(id);
  };


  const updateTodo = async () => {
    const body = {
      _id: editableId,
      task: inputList
    }
    if (!body.task) {
      alert("Task can not be empty!");
      setEdit(false);
      getItems();
      return;
    } else {
      try {
        const editTask = await axios.patch('https://magisk-todo-backend.herokuapp.com/edit', body);
      } catch (e) {
        console.error(e)
      }
    }

    setEdit(false);
    setInputList("");
    getItems();
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>Magisk ToDo</h1>
          <br />
          {!edit && (<div><input
            type="text"
            value={inputList}
            placeholder="Enter your task..."
            onChange={itemEvent}
          />
            <button onClick={postItem}> + </button>

            <ol>
              {items.map((itemValue, index) => {
                return (
                  <ToDoList
                    key={index}
                    id={itemValue._id}
                    onSelect={deleteItem}
                    editTask={(id, task) => {
                      editTask(id, task)
                    }}
                    text={itemValue.task}
                  />
                );
              })}
            </ol></div>)}
          {edit && (
            <div className="editForm"><input
              className= "editTodo"
              type="text"
              value={inputList}
              placeholder="Enter your task..."
              onChange={itemEvent}
            />
              <button onClick={updateTodo}> + </button>
              <i
                className="fas fa-undo"
                aria-hidden="true"
                onClick={() => {
                  setEdit(false);
                  setEditableId(null);
                  setInputList("")
                }}
              />

            </div>)}
        </div>
      </div>
    </>
  )
}

export default App
