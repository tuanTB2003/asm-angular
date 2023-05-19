import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './pages/category/category.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundError } from 'rxjs';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { LayoutClientComponent } from './layouts/layout-client/layout-client.component';

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
      { path: 'home', component: HomeComponent },
      { path: 'CategoryComponent', component: CategoryComponent },
      // {
      //   path: 'login',
      //   component: LoginComponent,
      // },
      // { path: 'register', component: RegisterComponent },
    ],
  },

  {
    path: '**',
    component: NotFoundError,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
