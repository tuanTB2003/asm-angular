import { Component  , OnInit} from '@angular/core';
import { ProductServiceService } from 'src/app/API/Products/product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  // title = 'Home-page';
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

  addProduct(product: any): void {
    this.productService.addProduct(product).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  updateProduct(product: any): void {
    this.productService.updateProduct(product).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  deleteUser(productId: number): void {
    this.productService.deleteUser(productId).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  navigateToDetail(productId: string){
    console.log(productId);
    this.router.navigate(['/product/', productId]);
  }

  public toggleDesc(event: any): void {
    event.target.parentElement.querySelector('.btn-desc').classList.toggle('d-none');
}
}
