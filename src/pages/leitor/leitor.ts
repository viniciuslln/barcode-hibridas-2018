import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { BuscalivroProvider } from '../../providers/buscalivro/buscalivro';

const LIVRO_ENCONTRADO = "Livro encontrado";
const LIVRO_NAO_ENCONTRADO = "Livro não encontrado";
const LIVRO_NAO_ENCONTRADO_ERRO = "Erro ao recuperar Livro";
const NAO_E_LIVRO = "O código não corresponde a um livro";


@Component({
  selector: 'page-leitor',
  templateUrl: 'leitor.html'
})
export class LeitorPage {
  url = "";
  informacao = "";
  volumeInfo: any;
  teste :any;
  constructor(public navCtrl: NavController,
    private barcodeScanner: BarcodeScanner,
    private livros: BuscalivroProvider,
    private loading: LoadingController) { }

  escanear() {
    this.url = '';
    this.informacao = '';
    this.volumeInfo = {};
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      
      if (barcodeData.text.length == 10 || barcodeData.text.length == 13) {
        this.encontrarLivro(barcodeData.text);
      }
      else {
        this.informacao = NAO_E_LIVRO;
      }
    }).catch(err => {
      console.log('Error', err);
    });
  }

  encontrarLivro(codigo: string) {
    let load = this.loading.create({
      content: "Carregando"
    });
    load.present()
    this.livros.getLivro(codigo)
      .then((response: any) => {
        if(response.DebugContext_ > 0){
          this.informacao = LIVRO_NAO_ENCONTRADO;
        }else{
          this.informacao = LIVRO_ENCONTRADO;
          this.url = response.items[0].volumeInfo.imageLinks.thumbnail;
          this.volumeInfo = response.items[0].volumeInfo;
        }
        load.dismiss()
      })
      .catch(error => {
        this.informacao = LIVRO_NAO_ENCONTRADO_ERRO;
        load.dismiss();
      });
  }

}
