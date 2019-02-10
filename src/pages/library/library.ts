import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from '@angular/compiler';


/**
 * Generated class for the LibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  quoteCollection: {category: string, quotes: Quote[], icon: string}[];

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  }

}

export class LibraryPage implements OnInit{
  ngOnInit () {
  //do something here
  }