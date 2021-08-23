import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Imovel } from '../../models/imovel';
import { ImovelService } from '../../services/imovel.service';

@Component({
  templateUrl: './home-detalhe-imovel-page.component.html',
  styleUrls: ['./home-detalhe-imovel-page.component.scss']
})
export class HomeDetalheImovelPageComponent implements OnInit {

  constructor(
    private imovelService: ImovelService,
    private activedRoute: ActivatedRoute
  )  {}

  imovel?: Imovel;

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
        this.imovel = this.imovelService.obterImovelPorId(params.id);
        console.log(this.imovel);
    });    
  }
}
