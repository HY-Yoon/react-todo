import React from 'react';
import style from '../css/inputBox.module.css'

export default function TodoInput({ todo, setTodo, handleInsert }) {
  return (
    <div className={style['input_box']}>
      <input
        type="text"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        onKeyUp={(e) => {
          if(e.code === 'Enter' && todo) handleInsert();
        }}
      />
      <button
        onClick={() => {
          handleInsert();
        }}
      >
        +
      </button>
    </div>
  );
}
