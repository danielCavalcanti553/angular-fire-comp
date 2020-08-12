import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroBuscaTituloComponent } from './livro-busca-titulo.component';

describe('LivroBuscaTituloComponent', () => {
  let component: LivroBuscaTituloComponent;
  let fixture: ComponentFixture<LivroBuscaTituloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivroBuscaTituloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroBuscaTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
