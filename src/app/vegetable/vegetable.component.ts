import { Component, OnInit } from '@angular/core';
import { Vegitables } from '../vegitables';
import { CardService } from '../card.service';
import { Fruitable } from '../fruitable';

@Component({
  selector: 'app-vegetable',
  templateUrl: './vegetable.component.html',
  styleUrls: ['./vegetable.component.css']
})
export class VegetableComponent implements OnInit {
vegitableData: Vegitables[]=[];
constructor(private cardService: CardService){}

ngOnInit(): void {
  
}
// ngOnInit(): void {
//   this.cardService.getAllVegies().subscribe((data)=>{
//     this.vegitableData = data;
//   },error =>{
//     console.log(error)
//   });
// }

// addToCartVegitable(item: Fruitable){
//   this.cardService.addToCartVegitable(item).subscribe((data)=>{
//     console.log("item added succeessfully");
//   },error=>{
//     console.log("faild to add")
//   })
// }


}
