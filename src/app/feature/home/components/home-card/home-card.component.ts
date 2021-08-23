import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Imovel } from '../../models/imovel';


@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss']
})
export class HomeCardComponent implements OnInit {

  constructor(private router: Router) { }

  @Input()
  imovel?: Imovel;

  indice_imagem?: number = 0;

  
  @Input()
  card: boolean = true;

  primeiraImagem(): string {
    let href = "https://sparc4.blob.core.windows.net/00000759/nophoto.gif";
    if (this.imovel != null && this.imovel.imagens != null) {
      href = this.imovel.imagens[0];
    }
    return href;

  }
  detalharImovel(): void{
    this.router.navigateByUrl(`home/detalhe-imovel/${this.imovel?.id}`);
  }
  trocarImagem():void{

    if(!this.indice_imagem)
    {
      this.indice_imagem = 0;
    }
    this.indice_imagem = this.indice_imagem + 1;
    if(this.imovel && this.imovel?.imagens && this.imovel.imagens.length <= this.indice_imagem)
    {
      this.indice_imagem = 0;
    }
  }


  ngOnInit(): void {
  }

}
