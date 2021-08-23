import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroModule } from './feature/cadastro/cadastro.module';
import { ContatoModule } from './feature/contato/contato.module';
import { EmpresaModule } from './feature/empresa/empresa.module';
import { HomeModule } from './feature/home/home.module';
import { LocalizacaoModule } from './feature/localizacao/localizacao.module';
import { LoginModule } from './feature/login/login.module';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CadastroModule,
    ContatoModule,
    EmpresaModule,
    HomeModule,
    LoginModule,
    LocalizacaoModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
