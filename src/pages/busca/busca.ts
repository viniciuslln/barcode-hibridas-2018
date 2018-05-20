import { TarefasService } from './../../providers/tarefas-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TarefaPage } from '../tarefa/tarefa';

/**
 * Generated class for the BuscaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-busca',
  templateUrl: 'busca.html',
})
export class BuscaPage {
  tarefas: any[];
  items: any[];
  query: string;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public tarefasService: TarefasService,
    ) {
      this.tarefas = tarefasService.getTarefas();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscaPage');
  }

  getItems(event){
    this.items = [];
    let val = this.query;
    if(val != ''){
      this.items = this.tarefas.filter(
        a => a.descricao.toUpperCase().indexOf(val.toUpperCase()) != -1
      );
    }
  }

  selecionaTarefa(c) {
    this.items = [];
    this.query = '';
    let t:number = parseInt(c);
    this.navCtrl.push(TarefaPage, {codigo:t, novo:false});
  }

}
