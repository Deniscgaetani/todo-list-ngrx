import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';

import * as todoActions from '../actions/todo.action';
import * as fromServices from '../../shared/services';
// rxjs imports
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class TodosEffects {
  constructor(
    private actions$: Actions,
    private todoService: fromServices.TodoService
  ) {}

  @Effect()
  loadTodos$ = this.actions$.ofType(todoActions.GET_TODOS).pipe(
    switchMap(() => {
      return this.todoService
        .getTodos()
        .pipe(
          map(todos => new todoActions.GetTodosSuccess(todos)),
          catchError(error => of(new todoActions.GetTodosFail(error)))
        );
    })
  );

  @Effect()
  createTodo$ = this.actions$.ofType(todoActions.CREATE_TODO).pipe(
    map((action: todoActions.CreateTodo) => action.payload),
    switchMap(todo => {
      return this.todoService
        .addTodo(todo)
        .pipe(
          map(todo => new todoActions.CreateTodoSuccess(todo)),
          catchError(error => of(new todoActions.CreateTodoFail(error)))
        );
    })
  );

  @Effect()
  updateTodo$ = this.actions$.ofType(todoActions.UPDATE_TODO).pipe(
    map((action: todoActions.UpdateTodo) => action.payload),
    switchMap(todo => {
      return this.todoService
        .updateTodo(todo)
        .pipe(
          map(todo => new todoActions.UpdateTodoSuccess(todo)),
          catchError(error => of(new todoActions.UpdateTodoFail(error)))
        );
    })
  );

  @Effect()
  removeTodo$ = this.actions$.ofType(todoActions.REMOVE_TODO).pipe(
    map((action: todoActions.RemoveTodo) => action.payload),
    switchMap(todo => {
      return this.todoService
        .deleteTodo(todo)
        .pipe(
          map(() => new todoActions.RemoveTodoSuccess(todo)),
          catchError(error => of(new todoActions.RemoveTodoFail(error)))
        );
    })
  );
}