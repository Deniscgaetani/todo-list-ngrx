import { Component, OnInit, AfterViewInit } from "@angular/core";
import { todoSpinnerAnimations } from "./todo-spinner.animations";

@Component({
  selector: "app-todo-spinner",
  templateUrl: "todo-spinner.component.html",
  styleUrls: ["./todo-spinner.component.scss"],
  animations: [todoSpinnerAnimations.move]
})

export class TodoSpinnerComponent implements OnInit, AfterViewInit {
  constructor() {}
  ngOnInit() {}
  state = "in";
  ngAfterViewInit() {
    setTimeout(() => {
      this.state = "out";
    }, 0);
  }
  onEnd(event: any) {
    this.state = "in";
    if (event.toState === "in") {
      setTimeout(() => {
        this.state = "out";
      }, 0);
    }
  }
}
