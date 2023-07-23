import React from 'react';
import style from '../css/list.module.css'

export default function TodoList({ todoList, handleChecked, handleDelete }) {
  if(todoList.length) {
    return (
      <ul className={style['todo_list_box']}>
        {todoList.map((item) => (
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
                className={style.icon}
              >
                🗑
              </button>
            </li>
        ))}
      </ul>
    );
  }else{
    return (
      <div className={`${style['todo_list_box']} ${style['empty']}`}>
        <span className={style.icon}>⚠️</span> 할 일을 입력해주세요.
      </div>
    )
  }
  
}
