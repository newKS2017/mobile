import { Component, OnInit } from '@angular/core';

import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public router:Router,
    public route:ActivatedRoute
  ) { }

  ngOnInit(): void {

  }

  passwordVisible = false;
  password: string;

  login(){
    this.router.navigate(['../home'],{relativeTo:this.route})
  }

}
