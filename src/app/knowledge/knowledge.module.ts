import { CommonModule } from '@angular/common';//在根模块导入BrowserModule，BrowserAnimationsModule，HttpClientModule，其他模块只需要导入CommonModule就可以使用双向绑定
import { NgModule } from '@angular/core';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { PublicModule } from '../public/public.module';//公用组件引入
import { FormsModule } from '@angular/forms';//使用双向绑定

import { KnowledgeRouting,routeds } from './knowledge.routing';
import { KnowledgeService } from './knowledge.service';

import { NzMessageModule } from 'ng-zorro-antd/message';

@NgModule({
  declarations: [
    ...routeds
  ],
  imports: [
    CommonModule,
    NgZorroAntdMobileModule,
    PublicModule,
    FormsModule,
    KnowledgeRouting,
    NzMessageModule
  ],
  providers: [
    KnowledgeService
  ],
  bootstrap: []
})
export class KnowledgeModule { }
