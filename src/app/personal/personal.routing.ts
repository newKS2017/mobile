import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalComponent } from './personal/personal.component';

const routes: Routes = [
  { path:'',redirectTo:'ps',pathMatch:'full' },
  { path:'ps',component:PersonalComponent }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRouting { }

export const routeds = [
  PersonalComponent
]
