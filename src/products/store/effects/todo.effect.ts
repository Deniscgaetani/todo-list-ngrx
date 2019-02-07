import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

import { Effect, Actions, toPayload } from "@ngrx/effects";

import * as todoActions from "../actions/todo.action";
import * as fromServices from "../../shared/services";
// rxjs imports
import { map, switchMap, catchError, exhaustMap } from "rxjs/operators";
import { of } from "rxjs/observable/of";
import { TodoCreateDialogComponent } from "src/products/components";
import { empty } from "rxjs/observable/empty";

@Injectable()
export class TodosEffects {
  constructor(
    private actions$: Actions,
    public dialog: MatDialog,
    private todoService: fromServices.TodoService
  ) {}

  @Effect()
  loadTodos$ = this.actions$.ofType(todoActions.GET_TODOS).pipe(
    switchMap(() => {
      return this.todoService.getTodos().pipe(
        map(todos => new todoActions.GetTodosSuccess(todos)),
        catchError(error => of(new todoActions.GetTodosFail(error)))
      );
    })
  );

  @Effect()
  createTodo$ = this.actions$.ofType(todoActions.CREATE_TODO).pipe(
    map((action: todoActions.CreateTodo) => action.payload),
    switchMap(todo => {
      return this.todoService.addTodo(todo).pipe(
        map(todo => new todoActions.CreateTodoSuccess(todo)),
        catchError(error => of(new todoActions.CreateTodoFail(error)))
      );
    })
  );
  // @Effect()
  // createTodoDialogOpen$ = this.actions$
  //   .ofType(todoActions.CREATE_TODO_DIALOG_OPEN)
  //   .pipe(
  //     map((action: todoActions.CreateTodoDialogOpenAction) => action),
  //     switchMap(() => of(this.dialog.open(TodoCreateDialogComponent)))
  //   );

  // @Effect()
  // createTodoDialogOpen$ = this.actions$
  //   .ofType(todoActions.CREATE_TODO_DIALOG_OPEN)
  //   .pipe(
  // switchMap(() => of(this.dialog.open(TodoCreateDialogComponent)))
  // switchMap(todo => {
  //   console.log(todo);
  // })
  // );

  @Effect()
  updateTodo$ = this.actions$.ofType(todoActions.UPDATE_TODO).pipe(
    map((action: todoActions.UpdateTodo) => action.payload),
    switchMap(todo => {
      return this.todoService.updateTodo(todo).pipe(
        map(todo => new todoActions.UpdateTodoSuccess(todo)),
        catchError(error => of(new todoActions.UpdateTodoFail(error)))
      );
    })
  );

  @Effect()
  removeTodo$ = this.actions$.ofType(todoActions.REMOVE_TODO).pipe(
    map((action: todoActions.RemoveTodo) => action.payload),
    switchMap(todo => {
      return this.todoService.deleteTodo(todo).pipe(
        map(() => new todoActions.RemoveTodoSuccess(todo)),
        catchError(error => of(new todoActions.RemoveTodoFail(error)))
      );
    })
  );
}
