import { Component, OnInit } from "@angular/core";
import { Todo } from "../../models/todo.model";
import { Store } from "@ngrx/store";
import * as fromStore from "../../store";
import { Observable } from "rxjs";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"]
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  constructor(private store: Store<fromStore.ProductsState>) {}
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
    const editTodo = { name: name, id: todo.id };
    this.store.dispatch(new fromStore.UpdateTodo(editTodo));
  }
  delete(todo: Todo): void {
    this.store.dispatch(new fromStore.RemoveTodo(todo));
  }
}
