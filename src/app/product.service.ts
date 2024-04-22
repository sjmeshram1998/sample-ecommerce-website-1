import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fruitable } from './fruitable';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url ='http://localhost:3000/fruitables';

  constructor(private http: HttpClient) { }

  
  getCards(): Observable<Fruitable[]>{
    return this.http.get<Fruitable[]>(this.url);
   
  }
}
