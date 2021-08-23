import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaPageComponent } from './pages/empresa-page/empresa-page.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    EmpresaPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class EmpresaModule { }
