import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Component, Inject} from '@angular/core';
import { TodoComponent } from '../todo-list/todo.component';
import * as fromStore from "../../store";
import { Store } from "@ngrx/store";
import { Todo } from 'src/products/models/todo.model';

@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html',
  styleUrls: ['./todo-dialog.component.scss'],
})
export class TodoDialogComponent {
  constructor(public dialogRef: MatDialogRef<TodoComponent>,
              private store: Store<fromStore.ProductsState>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.store.dispatch(new fromStore.CreateTodo({ name } as Todo));
  }
}
