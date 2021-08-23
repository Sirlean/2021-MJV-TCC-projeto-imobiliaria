import { Component, OnInit } from '@angular/core';
import { FiltroImovel } from '../../models/filtro-imovel';
import { Imovel } from '../../models/imovel';
import { ImovelService } from '../../services/imovel.service';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  lista_tipo_negocio?: Array<string>;
  lista_tipo_imovel?: Array<string>;
  lista_imovel_filtrada?: Array<Imovel>;
  filtro: FiltroImovel = { };

  constructor(private imovelService:ImovelService) 
  { 

  }

  ngOnInit(): void {
    this.lista_tipo_imovel = this.imovelService.obterListaTipoImovel();
    this.lista_tipo_negocio = this.imovelService.obterListaTipoNegocio();
  }
  pesquisar(): void {
    this.lista_imovel_filtrada = this.imovelService.pesquisarImoveis(this.filtro);
  }
}
