import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentionService {

 

private apiUrl = 'http://localhost:8080/api';

constructor(private http: HttpClient) { }

signin(user: any): Observable<any> {
  const url = `${this.apiUrl}/signin`
  return this.http.post<any>(url,user);
}

register(user: any): Observable<any> {
  const url = `${this.apiUrl}/signup`
  return this.http.post<any>(url, user);
}


}
