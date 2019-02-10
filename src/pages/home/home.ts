import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirstPage } from '../first/first';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  firstbutton(){
    this.navCtrl.push(FirstPage);
  }
  
  onButtonClicked() {
    this.navCtrl.push(FirstPage, {nama: "Valeryan Ramadhan", umur: '22'});
    }

}
