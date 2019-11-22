import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Temp } from "../models/model"
import { Todo } from "../models/model"

@Injectable()
export class TempProvider {


    private tempURL = "http://api.openweathermap.org/data/2.5/forecast?zip=10330,th&APPID=7743f38ce634083abe786e2d679955e3&units=metric"
    constructor(public http: HttpClient) {}

    getTemp() {
        return this.http.get<Temp>(this.tempURL)
    }

    

}

@Injectable()
export class TodoProvider {
    private todoURL = "https://cors-anywhere.herokuapp.com/https://com-prog-final-project.herokuapp.com"

    constructor(public http: HttpClient) {}

    getTodo() {
        return this.http.get<any>("https://cors-anywhere.herokuapp.com/" + this.todoURL + "/get")
    }
    postTodo(task: string) {
        return this.http.get<any>(this.todoURL + "/post?task_name=" + task)
    }
    deleteTodo(task: string) {
        return this.http.get<any>(this.todoURL + "/delete?task_name" + task)
    }
}