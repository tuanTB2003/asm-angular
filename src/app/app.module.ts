import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CardModule } from 'primeng/card';
import { ScrollerModule } from 'primeng/scroller';
import { TableModule } from 'primeng/table';
import { RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
// import { LoginComponent } from './pages/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoryComponent } from './pages/category/category.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { LayoutClientComponent } from './layouts/layout-client/layout-client.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { FooterAdminComponent } from './components/footer-admin/footer-admin.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './pages/product/product-detail/product-detail.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { TopmenuComponent } from './components/topmenu/topmenu.component';
import { MenuComponent } from './components/menu/menu.component';
import { SlideComponent } from './components/slide/slide.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    // LoginComponent,
    CategoryComponent,
    LayoutAdminComponent,
    LayoutClientComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    ProductDetailComponent,
    TopbarComponent,
    TopmenuComponent,
    MenuComponent,
    SlideComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSlideToggleModule,
    FormsModule,
    CommonModule,
    CardModule,
    ScrollerModule,
    TableModule,
    RouterModule,
    ReactiveFormsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
