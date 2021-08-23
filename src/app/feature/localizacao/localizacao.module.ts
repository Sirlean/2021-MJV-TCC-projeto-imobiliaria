import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalizacaoPageComponent } from './pages/localizacao-page/localizacao-page.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [LocalizacaoPageComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [LocalizacaoPageComponent]
})
export class LocalizacaoModule { }
