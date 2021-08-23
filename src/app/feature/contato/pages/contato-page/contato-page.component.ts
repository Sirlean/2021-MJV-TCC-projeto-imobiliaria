import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato-page',
  templateUrl: './contato-page.component.html',
  styleUrls: ['./contato-page.component.scss']
})
export class ContatoPageComponent implements OnInit {

  constructor() { }
  mensagem_enviada:boolean= false;
  enviarMensagem(): void{
    // this.mensagem_enviada=true;
    alert('Ok, Mensagem Enviada. Já te ligamos.');
  }

  ngOnInit(): void {
  }

}
