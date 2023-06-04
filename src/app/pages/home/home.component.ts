import { Component  , OnInit} from '@angular/core';
import { ProductServiceService } from 'src/app/API/Products/product-service.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { CartService } from 'src/app/API/Cart/cart.service';
import { DataService } from 'src/app/API/data/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  // title = 'Home-page';
  products : any[] | undefined;
  // carts : any = this.cartService.GetCart();

  carts : any = this.cartService.GetCart();

  // console.log(carts);

  constructor(
    private productService: ProductServiceService,
    private router: Router,
    private cartService: CartService,
    private data : DataService
    
    ) { }

  ngOnInit() {
    this.getProducts();
    console.log(this.carts);
   


    this.data.changeData({
      quantity : this.cartService.getCartTotalQuantity()
    })

    
  }


  
  addToCart(product : any) {
    // Xử lý logic khi người dùng bấm nút "Add to Cart"
    // console.log(product);
    let idx = this.carts.findIndex((item: any) => {
      return item.id == product._id
    })
    if (idx >= 0) {
      this.carts[idx].quantity += 1; 
    }else{
      let cartItem: any = {
        id: product._id,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: 1,
        subtotal: function (){
          return this.price * this.quantity;
        }
  
      }
      this.carts.push(cartItem);
      
    }
    console.log(this.carts);
    
    // console.log(this.carts[0].subtotal());
    // Luu vao localstorage

    this.cartService.saveCart(this.carts)
    this.data.changeData({
      quantity: this.cartService.getCartTotalQuantity()
    })
    // alert('thêm giỏ hàng thành công')
    swal('thêm giỏ hàng thành công')

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
    // console.log(productId);
    this.router.navigate(['/product/', productId]);
  }

//   public toggleDesc(event: any): void {
//     event.target.parentElement.querySelector('.btn-desc').classList.toggle('d-none');
// }
}
