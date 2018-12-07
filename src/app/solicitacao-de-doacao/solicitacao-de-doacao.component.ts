import { Component, OnInit } from '@angular/core';
import { DBService } from '../servicos/db.service';
import { Route, Router } from '@angular/router';
import { SolicitacaoDeDoacao } from '../../entidades/SolicitacaoDeDoacao';


@Component({
  selector: 'app-solicitacao-de-doacao',
  templateUrl: './solicitacao-de-doacao.component.html',
  styleUrls: ['./solicitacao-de-doacao.component.css'],
  providers: [DBService]
})
export class SolicitacaoDeDoacaoComponent implements OnInit {
  novaSolicitacao: SolicitacaoDeDoacao;
  carregando: boolean;
  constructor(private database: DBService, private router: Router) {
    this.novaSolicitacao = new SolicitacaoDeDoacao();
   }

  ngOnInit() {
  }
  cadastrar() {
    this.database.inserir('SolicitacaoDeDoacao', this.novaSolicitacao)
      .then(() => {
        alert('Solicitação cadastrada com sucesso');
        this.router.navigate(["listaDeSolicitacoes"]);
        this.novaSolicitacao = new SolicitacaoDeDoacao();
      });
  }
}
