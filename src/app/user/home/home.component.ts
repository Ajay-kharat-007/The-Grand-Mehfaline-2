import { Component } from '@angular/core';
import {AuthService} from '../auth.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  hotels:any;

  constructor(private service: AuthService){
    this.service.getHotel().subscribe((res)=>{
      console.log(res)
      this.hotels = res
    })
  }



}
