import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:3000/users';
  url2 = 'http://localhost:3000/hotels';
  url3 = 'http://localhost:3000/bookings';

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get(this.url)
  }

  BookHotel(data:any){
    return this.http.post(this.url3, data)
  }

  postUsers(data:any){
    return this.http.post(this.url, data)
  }

  getUserByCode(id:any){
    return this.http.get(this.url+'/'+id);
  }

  getHotel(){
    return this.http.get(this.url2)
  }

}
