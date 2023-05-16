import { Component } from '@angular/core';
import { User } from '../../common/user';
import { Product } from '../../common/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Home-page';
  products: Product[] = [
    { name: 'Product 1', price: 50, desc: 'Description of Product 1', brand: 'Brand 1', imgUrl: 'https://via.placeholder.com/150' }, 
    { name: 'Product 2', price: 100, desc: 'Description of Product 2', brand: 'Brand 2', imgUrl: 'https://via.placeholder.com/150' }, 
    { name: 'Product 3', price: 75.55, desc: 'Description of Product 3', brand: 'Brand 3', imgUrl: 'https://via.placeholder.com/150' }
  ]
  public toggleDesc(event: any): void {
    event.target.parentElement.querySelector('.btn-desc').classList.toggle('d-none');
}
}
