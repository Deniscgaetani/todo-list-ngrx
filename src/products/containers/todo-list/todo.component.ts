import { Component, OnInit } from "@angular/core";
import { Todo } from "../../models/todo.model";
import { Store } from "@ngrx/store";
import * as fromStore from "../../store";
import { Observable } from "rxjs";
import { MatDialog } from "@angular/material";
import { TodoCreateDialogComponent } from "../../components/todo-list-create-dialog/todo-create-dialog.component";
import { FormBuilder, Validators } from "@angular/forms";
import { MatTableDataSource } from "@angular/material";
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ])
  ]
})
export class TodoComponent implements OnInit {
  displayedColumns = ["name"];
  todos: Todo[];
  selectedTodo: Todo;
  form = this.fb.group({
    name: ["", Validators.required]
  });
  constructor(
    private store: Store<fromStore.ProductsState>,
    public dialog: MatDialog,
    private fb: FormBuilder
  ) {}
  todos$: Observable<Todo[]>;
  loading$: Observable<boolean>;
  loaded$: Observable<boolean>;
  dataSource = new MatTableDataSource();

  ngOnInit() {
    this.todos$ = this.store.select(fromStore.getAllTodos);
    this.loading$ = this.store.select(fromStore.getTodosLoading);
    this.loaded$ = this.store.select(fromStore.getTodosLoaded);
    this.store.dispatch(new fromStore.GetTodos());
    this.todos$.subscribe(data => (this.dataSource.data = data));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.store.dispatch(new fromStore.CreateTodo({ name } as Todo));
  }

  edit(todo: Todo): void {
    this.store.dispatch(new fromStore.UpdateTodo(todo));
  }

  delete(todo: Todo): void {
    const remove = window.confirm("Este Todo sera removido, você tem certeza?");
    if (remove) {
      this.store.dispatch(new fromStore.RemoveTodo(todo));
    }
  }

  onSelectTodo(todo: Todo): void {
    this.selectedTodo = todo;
  }

  isVisible(todo: Todo) {
    if (todo == this.selectedTodo) {
      return true;
    } else {
      return false;
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TodoCreateDialogComponent, {
      width: "250px"
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
    this.store.dispatch(new fromStore.CreateTodoDialogOpenAction());
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
