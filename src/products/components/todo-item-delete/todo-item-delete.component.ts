import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Todo } from "../../models/todo.model";

@Component({
  selector: "app-todo-item-delete",
  templateUrl: "./todo-item-delete.component.html",
  styleUrls: ["./todo-item-delete.component.scss"]
})
export class TodoItemDeleteComponent implements OnChanges {
  // Inputs
  @Input() todo: Todo;
  // Outputs
  @Output() remove = new EventEmitter<Todo>();

  constructor(private fb: FormBuilder) {}
  ngOnChanges(changes: SimpleChanges) {}

  removeTodo(todo: Todo) {
    this.remove.emit(todo);
  }
}
