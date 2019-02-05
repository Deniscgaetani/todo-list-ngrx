import { TodoCreateDialogComponent } from "./todo-list-create-dialog/todo-create-dialog.component";
import { TodoItemDeleteComponent } from './todo-item-delete/todo-item-delete.component';
import { TodoItemEditComponent } from './todo-item-edit/todo-item-edit.component';
import {TodoListFilterComponent} from './todo-list-filter/todo-list-filter.component';

export const components: any[] = [TodoItemDeleteComponent, TodoCreateDialogComponent, TodoItemEditComponent, TodoListFilterComponent];

export * from "./todo-item-delete/todo-item-delete.component";
export * from "./todo-item-edit/todo-item-edit.component";
export * from "./todo-list-create-dialog/todo-create-dialog.component";
export * from "./todo-list-filter/todo-list-filter.component";
