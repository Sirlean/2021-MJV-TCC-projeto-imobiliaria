import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroPageComponent } from './pages/cadastro-page/cadastro-page.component';
import { CadastroFormularioComponent } from './components/cadastro-formulario/cadastro-formulario.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CadastroPageComponent,
    CadastroFormularioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
})
export class CadastroModule { }
