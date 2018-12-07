import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeAgendamentosComponent } from './lista-de-agendamentos.component';

describe('ListaDeAgendamentosComponent', () => {
  let component: ListaDeAgendamentosComponent;
  let fixture: ComponentFixture<ListaDeAgendamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDeAgendamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeAgendamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
