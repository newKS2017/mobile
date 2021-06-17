import { Component, OnInit } from '@angular/core';
import { KnowledgeService } from '../knowledge.service';

import { NzMessageService  } from 'ng-zorro-antd/message';//需要现在module里注册
import * as pinyin from '../../../assets/js/pinyin.js';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss']
})
export class KnowledgeComponent implements OnInit {

  constructor(
    private service:KnowledgeService,
    private message:NzMessageService 
  ) { }
  
  value:string = '';//搜索框
  nowData:any = [];//存放数据
  indexPage:number = 0;//第几页

  ngOnInit(): void {
    if(localStorage.getItem('value') || localStorage.getItem('indexPage')){//如果有值，就用值去获取数据
      this.value = localStorage.getItem('value');
      this.submit(this.value,true);
    }else{
      this.nowData = this.service.dataList;
    }
  }

  ngOnDestroy(){
    localStorage.removeItem('indexPage');
    localStorage.removeItem('value');
  }


  // 获取焦点
  focus(){
    console.log('focus')
  }
  // 失去焦点
  blur(){
    console.log('blur')
  }
  // 点击取消
  cancel(){
    console.log('cancel')
  }
  // 点击清除
  clear(value){
    console.log('clear:'+value)
  }
  // 回车触发搜索
  submit(value,isV:boolean = false){
    let arr:any = [];
    this.service.dataList.forEach(it=>{
      if(it.title.indexOf(value) != -1){
        arr.push(it);
      }
    })
    if(arr.length == 0){
      if(isV){//没有数据并且是刷新页面的时候
        if(localStorage.getItem('indexPage')){
          this.indexPage = parseInt(localStorage.getItem('indexPage'));
        }
        this.nowData = this.service.dataList;
      }else{
        this.message.error('没有匹配到数据');
      }
    }else{
      if(isV){
        if(localStorage.getItem('indexPage')){
          this.indexPage = parseInt(localStorage.getItem('indexPage'));
        }
      }else{
        this.indexPage = 0;
        localStorage.setItem('value',value);
        localStorage.setItem('indexPage',this.indexPage.toString());
      }
      this.nowData = arr;
    }
  }
  // 输入触发
  change(value){
    console.log(value)
    let a = '1';
  }

  // 翻页
  turnPage(isBoolean){
    if(isBoolean){ // 下一页
      if(this.indexPage == this.nowData.length - 1){
        this.message.warning('已经是最后一条数据了');
        return;
      }else{
        this.indexPage++;
      }
    }else{
      if(this.indexPage == 0){
        this.message.warning('已经是第一条数据了');
        return;
      }else{
        this.indexPage--;
      }
    }
    localStorage.setItem('indexPage',this.indexPage.toString());
  }


}
