import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from '../interfaces/todo.model';

const selectTodos = createFeatureSelector<TodoState>('todos');

export const getTodoList = createSelector(
  selectTodos,
  (todoState: TodoState) => todoState.todolist
);
