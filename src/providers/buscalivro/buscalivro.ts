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
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
