import { TodoCreateDialogComponent } from "./todo-list-create-dialog/todo-create-dialog.component";
import { TodoFormComponent } from "./todo-form/todo-form.component";
import { TodoToolbarComponent } from './todo-toolbar/todo-toolbar.component';
import { TodoSpinnerComponent } from './todo-spinner/todo-spinner.component';

export const components: any[] = [
  TodoCreateDialogComponent,
  TodoFormComponent,
  TodoToolbarComponent,
  TodoSpinnerComponent
];

export * from "./todo-form/todo-form.component";
export * from "./todo-list-create-dialog/todo-create-dialog.component";
export * from "./todo-toolbar/todo-toolbar.component";
export * from "./todo-spinner/todo-spinner.component";
