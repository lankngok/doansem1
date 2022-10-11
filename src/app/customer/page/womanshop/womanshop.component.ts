import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-womanshop',
  templateUrl: './womanshop.component.html',
  styleUrls: ['./womanshop.component.css'],
})
export class WomanshopComponent implements OnInit {
  list: any;
  ListCate: any;
  listPk: any;
  constructor(private productsevice: ProductService) {}

  ngOnInit(): void {
    this.productsevice.getAllWoman().subscribe((data) => {
      this.list = data;
    });
    this.productsevice.getAllphukien1().subscribe((data) => {
      this.listPk = data
    });
    this.productsevice.getCate().subscribe((data) => {
      this.ListCate = data;
    });
  }
  filter_pro(id: any) {
    this.productsevice.filter_pro(id).subscribe((data) => {
      this.list = data;
    });
  }
}
