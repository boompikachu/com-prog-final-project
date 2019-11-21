import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TempProvider } from '../../../providers/provider';
import { Temp } from '../../../models/model'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {

  ngOnInit() {
  }

  public temp$: Observable<Temp>;
  constructor(private tempProvider: TempProvider) {}
  getTemp() {
    this.temp$ = this.tempProvider.getTemp();
  }

}

