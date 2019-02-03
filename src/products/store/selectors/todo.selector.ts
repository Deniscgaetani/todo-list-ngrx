import { createSelector } from "@ngrx/store";
import * as fromFeature from "../reducers";
import * as fromReducers from "../reducers/todo.reducer";

export const getTodoState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductsState) => state.todos
);

export const getTodosEntities = createSelector(
  getTodoState,
  fromReducers.getTodosEntities
);

export const getAllTodos = createSelector(
  getTodosEntities,
  entities => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
  }
);

export const getTodosLoaded = createSelector(
  getTodoState,
  fromReducers.getTodosLoaded
);
export const getTodosLoading = createSelector(
  getTodoState,
  fromReducers.getTodosLoading
);
