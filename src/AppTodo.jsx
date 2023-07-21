import React, { useEffect, useReducer, useState } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import todoReducer from './reducer/todo-reducer';

const localStorage = window.localStorage;
const localList = JSON.parse(localStorage.getItem('todoList')) || [];
const localViewType = localStorage.getItem('viewType') || '';

export default function AppTodo() {
  const [todo, setTodo] = useState('');
  const [todoList, dispatch] = useReducer(todoReducer, localList);
  const [viewTodoList, setViewTodoList] = useState(todoList);
  const [viewType, setViewType] = useState(localViewType);

  const handleChecked = (e) => {
    const id = e.target.id;
    dispatch({ type: 'checked', id });
  };
  const handleInsert = () => {
    dispatch({ type: 'insert', todo });
    setTodo('');
  };
  const handleDelete = (id) => {
    dispatch({ type: 'delete', id });
  };

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
    localStorage.setItem('viewType', viewType);

    switch (viewType) {
      case 'active': {
        setViewTodoList(() => todoList.filter((item) => !item.checked));
        break;
      }
      case 'complete': {
        setViewTodoList(() => todoList.filter((item) => item.checked));
        break;
      }
      default: {
        setViewTodoList(todoList);
        break;
      }
    }
  }, [todoList, viewType]);

  return (
    <>
      <>
        <button
          onClick={() => {
            setViewType('all');
          }}
        >
          All
        </button>
        <hr />
        <button
          onClick={() => {
            setViewType('active');
          }}
        >
          Active
        </button>
        <hr />
        <button
          onClick={() => {
            setViewType('complete');
          }}
        >
          Complete
        </button>
      </>
      <TodoList
        todoList={viewTodoList}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
      <>
        <TodoInput todo={todo} setTodo={setTodo} handleInsert={handleInsert} />
      </>
    </>
  );
}
