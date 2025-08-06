import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../services/product.service';


@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class CartComponent {
 @Input() items: Product[] = [];
  @Output() remove = new EventEmitter<Product>();

  get total(): number {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }

  removeItem(item: Product) {
    this.remove.emit(item);
  }
}

