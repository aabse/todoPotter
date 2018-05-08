import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HarryPotterServiceProvider } from '../../providers/harry-potter-service/harry-potter-service';

@IonicPage()
@Component({
  selector: 'page-houses',
  templateUrl: 'houses.html',
})
export class HousesPage {

  houses: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public potterService: HarryPotterServiceProvider) {
  }

  public onClickCancel() {
    this.navCtrl.parent.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    this.potterService.getHouses()
    .subscribe(
      (data) => {
        this.houses = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
