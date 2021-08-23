import { Component, Input, OnInit } from '@angular/core';
import { Imovel } from '../../models/imovel';

@Component({
  selector: 'app-home-lista',
  templateUrl: './home-lista.component.html',
  styleUrls: ['./home-lista.component.scss']
})
export class HomeListaComponent implements OnInit {

  constructor() { }

  @Input() lista_imovel?: Array<Imovel>;

  ngOnInit(): void {
  }

}
