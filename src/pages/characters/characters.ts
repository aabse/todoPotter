import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HarryPotterServiceProvider } from '../../providers/harry-potter-service/harry-potter-service';

/**
 * Generated class for the CharactersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-characters',
  templateUrl: 'characters.html',
})
export class CharactersPage {

  characters: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public potterService: HarryPotterServiceProvider) {
  }

  public onClickCancel() {
    this.navCtrl.parent.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    this.potterService.getCharacters()
    .subscribe(
      (data) => {
        this.characters = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
