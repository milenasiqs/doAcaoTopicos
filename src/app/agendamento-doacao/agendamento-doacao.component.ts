import { Component, OnInit } from '@angular/core';
import { DBService } from '../servicos/db.service';
import { AgendamentoDoacao } from '../../entidades/AgendamentoDoacao';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-agendamento-doacao',
  templateUrl: './agendamento-doacao.component.html',
  styleUrls: ['./agendamento-doacao.component.css'],
  providers: [DBService]
})
export class AgendamentoDoacaoComponent implements OnInit {
  novoAgendamentoDoacao: AgendamentoDoacao;
  carregando: boolean;
  constructor(private database: DBService, private router: Router) { 
    this.novoAgendamentoDoacao = new AgendamentoDoacao();
  }

  ngOnInit() {
  }

  cadastrar() {
    this.database.inserir('AgendamentoDoacao', this.novoAgendamentoDoacao)
      .then(() => {
        alert('Novo agendamento cadastrado com sucesso');
        this.router.navigate(["listaDeAgendamentos"]);
        this.novoAgendamentoDoacao = new AgendamentoDoacao();
      });
  }
}
