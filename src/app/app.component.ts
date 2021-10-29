import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

import * as $ from "jquery";
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}
   bolsas = Array();

   patatasFritas = {tipo: 'Patatas Fritas', precio: '3.60'};
   chetos = {tipo: 'Cheetos', precio: '2.30'};


  ngOnInit() {
    this.bolsas.push(this.patatasFritas);
    this.bolsas.push(this.chetos);
    console.log(this.bolsas);
    this.authService.autoAuthUser();
  }

  showBolsas() {
    $('.bolsasContainer').toggle();

  }

  /*bolsas.push(patatasFritas.tipo, patatasFritas.precio);
  bolsas.push(chetos.tipo, chetos.precio);*/
}









