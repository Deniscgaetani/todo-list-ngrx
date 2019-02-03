import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Todo } from "../../models/todo.model";
// rxjs imports
import { catchError } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable()
export class TodoService {
  // URL to web api
  private todosUrl = "api/todos";

  constructor(private http: HttpClient) {}

  /** GET todos from the server */
  getTodos(): Observable<Todo[]> {
    return this.http
      .get<Todo[]>(this.todosUrl)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
  //////// Save methods //////////

  /** POST: add a new todo to the server */
  addTodo(payload: Todo): Observable<Todo> {
    return this.http
      .post<Todo>(this.todosUrl, payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
  /** PUT: update the todo on the server */
  updateTodo(payload: Todo | number): Observable<any> {
    const id = typeof payload === "number" ? payload : payload.id;
    const url = `${this.todosUrl}/${id}`;
    return this.http
      .put<Todo>(url, payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  /** DELETE: delete the todo from the server */
  deleteTodo(payload: Todo | number): Observable<Todo> {
    const id = typeof payload === "number" ? payload : payload.id;
    const url = `${this.todosUrl}/${id}`;
    return this.http
      .delete<Todo>(url)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
