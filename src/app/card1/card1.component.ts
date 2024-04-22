import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Fruitable } from '../fruitable';
import { ProductService } from '../product.service';
@Component({
selector: 'app-card1',
templateUrl: './card1.component.html',
styleUrls: ['./card1.component.css']
})
export class Card1Component implements OnInit{
cardsData: Fruitable[] = [];
constructor(private cardService: CardService, private productService: ProductService){}
ngOnInit(): void {
    this.productService.getCards().subscribe((data)=>{
        this.cardsData=data
        this.cardsData.forEach((a:any)=>{
            Object.assign(a,{quantity:1, total:a.price})
        })
        console.log(this.cardsData);
        },
        (error)=> {
        console.log("error fetching products")
        });
}





addToCart(item: any){
this.cardService.addToCart(item)
console.log(this.cardService)
}

}