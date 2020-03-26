import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import * as e from '../../environments/environment';

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.component.html',
  styles: []
})
export class PagarComponent implements OnInit {

  title: string = 'PagoWebAngular';
  token: string = "";
  sessionKey: string = "";
  showForm: boolean = false;
  amount: string = "1";
  purchaseNumber: string = (Math.floor(Math.random() * 999999999999) + 1).toString();
  isLoading: boolean = false;

  urlJS: string = e.environment.endPointJS;
  channel: string = e.environment.channel;
  merchantId: string = e.environment.merchantId;

  constructor(private service: ServiceService) {
  }

  ngOnInit() {
  }

  pagar() {
    this.isLoading = true;
    // 1. Generar token de seguridad (Se recomienda consumir la API por backend)
    this.service.generarToken().subscribe(
      res => {
        this.token = res;
        // 2. Crear sesión de comunicación (Consultar atributos a enviar en el objeto antifraude)
        this.service.generarSession(res, this.amount).subscribe(
          res => {
            this.sessionKey = res['sessionKey'];
            // Mostrar formulario
            this.showForm = true;
            let form = document.createElement("form");
            form.setAttribute('method', "POST");
            form.setAttribute('action', "http://localhost/angular/transaction.php?purchase="+this.purchaseNumber+"&amount="+this.amount);
            form.setAttribute('id', "boton_pago");
            document.getElementById("btnPago").appendChild(form);

            let scriptEl = document.createElement('script');
            scriptEl.setAttribute('src', this.urlJS);
            scriptEl.setAttribute('data-sessiontoken', this.sessionKey);
            scriptEl.setAttribute('data-merchantid', this.merchantId);
            scriptEl.setAttribute('data-purchasenumber', this.purchaseNumber);
            scriptEl.setAttribute('data-merchantlogo', "http://localhost:4200/assets/logo.png");
            scriptEl.setAttribute('data-channel', this.channel);
            scriptEl.setAttribute('data-amount', this.amount);
            scriptEl.setAttribute('data-timeouturl', 'http://localhost/boton_js');
            document.getElementById("boton_pago").appendChild(scriptEl);
            
            this.isLoading = false;
          }, error => {
            alert("Ocurrió un error al generar la sesión");
            this.isLoading = false;
          }
        )
      }, error => {
        alert("Ocurrió un error al generar el token de seguridad");
        this.isLoading = false;
      }
    )
  }

}
