import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoDoacaoComponent } from './agendamento-doacao.component';

describe('AgendamentoDoacaoComponent', () => {
  let component: AgendamentoDoacaoComponent;
  let fixture: ComponentFixture<AgendamentoDoacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendamentoDoacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendamentoDoacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
