import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
  OnInit,
  Inject
} from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormArray,
  FormBuilder,
  Validators
} from "@angular/forms";
import { Todo } from "../../models/todo.model";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

import * as fromStore from "../../store";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-todo-create-dialog",
  templateUrl: "./todo-create-dialog.component.html",
  styleUrls: ["./todo-create-dialog.component.scss"]
})
export class TodoCreateDialogComponent implements OnChanges {
  form = this.fb.group({
    name: ["", Validators.required]
  });

  constructor(
    public dialogRef: MatDialogRef<TodoCreateDialogComponent>,
    private store: Store<fromStore.ProductsState>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnChanges() {}
  public submit() {
    const todo: Todo = this.form.value;
    this.store.dispatch(new fromStore.CreateTodo(todo));
    this.dialogRef.close();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
