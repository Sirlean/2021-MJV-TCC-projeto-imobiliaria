import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDetalheImovelPageComponent } from './home-detalhe-imovel-page.component';

describe('HomeDetalheImovelPageComponent', () => {
  let component: HomeDetalheImovelPageComponent;
  let fixture: ComponentFixture<HomeDetalheImovelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDetalheImovelPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDetalheImovelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
