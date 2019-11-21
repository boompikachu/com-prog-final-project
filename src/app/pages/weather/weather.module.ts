import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeatherPageRoutingModule } from './weather-routing.module';

import { WeatherPage } from './weather.page';

import { HttpClientModule } from '@angular/common/http';
import { TempProvider } from '../../../providers/provider';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    WeatherPageRoutingModule
  ],
  declarations: [WeatherPage],
  providers: [TempProvider]
})
export class WeatherPageModule {}
