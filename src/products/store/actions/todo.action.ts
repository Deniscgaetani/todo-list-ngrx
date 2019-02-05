import { Todo } from "../../models/todo.model";
import { Action } from "@ngrx/store";

export const GET_TODOS = "[Todo] Get All Todos";
export const GET_TODOS_SUCCESS = "[Todo] Get All Todos Sucess";
export const GET_TODOS_FAIL = "[Todo] Get All Todos Fail";

export class GetTodos implements Action {
  readonly type = GET_TODOS;
}

export class GetTodosSuccess implements Action {
  readonly type = GET_TODOS_SUCCESS;
  constructor(public payload: Todo[]) {}
}

export class GetTodosFail implements Action {
  readonly type = GET_TODOS_FAIL;
  constructor(public payload: any) {}
}
// create pizza
export const CREATE_TODO = "[Products] Create Todo";
export const CREATE_TODO_FAIL = "[Products] Create Todo Fail";
export const CREATE_TODO_SUCCESS = "[Products] Create Todo Success";
export const CREATE_TODO_DIALOG_OPEN = "[Products] Open create Todo dialog";
export class CreateTodo implements Action {
  readonly type = CREATE_TODO;
  constructor(public payload: Todo) {}
}

export class CreateTodoFail implements Action {
  readonly type = CREATE_TODO_FAIL;
  constructor(public payload: any) {}
}

export class CreateTodoSuccess implements Action {
  readonly type = CREATE_TODO_SUCCESS;
  constructor(public payload: Todo) {}
}


export class CreateTodoDialogOpenAction implements Action {
  readonly type = CREATE_TODO_DIALOG_OPEN;
}
// Update todo
export const UPDATE_TODO = "[Products] Update Todo";
export const UPDATE_TODO_FAIL = "[Products] Update Todo Fail";
export const UPDATE_TODO_SUCCESS = "[Products] Update Todo Sucess";

export class UpdateTodo implements Action {
  readonly type = UPDATE_TODO;
  constructor(public payload: Todo) {}
}
export class UpdateTodoFail implements Action {
  readonly type = UPDATE_TODO_FAIL;
  constructor(public payload: any) {}
}
export class UpdateTodoSuccess implements Action {
  readonly type = UPDATE_TODO_SUCCESS;
  constructor(public payload: Todo) {}
}

// remove pizza
export const REMOVE_TODO = "[Products] Remove Todo";
export const REMOVE_TODO_FAIL = "[Products] Remove Todo Fail";
export const REMOVE_TODO_SUCCESS = "[Products] Remove Todo Success";
export const REMOVE_TODO_CONFIRM_DIALOG_OPEN =
  "[Products] Remove todo confirm dialog open";

export class RemoveTodo implements Action {
  readonly type = REMOVE_TODO;
  constructor(public payload: Todo) {}
}

export class RemoveTodoFail implements Action {
  readonly type = REMOVE_TODO_FAIL;
  constructor(public payload: any) {}
}

export class RemoveTodoSuccess implements Action {
  readonly type = REMOVE_TODO_SUCCESS;
  constructor(public payload: Todo) {}
}
export class RemoveTodoConfirmDialogOpen implements Action {
  readonly type = REMOVE_TODO_CONFIRM_DIALOG_OPEN;
  constructor(
    public payload: {
      cancel?: Action;
      delete: Action;
      text: string;
      title: string;
    }
  ) {}
}

export type todosAction =
  | GetTodos
  | GetTodosSuccess
  | GetTodosFail
  | CreateTodo
  | CreateTodoFail
  | CreateTodoSuccess
  | CreateTodoDialogOpenAction
  | UpdateTodo
  | UpdateTodoFail
  | UpdateTodoSuccess
  | RemoveTodo
  | RemoveTodoFail
  | RemoveTodoSuccess
  | RemoveTodoConfirmDialogOpen;
