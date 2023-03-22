import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
  title = 'The-Grand-Mehfaline';
  isLogin = "main";

  constructor(private router: Router) {
  }

  ngDoCheck(): void {
    let login = this.router.url;
    console.log(login) // console is the part of node and browser not javascript
    if (login === '/admin/home' || login === '/admin/owners' || login === '/admin/hotels' || login === '/admin/users') {
      this.isLogin = 'admin'
    } else if (login === '/owner/home') {
      this.isLogin = 'owner'
    } else if (login === '/user/home') {
      this.isLogin = 'user'
    } else {
      this.isLogin = 'main'
    }
  }
}
