
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'', children:[
      { path:'',redirectTo:'ssss',pathMatch:'full'},
      { path:'ssss',component:HomeComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRouting { }

export const routeds = [
    HomeComponent
]
