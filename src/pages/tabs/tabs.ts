import { LeitorPage } from './../leitor/leitor';
import { Component } from '@angular/core';

import { ProjetosPage } from '../projetos/projetos';
import { BuscaPage } from '../busca/busca';
import { TarefasPage } from '../tarefas/tarefas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = TarefasPage;
  tab2Root: any = ProjetosPage;
  tab3Root: any = BuscaPage;
  tab4Root: any = LeitorPage;

  constructor() {

  }
}
