import { ProductsService } from 'src/app/services/products/products.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CategoriesService } from 'src/app/services/categories/categories.service';
@Component({
  selector: 'app-mana-product',
  templateUrl: './mana-product.component.html',
  styleUrls: ['./mana-product.component.css']
})
export class ManaProductComponent implements OnInit {
  products:any=[]
  categories:any=[]
  value:any
  submitted: boolean = false;
  productDialog: boolean = false;

  constructor(private ProductsService:ProductsService, private Categories:CategoriesService ){}
  ngOnInit() {
    this.ProductsService.getProducts().subscribe(
      (response)=>{
        this.products = response.datas;
        console.log(response)
      }
    )
    this.Categories.getAllCategories().subscribe(
      (response)=>{
        this.categories = response.datas
        // console.log(response)
      }
    )
}
 


openNew() {
  this.products = {};
  this.submitted = false;
  this.productDialog = true;
}
editProduct(products:any =[]) {
  this.products = { ...products };
  this.productDialog = true;
}

}
