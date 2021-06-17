import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routeds } from './app.routing';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';//引入后才可以使用路由相关的内容 
import { FormsModule,ReactiveFormsModule } from '@angular/forms';//使用双向绑定
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { PublicModule } from './public/public.module';//公用组件引入

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    ...routeds
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgZorroAntdMobileModule,
    PublicModule,





    NzButtonModule,
    NzInputModule,
    NzIconModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
