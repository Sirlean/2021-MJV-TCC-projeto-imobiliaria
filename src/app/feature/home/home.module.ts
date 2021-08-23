import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeListaComponent } from './components/home-lista/home-lista.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeCardComponent } from './components/home-card/home-card.component';
import { FormsModule } from '@angular/forms';
import { HomeDetalheImovelPageComponent } from './pages/home-detalhe-imovel-page/home-detalhe-imovel-page.component';



@NgModule({
  declarations: [
    HomeListaComponent,
    HomePageComponent,
    HomeCardComponent,
    HomeDetalheImovelPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    HomeListaComponent,
    HomePageComponent,
    HomeCardComponent
  ],

})
export class HomeModule { }
