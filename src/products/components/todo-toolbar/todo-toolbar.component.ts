import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TodoCreateDialogComponent } from '../todo-list-create-dialog/todo-create-dialog.component';
import {todoToolbarAnimations} from './todo-toolbar.animations';
@Component({
  selector: 'app-todo-toolbar',
  templateUrl: 'todo-toolbar.component.html',
  styleUrls: ["./todo-toolbar.component.scss"],
  animations: [todoToolbarAnimations.fadeInOut]
})

export class TodoToolbarComponent implements OnInit {
  constructor(public dialog: MatDialog,
    ) { }

  ngOnInit() { }
  openDialog(): void {
    const dialogRef = this.dialog.open(TodoCreateDialogComponent, {
      width: "250px"
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
    // this.store.dispatch(new fromStore.CreateTodoDialogOpenAction());
  }
}

