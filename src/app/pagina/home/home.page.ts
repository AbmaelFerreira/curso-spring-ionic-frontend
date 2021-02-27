import { CredenciaisDTO } from './../../../models/credenciais.dto';
import { NavController, MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriasPage } from '../categorias/categorias.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    creds: CredenciaisDTO = {
      email:"",
      senha: ""
    };
  
  /*constructor(private activatedRoute: ActivatedRoute) { }*/
  constructor(public nav: NavController, public menu: MenuController) { }

  login() {
    console.log(this.creds);
    this.nav.navigateForward('/categorias');
  }

    ionViewWillEnter() {
      this.menu.enable(false);
    }
    ionViewDidLeave() {
      this.menu.enable(true);
    }
   

  ngOnInit() {
   
  }
}
