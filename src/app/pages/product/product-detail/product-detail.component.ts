import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from 'src/app/API/Products/product-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId: string | undefined;
  products: any[] | undefined;

  constructor(
    private productService: ProductServiceService,
    private route: ActivatedRoute
    
    ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.productId = params['id'];
      this.getProduct();
    });
  }

  getProduct(): void {


    if (this.productId !== undefined && this.productId !== null) {
      if (this.productId) {
        this.productService.getDetail(this.productId).subscribe(
          products => this.products = products.datas,
      // data => console.log(data),
      
          error => console.log(error)
        );
      }
    }
  }

}
