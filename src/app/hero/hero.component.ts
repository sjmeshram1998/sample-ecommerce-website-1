import { Component, AfterViewInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements AfterViewInit {
images = [
  {path: './assets/images/slide1.png', altText: 'Slide1',name:"Fruits"},
  {path: './assets/images/slide2.jpg', altText: 'Slide2',name: "Vegitables"},

  

]
constructor(){}
ngAfterViewInit(): void {
  $('.owl-carousel').owlCarousel({
    items: 1, // Display one item at a time
    loop: true,
    nav: true,
    dots: false,
    
  });
}

}


