import {AgendamentoDoacao } from '../../entidades/AgendamentoDoacao';
import { DBService } from '../servicos/db.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-de-agendamentos',
  templateUrl: './lista-de-agendamentos.component.html',
  styleUrls: ['./lista-de-agendamentos.component.css'],
  providers: [DBService]
})
export class ListaDeAgendamentosComponent implements OnInit {
  agendamentoDoacoes: AgendamentoDoacao[];
  carregando: boolean;
  constructor(private database: DBService) {
    this.carregarAgendamentoDoacoes();
   }

   ngOnInit() {
  }
  
   private carregarAgendamentoDoacoes() {
    this.carregando = true;

    this.database.listar<AgendamentoDoacao>('AgendamentoDoacao')
      .then(AgendamentoDoacaoDB => {
        this.agendamentoDoacoes = AgendamentoDoacaoDB;

        this.carregando = false;
      });
  }
  remover(uid: string) {
    this.database.remover('AgendamentoDoacao', uid)
      .then(() => {
        alert('Agendamento doação removido com sucesso');

        this.carregarAgendamentoDoacoes();
      });
  }

  editar(AgendamentoDoacao) {
    AgendamentoDoacao.editando = true;
  }

  cancelEdit(AgendamentoDoacao) {
    AgendamentoDoacao.editando = false;
  }

  confirmEdit(AgendamentoDoacao) {
    this.database.atualizar('AgendamentoDoacao', AgendamentoDoacao.uid, { nome: AgendamentoDoacao.nome, cpf: AgendamentoDoacao.cpf, data: AgendamentoDoacao.data})
      .then(() => {
        alert('Agendamento doação atualizado com sucesso');
        this.carregarAgendamentoDoacoes();
      });
    }

}
