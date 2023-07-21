import React from 'react';

export default function TodoList({ todoList, handleChecked, handleDelete }) {
  return (
    <ul className="todo_list">
      {todoList.length
        ? todoList.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                value={item.checked}
                id={item.id}
                onChange={handleChecked}
              />
              <label htmlFor={item.id}>{item.todo}</label>
              <button
                onClick={() => {
                  handleDelete(item.id);
                }}
              >
                -
              </button>
            </li>
          ))
        : ''}
    </ul>
  );
}
