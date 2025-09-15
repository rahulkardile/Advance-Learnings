import { Component, h, State } from '@stencil/core';
import { AuthService } from "../services/auth-service"

@Component({
  tag: 'todo-list',
  styleUrl: 'todo-list.css',
})
export class TodoList {
  @State() todos: any[] = [];
  @State() newTask = '';

  componentWillLoad() {
    if (!AuthService.isLoggedIn()) {
      location.href = '/login';
    }
    this.loadTodos();
  }

  async loadTodos() {
    const res = await fetch('https://dummyjson.com/todos/user/1');
    const data = await res.json();
    this.todos = data.todos || [];
  }

  async addTodo() {
    if (!this.newTask.trim()) return;
    const res = await fetch('https://dummyjson.com/todos/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ todo: this.newTask, completed: false, userId: 1 }),
    });
    const data = await res.json();
    this.todos = [data, ...this.todos];
    this.newTask = '';
  }

  async toggle(todo) {
    const res = await fetch(`https://dummyjson.com/todos/${todo.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: !todo.completed }),
    });
    const updated = await res.json();
    this.todos = this.todos.map(t => t.id === todo.id ? updated : t);
  }

  async deleteTodo(todo) {
    await fetch(`https://dummyjson.com/todos/${todo.id}`, { method: 'DELETE' });
    this.todos = this.todos.filter(t => t.id !== todo.id);
  }

  render() {
    return (
      <div class="todo-container">
        <h2>Your Todos</h2>
        <div class="todo-header">
          <input
            placeholder="Add new task"
            value={this.newTask}
            onInput={e => this.newTask = (e.target as HTMLInputElement).value}
          />
          <button onClick={() => this.addTodo()}>Add</button>
        </div>
        <ul>
          {this.todos.map(todo =>
            <li class={todo.completed ? 'done' : ''}>
              <input type="checkbox" checked={todo.completed} onChange={() => this.toggle(todo)} />
              {todo.todo}
              <button onClick={() => this.deleteTodo(todo)}>🗑</button>
            </li>
          )}
        </ul>
        <button onClick={() => AuthService.logout()}>Logout</button>
      </div>
    );
  }
}
