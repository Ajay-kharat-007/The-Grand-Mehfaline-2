import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck{
  title = 'The-Grand-Mehfaline';
  isLogin= "main";

  constructor(private router:Router){
  }

  ngDoCheck(): void {
    let login = this.router.url;
    console.log(this.router.url)
    if(login == '/admin/home'){
      this.isLogin="admin";
    }else if(login == '/user/home'){
      this.isLogin="user";
    }else if(login == '/owner/home'){
      this.isLogin="owner";
    }else {
      this.isLogin= "main"
    }
  }
}
