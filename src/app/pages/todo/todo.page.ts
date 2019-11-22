import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  public tempTask$: Observable<any>;

  constructor(private todoProvider: TodoProvider) {}

  getTodo() {
    this.onlineTask$ = this.todoProvider.getTodo();
    // console.log("getTodoFromWeb")
    // console.log(this.onlineTask$)
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
