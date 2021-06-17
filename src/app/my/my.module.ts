import { NgModule } from '@angular/core';
import { PublicModule } from '../public/public.module';//公用组件引入

import { MyRouting,routeds } from './my.routing';

@NgModule({
  declarations: [
    ...routeds
  ],
  imports: [
    PublicModule,
    MyRouting,
  ],
  providers: [],
  bootstrap: []
})
export class MyModule { }
