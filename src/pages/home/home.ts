import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { SortingHatPage } from '../sorting-hat/sorting-hat';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  infoPage: any; 
  sortingHatPage: any;

  constructor(public navCtrl: NavController) {
    this.infoPage = InfoPage;
    this.sortingHatPage = SortingHatPage
  }

}
