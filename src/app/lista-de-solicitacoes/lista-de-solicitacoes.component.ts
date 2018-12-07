import { Component, OnInit } from '@angular/core';
import { SolicitacaoDeDoacao } from '../../entidades/SolicitacaoDeDoacao';
import { DBService } from '../servicos/db.service';
import { SolicitacaoDeDoacaoComponent } from '../solicitacao-de-doacao/solicitacao-de-doacao.component';

@Component({
  selector: 'app-lista-de-solicitacoes',
  templateUrl: './lista-de-solicitacoes.component.html',
  styleUrls: ['./lista-de-solicitacoes.component.css'],
  providers: [DBService]

})
export class ListaDeSolicitacoesComponent implements OnInit {
  solicitacoes: SolicitacaoDeDoacao[];
  carregando: boolean;
  constructor(private database: DBService) { }

  ngOnInit() {
    this.carregarSolicitacoes();
  }
  private carregarSolicitacoes() {
    this.carregando = true;

    this.database.listar<SolicitacaoDeDoacao>('SolicitacaoDeDoacao')
      .then(SolicitacaoDeDoacaoDB => {
        this.solicitacoes = SolicitacaoDeDoacaoDB;

        this.carregando = false;
      });
  }

  remover(uid: string) {
    this.database.remover('SolicitacaoDeDoacao', uid)
      .then(() => {
        alert('Solicitação removida com sucesso');

        this.carregarSolicitacoes();
      });
  }

  editar(SolicitacaoDeDoacao) {
    SolicitacaoDeDoacao.editando = true;
  }

  cancelEdit(SolicitacaoDeDoacao) {
    SolicitacaoDeDoacao.editando = false;
  }

  confirmEdit(SolicitacaoDeDoacao) {
    this.database.atualizar('SolicitacaoDeDoacao', SolicitacaoDeDoacao.uid, { nome: SolicitacaoDeDoacao.nome, tipoSanguineo: SolicitacaoDeDoacao.tipoSanguineo})
      .then(() => {
        alert('Solicitações atualizadas com sucesso');
        this.carregarSolicitacoes();
      });
  }
}
