import { Component } from '@angular/core';
import { Product, ProductService } from '../../services/product.service';


@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {
  products: Product[] = [];
  selectedCategory: string = 'All';
  cart: Product[] = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  get filteredProducts(): Product[] {
    if (this.selectedCategory === 'All') return this.products;
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  setCategory(category: string) {
    this.selectedCategory = category;
  }

  addToCart(product: Product) {
    this.cart.push(product);
  }

  removeFromCart(product: Product) {
  const index = this.cart.findIndex(item => item.id === product.id);
  if (index !== -1) {
    this.cart.splice(index, 1);
  }
}

}
