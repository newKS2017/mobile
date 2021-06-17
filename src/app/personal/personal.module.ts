import { NgModule } from '@angular/core';
import { PublicModule } from '../public/public.module';//公用组件引入
import { FormsModule } from '@angular/forms';

import { PersonalRouting,routeds } from './personal.routing';

@NgModule({
  declarations: [
    ...routeds
  ],
  imports: [
    PublicModule,
    FormsModule,
    PersonalRouting,
  ],
  providers: [],
  bootstrap: []
})
export class PersonalModule { }
