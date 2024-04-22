import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CardService } from '../card.service';
import { Fruitable } from '../fruitable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn : boolean = false;
  public totalItem = 0;
 
constructor(private authService: AuthService, private cartService: CardService){}
  ngOnInit(): void {
    this.cartService.getCards().subscribe((res)=>{
      this.totalItem = res.length;
    })
    // this.isLoggedIn = this.authService.isLoggedIn();
  }
  // logout(): void {
  //   this.authService.logout();
  //   this.isLoggedIn = false;
  // }
  // filterItems(){
  //   return this.cartItem.filter(item=>
  //     item.name.toLocaleLowerCase().includes(this.searchQuery.toLocaleLowerCase())
  //   );
  // }
}
