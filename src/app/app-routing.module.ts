import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CategoryComponent } from './pages/category/category.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { LayoutClientComponent } from './layouts/layout-client/layout-client.component';
import { ProductDetailComponent } from './pages/product/product-detail/product-detail.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { NotFoundComponent } from './pages/notFound/notFound.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
 // Ứng dụng phía máy chủ: (admin)
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      // { path: 'dashboard', component: DashboardComponent },
      // { path: 'products', component: ProductComponent },
    ],
  },

  // ứng dụng phía khách:
  {
    path: '',
    component: LayoutClientComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'home', component: HomeComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      { path: 'cart', component: CartComponent },
      // {
      //   path: 'login',
      //   component: LoginComponent,
      // },
      // { path: 'register', component: RegisterComponent },
    ],
  },

  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
