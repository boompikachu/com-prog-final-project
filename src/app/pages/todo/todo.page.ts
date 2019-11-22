import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { TodoProvider } from '../../../providers/provider';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
  taskList: string[] = [];
  newTask: string = "";

  ngOnInit() {
    this.getTodo()
  }

  public onlineTask$: Observable<any>;

  constructor(private todoProvider: TodoProvider) {}

  getTodo() {
    this.onlineTask$ = this.todoProvider.getTodo();
  }

  async postTodo(task: string) {
    this.todoProvider.postTodo(task).pipe(catchError(val => {
      this.getTodo()
      this.newTask = "";
      return of(val)
    })).subscribe(v => {
      this.getTodo()
      this.newTask = "";
    });
  }

  async deleteTodo(task: string) {
    this.todoProvider.deleteTodo(task).pipe(catchError(val => {
      this.getTodo();
      return of(val)
    })).subscribe(v => {
      this.getTodo();
    });
  }

  async taskDone(index: number) {
    await this.taskList.splice(index,1)
  }
}
