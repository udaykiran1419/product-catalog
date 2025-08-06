import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Phone', category: 'Electronics', price: 15000 },
    { id: 2, name: 'Shirt', category: 'Clothing', price: 2000 },
    { id: 3, name: 'Laptop', category: 'Electronics', price: 70000 },
    { id: 4, name: 'Jeans', category: 'Clothing', price: 3000 },
  ];

  getProducts(): Product[] {
    return [...this.products];
  }
}
