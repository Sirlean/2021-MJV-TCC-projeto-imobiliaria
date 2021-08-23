import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  @Input() titulo?: string = 'Seção de Destaques';
  
  @Input() subtitulo?: string = 'contato';

  ngOnInit(): void {
  }

}
