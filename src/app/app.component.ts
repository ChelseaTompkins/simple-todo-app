import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple Todo App';
  newTodo = '';
  todos = JSON.parse(localStorage.getItem('todos')) || [];

  addTodo() {
    this.todos.push(this.newTodo);
    this.updateLocalStorage();
    this.newTodo = '';
  }

  deleteTodo(deleteTodoIndex: number) {
    this.todos.splice(deleteTodoIndex, 1);
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
