import * as fromActions from "../actions/todo.action";
import { Todo } from "../../models/todo.model";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

export interface TodoState extends EntityState<Todo> {
  loaded: boolean;
  loading: boolean;
}

export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

export const initialState: TodoState = adapter.getInitialState({
  loaded: false,
  loading: false
});

export function reducer(
  state = initialState,
  action: fromActions.todosAction
): TodoState {
  switch (action.type) {
    case fromActions.GET_TODOS: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }

    case fromActions.GET_TODOS_SUCCESS: {
      state = {...state, loading: false, loaded: true};
      return adapter.addAll(action.payload, state);
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
      return adapter.upsertOne(action.payload, state);
    }
    case fromActions.REMOVE_TODO_SUCCESS: {
      return adapter.removeOne(action.payload.id, state);
    }
  }

  return state;
}

export const getTodosLoading = (state: TodoState) => state.loading;
export const getTodosLoaded = (state: TodoState) => state.loaded;
export const getTodosEntities = (state: TodoState) => state.entities;
