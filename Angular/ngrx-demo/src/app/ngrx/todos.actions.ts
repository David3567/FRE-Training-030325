import { createAction, props } from '@ngrx/store';
import { Todo } from '../interfaces/todo.model';

export const initTodos = createAction('[TodoList] init todolist');

// load Todos;
export const loadTodolist = createAction('[TodoList] Load TodoList');

export const loadTodosSuccess = createAction(
  '[TodoList] Load TodoList success',
  // '[TodoList] Load TodoList',
  props<{ todolist: Todo[] }>()
);

export const loadTodosFailure = createAction(
  '[TodoList] Load TodoList failure',
  // '[TodoList] Load TodoList',
  props<{ err: string }>()
);
