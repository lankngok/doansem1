import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-manshop',
  templateUrl: './manshop.component.html',
  styleUrls: ['./manshop.component.css'],
})
export class ManshopComponent implements OnInit {
  list: any;
  ListCate: any;
  listPk: any;
  constructor(private productsevice: ProductService) {}

  ngOnInit(): void {
    this.productsevice.getAllMan().subscribe((data) => {
      this.list = data;
    });
    this.productsevice.getCate().subscribe((data) => {
      this.ListCate = data;
    });
    this.productsevice.getAllphukien2().subscribe((data) => {
      this.listPk = data;
    });
  }
  filter_pro(id: any) {
    this.productsevice.filter_pro(id).subscribe((data) => {
      this.list = data;
    });
  }
}
