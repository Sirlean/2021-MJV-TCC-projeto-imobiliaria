import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoPageComponent } from './pages/contato-page/contato-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContatoPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class ContatoModule { }
