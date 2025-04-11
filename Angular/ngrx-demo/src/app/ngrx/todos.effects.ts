import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, switchMap } from 'rxjs';
import * as TodosActions from './todos.actions';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../interfaces/todo.model';

@Injectable()
export class TodosEffects {
  private actions$ = inject(Actions);
  private http = inject(HttpClient);
  private url = 'https://jsonplaceholder.typicode.com/todos';

  loadMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodosActions.loadTodolist),
      switchMap((payload) => {
        return this.http.get<Todo[]>(this.url);
      }),
      map((todos: Todo[]) => {
        return TodosActions.loadTodosSuccess({ todolist: todos });
      }),
      catchError((err) => {
        return of(TodosActions.loadTodosFailure({ err }));
      })
    ); // switchMap, concatMap, mergeMap
  });
}
