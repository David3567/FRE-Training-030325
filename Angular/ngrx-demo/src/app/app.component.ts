import { Component, inject } from '@angular/core';
import { Todo } from './interfaces/todo.model';
import { Store } from '@ngrx/store';
import * as TodosSelectors from './ngrx/todos.selectors';
import * as TodosActions from './ngrx/todos.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  private store = inject(Store);
  todos: Todo[] = [];

  ngOnInit(): void {
    this.store.select(TodosSelectors.getTodoList).subscribe((todos) => {
      this.todos = todos;
    });
    // this.store.dispatch(TodosActions.initTodos());
    this.store.dispatch(TodosActions.loadTodolist());
  }
}
