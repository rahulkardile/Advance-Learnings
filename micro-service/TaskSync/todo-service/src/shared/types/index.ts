export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Todo {
  id: string;
  title: string;
  userId: string;
  completed: boolean;
}

export interface TodoCreatedEvent {
  type: 'TODO_CREATED';
  payload: Todo;
}

