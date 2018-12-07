import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacaoDeDoacaoComponent } from './solicitacao-de-doacao.component';

describe('SolicitacaoDeDoacaoComponent', () => {
  let component: SolicitacaoDeDoacaoComponent;
  let fixture: ComponentFixture<SolicitacaoDeDoacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitacaoDeDoacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitacaoDeDoacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
