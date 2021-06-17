import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private router:Router,
    private route:ActivatedRoute
  ) { }

  index:number = 1;
  navList:any = [
    { index:1,name:'首页',link:'/home' },
    { index:2,name:'个人',link:'/personal' },
    { index:3,name:'知识',link:'/knowledge' },
    { index:4,name:'我的',link:'/my' }
  ]

  ngOnInit(): void {
    let url = window.location.pathname;
    this.navList.forEach(it=>{
      if(url.indexOf(it.link) != -1){
        this.index = it.index;
      }
    })
    this.route.queryParams.subscribe(
      data=>{
        console.log(data)
      }
    )
  }

  select(i){
    this.index = i+1;
  }

}
