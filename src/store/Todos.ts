import { makeAutoObservable } from 'mobx';

interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

class Todo {
  todos: ITodo[] = [
    {
      id: 'b4c6368c-e8f6-4528-a473-88616014c775',
      title: 'Todo 1',
      completed: false,
    },
    {
      id: 'cce877a1-e16f-421e-9bf3-6535a40e7b89',
      title: 'Todo 2',
      completed: false,
    },
    {
      id: '76bdc2e8-61c1-4de1-962e-973f4da88cd3',
      title: 'Todo 3',
      completed: false,
    },
  ];
  constructor() {
    makeAutoObservable(this);
  }

  addTodo = (id: string, title: string) => {
    this.todos.push({
      id,
      title,
      completed: false,
    });
  };
  removeTodo = (id: string) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  };
  toggleTodo = (id: string) => {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
  };
}

export default new Todo();
