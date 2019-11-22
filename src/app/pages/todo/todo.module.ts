import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodoPageRoutingModule } from './todo-routing.module';

import { TodoPage } from './todo.page';

import { HttpClientModule } from '@angular/common/http';
import { TodoProvider } from '../../../providers/provider'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    TodoPageRoutingModule
  ],
  declarations: [TodoPage],
  providers: [TodoProvider]
})
export class TodoPageModule {}
