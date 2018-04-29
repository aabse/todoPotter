import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HarryPotterServiceProvider } from '../../providers/harry-potter-service/harry-potter-service';

/**
 * Generated class for the SpellsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-spells',
  templateUrl: 'spells.html',
})
export class SpellsPage {

  spells: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public potterService: HarryPotterServiceProvider) {
  }

  ionViewDidLoad() {
    this.potterService.getSpells()
    .subscribe(
      (data) => {
        this.spells = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
