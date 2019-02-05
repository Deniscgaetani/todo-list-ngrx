import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { TodoComponent } from "../todo-list/todo.component";
import * as fromStore from "../../store";
import { Store } from "@ngrx/store";
import { Todo } from "src/products/models/todo.model";

@Component({
  selector: "app-todo-create-dialog",
  templateUrl: "./todo-create-dialog.component.html",
  styleUrls: ["./todo-create-dialog.component.scss"]
})
export class TodoCreateDialogComponent implements OnInit {
  public form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<TodoCreateDialogComponent>,
    private store: Store<fromStore.ProductsState>,
    private fb: FormBuilder
  ) {}
  ngOnInit() {
    this.form = this.fb.group({
      name: ["", Validators.required]
    });
  }
  public submit() {
    const todo: Todo = this.form.value;
    console.log(this.form.value)
    this.store.dispatch(new fromStore.CreateTodo(todo));
    this.dialogRef.close();
  }
  /* onNoClick(): void {
    this.dialogRef.close();
  }
  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.store.dispatch(new fromStore.CreateTodo({ name } as Todo));
  } */
}
