import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  
  @Input() data!: any;
  @Output() dataChange = new EventEmitter<any>();

  isBestSeller = false;
  
  // color
  colors = [
    { class: 'bg-success' },
    { class: 'bg-danger' },
    { class: 'bg-primary' },
    { class: 'bg-info' },
    { class: 'bg-black' }
  ];
  selectedColor = this.colors[0]; 
  
  // size
  sizes = ['45*53', '42*40', '40*40', '35*49'];
  selectedSize = this.sizes[0]; 
  
  // Quantity
  sizeChange(e: any) {
    this.data.quantity = e.target.value;
    this.dataChange.emit(this.data);
  }
  // router
    constructor(private router: Router) {}
  
    onSelect(department: any) {
      this.router.navigate(['/departments', department.id]);
    }
}
  