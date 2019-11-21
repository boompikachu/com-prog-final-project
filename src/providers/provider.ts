import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Temp } from "../models/model"

@Injectable()
export class TempProvider {
    private tempURL = "http://api.openweathermap.org/data/2.5/forecast?zip=10330,th&APPID=7743f38ce634083abe786e2d679955e3&units=metric"
    constructor(public http: HttpClient) {}

    getTemp() {
        return this.http.get<Temp>(this.tempURL)
    }
}