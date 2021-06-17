import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';//如果需要从延迟加载的模块访问NgIf和NgFor等公共指令，必须导入CommonModule
import { PublicRouting,routeds } from './public.routing';
@NgModule({
  declarations: [
    ...routeds
  ],
  imports: [
    CommonModule,
    PublicRouting
  ],
  exports:[ //公用组件-如果其他模块要引用，必须要导出注册，否则找不到组件
    ...routeds
  ]
})
export class PublicModule { }
