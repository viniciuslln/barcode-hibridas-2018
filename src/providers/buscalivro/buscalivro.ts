import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BuscalivroProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BuscalivroProvider {
key = "AIzaSyCFSknUR0ZRGPpMFYIHiS9FkDtWDTX1uPI";
  constructor(public http: HttpClient) {
    console.log('Hello BuscalivroProvider Provider');
  }

  getLivro(isbn: string): Promise<any> {
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${this.key}`)
      .toPromise()
    }

}
