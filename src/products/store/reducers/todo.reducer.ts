import * as fromActions from "../actions/todo.action";
import { Todo } from "../../models/todo.model";

export interface TodoState {
  entities: { [id: number]: Todo };
  loaded: boolean;
  loading: boolean;
}

export const initialState: TodoState = {
  entities: {},
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromActions.todosAction
): TodoState {
  switch (action.type) {
    case fromActions.GET_TODOS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromActions.GET_TODOS_SUCCESS: {
      const todos = action.payload;
      const entities = todos.reduce(
        (entities: { [id: number]: Todo }, todo: Todo) => {
          return {
            ...entities,
            [todo.id]: todo
          };
        },
        {
          ...state.entities
        }
      );
      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }

    case fromActions.GET_TODOS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    case fromActions.UPDATE_TODO_SUCCESS:
    case fromActions.CREATE_TODO_SUCCESS: {
      const todo = action.payload;
      const entities = {
        ...state.entities,
        [todo.id]: todo
      };
      return {
        ...state,
        entities
      };
    }
    case fromActions.REMOVE_TODO_SUCCESS: {
      const todo = action.payload;
      const { [todo.id]: removed, ...entities } = state.entities;
      return {
        ...state,
        entities
      };
    }
  }

  return state;
}

export const getTodosLoading = (state: TodoState) => state.loading;
export const getTodosLoaded = (state: TodoState) => state.loaded;
export const getTodosEntities = (state: TodoState) => state.entities;
