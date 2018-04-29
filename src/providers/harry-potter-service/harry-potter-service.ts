import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HarryPotterServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HarryPotterServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello HarryPotterServiceProvider Provider');
  }

  getCharacters() {
    return this.http.get("https://www.potterapi.com/v1/characters?key=$2a$10$3fQ.ttcu6kbE7k2YenR0teDSE.ewmD7A5znHsZf8il7H20RFTdeTi");
  }

  getHouses() {
    return this.http.get("https://www.potterapi.com/v1/houses?key=$2a$10$3fQ.ttcu6kbE7k2YenR0teDSE.ewmD7A5znHsZf8il7H20RFTdeTi");
  }

  getSpells() {
    return this.http.get("https://www.potterapi.com/v1/spells?key=$2a$10$3fQ.ttcu6kbE7k2YenR0teDSE.ewmD7A5znHsZf8il7H20RFTdeTi");
  }

  sortingHat() {
    return this.http.get("https://www.potterapi.com/v1/sortinghat?key=$2a$10$3fQ.ttcu6kbE7k2YenR0teDSE.ewmD7A5znHsZf8il7H20RFTdeTi");
  }
}
