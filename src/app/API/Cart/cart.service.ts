import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

constructor() { }



GetCart() {
  let cartJson = sessionStorage.getItem('cart');
  
  if(cartJson){
    return JSON.parse(cartJson);
  }else {
    return [];
  }
}


saveCart(carts : any ){
  let cartJson = JSON.stringify(carts)
  sessionStorage.setItem('cart' , cartJson)
}

getCartTotalQuantity(){
  let carts = this.GetCart();
  let total: number = 0;
  carts.forEach((item : any) => {
    total += item.quantity
    
  });
  return total;
}
getCartTotalPrice(){
  let carts = this.GetCart();
  let total: number = 0;
  carts.forEach((item : any) => {
    total += item.price * item.quantity
    
  });
  return total;
}

}
