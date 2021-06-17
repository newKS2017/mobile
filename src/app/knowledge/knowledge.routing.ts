import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KnowledgeComponent } from './knowledge/knowledge.component';

const routes: Routes = [
  { path:'',redirectTo:'interview',pathMatch:'full' },
  { path:'interview',component:KnowledgeComponent }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KnowledgeRouting { }

export const routeds = [
  KnowledgeComponent
]
