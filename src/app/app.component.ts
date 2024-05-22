import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  products = [
    {
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
