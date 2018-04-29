import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SortingHatPage } from './sorting-hat';

@NgModule({
  declarations: [
    SortingHatPage,
  ],
  imports: [
    IonicPageModule.forChild(SortingHatPage),
  ],
})
export class SortingHatPageModule {}
