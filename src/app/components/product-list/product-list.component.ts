//import { Component } from '@angular/core';

//@Component({
//  selector: 'app-product-list',
//  templateUrl: './product-list.component.html',
//  styleUrl: './product-list.component.css'
//})
//export class ProductListComponent {

//}
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }
}
