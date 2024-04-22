import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Fruitable } from './fruitable';
import { BehaviorSubject, Observable } from 'rxjs';
import { Vegitables } from './vegitables';
import { ProductService } from './product.service';
@Injectable({
  providedIn: 'root'
})
export class CardService {
  vegItems: Vegitables[]=[];
  vegUrl = 'http://localhost:3000/vegitables';
  public cartItems: any[]=[];

  public productList = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient,private productService: ProductService) {}

  getCards(){
    return this.productList.asObservable();

  }

  addToCart(item: any) {
    this.cartItems.push(item);
    this.productList.next(this.cartItems)
    this.getTotalPrice();
  }
  getTotalPrice():number{
    let grandTotal = 0;
   grandTotal = this.cartItems.reduce((total, item)=>{
   return  total+item.price*item.quantity
    
    },0);
    
    return grandTotal;
  }


  removeAllItems(){
    this.cartItems = [];
    this.productList.next(this.cartItems)

  }

  removeItemsById(index:number){
    this.cartItems.splice(index, 1)
    this.productList.next(this.cartItems)

  }
 
  


  // vegitable methods
  // getAllVegies():Observable<Vegitables[]>{
  //   return this.http.get<Vegitables[]>(this.vegUrl);

  // }

  // addToCartVegitable(item: Vegitables):Observable<Vegitables[]>{
  //   this.vegItems.push(item)
  //   return this.http.post<Vegitables[]>(this.vegUrl,item)
  // }
}
