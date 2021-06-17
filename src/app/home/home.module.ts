import { NgModule } from '@angular/core';

import { HomeRouting,routeds } from './home.routing';
import { FormsModule } from '@angular/forms';
import { PublicModule } from '../public/public.module';//公用组件引入

@NgModule({
  declarations: [
    ...routeds
  ],
  imports: [
    FormsModule,
    HomeRouting,
    PublicModule
  ]
})
export class HomeModule { }
