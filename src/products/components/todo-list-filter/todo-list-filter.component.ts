import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Todo } from "../../models/todo.model";
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: "app-todo-list-filter",
  templateUrl: "./todo-list-filter.component.html",
  styleUrls: ["./todo-list-filter.component.scss"]
})
export class TodoListFilterComponent implements OnChanges {
  // Inputs
  @Input() todo: Observable<Todo[]>;
  // Outputs

  constructor() {}
  ngOnChanges(changes: SimpleChanges) {}

  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  applyFilter(filterValue: string) {
    // const todos$ = this.todo.pipe(
    //   filter(num => num:0 % 2 === 0)
    // );
    // const todos = this.todo;
    // console.log("Todo:::", this.todo);
    // const todos = this.todo.filter(todo => todo.name == filterValue);
    // console.log("Todo:::", todos)
    // filterValue = filterValue.trim(); // Remove whitespace
    // filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    // console.log("valor do filtro:::", filterValue);
  }
}
