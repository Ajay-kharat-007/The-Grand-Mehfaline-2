import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:3000/admin'
  owner = 'http://localhost:3000/owners'

  constructor(private http: HttpClient) { }

  getAdmin(){
    return this.http.get(this.url)
  }

  getOwnerList(){
    return this.http.get(this.owner)
  }

  deleteOwner(id:number): Observable<any> {
    return this.http.delete(`http://localhost:3000/owners/${id}`);
  }

  updateOwner(id:number, data:any): Observable<any> {
    return this.http.put(`http://localhost:3000/owners/${id}`, data)
  }

  registerOwner(data:any){
    return this.http.post(this.owner, data)
  }

  registerAdmin(data:any){
    return this.http.post(this.url, data)
  }

  getAdminByCode(id:any){
    return this.http.get(this.url+'/'+id)
  }
}
