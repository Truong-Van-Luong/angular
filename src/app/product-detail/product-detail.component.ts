import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  public productId: number = 0;
  public product: any;


  constructor(private route: ActivatedRoute) {}
  
  // ngOnInit() {
  //   let id = parseInt(this.route.snapshot.paramMap.get('details') ?? '0');
  //   this.departmentId = id;
  // }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.productId = +id;
        this.product = this.products.find(p => p.id === this.productId);
      } else {
        console.error('Product ID is null');
      }
    });
  }

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

    // size
    sizes = ['45*53', '42*40', '40*40', '35*49'];
    selectedSize = this.sizes[0]; 
    // color
    colors = ['Black', 'White'];
    selectedColor = this.colors[0];
}
