import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPageComponent } from './feature/cadastro/pages/cadastro-page/cadastro-page.component';
import { ContatoPageComponent } from './feature/contato/pages/contato-page/contato-page.component';
import { EmpresaPageComponent } from './feature/empresa/pages/empresa-page/empresa-page.component';
import { HomeDetalheImovelPageComponent } from './feature/home/pages/home-detalhe-imovel-page/home-detalhe-imovel-page.component';
import { HomePageComponent } from './feature/home/pages/home-page/home-page.component';
import { LocalizacaoPageComponent } from './feature/localizacao/pages/localizacao-page/localizacao-page.component';
import { LoginPageComponent } from './feature/login/pages/login-page/login-page.component';
import { NotFoundPageComponent } from './shared/pages/not-found-page/not-found-page.component';

const routes: Routes = [
  { path:'', pathMatch: 'full', redirectTo: 'home' },
  { path:'home', component:HomePageComponent },
  { path: 'home/detalhe-imovel/:id', component: HomeDetalheImovelPageComponent },

  { path:'cadastro', component:CadastroPageComponent },
  { path:'login', component:LoginPageComponent },
  { path:'empresa', component:EmpresaPageComponent },
  { path:'contato', component:ContatoPageComponent },
  { path:'localizacao', component:LocalizacaoPageComponent },
  { path:'empresa', component:EmpresaPageComponent },

  { path: '404', component: NotFoundPageComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
