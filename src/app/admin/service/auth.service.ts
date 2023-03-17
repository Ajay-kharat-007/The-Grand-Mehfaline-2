import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:3000/admin'
  owner = 'http://localhost:3000/owners'
  user = 'http://localhost:3000/users'
  hotel = 'http://localhost:3000/hotels'

  constructor(private http: HttpClient) { }

  getAdmin(){
    return this.http.get(this.url)
  }

  getOwnerList(){
    return this.http.get(this.owner)
  }

  getUsersList(){
    return this.http.get(this.user)
  }

  getHotelsList(){
    return this.http.get(this.hotel)
  }

  deleteOwner(id:number): Observable<any> {
    return this.http.delete(`http://localhost:3000/owners/${id}`);
  }

  deleteUser(id:number): Observable<any> {
    return this.http.delete(`http://localhost:3000/users/${id}`);
  }

  deleteHotel(id:number): Observable<any> {
    return this.http.delete(`http://localhost:3000/hotels/${id}`);
  }

  updateOwner(id:number, data:any): Observable<any> {
    return this.http.put(`http://localhost:3000/owners/${id}`, data)
  }

  updateUser(id:number, data:any): Observable<any> {
    return this.http.put(`http://localhost:3000/users/${id}`, data)
  }

  registerOwner(data:any){
    return this.http.post(this.owner, data)
  }

  registerHotel(data:any){
    return this.http.post(this.hotel, data)
  }

  updateHotel(id:number, data:any): Observable<any> {
    return this.http.put(`http://localhost:3000/hotels/${id}`, data)
  }

  registerUser(data:any){
    return this.http.post(this.user, data)
  }

  registerAdmin(data:any){
    return this.http.post(this.url, data)
  }

  getAdminByCode(id:any){
    return this.http.get(this.url+'/'+id)
  }
}
