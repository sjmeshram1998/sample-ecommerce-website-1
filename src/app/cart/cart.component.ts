import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Fruitable } from '../fruitable';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Fruitable[]= [];
  public products : any = [];
  public grandTotal: number = 0;
  constructor(public cardService: CardService) { }

  ngOnInit(): void {
      this.cardService.getCards().subscribe((res)=>{
        this.products = res;
       this.grandTotal = this.cardService.getTotalPrice()
      })

     
  }
  // remove all items
  removeAllItems(){
    this.cardService.removeAllItems()
  }
  // remove specified item
  removeItemsById(index: number){
    this.cardService.removeItemsById(index)
  }
 
  
  // removeCardItem(index: number){
  //   this.cardService.removeCardItem(index);
  //   this.cartItems = this.cardService.getCartItems()

  // }
  
  
  // clearCard(){
  //   this.cartItems = this.cardService.clearCards()
  //   this.cartItems = [];
  // }
}