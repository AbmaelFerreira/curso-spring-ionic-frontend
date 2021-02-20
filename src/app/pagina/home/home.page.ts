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
  /*constructor(private activatedRoute: ActivatedRoute) { }*/
  constructor(public nav: NavController, public menu: MenuController) { }

  login() {
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
