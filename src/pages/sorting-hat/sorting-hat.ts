import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HarryPotterServiceProvider } from '../../providers/harry-potter-service/harry-potter-service';

/**
 * Generated class for the SortingHatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sorting-hat',
  templateUrl: 'sorting-hat.html',
})
export class SortingHatPage {

  house: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public potterService: HarryPotterServiceProvider) {
  }

  ionViewDidLoad() {
    this.potterService.sortingHat()
    .subscribe(
      (data) => {
        this.house = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
