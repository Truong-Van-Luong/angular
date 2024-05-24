import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
  products = [
    {
      id: 1,
      image: 'assets/image/product/image1.jpg',
      price :  15.023,
      priceSale : 25.019,
      seller : 'Best Seller',
      title : 'American grapes ',
      content : 'Grapes are a type of berry obtained from vines of the genus Vitis. Grapes grow in clusters of 6 to 300 grapes.',
      quantity: 0,
      instock: true
    },
    {
      id: 2,
      image: 'assets/image/product/image2.jpg',
      price :  15.023,
      priceSale : 25.019,
      seller : 'Best Seller',
      title : 'American grapes',
      content : 'Grapes are a type of berry obtained from vines of the genus Vitis. Grapes grow in clusters of 6 to 300 grapes.',
      quantity: 0,
      instock: false
    },
    {
      id: 3,
      image: 'assets/image/product/image3.jpg',
      price :  15.023,
      priceSale : 25.019,
      seller : 'Best Seller',
      title : 'American grapes',
      content : 'Grapes are a type of berry obtained from vines of the genus Vitis. Grapes grow in clusters of 6 to 300 grapes.',
      quantity: 0,
      instock: true
    },
    {
      id: 4,
      image: 'assets/image/product/image4.jpg',
      price :  15.023,
      priceSale : 25.019,
      seller : 'Best Seller',
      title : 'American grapes',
      content : 'Grapes are a type of berry obtained from vines of the genus Vitis. Grapes grow in clusters of 6 to 300 grapes.',
      quantity: 0,
      instock: false
    },
    {
      id: 5,
      image: 'assets/image/product/image1.jpg',
      price :  15.023,
      priceSale : 25.019,
      seller : 'Best Seller',
      title : 'American grapes ',
      content : 'Grapes are a type of berry obtained from vines of the genus Vitis. Grapes grow in clusters of 6 to 300 grapes.',
      quantity: 0,
      instock: true
    },
    {
      id: 6,
      image: 'assets/image/product/image2.jpg',
      price :  15.023,
      priceSale : 25.019,
      seller : 'Best Seller',
      title : 'American grapes',
      content : 'Grapes are a type of berry obtained from vines of the genus Vitis. Grapes grow in clusters of 6 to 300 grapes.',
      quantity: 0,
      instock: false
    },
    {
      id: 7,
      image: 'assets/image/product/image3.jpg',
      price :  15.023,
      priceSale : 25.019,
      seller : 'Best Seller',
      title : 'American grapes',
      content : 'Grapes are a type of berry obtained from vines of the genus Vitis. Grapes grow in clusters of 6 to 300 grapes.',
      quantity: 0,
      instock: true
    },
    {
      id: 8,
      image: 'assets/image/product/image4.jpg',
      price :  15.023,
      priceSale : 25.019,
      seller : 'Best Seller',
      title : 'American grapes',
      content : 'Grapes are a type of berry obtained from vines of the genus Vitis. Grapes grow in clusters of 6 to 300 grapes.',
      quantity: 0,
      instock: false
    },
  ]
  
  

total = 0;
    calTotal() {
      this.total = 0;
      this.products.forEach((product: any) => {
      this.total += product.price * product.quantity;
      });
      this.total = parseFloat(this.total.toFixed(2));
    }
    
  
}
