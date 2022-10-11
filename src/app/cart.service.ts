import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const url = 'http://localhost:8080/product';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  item: any = [];
  items: any = [];

  constructor(private http: HttpClient) {
    let cart: any = localStorage.getItem('cart');
    this.items = cart ? JSON.parse(cart) : [];
  }

  getAll(): Observable<any> {
    return this.http.get<any>(url);
  }

  add(product: any): void {
    let index = this.items.findIndex((item: any) => {
      return item.id == product.id;
    });
    if (index > -1) {
      this.items[index].quantity = 1;
      localStorage.setItem('cart', JSON.stringify(this.items));
    } else {
      product.quantity += 1;
      this.items.push(product);
      localStorage.setItem('cart', JSON.stringify(this.items));
    }
  }

  deletee(id: number): void {
    let index = this.items.findIndex((item: any) => {
      return item.id === id;
    });
    this.items.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  
}
