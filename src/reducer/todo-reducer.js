export default function todoReducer(todo, action) {
  switch (action.type) {
    case 'checked': {
      const { id } = action;
      return todo.map((item) => {
        return {
          ...item,
          checked: item.id === id ? !item.checked : item.checked,
        };
      });
    }
    case 'insert': {
      const { todo: insertItem } = action;
      return [
        ...todo,
        {
          id: `${todo}_${Math.floor(Math.random() * 100)}`,
          checked: false,
          todo: insertItem,
        },
      ];
    }
    case 'delete': {
      const { id } = action;
      return todo.filter((item) => item.id !== id);
    }
    default: {
      throw Error(`알 수 없는 액션 타입이다 : ${action.type}`);
    }
  }
}
