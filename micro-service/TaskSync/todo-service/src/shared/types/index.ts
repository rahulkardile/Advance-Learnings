export interface User {
  id: string;
  name: string;
  email: string;
}

export interface TodoDocument extends Document {
  title: string;
  description?: string;
  completed: boolean;
  username: string; 
}

export interface TodoCreatedEvent {
  type: 'TODO_CREATED';
  payload: TodoDocument;
}

