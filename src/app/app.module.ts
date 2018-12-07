import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routing} from './app.routing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireDatabase } from '@angular/fire/database';

import { DBService } from './servicos/db.service';

import { AgendamentoDoacaoComponent } from './agendamento-doacao/agendamento-doacao.component';
import { ListaDeAgendamentosComponent } from './lista-de-agendamentos/lista-de-agendamentos.component';
import { SolicitacaoDeDoacaoComponent } from './solicitacao-de-doacao/solicitacao-de-doacao.component';
import { ListaDeSolicitacoesComponent } from './lista-de-solicitacoes/lista-de-solicitacoes.component';

@NgModule({
  declarations: [
    AppComponent,
    
    AgendamentoDoacaoComponent,
    
    ListaDeAgendamentosComponent,
    
    SolicitacaoDeDoacaoComponent,
    
    ListaDeSolicitacoesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      { path: 'agendamentoDoacao', component: AgendamentoDoacaoComponent },
      { path: 'listaDeAgendamentos', component: ListaDeAgendamentosComponent },
      { path: 'solicitacaoDeDoacao', component: SolicitacaoDeDoacaoComponent },
      { path: 'listaDeSolicitacoes', component: ListaDeSolicitacoesComponent }
    ])
  ],
  providers: [AngularFireDatabase,DBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
