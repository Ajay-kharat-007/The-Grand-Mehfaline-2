import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:3000/owners'
  url2 = 'http://localhost:3000/hotels'

  constructor(private http:HttpClient) { }

  Getall(){
    return this.http.get(this.url)
  }

  registerOwner(data:any){
    return this.http.post(this.url , data)
  }

  getUserByCode(id:any){
    return this.http.get(this.url+'/'+id)
  }

  registerHotel(data:any){
    return this.http.post(this.url2, data)
  }

  getHotelList(){
    return this.http.get(this.url2)
  }

  deleteHotel(id:number): Observable<any> {
    return this.http.delete(`http://localhost:3000/hotels/${id}`);
  }

  updateHotel(id:number, data:any): Observable<any> {
    return this.http.put(`http://localhost:3000/hotels/${id}`, data)
  }

}
