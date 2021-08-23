import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeListaComponent } from './home-lista.component';

describe('HomeListaComponent', () => {
  let component: HomeListaComponent;
  let fixture: ComponentFixture<HomeListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
