import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-formulario',
  templateUrl: './cadastro-formulario.component.html',
  styleUrls: ['./cadastro-formulario.component.scss']
})
export class CadastroFormularioComponent implements OnInit {

  constructor() { }

  valor_venda: number = 0;

  ngOnInit(): void {
  }

}
