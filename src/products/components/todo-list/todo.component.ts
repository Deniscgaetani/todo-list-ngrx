import { Component, OnInit } from "@angular/core";
import { Todo } from "../../models/todo.model";
import { Store } from "@ngrx/store";
import * as fromStore from "../../store";
import { Observable } from "rxjs";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { TodoDialogComponent } from "../todo-list-dialog/todo-dialog.component";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"]
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  selectedTodo: Todo;
  constructor(
    private store: Store<fromStore.ProductsState>,
    public dialog: MatDialog
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
  edit(todo: Todo, name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    console.log("todo:::", todo);
    const editTodo = { name: name, id: todo.id };
    this.store.dispatch(new fromStore.UpdateTodo(editTodo));
  }
  delete(todo: Todo): void {
    this.store.dispatch(new fromStore.RemoveTodo(todo));
  }
  onSelectTodo(todo: Todo): void {
    this.selectedTodo = todo;
    console.log("selected Todo:::", this.selectedTodo);
  }
  isVisible (todo: Todo) {
    if (todo == this.selectedTodo) {
      return true;
    } else {
      return false;
    }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(TodoDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }
}
