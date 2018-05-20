import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LeitorPage } from '../pages/leitor/leitor';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { BuscalivroProvider } from '../providers/buscalivro/buscalivro';
import { HttpClientModule } from '@angular/common/http';
import { ProjetosPage } from '../pages/projetos/projetos';
import { ProjetoPage } from '../pages/projeto/projeto';
import { TabsPage } from '../pages/tabs/tabs';
import { TarefasPage, Filtro } from '../pages/tarefas/tarefas';
import { TarefaPage } from '../pages/tarefa/tarefa';
import { TarefasService } from '../providers/tarefas-service';
import { ProjetosService } from '../providers/projetos-service';
import { BuscaPage } from '../pages/busca/busca';

@NgModule({
  declarations: [
    MyApp,
    ProjetosPage,
    ProjetoPage,
    TabsPage,
    TarefasPage,
    TarefaPage,
    Filtro,
    BuscaPage,
    LeitorPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProjetosPage,
    ProjetoPage,
    TabsPage,
    TarefasPage,
    TarefaPage,
    BuscaPage,
    LeitorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProjetosService,
    TarefasService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    BuscalivroProvider
  ]
})
export class AppModule {}
