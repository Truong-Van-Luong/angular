import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product = {
    number : '1/5',
    price :  15.023,
    priceSale : 25.019,
    seller : 'Best Seller',
    title : 'Bed Side Table',
    content : 'A beaautiful side table that will perfectly fit your lovely bed room.With space for your books, lamps and electronic devices',
    instock : 'In Stock',
    outstock : 'Out Stock',
  }

  
  isBestSeller = false;

  // color
  colors = [
    { class: 'bg-success' },
    { class: 'bg-danger' },
    { class: 'bg-primary' },
    { class: 'bg-info' },
    { class: 'bg-black' }
  ];
  selectedColor = this.colors[0]; // Khởi tạo giá trị mặc định
  // size
  sizes = ['45*53', '42*40', '40*40', '35*49'];
  selectedSize = this.sizes[0]; // Khởi tạo giá trị mặc định

  

  //  activeColor (event: MouseEvent) {
  //     const target = event.target as HTMLElement;
  //     const element = document.querySelectorAll('.main-color');
  //     element.forEach((item)=> {
  //       item.classList.remove('active-color');
  //     })
  //     target.classList.add('active-color')
  //  }

//    activeSize (event: MouseEvent) {
//     const target = event.target as HTMLElement;
//     const element = document.querySelectorAll('.Size-home-pr');
//     element.forEach((item)=> {
//       item.classList.remove('black');
//     })
//     target.classList.add('black') 
//  }
  }
  