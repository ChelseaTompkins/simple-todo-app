import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let component;
  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [FormsModule]
    });
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with no todos', () => {
    expect(component.todos.length).toBe(0);
  });

  it('should add a new todo', () => {
    component.newTodo = 'laundry';
    component.addTodo();
    expect(component.todos.length).toBe(1);
  });

  it('should clear a todo', () => {
    component.newTodo = 'a';
    component.addTodo();
    component.newTodo = 'b';
    component.addTodo();
    component.newTodo = 'c';
    component.addTodo();

    component.deleteTodo(1);

    expect(component.todos).toEqual(['a', 'c']);
  });
});
