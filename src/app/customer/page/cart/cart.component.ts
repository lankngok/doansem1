import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from './../../../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any = [];
  total: number = 0;

  constructor(private http:HttpClient, private cartService:CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.items;
    this.cart.forEach((itemss:any) => {
      this.total += (itemss.detail.price)
      // console.log(itemss);
    });
  }
  deletee(id: number){
    this.cartService.deletee(id);
  }

}
