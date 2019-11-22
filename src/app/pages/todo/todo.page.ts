import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoProvider } from '../../../providers/provider';
import { Todo } from '../../../models/model'


@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
  taskList: string[] = [];
  newTask: string = "";

 
  ngOnInit() {
  }

  public task$: Observable<Todo>
  constructor(private todoProvider: TodoProvider) {}
  getTodo() {
    this.task$ = this.todoProvider.getTodo();
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
