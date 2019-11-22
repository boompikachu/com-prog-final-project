import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { TodoProvider } from '../../../providers/provider';
import { HttpErrorResponse } from '@angular/common/http';

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
  public tempTask$: Observable<any>;

  constructor(private todoProvider: TodoProvider) {}

  getTodo() {
    this.onlineTask$ = this.todoProvider.getTodo();
    // console.log("getTodoFromWeb")
    // console.log(this.onlineTask$)
  }

  async postTodo(task: string) {
    this.todoProvider.postTodo(task).pipe(catchError(val => {
      console.log('error but ok')
      this.getTodo()
      this.newTask = "";
      return of(val)
    })).subscribe(v => {
      console.log('hihi', v)
      this.getTodo()
      this.newTask = "";
    });
    console.log("add")
  }


  async addNewTask(task: string) {
    if (this.newTask != "") {
      await this.taskList.push(task);
    }
    this.newTask = "";
  }

  async taskDone(index: number) {
    await this.taskList.splice(index,1)
  }
}
