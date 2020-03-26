import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinalizarComponent } from './finalizar/finalizar.component';
import { PagarComponent } from './pagar/pagar.component';


const routes: Routes = [
  {
    path: '',
    component: PagarComponent
  },
  {
    path: 'finalizar/:transactionId/:purchaseNumber/:amount',
    component: FinalizarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
