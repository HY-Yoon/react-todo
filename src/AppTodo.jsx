import React, { useEffect, useReducer, useState } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import todoReducer from './reducer/todo-reducer';
import style from './css/todo.module.css'

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
      <div className={style.status_box}>
        <button
          onClick={() => {
            setViewType('all');
          }}
          className={viewType === 'all' ? style.active : ''}
        >
          All
        </button>
        <hr />
        <button
          onClick={() => {
            setViewType('active');
          }}
          className={viewType === 'active' ? style.active : ''}
        >
          Active
        </button>
        <hr />
        <button
          onClick={() => {
            setViewType('complete');
          }}
          className={viewType === 'complete' ? style.active : ''}
        >
          Complete
        </button>
      </div>
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
