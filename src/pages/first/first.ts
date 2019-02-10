import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SecondPage} from '../second/second';

/**
 * Generated class for the FirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  secondbutton(){
    this.navCtrl.push(SecondPage);
  }

  ionViewDidLoad() {
   let nama, umur;
    nama = this.navParams.get('nama');
    umur = this.navParams.get('umur');
    console.log(nama + ", " + umur +"tahun.");
  }

}
