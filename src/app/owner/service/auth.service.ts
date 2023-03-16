import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:3000/owners'

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


}
