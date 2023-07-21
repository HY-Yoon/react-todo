import React from 'react';

export default function TodoInput({ todo, setTodo, handleInsert }) {
  return (
    <>
      <input
        type="text"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleInsert();
        }}
      >
        +
      </button>
    </>
  );
}
