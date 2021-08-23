import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizacaoPageComponent } from './localizacao-page.component';

describe('LocalizacaoPageComponent', () => {
  let component: LocalizacaoPageComponent;
  let fixture: ComponentFixture<LocalizacaoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalizacaoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalizacaoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
