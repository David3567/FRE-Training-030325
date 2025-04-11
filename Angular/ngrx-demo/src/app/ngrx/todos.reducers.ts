import { createReducer, on } from '@ngrx/store';
import * as TodoActions from './todos.actions';
import { TodoState } from '../interfaces/todo.model';

// const state: TodoState = {
//   err: '',
//   todolist: [
//     {
//       userId: 1,
//       id: 1,
//       title: 'delectus aut autem',
//       completed: false,
//     },
//     {
//       userId: 1,
//       id: 2,
//       title: 'quis ut nam facilis et officia qui',
//       completed: false,
//     },
//     {
//       userId: 1,
//       id: 3,
//       title: 'fugiat veniam minus',
//       completed: false,
//     },
//     {
//       userId: 1,
//       id: 4,
//       title: 'et porro tempora',
//       completed: true,
//     },
//   ],
// };

const state: TodoState = {
  err: '',
  todolist: [],
};

export const todoreducers = createReducer(
  state,
  on(TodoActions.initTodos, (state) => {
    return { ...state };
  }),
  on(TodoActions.loadTodosSuccess, (state, { todolist }): TodoState => {
    return {
      ...state,
      todolist: [...[...todolist].reverse()],
      err: '',
    };
  }),
  on(TodoActions.loadTodosFailure, (state, { err }): TodoState => {
    return {
      ...state,
      todolist: [],
      err,
    };
  })
);
