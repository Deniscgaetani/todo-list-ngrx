import { Component, OnInit } from "@angular/core";
import { Todo } from "../../models/todo.model";
import { Store } from "@ngrx/store";
import * as fromStore from "../../store";
import { Observable } from "rxjs";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { TodoCreateDialogComponent } from "../../components/todo-list-create-dialog/todo-create-dialog.component";
import {
  FormControl,
  FormGroup,
  FormArray,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"]
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  selectedTodo: Todo;
  form = this.fb.group({
    name: ['', Validators.required],
  });
  constructor(
    private store: Store<fromStore.ProductsState>,
    public dialog: MatDialog,
    private fb: FormBuilder
  ) {}
  todos$: Observable<Todo[]>;

  ngOnInit() {
    this.todos$ = this.store.select(fromStore.getAllTodos);
    this.store.dispatch(new fromStore.GetTodos());
  }


  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.store.dispatch(new fromStore.CreateTodo({ name } as Todo));
  }
  edit(todo: Todo): void {
    // console.log("event:::", event);
    //const editTodo = { name: name.value.name, id: todo.id };
    this.store.dispatch(new fromStore.UpdateTodo(todo));
  }
  delete(todo: Todo): void {
    const remove = window.confirm('Este Todo sera removido, você tem certeza?');
    if (remove) {
    this.store.dispatch(new fromStore.RemoveTodo(todo));
    }
  }
  onSelectTodo(todo: Todo): void {
    this.selectedTodo = todo;
  }
  isVisible (todo: Todo) {
    if (todo == this.selectedTodo) {
      return true;
    } else {
      return false;
    }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(TodoCreateDialogComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
    this.store.dispatch(new fromStore.CreateTodoDialogOpenAction());
  }
}
