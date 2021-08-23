import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeModule } from '../feature/home/home.module';
import { AppRoutingModule } from '../app-routing.module';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { BannerComponent } from './components/banner/banner.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundPageComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule 
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BannerComponent
  ],
})
export class SharedModule { }
