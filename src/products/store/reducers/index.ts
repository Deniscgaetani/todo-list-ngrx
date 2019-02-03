import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";

import * as fromReducers from "./todo.reducer";

export interface ProductsState {
  todos: fromReducers.TodoState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  todos: fromReducers.reducer
};

export const getProductsState = createFeatureSelector<ProductsState>(
  "products"
);
