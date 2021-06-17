import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyComponent } from './my/my.component';

const routes: Routes = [
  { path:'',redirectTo:'a2',pathMatch:'full' },
  { path:'a2',component:MyComponent }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyRouting { }

export const routeds = [
  MyComponent
]
