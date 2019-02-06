import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy
} from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormArray,
  FormBuilder,
  Validators
} from "@angular/forms";
import { Todo } from "../../models/todo.model";

@Component({
  selector: "app-todo-item-edit",
  templateUrl: "./todo-item-edit.component.html",
  styleUrls: ["./todo-item-edit.component.scss"]
})
export class TodoItemEditComponent implements OnChanges {
  form = this.fb.group({
    name: ["", Validators.required]
  });
  // Inputs
  @Input() todo: Todo;
  // Outputs
  @Output() update = new EventEmitter<Todo>();

  constructor(private fb: FormBuilder) {}
  ngOnChanges(changes: SimpleChanges) {
    if (this.todo && this.todo.id) {
      this.form.patchValue(this.todo);
    }
  }

  updateTodo(todo: Todo, form: FormGroup) {
    const editTodo = { name: form.value.name, id: todo.id };
    this.update.emit(editTodo);
  }
  cancelTodo(todo: Todo, form: FormGroup) {
    this.update.emit(todo);
  }
}
