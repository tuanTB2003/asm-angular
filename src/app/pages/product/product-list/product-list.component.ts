import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/API/Products/product-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] | undefined;

  constructor(
    private productService: ProductServiceService,
    private router: Router
    ) { }

  ngOnInit() {
    this.getProducts();
    // console.log(this.products);
    
  }



  getProducts(): void {
    this.productService.getAll().subscribe(
      products => this.products = products.datas,
      // data => console.log(data),
      
      error => console.log(error)
    );
  }

}
