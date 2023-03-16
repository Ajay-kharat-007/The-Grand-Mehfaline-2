import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:3000/admin'

  constructor(private http: HttpClient) { }

  getAdmin(){
    return this.http.get(this.url)
  }

  registerAdmin(data:any){
    return this.http.post(this.url, data)
  }

  getAdminByCode(id:any){
    return this.http.get(this.url+'/'+id)
  }
}
