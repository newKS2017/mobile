import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:'',redirectTo:'/login',pathMatch:'full' },
  { path:'login',component:LoginComponent },
  { path:'home',loadChildren:()=> import("./home/home.module").then(m=>m.HomeModule) },
  { path:'personal',loadChildren:()=> import("./personal/personal.module").then(m=>m.PersonalModule) },
  { path:'knowledge',loadChildren: () => import('./knowledge/knowledge.module').then(m => m.KnowledgeModule) },
  { path:'my',loadChildren:()=> import("./my/my.module").then(m=>m.MyModule) },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routeds = [
  LoginComponent
]
