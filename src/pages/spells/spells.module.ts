import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpellsPage } from './spells';

@NgModule({
  declarations: [
    SpellsPage,
  ],
  imports: [
    IonicPageModule.forChild(SpellsPage),
  ],
})
export class SpellsPageModule {}
