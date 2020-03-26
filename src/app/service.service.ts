import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import * as e from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private headers = new HttpHeaders();

  constructor(private http: HttpClient) { }

  generarToken() {
    const url = e.environment.endPointSecurity;
    const usuario = e.environment.user;
    const password = e.environment.pwd
    const headers = this.headers.append('Content-Type', 'application/json').append('Authorization', 'Basic ' + btoa(usuario + ':' + password));
    return this.http.get(url, { headers: headers, responseType: 'text' });
  }

  generarSession(token, amount) {
    const url = e.environment.endPointSession;
    const merchant = e.environment.merchantId;
    const channel = e.environment.channel;
    const headers = this.headers.append('Content-Type', 'application/json').append('Authorization', token);
    return this.http.post(url + merchant, { 'amount': amount, "antifraud": null, "channel": channel}, { headers: headers });
  }

  generarAutorización(token, transactionToken, purchase, amount) {
    const url = e.environment.endPointAuthorization;
    const merchant = e.environment.merchantId;
    const channel = e.environment.channel;
    const currency = e.environment.currency;
    const headers = this.headers.append('Content-Type', 'application/json').append('Authorization', token);
    const order = { 'amount' : amount, 'tokenId': transactionToken, 'purchaseNumber': purchase, 'currency': currency };
    return this.http.post(url + merchant, { 'antifraud': null, 'captureType': 'manual', "countable": true, "channel": channel, 'order': order}, { headers: headers });
  }

}
