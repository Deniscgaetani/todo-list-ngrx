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
  selector: "app-todo-form",
  templateUrl: "./todo-form.component.html",
  styleUrls: ["./todo-form.component.scss"],
  
})
export class TodoFormComponent implements OnChanges {
  form = this.fb.group({
    name: ["", Validators.required]
  });
  // Inputs
  @Input() todo: Todo;
  // Outputs
  @Output() update = new EventEmitter<Todo>();
  @Output() remove = new EventEmitter<Todo>();

  selectedTodo: Todo;

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
  removeTodo(todo: Todo) {
    this.remove.emit(todo);
  }
  cancelTodo(todo: Todo, form: FormGroup) {
    this.update.emit(todo);
  }
  onSelectTodo(todo: Todo, event: any): void {
    this.selectedTodo = todo;
  }
  isVisible(todo: Todo) {
    if (todo == this.selectedTodo) {
      return true;
    } else {
      return false;
    }
  }
}
