import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';
import * as e from '../../environments/environment';

@Component({
  selector: 'app-finalizar',
  templateUrl: './finalizar.component.html',
  styles: []
})
export class FinalizarComponent implements OnInit {

  public transactionId: string;
  public purchaseNumber: string;
  public amount: string;

  public jsonAutorizacion: any;
  public isLoading: boolean = true;

  constructor(private route: ActivatedRoute, private service: ServiceService) { }

  ngOnInit() {
    this.transactionId = this.route.snapshot.paramMap.get('transactionId');
    this.purchaseNumber = this.route.snapshot.paramMap.get('purchaseNumber');
    this.amount = this.route.snapshot.paramMap.get('amount');

    // Generar Token 
    this.service.generarToken().subscribe(
      res => {
        // Solicitar autorización
        this.service.generarAutorización(res, this.transactionId, this.purchaseNumber, this.amount).subscribe(
          res => {
            if (!res['error']) {
              console.log(res);
              this.jsonAutorizacion = res;
              this.isLoading = false;
            } 
          }, error => {
            console.log(error['error']);
            this.jsonAutorizacion = error['error'];
            this.isLoading = false;
          }
        )
      }
    )
  }

}
