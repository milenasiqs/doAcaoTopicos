import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AgendamentoDoacaoComponent } from './agendamento-doacao/agendamento-doacao.component';
import { ListaDeAgendamentosComponent } from './lista-de-agendamentos/lista-de-agendamentos.component';
import { SolicitacaoDeDoacaoComponent } from './solicitacao-de-doacao/solicitacao-de-doacao.component';
import { ListaDeSolicitacoesComponent } from './lista-de-solicitacoes/lista-de-solicitacoes.component';


const APP_ROUTES: Routes =[
    { path: 'agendamentoDoacao', component: AgendamentoDoacaoComponent },
      { path: 'listaDeAgendamentos', component: ListaDeAgendamentosComponent },
      { path: 'solicitacaoDeDoacao', component: SolicitacaoDeDoacaoComponent },
      { path: 'listaDeSolicitacoes', component: ListaDeSolicitacoesComponent }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);